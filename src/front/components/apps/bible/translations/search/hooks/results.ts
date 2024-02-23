import { useStorageValueGetter } from '../../../../../../complect/useStorage';
import bibleStorage from '../../../bibleStorage';

const emptyArr: [] = [];
export const useBibleTranslationSearchResultList = () =>
  useStorageValueGetter(bibleStorage, 'translationSearchResultList', emptyArr);

export const useBibleTranslationSearchResultSelected = () =>
  useStorageValueGetter(bibleStorage, 'translationSearchResultSelected', null);
