import { useSelector } from "react-redux";
import { RootState } from "../../../../../../shared/store";

const selector = (state: RootState) => state.gamer.roomw;

export const useGamerRoomw = () => useSelector(selector);
