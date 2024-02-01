import { useStorageValueGetter } from '../../../../../complect/useStorage';
import bibleStorage from '../../bibleStorage';

export const useBibleAddressBooki = () => useStorageValueGetter(bibleStorage, 'translationBooki', 0);
