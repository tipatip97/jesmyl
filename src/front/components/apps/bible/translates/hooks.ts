import { atom, useAtom, useAtomValue } from '../../../../complect/atoms';
import { bibleMolecule } from '../molecules';
import { BibleTranslateLine } from './complect';

const myTranslatesAtom = atom<BibleTranslateLine>(['rst'], 'bible', 'myTranslates');

export const useBibleMyTranslates = () => useAtom(myTranslatesAtom);
export const useBibleShowTranslates = () => useAtom(bibleMolecule.take('showTranslates'));
export const useBibleShowTranslatesValue = () => useAtomValue(bibleMolecule.take('showTranslates'));
