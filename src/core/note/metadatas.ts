import type {Metadata} from './types'
import {notes} from './notes'
import {hertz} from './utilities'

export const metadatas = (start: number, end: number) => {
  let black = 0
  let white = -2

  return Array(end - start)
    .fill('')
    .map((_, i) => {
      const key = (start + i) % 12
      const note = notes[key < 0 ? 12 + key : key]
      const octave = Math.ceil(4 + (start + i) / 12)

      if (i === 0 && note === 'C') black = -3

      note.includes('#')
        ? ((black += 3), ['C#', 'F#'].includes(note) && (black += 3))
        : (white += 3)

      return {
        note,
        freq: hertz(start + i),
        octave: note === 'B' || note === 'A#' ? octave - 1 : octave,
        offset: note.includes('#') ? black : white,
      } as Metadata
    })
}
