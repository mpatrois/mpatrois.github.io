/* global sampleRate */

const DEFAULT_BLOCK_SIZE = 128

class MoodAudioProcessor extends AudioWorkletProcessor {
  constructor({ outputChannelCount, processorOptions }) {
    super()

    this.numberOfChannels = outputChannelCount[0]
    this.wasmProcessorInstance = null
    this.audioProcessorPtr = null
    this.arrayOfFloatArraysWasm = new Int32Array()

    try {
      this.instantiateMoodProcessor(processorOptions)
      this.connectSignals()
    } catch (e) {
      console.error('Unable to lauch mood processor')
      console.error(e)
    }
  }

  connectSignals() {
    this.port.onmessage = (event) => {
      const processor = this.wasmProcessorInstance.exports
      const ptr = this.audioProcessorPtr

      const action = event.data.action
      const value = event.data.value

      if (action == 'note-on') processor.note_on(ptr, value.note_id)
      if (action == 'note-off') processor.note_off(ptr, value.note_id)

      if (action == 'mod_wheel') processor.mod_wheel(ptr, value.modwheel)
      if (action == 'pitch_wheel') processor.pitch_wheel(ptr, value.pitchwheel)

      if (action == 'all_note_off') processor.all_note_off(ptr)

      if (action == 'set_osc_params') {
        processor.set_osc_params(
          ptr,
          value.osc_id,
          value.octave_range,
          value.freq_shift,
          value.volume,
          value.waveform,
        )
      }

      if (action == 'set_filter_params')
        processor.set_filter_params(ptr, value.cutoff, value.emphasis, value.contour)

      if (action == 'set_filter_keytrack')
        processor.set_filter_keytrack(ptr, value.key_track_1, value.key_track_2)

      if (action == 'set_filter_adsr')
        processor.set_filter_adsr(ptr, value.attack, value.decay, value.sustain, value.release)

      if (action == 'set_main_adsr')
        processor.set_main_adsr(ptr, value.attack, value.decay, value.sustain, value.release)

      if (action == 'set_main_volume') {
        processor.set_main_volume(ptr, value.volume)
      }

      if (action == 'set_mono_and_legato') {
        processor.set_mono_and_legato(ptr, value.mono, value.legato)
      }

      if (action == 'set_glide') {
        processor.set_glide(ptr, value.glide)
      }

      if (action == 'set_reverb_params') {
        processor.set_reverb_params(
          ptr,
          value.enable_reverb,
          value.room_size,
          value.damping,
          value.amount
        )
      }

      if (action == 'set_delay_params') {
        processor.set_delay_params(
          ptr,
          value.enable_delay,
          value.left_delay,
          value.ping_pong,
          value.feedback,
          value.tone,
          value.amount,
        )
      }

      if (action == 'set_eq3_params') {
        processor.set_eq3_params(
          ptr,
          value.enable_eq3,
          value.eq3_xover1_low_freq,
          value.eq3_xover2_high_freq,
          value.eq3_l_drive,
          value.eq3_m_drive,
          value.eq3_h_drive,
        )
      }

      if (action == 'set_lfo_params') {
        processor.set_lfo_params(
          ptr,
          value.lfo_id,
          value.rate,
          value.depth,
          value.waveform,
          value.follow_modwheel,
          value.target_pitch,
          value.target_cutoff,
          value.target_pan,
        )
      }

      if (action == 'set_noise_volume') {
        processor.set_noise_volume(ptr, value.noise_volume)
      }

      if (action == 'set_drive') {
        processor.set_drive(ptr, value.drive)
      }

      if (action == 'set_pan') {
        processor.set_pan(ptr, value.pan)
      }
    }
  }

  async instantiateMoodProcessor(processorOptions) {
    const { instance } = await WebAssembly.instantiate(processorOptions.wasm_bytes, { env: {} })

    this.wasmProcessorInstance = instance
    this.audioProcessorPtr = this.wasmProcessorInstance.exports.createProcessor()
    this.wasmProcessorInstance.exports.prepare(
      this.audioProcessorPtr,
      sampleRate,
      this.numberOfChannels,
      DEFAULT_BLOCK_SIZE,
    )

    this.outputsAllocatedInWasm = [
      new Float32Array(this.wasmProcessorInstance.exports.memory.buffer, 0, DEFAULT_BLOCK_SIZE),
      new Float32Array(
        this.wasmProcessorInstance.exports.memory.buffer,
        DEFAULT_BLOCK_SIZE * Float32Array.BYTES_PER_ELEMENT,
        DEFAULT_BLOCK_SIZE,
      ),
    ]

    const startByte = DEFAULT_BLOCK_SIZE * this.numberOfChannels * Float32Array.BYTES_PER_ELEMENT
    this.arrayOfFloatArraysWasm = new Int32Array(
      this.wasmProcessorInstance.exports.memory.buffer,
      startByte,
      this.numberOfChannels,
    )
    this.arrayOfFloatArraysWasm.set([
      this.outputsAllocatedInWasm[0].byteOffset,
      this.outputsAllocatedInWasm[1].byteOffset,
    ])

    this.port.postMessage({ message: 'processor-ready' })
  }

  process(inputList, outputs /* parameters */) {
    if (this.wasmProcessorInstance == null) return true

    this.wasmProcessorInstance.exports.process(
      this.audioProcessorPtr,
      this.arrayOfFloatArraysWasm.byteOffset,
      128,
      this.numberOfChannels,
    )

    const output = outputs[0];
    output.forEach((channel, c) => {
      for (let i = 0; i < channel.length; i++) {
        channel[i] = this.outputsAllocatedInWasm[c][i];
      }
    });
  

    return true
  }

  static get parameterDescriptors() {
    return []
  }
}

registerProcessor('mood-audio-processor', MoodAudioProcessor)
