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
  id: (uniq: readonly [string]) => {
    if (idMap.has(uniq)) return idMap.get(uniq);

    const id = uniq[0] + '_' + repNumbers(Date.now()) + repNumbers(Math.random());
    idMap.set(uniq, id);

    return id;
  },
} as const;

export type StyledDefaultTheme = typeof styledDefaultTheme;
