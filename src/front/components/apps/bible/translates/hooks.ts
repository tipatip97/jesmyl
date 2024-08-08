import { atom, useAtom, useAtomValue } from '../../../../complect/atoms';
import { bibleMolecule } from '../molecules';
import { BibleTranslateNameLine } from './complect';

const myTranslatesAtom = atom<BibleTranslateNameLine>(['rst'], 'bible', 'myTranslates');

const showTranslatesAtom = bibleMolecule.select(s => s.showTranslates);

export const useBibleMyTranslates = () => useAtom(myTranslatesAtom);
export const useBibleShowTranslates = () => useAtom(showTranslatesAtom);
export const useBibleShowTranslatesValue = () => useAtomValue(showTranslatesAtom);
