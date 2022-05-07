import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../shared/store";
import { riseUpColsUpdates } from "../../Cm.store";
import { IExportableCols } from "../../cols/Cols.model";
import { EditableCols } from "./EditableCols";

export let localCols: EditableCols | und;

export function useEditableCols(): [EditableCols | und, (val: IExportableCols) => void] {
    useSelector((state: RootState) => state.cm.numColsUpdates);
    const dispatch = useDispatch();

    return [localCols, (val: IExportableCols) => {
        localCols = new EditableCols(val);
        dispatch(riseUpColsUpdates());
    }];
}
