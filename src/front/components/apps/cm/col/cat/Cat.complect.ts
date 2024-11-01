import { makeRegExp } from '../../../../../../back/complect/makeRegExp';
import { itIt } from '../../../../../../back/complect/utils';
import mylib, { MyLib } from '../../../../../complect/my-lib/MyLib';
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
  '@repeatsMatch:': {
    title: 'Ключи повторений по регулярке:/~/i',
    map: (coms, term) => {
      try {
        const regStr = term.slice(term.indexOf(':') + 1) || '/~/i';
        const reg = makeRegExp(regStr as never);

        return coms.filter(
          com =>
            com.ords?.some(ord =>
              mylib.isNum(ord.top.r) ? `${ord.top.r}`.match(reg) : MyLib.keys(ord.top.r).some(key => key.match(reg)),
            ),
        );
      } catch (error) {
        return [];
      }
    },
  },
  '@matchInRepeatedText:': {
    title: 'Поиск по блоку с повторениями:/\\/\\//i',
    map: (coms, term) => {
      try {
        const regStr = term.slice(term.indexOf(':') + 1) || '/\\/\\//i';
        const reg = makeRegExp(regStr as never);

        return coms.filter(com => com.orders?.some(ord => ord.repeatedText().match(reg)));
      } catch (error) {
        return [];
      }
    },
  },
  '@filterPositionsUnequalChordsCounts': {
    title: 'Количество аккордов не равна аппликатуре',
    map: (coms, term) => {
      return coms.filter(
        com =>
          com.ords?.some(
            ord =>
              ord.top.c != null &&
              ord.top.p &&
              com.chords?.[ord.top.c]
                .split('\n')
                .some(
                  (line, linei, linea) =>
                    line &&
                    linei < linea.length - 1 &&
                    line.trim().split(' ').filter(itIt).length !== ord.top.p![linei]?.length,
                ),
          ),
      );
    },
  },
};
