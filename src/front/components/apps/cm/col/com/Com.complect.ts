import { MyLib } from '../../../../../complect/my-lib/MyLib';

export const iRuUaReg = /[уеыаоэяиёюіїє ]/i;
export const gSimpleHashChordReg = /[ACDEFGH]#?/g;
export const gSimpleBemoleChordReg = /[ABCDEFGH]b?/g;
export const gSimpleHashedEachLetterChordReg = /[A-H]#/g;

export const simpleHashChords = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'H'];

export const translationPushKinds = [
  // +цифра в ключе - меньше или равно количество реальных строк
  // -цифра в ключе - ровное количество реальных строк
  // 0 в ключе - все остальные значения

  // +цифра в значении - разбиение на количество строк
  // +цифра > 9 - сначала количество по первой цифре, остальные по последней (43 === 433333...)
  // -цифра > 9 - повторение схемы каждый шаг (43 === 43434343434343...)
  // 0 в значении - остаётся прежнее количество строк
  {
    6: 6,
    8: 4,
    10: 5,
    0: 4,
  },
  {
    0: 0,
  },
  {
    5: 5,
    '-6': 3,
    8: 35,
    0: 4,
  },
  {
    6: 6,
    8: 4,
    10: 46,
    0: 4,
  },
].map(rule => {
  const rules = Object.entries(rule)
    .map(([key, val]) => [+key, val])
    .sort(([a], [b]) => (a === 0 ? 1 : b === 0 ? -1 : Math.abs(a) - Math.abs(b) || a - b));
  const list: number[] = [];
  const push = (num: number) => list.push(num) + 1;

  return {
    title: rules
      .map(([key, val]) =>
        key ? `${key < 0 ? `=${-key}` : key}:${val < 0 ? `~${-val}` : val}` : `[${val < 0 ? `~${-val}` : val}]`,
      )
      .join(','),
    clearList: () => {
      const prev = list.slice(0);
      list.length = 0;
      return prev;
    },
    list: () => list,
    push: (num: number) => {
      rules.some(([key, val]): number => {
        if (key === 0 && val === 0) return push(num);

        if (key && val > 0 && val < 10) {
          if (num <= key || -key === num) {
            if (num <= val) return push(num);
            else {
              let div = num;

              while (div >= val) {
                push(val);
                div -= val;
              }

              return div ? push(div) : 1;
            }
          }
        } else if (key === 0 || num <= key || -key === num) {
          const isNegative = val < 0;
          const nums = (isNegative ? -val : val)
            .toString()
            .split('')
            .map((v: string) => +v);
          let parti = 0;
          let div = num;

          while (div >= nums[parti]) {
            push(nums[parti]);
            div -= nums[parti];
            parti += nums.length - 1 === parti ? (isNegative ? -parti : 0) : 1;
          }

          return div ? push(div) : 1;
        }

        return 0;
      });
    },
  };
});

export const chordBemoleEquivalent: Record<string, string> = {
  'A#': 'B',
  'C#': 'Db',
  'D#': 'Eb',
  'F#': 'Gb',
  'G#': 'Ab',
};

export const chordDiezEquivalent: Record<string, string> = {
  Bb: 'A',
  Hb: 'A',
};
MyLib.entries(chordBemoleEquivalent).forEach(([key, val]) => (chordDiezEquivalent[val] = key));
