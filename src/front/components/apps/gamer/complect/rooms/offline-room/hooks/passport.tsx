import { useSelector } from 'react-redux';
import { RootState } from '../../../../../../../shared/store';
import useAuth from '../../../../../../index/useAuth';
import { GamerPassport } from '../../../../Gamer.model';

const passportSelector = (state: RootState) => state.gamer.passport;

export const useGamerOfflineRoomsPassportData: () => GamerPassport | und = () => useSelector(passportSelector);

export const useGamerOfflineRoomsPassport = () => {
  const authData = useAuth();

  return useGamerOfflineRoomsPassportData() ?? authData;
};
