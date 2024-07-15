import { useAtomValue } from '../../../../../../../complect/atoms';
import { gamerMolecule } from '../../../../molecules';
import { useGamerRooms } from './rooms';

export const useGamerCurrentRoom = () => {
  const roomw = useAtomValue(gamerMolecule.take('roomw'));

  return useGamerRooms()?.find(({ w }) => w === roomw);
};
