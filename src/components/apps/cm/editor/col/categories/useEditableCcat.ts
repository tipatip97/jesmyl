import { useMemo } from "react";
import useEditableCols from "../useEditableCols";
import { useCcat } from "../../../col/cat/useCcat";

export function useEditableCcat(catw?: number) {
    const cols = useEditableCols();
    const [ccat] = useCcat();
    return useMemo(() => {
        if (cols) {
            if (catw != null) return cols.cats.find(cat => cat.wid === catw);
            else return ccat && cols.cats.find(cat => cat.wid === ccat.wid);
        }
    }, [ccat, cols]);
}
