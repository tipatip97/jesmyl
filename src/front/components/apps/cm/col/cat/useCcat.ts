import { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../shared/store";
import useCmNav from "../../base/useCmNav";
import { localCols } from "../../cols/useCols";
import { Cat } from "./Cat";

let ccat: Cat | undefined;
let zeroCat: Cat | nil;

const numColsUpdatesSelector = (state: RootState) => state.cm.numColsUpdates;

export function useCcat(): [Cat | nil, (val: Cat) => void, Cat | undefined] {
    useSelector(numColsUpdatesSelector);
    const { appRouteData, goTo } = useCmNav();

    if (!zeroCat) zeroCat = localCols?.cats.find((cat) => 0 === cat.wid);
    ccat = useMemo(() => appRouteData.ccatw !== undefined
        ? localCols?.cats.find((cat) => appRouteData.ccatw === cat.wid)
        : undefined, [appRouteData.ccatw]);

    return [
        ccat,
        (cat: Cat) => {
            if (cat) goTo({ place: "cat", data: { ccatw: cat.wid } });
        },
        zeroCat
    ];
}
