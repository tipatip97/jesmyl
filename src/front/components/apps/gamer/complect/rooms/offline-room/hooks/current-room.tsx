import { useAtomValue } from '../../../../../../../complect/atoms';
import { gamerMolecule, useGamerOfflineRooms } from '../../../../molecules';

export const useGamerOfflineRoom = () => {
  const roomw = useAtomValue(gamerMolecule.take('roomw'));
  return useGamerOfflineRooms()[0]?.find(({ w }) => w === roomw);
};
