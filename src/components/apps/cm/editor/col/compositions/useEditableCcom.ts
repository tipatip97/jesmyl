import { useMemo } from "react";
import { useCcom } from "../../../col/com/useCcom";
import { useEditableCcat } from "../categories/useEditableCcat";

export function useEditableCcom() {
    const zcat = useEditableCcat(0);
    const [ccom] = useCcom();
    return useMemo(() => zcat && ccom && zcat.coms.find(com => com.wid === ccom.wid), [ccom, zcat]);
}
