import { justStorageSet, usePutStorageSetter, useStorageSet } from '../../../../complect/useStorage';
import bibleStorage from '../bibleStorage';

export const justBibleStorageSet = justStorageSet(bibleStorage);
export const useBibleStorageSet = () => useStorageSet(bibleStorage);
export const usePutBibleStorageSetter = () => usePutStorageSetter(bibleStorage);
