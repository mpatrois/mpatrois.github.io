import Module from './AudioProcessor.wasmmodule.js';

const DEFAULT_BLOCK_SIZE = 128;

class AudioProcessor extends AudioWorkletProcessor {
  constructor({ channelCount, outputChannelCount, processorOptions }) {
    super()

    this.numberOfInputsChannels = channelCount
    this.numberOfOutputsChannels = outputChannelCount[0]
    this.wasmProcessorInstance = null
    this.wasmAudioProcessorPtr = null
    this.wasmModule = null
    this.arrayOfOuputsWasm = new Int32Array()
    this.arrayOfInputsWasm = new Int32Array()

    this.outputsPtr = null;
    this.outputs = null;

    this.inputsPtr = null;
    this.inputs = null;

    this.currentStep = 0;

    Module({
      print: (text) => console.log("Wasm Log:", text),
      printErr: (text) => console.error("Wasm Error:", text)
    }).then((module) => {
      this.wasmModule = module;

      this.wasmAudioProcessorPtr = this.wasmModule._createProcessor(
        this.numberOfInputsChannels,
        this.numberOfOutputsChannels,
        DEFAULT_BLOCK_SIZE,
        sampleRate
      );

      this.outputsPtr = this.wasmModule._getOutputBuffer(this.wasmAudioProcessorPtr);
      this.outputs = this.getJSAudioBuffer(this.outputsPtr, this.numberOfOutputsChannels, DEFAULT_BLOCK_SIZE);

      this.inputsPtr = this.wasmModule._getInputBuffer(this.wasmAudioProcessorPtr);
      this.inputs = this.getJSAudioBuffer(this.inputsPtr, this.numberOfInputsChannels, DEFAULT_BLOCK_SIZE);

      
      const trackJSONPtr = this.wasmModule._getTracks(this.wasmAudioProcessorPtr);
      const tracksJSON = this.wasmModule.UTF8ToString(trackJSONPtr);
      this.port.postMessage({ message: 'processor-ready', value: JSON.parse(tracksJSON)})
    });

    this.connectSignals();
  }

  getJSAudioBuffer(bufferPtr, numChannels, blockSize) {
    // HEAPU32 because pointers are 32-bit unsigned integers
    // We get the float** array from wasm
    const channelPtrs = new Uint32Array(
        this.wasmModule.HEAPU32.buffer, 
        bufferPtr, 
        numChannels
    );

    const channels = [];
    for (let i = 0; i < this.numberOfOutputsChannels; i++) {
        // This is one float*
        const channelAdress = channelPtrs[i];
        
        // Create a view into the heap for this specific channel
        const channelView = new Float32Array(
            this.wasmModule.HEAPF32.buffer, 
            channelAdress, 
            blockSize
        );
        channels.push(channelView);
    }

    return channels;
  }

  // here we receive messages from the main thread
  connectSignals() {
    this.port.onmessage = (event) => {

      const action = event.data.action
      const value = event.data.value

      if (action == 'activate-msg') this.wasmModule._activate(this.wasmAudioProcessorPtr, value.is_active)
      if (action == 'clear-memory-msg') {
        this.wasmModule._deleteProcessor(this.wasmAudioProcessorPtr)
        this.wasmModule = null;
      }

      if (action == 'add-note')
      {
        this.wasmModule._addNote(this.wasmAudioProcessorPtr, value.track_id, value.note_id, value.tick_on, value.tick_off);
      }

      if (action == 'remove-note')
      {
        this.wasmModule._removeNote(this.wasmAudioProcessorPtr, value.track_id, value.note_id, value.tick_on, value.tick_off)
      }

      if (action == 'toggle-play')
      {
        this.wasmModule._togglePlay(this.wasmAudioProcessorPtr, value.playing)
      }

      if (action == 'toggle-metronome')
      {
        this.wasmModule._setMetronomeActive(this.wasmAudioProcessorPtr, value.metronome_active)
      }

      if (action == 'change-bpm')
      {
        this.wasmModule._changeBpm(this.wasmAudioProcessorPtr, value.bpm)
      }
    }
  }

  process(inputs, outputs /* parameters */) {

    if (this.wasmModule == null) return true

    // copy WebAudio Api input data to wasm memory
    const input = inputs[0];
    input.forEach((channel, c) => {
      for (let i = 0; i < channel.length; i++) {
        this.inputs[c][i] = channel[i];
      }
    });

    // process audio in wasm
    this.wasmModule._process(this.wasmAudioProcessorPtr);

    const step = this.wasmModule._getCurrentStep(this.wasmAudioProcessorPtr);
    if (step != this.currentStep)
    {
      this.port.postMessage({ message: 'new-step-message', value: step });
    }

    this.currentStep = step;

    // copy wasm memory output data to WebAudio Api
    const output = outputs[0];
    output.forEach((channel, c) => {
      channel.set(this.outputs[c]);
    });

    return true;
  }

  static get parameterDescriptors() {
    return []
  }
}

registerProcessor('audio-processor', AudioProcessor)
