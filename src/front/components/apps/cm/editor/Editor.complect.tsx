export const chordLikeStr =
  "([ACDFG]#?|[EH])(\\+|11|((m|min|7?sus|maj|dim|add)?(\\d(/\\d)?)?))";
export const textedChordReg = new RegExp(`(^-?${chordLikeStr}(/${chordLikeStr})?$)|(^\\.+-?${chordLikeStr}(/${chordLikeStr})?((\\.+|-|\\.+-)${chordLikeStr}(/${chordLikeStr})?)*$)`);
export const correctChordNameReg = new RegExp(`^${chordLikeStr}(/${chordLikeStr})?$`);
export const checkIsChordLineReg = /^[-+A-Ha-z# /\d]+$/;
export const slavicLowerLettersStr = 'а-яёіґїє';
export const ruDifferentLowerLettersStr = 'ъыэё';
export const uaDifferentLowerLettersStr = 'іґїє';
export const correctNotSlavicNameStr = `([^${slavicLowerLettersStr} !?]+\\s*)+$`;
export const correctNotSlavicNameReg_i = new RegExp(correctNotSlavicNameStr, 'i');

export const cleanChords = ["A", "C", "D", "E", "F", "G", "H"];
