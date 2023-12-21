import { useSelector } from 'react-redux';
import { RootState } from '../../../../../../../shared/store';

const selector = (state: RootState) => state.gamer.offlineSpyGame;

export const useJoinedOfflineGame = () => useSelector(selector);
