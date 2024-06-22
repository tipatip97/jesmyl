import { useStorageValueGetter } from '../../../../complect/useStorage';
import bibleStorage from '../bibleStorage';
import { bibleDefaultTranslates } from './complect';

export const useBibleMyTranslates = () => useStorageValueGetter(bibleStorage, 'myTranslates', bibleDefaultTranslates);
export const useBibleShowTranslates = () =>
  useStorageValueGetter(bibleStorage, 'showTranslates', bibleDefaultTranslates);
