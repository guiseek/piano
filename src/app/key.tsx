import {input} from '../core/input'
import {Metadata, Note} from '../core/note'

interface Props {
  metadata: Metadata
}

export const Key = ({metadata}: Props) => {
  const {freq, note, octave, offset} = metadata

  const audio = new Note(note, octave)

  const button = (
    <button
      ariaLabel={note + octave}
      data-note={note + octave}
      data-freq={freq}
      style={`--gcs:` + offset}
      onclick={() => audio.play()}
    ></button>
  )

  input.on(`${note}${octave}`, () => {
    button.focus()
    button.click()
  })

  return button
}
