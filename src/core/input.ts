import {NoteLiteral, Octave} from './note'

type KeyCode =
  | 'Tab'
  | 'KeyQ'
  | 'KeyW'
  | 'KeyE'
  | 'KeyR'
  | 'KeyT'
  | 'KeyY'
  | 'KeyU'
  | 'KeyI'
  | 'KeyO'
  | 'KeyP'
  | 'BracketLeft'
  | 'BracketRight'
  | 'Backslash'
  | 'KeyA'
  | 'KeyS'
  | 'KeyD'
  | 'KeyF'
  | 'KeyG'
  | 'KeyH'
  | 'KeyJ'
  | 'KeyK'
  | 'KeyL'
  | 'Semicolon'
  | 'Quote'
  | 'Enter'
  | 'ShiftLeft'
  | 'KeyZ'
  | 'KeyX'
  | 'KeyC'
  | 'KeyV'
  | 'KeyB'
  | 'KeyN'
  | 'KeyM'
  | 'Comma'
  | 'Period'
  | 'Slash'
  | 'ShiftRight'

type InputKey = NoteLiteral | `${NoteLiteral}${Octave}`

class Input {
  readonly #key: Record<KeyCode, boolean> = {
    Tab: false,
    KeyQ: false,
    KeyW: false,
    KeyE: false,
    KeyR: false,
    KeyT: false,
    KeyY: false,
    KeyU: false,
    KeyI: false,
    KeyO: false,
    KeyP: false,
    BracketLeft: false,
    BracketRight: false,
    Backslash: false,
    KeyA: false,
    KeyS: false,
    KeyD: false,
    KeyF: false,
    KeyG: false,
    KeyH: false,
    KeyJ: false,
    KeyK: false,
    KeyL: false,
    Semicolon: false,
    Quote: false,
    Enter: false,
    ShiftLeft: false,
    KeyZ: false,
    KeyX: false,
    KeyC: false,
    KeyV: false,
    KeyB: false,
    KeyN: false,
    KeyM: false,
    Comma: false,
    Period: false,
    Slash: false,
    ShiftRight: false,
  }

  #map = new Map<InputKey, KeyCode[]>()

  #fns = new Map<InputKey, VoidFunction[]>()

  addKey(note: InputKey, ...keyCodes: KeyCode[]) {
    if (
      Array.from(this.#map.values()).some((kc) =>
        keyCodes.every((keyCode) => kc.includes(keyCode))
      )
    ) {
      throw new Error(`Keycodes ${keyCodes} already used`)
    }
    this.#map.set(note, keyCodes)
  }

  on(note: InputKey, fn: VoidFunction) {
    const fns = this.#fns.get(note) ?? []
    this.#fns.set(note, [...fns, fn])
  }

  constructor() {
    onkeydown = ({code}) => {
      this.#key[code as KeyCode] = true
    }
    onkeyup = ({code}) => {
      this.#key[code as KeyCode] = false
    }
  }

  init() {
    const interval = setInterval(() => {
      for (const [note, keyCodes] of this.#map.entries()) {
        const hasShift = keyCodes.includes('ShiftLeft')
        const shiftted = hasShift ? this.#key.ShiftLeft : !this.#key.ShiftLeft
        if (keyCodes.every((kc) => this.#key[kc] && shiftted)) {
          for (const fn of this.#fns.get(note) ?? []) fn()
        }
      }
    }, 61)

    const cancel = () => clearInterval(interval)

    return {cancel}
  }
}

const input = new Input()

export {input}
