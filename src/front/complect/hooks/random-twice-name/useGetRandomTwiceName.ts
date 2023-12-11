import { useSelector } from "react-redux";
import { replacePronounEnd } from "../../../models";
import { RootState } from "../../../shared/store";
import mylib from "../../my-lib/MyLib";

const storageSelector = (state: RootState) => state.index.nounPronsWords;

export const makeRandomTwiceName = (storage?: Record<"pronouns" | "nouns", Record<string, number>>, topPronoun?: string | nil, topNoun?: string | nil): [string, string] => {
    let pronoun = topPronoun;
    if (!pronoun && storage) {
        pronoun = mylib.randomItem(mylib.keys(storage.pronouns), -1);
    }

    let noun = topNoun;
    if (!noun && storage) {
        noun = mylib.randomItem(mylib.keys(storage.nouns).slice(0, -1));
    }

    if (!pronoun || !noun) return ['', ''];

    return replacePronounEnd(pronoun, noun);
};

export const useGetRandomTwiceName = () => {
    const storage = useSelector(storageSelector);

    return (topPronoun?: string | nil, topNoun?: string | nil) => makeRandomTwiceName(storage, topPronoun, topNoun);
}


// for (let i = 0; i < 10; i++) console.info(getRandomTwiceName().join(' '));

// console.info(makeRandomTwiceName(undefined, 'вопя', 'устройство').join(' '));

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