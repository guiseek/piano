import type {NoteLiteral, Octave} from './types'

export class Note {
  #audio

  get #source() {
    const note = this.note.replace(/#/, '-')
    return `./notes/${note + this.octave}.ogg`
  }

  constructor(readonly note: NoteLiteral, readonly octave: Octave) {
    this.#audio = new Audio(this.#source)
  }

  play() {
    if (!this.#audio.paused) {
      this.#audio.currentTime = 0.02
    }
    this.#audio.play()
  }
}
