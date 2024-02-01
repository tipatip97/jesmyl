import { useStorageValueGetter } from '../../../../../complect/useStorage';
import bibleStorage from '../../bibleStorage';

export const useBibleSearchZone = () => useStorageValueGetter(bibleStorage, 'translationSearchZone', 'global');
export const useBibleSearchTerm = () => useStorageValueGetter(bibleStorage, 'translationSearchTerm', '');
export const useBibleAddressTerm = () => useStorageValueGetter(bibleStorage, 'translationAddressTerm', '');
