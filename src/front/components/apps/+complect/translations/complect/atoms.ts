import { atom, useAtomSet, useAtomValue } from '../../../../../complect/atoms';
import { FixedResizerLines } from './model';

const fixedResizerLinesAtom = atom<FixedResizerLines | null>(null);
export const useFixedResizerLines = () => useAtomValue(fixedResizerLinesAtom);
export const useFixedResizerLinesSet = () => useAtomSet(fixedResizerLinesAtom);
