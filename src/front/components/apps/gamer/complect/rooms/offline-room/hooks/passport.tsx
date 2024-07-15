import { useAuth } from '../../../../../../index/molecules';
import { useGamerOfflineRoomsPassportValue } from '../../../../molecules';

export const useGamerOfflineRoomsPassport = () => {
  const authData = useAuth();

  return useGamerOfflineRoomsPassportValue() ?? authData;
};
