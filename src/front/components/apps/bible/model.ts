import { BibleTranslate, BibleTranslateLine } from './translates/complect';
import { BibleTranslationScreenConfig } from './translations/model';

export interface BibleStorage extends Record<BibleTranslate, null | { chapters: string[][][] }> {
  rst: { chapters: string[][][] };

  showTranslates: BibleTranslateLine;

  translationScreenConfigs: BibleTranslationScreenConfig[];
  translationPlan: BibleTranslationAddress[];
}

export interface BibleTranslationJoinAddress {
  [booki: number]: {
    [chapteri: number]: number[];
  };
}

export type BibleTranslationSingleAddress = [number, number, number];
export type BibleTranslationAddress = BibleTranslationSingleAddress | BibleTranslationJoinAddress;

export type BibleSearchZone = 'global' | 'inner' | 'address';
