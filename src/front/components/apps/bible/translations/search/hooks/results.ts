import { useStorageValueGetter } from '../../../../../../complect/useStorage';
import bibleStorage from '../../../bibleStorage';

export const useBibleTranslationSearchResultList = () =>
  useStorageValueGetter(bibleStorage, 'translationSearchResultList', []);
export const useBibleTranslationSearchResultSelected = () =>
  useStorageValueGetter(bibleStorage, 'translationSearchResultSelected', null);
