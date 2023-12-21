import { useSelector } from 'react-redux';
import { RootState } from '../../../../../../../shared/store';

const selector = (state: RootState) => state.gamer.rooms;

export const useGamerRooms = () => useSelector(selector);
