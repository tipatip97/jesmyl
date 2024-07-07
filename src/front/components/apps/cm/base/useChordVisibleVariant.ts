import { useAtom } from '../../../../complect/atoms';
import { cmMolecule } from '../molecules';

export const useChordVisibleVariant = () => useAtom(cmMolecule.take('chordVisibleVariant'));
