import mylib from "../my-lib/MyLib";

type InsideDigit = 1 | 2 | 3 | 4;

export function NumberCollectionMinificator<InsideDigits extends [InsideDigit?, InsideDigit?, InsideDigit?]>(insideDigits?: InsideDigits) {
    type InsideNumbers = InsideDigits extends [] | undefined | void
        ? []
        : InsideDigits extends [InsideDigit]
        ? [number]
        : InsideDigits extends [InsideDigit, InsideDigit]
        ? [number, number]
        : [number, number, number];

    const decodeReg = new RegExp(
        '(\\d+)(\\.' +
        (insideDigits?.map(digits => `(${digits === 1 ? '\\d' : `\\d{1,${digits}}`})?`).join('') || '') +
        ')?(\\d+)?'
    );
    const repeatZero = String.prototype.repeat.bind('0');
    const zeroEndedReg = /([1-9]+)(0+)/;

    return {
        check: <Digits = InsideDigits>(digits: Digits) => digits,
        zipPack(general: number, insideNumbers: InsideNumbers | null, last: number): [number, InsideNumbers, number] {
            return [general, insideNumbers ?? [] as InsideNumbers, last];
        },
        encode(general: number, insideNumbers: InsideNumbers | null, last: number) {
            try {
                let sNum = '';
                let numbersStr = '';
                let dir = -1;
                let tail: number | string = last;

                if (insideDigits && insideNumbers)
                    insideNumbers.forEach((num, numi) => {
                        if ((sNum = '' + num).length > insideDigits[numi]!)
                            throw new Error(`Ошибка ширины цифры! Ожидается максимум ${insideDigits[numi]!} ${mylib.declension(insideDigits[numi]!, 'порядок', 'порядка', 'порядков')}, а получено число ${num}`);

                        numbersStr += sNum.padStart(insideDigits[numi]!, '0');
                    });

                if (!last || last % 10) dir = 1;
                else if (last > 999999999) tail++;
                else {
                    const comps = ('' + last).match(zeroEndedReg);
                    if (comps) {
                        const [, digits, zeros] = comps;
                        tail = digits + zeros.length;
                    }
                }

                return dir * +`${general}.${numbersStr}${tail}`;
            } catch (error) {
                console.error(error);
                return null;
            }
        },

        decode(num: number | nil): [number, InsideNumbers, number] | null {
            if (num == null || isNaN(num)) return null;
            const comps = ('' + num).match(decodeReg);

            if (comps?.[0] == null) return null;
            const [, general, , ...strNumbers] = comps;

            const lastStrNum = strNumbers[strNumbers.length - 1];

            return [
                +general,
                (insideDigits ? strNumbers.map((num, numi) => +(num?.padEnd(insideDigits[numi]!, '0') || 0)).slice(0, -1) : []) as never,
                lastStrNum !== undefined
                    ? num < 0
                        ? +(lastStrNum.slice(0, -1) + repeatZero(+lastStrNum - Math.trunc(+lastStrNum / 10) * 10))
                        : +lastStrNum
                    : 0
            ];
        }
    };
}
