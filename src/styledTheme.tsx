import { makeRegExp } from './back/complect/makeRegExp';
import { indexSimpleValIsPlayAnimations } from './front/components/index/complect/index.simpleValues';

const idMap = new Map<readonly [string], string>();
const letters: Record<string, string> = { '.': 'o' };
'uniqjesmyl'.split('').forEach((letter, letteri) => {
  letters[letteri] = letter;
});
const reg = /./g;
const rep = (all: any) => letters[all];
const repNumbers = (text: number) => `${text}`.replace(reg, rep);

export const styledDefaultTheme = {
  isIOS: /iPad|iPhone|iPod/.test(navigator.userAgent),
  id: (uniq: readonly [string] | any) => {
    if (idMap.has(uniq)) return idMap.get(uniq);
    if (uniq == null) return '';
    const prefix = uniq[0] || uniq.name || uniq.id;

    const id =
      (typeof prefix === 'string'
        ? `${prefix.replace(makeRegExp('/[^-\\w_]/gi'), all => `_${all.charCodeAt(0)}_`)}-`
        : '') +
      repNumbers(Date.now()) +
      repNumbers(Math.random());
    idMap.set(uniq, id);

    return id;
  },
  isCanPlayAnimations: () => indexSimpleValIsPlayAnimations.get(),
} as const;

export type StyledDefaultTheme = typeof styledDefaultTheme;
