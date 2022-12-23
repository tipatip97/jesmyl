export const chordLikeStr =
  "([ACDFG]#?|[EH])([+]*|11|((m|min|sus|maj|dim|add)?(\\d(\\/\\d)?)?))";
export const chordLike = new RegExp(chordLikeStr);
export const textedChordStr = `\\.*-?${chordLikeStr}`;
export const textedChord = new RegExp(
  `^(${textedChordStr}(/${chordLikeStr})?)+$`
);

export const cleanChords = ["A", "C", "D", "E", "F", "G", "H"];
