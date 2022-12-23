import { Executer } from "./Executer";

describe('Executer', () => {
    it('doIt:formula', () => {
        const fieldn = 'value' + Math.random();
        const penultimate: any = {};
        Executer.doIt({ method: 'formula', target: 777, penultimate, lastTrace: fieldn, value: 'X + 1', auth: { level: 320 } });
        expect(penultimate[fieldn]).toBe(778);

        Executer.doIt({ method: 'formula', target: 777, penultimate, lastTrace: fieldn, value: '{*level} + 1', auth: { level: 320 } });
        expect(penultimate[fieldn]).toBe(321);

        Executer.doIt({ method: 'formula', target: 2, penultimate, lastTrace: fieldn, value: '({*level} + 1) * {num} - X', args: { num: 6 }, auth: { level: 5 } });
        expect(penultimate[fieldn]).toBe(34);
    });

    it('replaceArgs', () => {
        expect(Executer.replaceArgs('{a}', { a: 432 })).toBe(432);
        expect(Executer.replaceArgs(':{a}', { a: 33 })).toBe(':33');
        expect(Executer.replaceArgs('{*level}', { a: 432 }, { level: 989 })).toBe(989);
        expect(Executer.replaceArgs('{*level} texted', { a: 432 }, { level: 300 })).toBe('300 texted');
        expect(Executer.replaceArgs('{a} with text {*level}', { a: [123] }, { level: 102 })).toBe('123 with text 102');
    });

    it('isExpected', () => {
        expect(Executer.isExpected({ key: 'val' }, ['key', '===', 'val'])).toBe(true);
        expect(Executer.isExpected({ key: 123 }, ['key', '==', 123])).toBe(true);
        expect(Executer.isExpected({ level: 300 }, ['level', '===', '{*level}'], {}, { level: 300 })).toBe(true);
        expect(Executer.isExpected({ level: 300 }, ['level', '>=', '{*level}'], {}, { level: 300 })).toBe(true);
        expect(Executer.isExpected({ level: 300 }, ['level', '<=', '{*level}'], {}, { level: 300 })).toBe(true);
        expect(Executer.isExpected({ level: 30 }, ['level', '<', '{*level}'], {}, { level: 300 })).toBe(true);
        expect(Executer.isExpected({ level: 3000 }, ['level', '>', '{*level}'], {}, { level: 300 })).toBe(true);
        expect(Executer.isExpected({ level: '300' }, ['level', '==', '{*level}'], {}, { level: 300 })).toBe(true);
        expect(Executer.isExpected({ level: 300, field: 200 }, ['level', '===', '{*level}', 'field', '<', '{*level}'], {}, { level: 300 })).toBe(true);
        expect(Executer.isExpected({ level: 3300, field: 200 }, ['level', '===|', '{*level}', 'field', '<', '{*level}'], {}, { level: 300 })).toBe(true);
        expect(Executer.isExpected({ level: '=', field: 200 }, ['level', '!==&', '{*level}', 'field', '<', '{*level}'], {}, { level: 300 })).toBe(true);
        expect(Executer.isExpected({}, ['{*level}', 'in', '{arr}'], { arr: [131, 94, 300, 87] }, { level: 300 })).toBe(true);
        expect(Executer.isExpected({}, ['{*level}', 'out', '{arr}'], { arr: [131, 94, 3030, 87] }, { level: 300 })).toBe(true);
        expect(Executer.isExpected({ val: 3300 }, ['val', 'is', '#Number'])).toBe(true);
        expect(Executer.isExpected({ val: ' ' }, ['val', 'is', '#String'])).toBe(true);
        expect(Executer.isExpected({ val: [' '] }, ['val', 'is', '#List'])).toBe(true);
        expect(Executer.isExpected({ val: {} }, ['val', 'is', '#Dict'])).toBe(true);
        expect(Executer.isExpected({ val: 1 }, ['val', 'is', '#Num'])).toBe(true);
        expect(Executer.isExpected({ val: 14 }, ['val', 'not', '#Num'])).toBe(true);
        expect(Executer.isExpected({ val: 'string' }, ['val', 'not', '#Str'])).toBe(true);
        expect(Executer.isExpected({ val: 298 }, ['val', 'not', '#str'])).toBe(true);
        expect(Executer.isExpected({}, ['val', 'is', '#num'])).toBe(true);
        expect(Executer.isExpected({}, ['val', 'not', '#Number'])).toBe(true);
    });
});

export { };
