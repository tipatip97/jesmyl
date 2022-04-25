import { useMemo } from "react";
import useEditableCols from "../../../cols/useEditableCols";
import { useCcat } from "../../../col/cat/useCcat";

export function useEditableCcat() {
    const cols = useEditableCols();
    const [ccat] = useCcat();
    return useMemo(() => cols && ccat && cols.cats.find(cat => cat.wid === ccat.wid), [ccat, cols]);
}
