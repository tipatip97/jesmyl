import { useCols } from "../../cols/useCols";
import { EditableCols } from "./EditableCols";

let editableCols: EditableCols;

export default function useEditableCols() {
    const [cols] = useCols();
    if (!editableCols && cols) editableCols = new EditableCols(cols);
    return editableCols;
}