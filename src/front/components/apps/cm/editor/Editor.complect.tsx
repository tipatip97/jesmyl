export const chordLikeStr =
  "([ACDFG]#?|[EH])(\\+|11|((m|min|7?sus|maj|dim|add)?(\\d(\\/\\d)?)?))";
export const textedChordStr = `\\.*-?${chordLikeStr}`;
export const textedChord = new RegExp(`^${textedChordStr}(/${chordLikeStr})?$`);
export const correctChordNameReg = new RegExp(`^${chordLikeStr}(/${chordLikeStr})?$`);

export const cleanChords = ["A", "C", "D", "E", "F", "G", "H"];
