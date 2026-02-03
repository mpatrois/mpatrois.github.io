/* global sampleRate */

import DexFMModule from './dexfm-processor.wasm.js';

const DEFAULT_BLOCK_SIZE = 128

class DexFMProcessor extends AudioWorkletProcessor {
  constructor({ outputChannelCount, processorOptions }) {
    super()

    this.numberOfChannels = outputChannelCount[0]
    this.wasmAudioProcessorPtr = null
    this.wasmDx7 = null

    DexFMModule({
      print: (text) => console.log('Wasm Log:', text),
      printErr: (text) => console.error('Wasm Error:', text),
    }).then((wasmDx7) => {

      this.wasmDx7 = wasmDx7;
      this.wasmDx7._prepare(sampleRate, outputChannelCount[0], DEFAULT_BLOCK_SIZE);

      this.outputsPtr = this.wasmDx7._get_output_buffer();

      this.outputs = this.getJSAudioBuffer(
        this.outputsPtr,
        outputChannelCount[0],
        DEFAULT_BLOCK_SIZE,
      );

      this.port.postMessage({ message: 'processor-ready' })
      this.connectSignals();
    });
  }

  connectSignals() {
    this.port.onmessage = (event) => {
      const { type, payload } = event.data;

      if (type === 'MIDI_DATA') {
        this.wasmDx7._on_midi(payload[0], payload[1], payload[2]);
      }

      if (type === 'PATCH_DATA') {
        const sz = payload.length;
        const ptr = this.wasmDx7._malloc(sz);
        this.wasmDx7.HEAPU8.set(payload, ptr);
        this.wasmDx7._on_patch(ptr, sz);
        this.wasmDx7._free(ptr);
      }

      if (type === 'SHUT_DOWN_NOTES') {
        this.wasmDx7._all_note_off(ptr);
      }
    }
  }

  getJSAudioBuffer(bufferPtr, numChannels, blockSize) {
    // HEAPU32 because pointers are 32-bit unsigned integers
    // We get the float** array from wasm
    const channelPtrs = new Uint32Array(
      this.wasmDx7.HEAPU32.buffer,
      bufferPtr,
      numChannels,
    );

    const channels = [];
    for (let i = 0; i < numChannels; i++) {
      // This is one float*
      const channelAdress = channelPtrs[i];

      // Create a view into the heap for this specific channel
      const channelView = new Float32Array(
        this.wasmDx7.HEAPF32.buffer,
        channelAdress,
        blockSize,
      );
      channels.push(channelView);
    }

    return channels;
  }

  process(inputList, outputs) {

    this.wasmDx7._process();

    const output = outputs[0];
    output.forEach((channel, c) => {
      channel.set(this.outputs[c]);
    });

    return true
  }

  static get parameterDescriptors() {
    return []
  }
}

registerProcessor('dexfm-processor', DexFMProcessor)
