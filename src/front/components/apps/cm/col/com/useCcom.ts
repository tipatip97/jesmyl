import { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../shared/store";
import useCmNav from "../../base/useCmNav";
import { localCols } from "../../cols/useCols";
import { Com } from "./Com";

const numColsUpdatesSelector = (state: RootState) => state.cm.numColsUpdates;
const numComUpdatesSelector = (state: RootState) => state.cm.numComUpdates;

export function useCcom(): Com | nil {
    useSelector(numColsUpdatesSelector);
    useSelector(numComUpdatesSelector);
    const { appRouteData } = useCmNav();

    return useMemo(() => appRouteData.ccomw !== undefined
        ? localCols?.coms.find((com) => appRouteData.ccomw === com.wid)
        : null, [appRouteData.ccomw]);
}
