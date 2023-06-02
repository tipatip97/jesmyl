import { useSelector } from "react-redux";
import mylib from "../../../../../complect/my-lib/MyLib";
import { RootState } from "../../../../../shared/store";
import { IExportableCols } from "../../cols/Cols.model";
import { EditableCols } from "./EditableCols";

const colsSelector = (state: RootState) => state.cm.cols;
let localCols: EditableCols | und;
let localICols: IExportableCols | und;

export function useEditableCols() {
    const cols = useSelector(colsSelector);

    if (!cols) return;
    if (localCols && localICols === cols)
        return localCols;

    localCols = cols && new EditableCols(mylib.clone(cols));
    localICols = cols;
    return localCols;
}
