import { useMemo } from "react";
import useCmNav from "../../../base/useCmNav";
import { useEditableCols } from "../useEditableCols";

export function useEditableCcat(catw?: number) {
    const cols = useEditableCols();
    const { appRouteData: { ccatw } } = useCmNav();

    return useMemo(() => {
        if (cols) {
            if (catw != null) return cols.cats.find(cat => cat.wid === catw);
            else return ccatw === undefined
                ? undefined
                : cols.cats.find(cat => cat.wid === ccatw);
        }
    }, [ccatw, cols, catw]);
}
