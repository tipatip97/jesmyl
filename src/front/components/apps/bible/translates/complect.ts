export const bibleDefaultTranslates = ['rst'] as const;
export const bibleOtherTranslates = ['nrt', 'kas'] as const;
export const bibleAllTranslates = [...bibleDefaultTranslates, ...bibleOtherTranslates] as const;

export type BibleTranslate = (typeof bibleAllTranslates)[number];
export type BibleTranslateLine = readonly BibleTranslate[];

export const translateDescriptions: Record<BibleTranslate, string> = {
  rst: 'Русский Синодальный Перевод',
  nrt: 'Новый русский перевод',
  kas: 'Новый Завет. Перевод Кассиана (Безобразова)',
};
