import { BibleTranslationScreenConfig } from './complect/model';

export interface BibleStorage {
  currentTranslationBooki: number;
  currentTranslationChapteri: number;
  currentTranslationVersei: number;
  translationScreenConfigs: BibleTranslationScreenConfig[];
}
