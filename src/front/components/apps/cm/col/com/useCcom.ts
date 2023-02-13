import { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../shared/store";
import useCmNav from "../../base/useCmNav";
import { localCols } from "../../cols/useCols";
import { Com } from "./Com";

let ccom: Com | nil = null;

const numColsUpdatesSelector = (state: RootState) => state.cm.numColsUpdates;
const numComUpdatesSelector = (state: RootState) => state.cm.numComUpdates;

export function useCcom(): [Com | nil, (val: Com, isPreventSave?: boolean) => void] {
    useSelector(numColsUpdatesSelector);
    useSelector(numComUpdatesSelector);
    const { appRouteData, setAppRouteData } = useCmNav();

    ccom = useMemo(() => appRouteData.ccomw !== undefined
        ? localCols?.coms.find((com) => appRouteData.ccomw === com.wid)
        : null, [appRouteData.ccomw]);

    return [
        ccom,
        (com: Com, isPreventSave?: boolean) => {
            if (com) {
                setAppRouteData((prev) => ({ ...prev, ccomw: com.wid }), isPreventSave);
            }
        }
    ];
}
