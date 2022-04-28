import { Com } from "../com/Com";
import { Cat } from "./Cat";
import { CatTracker } from "./Cat.model";


export const catTrackers: CatTracker[] = [
    {
        title: 'Полный',
        id: 'full',
        select: () => true,
    },
    {
        title: 'Сборник',
        id: 'dict',
        select: (com: Com, cat: Cat) => !!com.refs?.[cat.wid],
    },
    {
        title: 'Список',
        id: 'list',
        select: (com: Com, cat: Cat) => cat.stack.indexOf(com.wid) > -1,
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