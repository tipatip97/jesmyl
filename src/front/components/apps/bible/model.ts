import { BibleTranslate, BibleTranslateName, BibleTranslateNameLine } from './translates/complect';
import { BibleTranslationScreenConfig } from './translations/model';

export const enum BibleBooki {
  def = 0,
  none = -1,
}

export const enum BibleChapteri {
  def = 0,
  none = -1,
}

export const enum BibleVersei {
  def = 0,
  none = -1,
}

export interface BibleStorage extends Record<BibleTranslateName, null | BibleTranslate> {
  rst: BibleTranslate;

  booki: BibleBooki;
  chapteri: BibleChapteri;
  versei: BibleVersei;

  showTranslates: BibleTranslateNameLine;
  myTranslates: BibleTranslateNameLine;

  translationScreenConfigs: BibleTranslationScreenConfig[];
  translationPlan: BibleTranslationAddress[];
  translationHistory: BibleTranslationAddress[];
  joinAddress: BibleTranslationJoinAddress | nil;
}

export type BibleTranslationJoinAddress = Record<BibleBooki, Record<BibleChapteri, BibleVersei[]>>;

export type BibleTranslationSingleAddress = [number, number, number];
export type BibleTranslationAddress = BibleTranslationSingleAddress | BibleTranslationJoinAddress;

export type BibleSearchZone = 'global' | 'inner' | 'address';
