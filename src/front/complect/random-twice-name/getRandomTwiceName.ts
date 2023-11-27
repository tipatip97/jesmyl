import mylib from "../my-lib/MyLib";
import { randomTwiceNameStorage } from './randomTwiceNameStorage';
import { replacePronounEnd } from "./wordRegEnds";

const storage = {
    nouns: Object.keys(randomTwiceNameStorage.nouns).slice(1),
    pronouns: Object.keys(randomTwiceNameStorage.pronouns).slice(1),
};

export const getRandomTwiceName = (topPronoun?: string | nil, topNoun?: string | nil): string[] => {
    const pronoun = topPronoun ?? storage.pronouns[mylib.randomOf(0, storage.pronouns.length - 1)];
    const noun = topNoun ?? storage.nouns[mylib.randomOf(0, storage.nouns.length - 1)];

    return replacePronounEnd(pronoun, noun);
}



// for (let i = 0; i < 10; i++) console.info(getRandomTwiceName().join(' '));

// console.info(getRandomTwiceName('птичий', 'устройство').join(' '));

// storage.nouns.some((noun, wordi) => {
//     if (wordi === 141) return true;
//     console.info(wordi, getRandomTwiceName('лесничий').join(' '));
// });

// console.info(
//     JSON.stringify(
//         storage.nouns
//             .sort((a, b) => {
//                 const aa = a.split('').reverse().join('');
//                 const bb = b.split('').reverse().join('');
//                 return aa > bb ? 1 : aa < bb ? -1 : 0;
//             })
//             .reduce((exclusives, word) => {
//                 const { ex, free } = exclusives;
//                 const freeWord = word.replace(/[^а-яё]/ig, '');

//                 if (free.indexOf(freeWord) < 0) {
//                     ex.push(word);
//                     free.push(freeWord);
//                 }

//                 return exclusives;
//             }, { ex: [], free: [] } as { ex: string[]; free: string[] }).ex
//     )
// );