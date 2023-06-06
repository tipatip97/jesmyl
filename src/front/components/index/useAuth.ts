import { useSelector } from "react-redux";
import { RootState } from "../../shared/store";
import indexStorage from "./indexStorage";

export const removePullRequisites = () => indexStorage.rem('updateRequisites');

const authSelector = (state: RootState) => state.index.auth;

export const useSelectAuth = () => useSelector(authSelector);

const useAuth = () => useSelectAuth()
export default useAuth; 
