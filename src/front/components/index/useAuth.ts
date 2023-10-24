import { useSelector } from "react-redux";
import { RootState } from "../../shared/store";
import indexStorage from "./indexStorage";

export const removePullRequisites = () => indexStorage.rem('updateRequisites');

const authSelector = (state: RootState) => state.index.auth;
const deviceIdSelector = (state: RootState) => state.index.deviceId;

export const useDeviceId = () => useSelector(deviceIdSelector);

const useAuth = () => useSelector(authSelector);
export default useAuth; 
