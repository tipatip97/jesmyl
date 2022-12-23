import { OrderField } from "./Order.model";

export const orderFields: OrderField[] = [
    {
        name: 'a',
        title: 'Ссылка на блок',
        type: '#Number',
    }, {
        name: 'c',
        title: 'Блок аккордов',
        isExt: true,
        type: '#Number',
    }, {
        name: 'e',
        title: 'Без названия',
        isExt: true,
        type: '#Num',
    }, {
        name: 'm',
        title: 'Минималка',
        isExt: true,
        type: '#Num',
    }, {
        name: 'o',
        title: 'Открыто в полном режиме',
        isExt: true,
        type: '#Num',
    }, {
        name: 'p',
        title: 'Позиции аккордов',
        isExt: true,
        extIf: poss => !poss || !poss.length,
        type: '#List',
    }, {
        name: 'r',
        title: 'Повторения',
        isExt: true,
        type: ['#number', '#dict'],
    }, {
        name: 's',
        title: 'Тип блока',
        isExt: true,
        type: '#String',
    }, {
        name: 't',
        title: 'Текстовый блок',
        isExt: true,
        type: '#Number',
    }, {
        name: 'u',
        title: 'Целевой айди',
        type: '#Number',
    }, {
        name: 'v',
        title: 'Видимость блока',
        isExt: true,
        type: '#Num',
    }, {
        name: 'w',
        title: 'Уникальный айди',
        type: '#Number',
    }
];
