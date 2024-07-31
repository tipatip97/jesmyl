import { useAtom } from '../../../../complect/atoms';
import { cmMolecule } from '../molecules';

const chordVisibleVariantAtom = cmMolecule.select(s => s.chordVisibleVariant);
export const useChordVisibleVariant = () => useAtom(chordVisibleVariantAtom);
