import { useSelector } from "react-redux";
import { RootState } from "../../../../../../shared/store";

const selector = (state: RootState) => state.gamer.aliasWords;

export const useAliasPacks = () => useSelector(selector);
