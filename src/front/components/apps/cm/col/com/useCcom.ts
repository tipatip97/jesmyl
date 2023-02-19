import { useSelector } from "react-redux";
import { RootState } from "../../../../../shared/store";
import useCmNav from "../../base/useCmNav";
import { useCols } from "../../cols/useCols";
import { Com } from "./Com";

const numComUpdatesSelector = (state: RootState) => state.cm.numComUpdates;

export function useCcom(): Com | nil {
    useSelector(numComUpdatesSelector);
    const { appRouteData } = useCmNav();
    const [cols] = useCols();

    return appRouteData.ccomw !== undefined
        ? cols?.coms.find((com) => appRouteData.ccomw === com.wid)
        : null;
}
