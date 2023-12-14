import { useSelector } from "react-redux";
import { RootState } from "../../../../../../../shared/store";

const selector = (state: RootState) => state.gamer.offlineRooms;

export const useGamerOfflineRooms = () => useSelector(selector);
