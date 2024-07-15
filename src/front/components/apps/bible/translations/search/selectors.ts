import { atom, useAtom } from '../../../../../complect/atoms';
import { BibleSearchZone } from '../../model';

const searchTermAtom = atom('', 'bible', 'translationSearchTerm');
const addressTermAtom = atom('', 'bible', 'translationAddressTerm');
const searchZoneAtom = atom<BibleSearchZone>('global', 'bible', 'translationSearchZone');

export const useBibleSearchZone = () => useAtom(searchZoneAtom);
export const useBibleSearchTerm = () => useAtom(searchTermAtom);
export const useBibleAddressTerm = () => useAtom(addressTermAtom);
