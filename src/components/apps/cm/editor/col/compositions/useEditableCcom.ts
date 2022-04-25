import { useMemo } from "react";
import useEditableCols from "../../../cols/useEditableCols";
import { useCcom } from "../../../col/com/useCcom";

export function useEditableCcom() {
    const cols = useEditableCols();
    const [ccom] = useCcom();
    return useMemo(() => cols && ccom && cols.coms.find(com => com.wid === ccom.wid), [ccom, cols]);
}
