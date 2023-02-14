import { useMemo } from "react";
import useCmNav from "../../base/useCmNav";
import { localCols } from "../../cols/useCols";
import { Cat } from "./Cat";

export function useCcat(): [Cat | nil, Cat | undefined] {
    const { appRouteData } = useCmNav();

    return useMemo(() => [
        appRouteData.ccatw !== undefined
            ? localCols?.cats.find((cat) => appRouteData.ccatw === cat.wid)
            : undefined,
        localCols?.cats.find((cat) => 0 === cat.wid)
    ], [appRouteData.ccatw]);

}
