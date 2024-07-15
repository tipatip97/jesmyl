import { useAtomValue } from '../../../../../../../complect/atoms';
import { gamerMolecule } from '../../../../molecules';

export const useGamerRooms = () => useAtomValue(gamerMolecule.take('rooms'));
