import mylib from "../../../../complect/my-lib/MyLib";
import * as wordStorage from './randomTwiceNameStorage.json';

const storage = wordStorage as Record<'nouns' | 'pronouns', string[]>;

export const getRandomTwiceName = (topPronoun?: string | null, topNoun?: string) => {
    let pronoun = topPronoun ??
        storage.pronouns[mylib.randomOf(0, storage.pronouns.length - 1)];
    const noun = topNoun ?? storage.nouns[mylib.randomOf(0, storage.nouns.length - 1)];

    if (/[ыи,]$/.exec(noun)) { // высокий быстрый скоростной
        pronoun = pronoun
            .replace(/йся$/, 'еся')
            .replace(/ый$/, 'ые')
            .replace(/ий$/, 'ие')
            .replace(/ой$/, 'ые');
    } else if (/[аяь:]$/.exec(noun)) {
        pronoun = pronoun
            .replace(/ний$/, 'няя')
            .replace(/[иоы]й$/, 'ая');
    } else if (/[оеё.]$/.exec(noun)) {
        pronoun = pronoun
            .replace(/ний$/, 'нее')
            .replace(/([жшчщ])[иоы]й/, '$1ее')
            .replace(/[иоы]й$/, 'ое');
    }

    return [pronoun, noun.replace(/[^- а-яё\d]/ig, '')];
}

console.info(getRandomTwiceName('рабочий', 'жильё'));

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