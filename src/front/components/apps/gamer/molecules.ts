import { Molecule, useAtom, useAtomSet, useAtomValue } from '../../../complect/atoms';
import { GamerStoraged } from './Gamer.model';

export const gamerMolecule = new Molecule<GamerStoraged>(
  {
    currentOfflineGameName: 'spy',
    offlineRooms: [],
    offlineSpyGame: null,
    passport: null,
    rooms: [],
    roomw: null,
  },
  'gamer',
);

export const useGamerRooms = () => useAtomValue(gamerMolecule.take('rooms'));
export const useGamerRoomwSetter = () => useAtomSet(gamerMolecule.take('roomw'));

export const useGamerCurrentOfflineGameName = () => useAtomValue(gamerMolecule.take('currentOfflineGameName'));

export const useGamerOfflineRooms = () => useAtom(gamerMolecule.take('offlineRooms'));

export const useGamerOfflineRoomsPassportValue = () => useAtomValue(gamerMolecule.take('passport'));
export const useGamerOfflineRoomsPassportSetter = () => useAtomSet(gamerMolecule.take('passport'));

export const useJoinedOfflineGame = () => useAtomValue(gamerMolecule.take('offlineSpyGame'));
