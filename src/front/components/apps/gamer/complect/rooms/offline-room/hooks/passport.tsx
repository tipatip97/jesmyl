import { useSelector } from "react-redux";
import { RootState } from "../../../../../../../shared/store";
import useAuth from "../../../../../../index/useAuth";

const passportSelector = (state: RootState) => state.gamer.passport;

export const useGamerOfflineRoomsPassportData = () => useSelector(passportSelector);

export const useGamerOfflineRoomsPassport = () => {
  const authData = useAuth();

  return useGamerOfflineRoomsPassportData() ?? authData;
}
