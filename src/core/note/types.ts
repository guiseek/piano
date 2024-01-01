export type Letter = "A" | "B" | "C" | "D" | "E" | "F" | "G";
export type Octave = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export type NoteLiteral = Letter | `${Letter}${Octave}` | `${Letter}#` | `${Letter}#${Octave}`;

export interface Metadata {
  note: NoteLiteral;
  freq: number;
  octave: Octave;
  offset: number;
}
