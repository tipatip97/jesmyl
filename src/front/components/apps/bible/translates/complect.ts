import { BibleBooki } from '../model';

export const bibleDefaultTranslates = ['rst'] as const;
export const bibleOtherTranslates = ['nrt', 'kas'] as const;
export const bibleAllTranslates = [...bibleDefaultTranslates, ...bibleOtherTranslates] as const;

export type BibleTranslate = { chapters: string[][][] };
export type BibleTranslateName = (typeof bibleAllTranslates)[number];
export type BibleTranslateNameLine = readonly BibleTranslateName[];

export const translateDescriptions: Record<BibleTranslateName, string> = {
  rst: 'Русский Синодальный Перевод',
  nrt: 'Новый русский перевод',
  kas: 'Новый Завет. Перевод Кассиана (Безобразова)',
};

export const translateFilter: Record<BibleTranslateName, (booki: BibleBooki) => boolean> = {
  kas: booki => booki < 39,
  rst: () => false,
  nrt: () => false,
};
