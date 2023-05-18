import { useSelector } from "react-redux";
import { RootState } from "../../../../shared/store";
import { Cols } from "./Cols";
import { IExportableCols } from "./Cols.model";
import mylib from "../../../../complect/my-lib/MyLib";

const colsSelector = (state: RootState) => state.cm.cols;
let localCols: Cols | und;
let localICols: IExportableCols | und;

export function useCols() {
    const cols = useSelector(colsSelector);

    if (localCols && localICols === cols)
        return localCols;

    localCols = cols && new Cols(mylib.clone(cols), localCols?.coms);
    localICols = cols;
}
