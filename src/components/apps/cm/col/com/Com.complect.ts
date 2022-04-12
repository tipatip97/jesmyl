import { SettingsItem } from "./Com.model";


export const iRuUaReg = /[уеыаоэяиёюіїє ]/i;
export const gSimpleHashChordReg = /[ACDEFGH]#?/g;
export const gSimpleHashedEachLetterChordReg = /[A-H]#/g;

export const simpleHashChords = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'H'];


export const translationPushKinds = [
    {
        title: '6,34',
        cb: (map: number[], num: number) => {
            if (num < 7) map.push(num);
            else if (num < 9) map.push(num - (num - 4), num - 4);
            else if (num < 11) map.push(num - (num - 4), num - (num - 4), num - 4);
            else map.push(num);
        }
    }, {
        title: '5,33,34',
        cb: (map: number[], num: number) => {
            if (num < 6) map.push(num);
            else if (num === 6) map.push(3, 3);
            else if (num < 9) map.push(num - (num - 4), num - 4);
            else if (num < 11) map.push(num - (num - 4), num - (num - 4), num - 4);
            else map.push(num);
        }
    },
];

export const chordBemoleEquivalent: Record<string, string> = {
    'A#': 'B',
    'C#': 'Db',
    'D#': 'Eb',
    'F#': 'Gb',
    'G#': 'Ab',
};

