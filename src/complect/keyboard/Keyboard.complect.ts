import { createContext, ReactNode } from 'react';
import { MyLib } from '../my-lib/MyLib';
import { KeyboardKeyDict, KeyboardKeyTranslateCase, KeyboardKeyTranslateLangs } from './Keyboard.model';

export const languagedKeys: Record<KeyboardKeyTranslateLangs, Record<KeyboardKeyTranslateCase, string[]>> = {
    ru: {
        lower: [
            'ё1234567890ъ',
            'йцукенгшщзх',
            'фывапролджэ',
            'ячсмитьбю.',
        ],
        upper: [
            'Ё!"№;%:?*()Ъ',
            'ЙЦУКЕНГШЩЗХ',
            'ФЫВАПРОЛДЖЭ',
            'ЯЧСМИТЬБЮ,'
        ]
    },
    en: {
        lower: [
            '`1234567890-=',
            'qwertyuiop[]',
            'asdfghjkl;\'',
            'zxcvbnm,./',
        ],
        upper: [
            '~!@#$%^&*()_+',
            'QWERTYUIOP{}',
            'ASDFGHJKL:"',
            'ZXCVBNM<>?',
        ],
    },
    ua: {
        lower: [
            '\'1234567890ї',
            'йцукенгшщзх',
            'фівапролджє',
            'ячсмитьбю.',
        ],
        upper: [
            '\'!"№;%:?*()Ї',
            'ЙЦУКЕНГШЩЗХ',
            'ФІВАПРОЛДЖЄ',
            'ЯЧСМИТЬБЮ,',
        ],
    }
}

export const keyboardKeyDict: KeyboardKeyDict = {} as KeyboardKeyDict;
MyLib.entries(languagedKeys)
    .forEach(([lang, { lower, upper }]) => {
        keyboardKeyDict[lang] = {
            lower: lower.map(line => line.split('')),
            upper: upper.map(line => line.split('')),
        };
    });


    
export const KeyboardContext = createContext((() => '') as ((props: any) => ReactNode));