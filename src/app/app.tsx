import {input} from '../core/input'
import {metadatas} from '../core/note'
import {Key} from './key'

export const App = () => {
  const keys = metadatas(-33, 28)

  input.addKey('C2', 'KeyQ')
  input.addKey('C#2', 'KeyQ', 'ShiftLeft')
  input.addKey('D2', 'KeyW')
  input.addKey('D#2', 'KeyW', 'ShiftLeft')

  input.addKey('E2', 'KeyE')

  input.addKey('F2', 'KeyR')
  input.addKey('F#2', 'KeyR', 'ShiftLeft')
  input.addKey('G2', 'KeyT')
  input.addKey('G#2', 'KeyT', 'ShiftLeft')
  input.addKey('A2', 'KeyY')
  input.addKey('A#2', 'KeyY', 'ShiftLeft')

  input.addKey('B2', 'KeyU')

  input.addKey('C3', 'KeyI')
  input.addKey('C#3', 'KeyI', 'ShiftLeft')
  input.addKey('D3', 'KeyO')
  input.addKey('D#3', 'KeyO', 'ShiftLeft')

  input.addKey('E3', 'KeyP')

  input.addKey('F3', 'BracketLeft')
  input.addKey('F#3', 'BracketLeft', 'ShiftLeft')
  input.addKey('G3', 'BracketRight')
  input.addKey('G#3', 'BracketRight', 'ShiftLeft')
  input.addKey('A3', 'Backslash')
  input.addKey('A#3', 'Backslash', 'ShiftLeft')

  input.addKey('B3', 'KeyA')

  input.addKey('C4', 'KeyS')
  input.addKey('C#4', 'KeyS', 'ShiftLeft')
  input.addKey('D4', 'KeyD')
  input.addKey('D#4', 'KeyD', 'ShiftLeft')

  input.addKey('E4', 'KeyF')

  input.addKey('F4', 'KeyG')
  input.addKey('F#4', 'KeyG', 'ShiftLeft')
  input.addKey('G4', 'KeyH')
  input.addKey('G#4', 'KeyH', 'ShiftLeft')
  input.addKey('A4', 'KeyJ')
  input.addKey('A#4', 'KeyJ', 'ShiftLeft')

  input.addKey('B4', 'KeyK')

  input.addKey('C5', 'KeyL')
  input.addKey('C#5', 'KeyL', 'ShiftLeft')
  input.addKey('D5', 'Semicolon')
  input.addKey('D#5', 'Semicolon', 'ShiftLeft')

  input.addKey('E5', 'Quote')

  input.addKey('F5', 'KeyZ')
  input.addKey('F#5', 'KeyZ', 'ShiftLeft')
  input.addKey('G5', 'KeyX')
  input.addKey('G#5', 'KeyX', 'ShiftLeft')
  input.addKey('A5', 'KeyC')
  input.addKey('A#5', 'KeyC', 'ShiftLeft')

  input.addKey('B5', 'KeyV')

  input.addKey('C6', 'KeyB')
  input.addKey('C#6', 'KeyB', 'ShiftLeft')
  input.addKey('D6', 'KeyN')
  input.addKey('D#6', 'KeyN', 'ShiftLeft')

  input.addKey('E6', 'KeyM')

  input.addKey('F6', 'Comma')
  input.addKey('F#6', 'Comma', 'ShiftLeft')
  input.addKey('G6', 'Period')
  input.addKey('G#6', 'Period', 'ShiftLeft')
  input.addKey('A6', 'Slash')
  input.addKey('A#6', 'Slash', 'ShiftLeft')

  input.init()

  return (
    <>
      <div className="synth">
        <div id="kb88" className="kb kb--61">
          {keys.map((key) => (
            <Key metadata={key} />
          ))}
        </div>
      </div>
    </>
  )
}
