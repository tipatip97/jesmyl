import { getRandomTwiceName } from "./getRandomTwiceName";

describe('getRandomTwiceName', () => {
    it('мужской род', () => {
        expect(getRandomTwiceName('коренной', 'институт').join(' ')).toBe('коренной институт');
        expect(getRandomTwiceName('круглый', 'князь!').join(' ')).toBe('круглый князь');
        expect(getRandomTwiceName('добрый', 'папа!').join(' ')).toBe('добрый папа');
        expect(getRandomTwiceName('чёрный', 'кофе!').join(' ')).toBe('чёрный кофе');
    });
    
    it('женский род', () => {
        expect(getRandomTwiceName('розовый', 'лошадь').join(' ')).toBe('розовая лошадь');
        expect(getRandomTwiceName('прошлый', 'продажа').join(' ')).toBe('прошлая продажа');
        expect(getRandomTwiceName('высокий', 'леди:').join(' ')).toBe('высокая леди');
    });

    it('средний род', () => {
        expect(getRandomTwiceName('красивый', 'имя.').join(' ')).toBe('красивое имя');
        expect(getRandomTwiceName('искренний', '"вау.').join(' ')).toBe('искреннее "вау"');
        expect(getRandomTwiceName('сладкий', 'варенье').join(' ')).toBe('сладкое варенье');
    });

    it('множественное число', () => {
        expect(getRandomTwiceName('красный', 'фломастеры').join(' ')).toBe('красные фломастеры');
        expect(getRandomTwiceName('наглый', 'ребята,').join(' ')).toBe('наглые ребята');
    });
});

export { };
