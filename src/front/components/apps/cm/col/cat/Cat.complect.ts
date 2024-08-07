import { Com } from '../com/Com';
import { Cat } from './Cat';
import { CatTracker } from './Cat.model';

export const catTrackers: CatTracker[] = [
  {
    title: 'Полный',
    id: 'full',
    select: () => true,
  },
  {
    title: 'Сборник',
    id: 'dict',
    select: (com: Com, cat: Cat) => !!cat.dict?.[com.wid],
  },
  {
    title: 'Список',
    id: 'list',
    select: (com: Com, cat: Cat) => cat.stack?.includes(com.wid),
  },
  {
    title: 'Язык - Русский',
    id: 'lang:ru',
    select: (com: Com) => !com.langi,
  },
  {
    title: 'Язык - Украинский',
    id: 'lang:ua',
    select: (com: Com) => com.langi === 1,
  },
];

export type CatSpecialSearches = {
  title: string;
  map: (coms: Com[], term: string) => Com[];
};

export const catSpecialSearches: Record<`@${string}`, CatSpecialSearches> = {
  '@audioLess': {
    title: 'Песни без аудио',
    map: coms => coms.filter(com => !com.audio.trim()),
  },
  '@lineLen:': {
    title: 'Со сторкой больше чем:элементов[50]',
    map: (coms, term) => {
      const count = +term.split(':')[1] || 50;
      return coms.filter(com => com.texts?.some(text => text.split('\n').some(t => t.length > count)));
    },
  },
};
