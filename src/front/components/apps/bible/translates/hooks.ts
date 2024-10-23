import { useAtom, useAtomValue } from '../../../../complect/atoms';
import { bibleMolecule } from '../molecules';

const myTranslatesAtom = bibleMolecule.select(s => s.myTranslates);

const showTranslatesAtom = bibleMolecule.select(s => s.showTranslates);

export const useBibleMyTranslates = () => useAtom(myTranslatesAtom);
export const useBibleShowTranslates = () => useAtom(showTranslatesAtom);
export const useBibleShowTranslatesValue = () => useAtomValue(showTranslatesAtom);
