import useCmNav from "../../base/useCmNav";
import { useCols } from "../../cols/useCols";
import { Cat } from "./Cat";

export function useCcat(isTakeZeroCat?: boolean): Cat | nil {
    const { appRouteData } = useCmNav();
    const [cols] = useCols();

    return isTakeZeroCat
        ? cols?.cats.find((cat) => 0 === cat.wid)
        : appRouteData.ccatw !== undefined
            ? cols?.cats.find((cat) => appRouteData.ccatw === cat.wid)
            : undefined;
}
