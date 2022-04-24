import { useMemo } from "react";
import { EditableCols } from "./EditableCols";
import { useCols } from "./useCols";


export default function useEditableCols() {
    const [cols] = useCols();
    return useMemo(() => cols && new EditableCols(cols), [cols]);
}