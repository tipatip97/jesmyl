import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../shared/store";
import { riseUpColsUpdates } from "../../Cm.store";
import { IExportableCols } from "../../cols/Cols.model";
import { EditableCols } from "./EditableCols";

export let localEditableCols: EditableCols | und;

const numColsUpdatesSelector = (state: RootState) => state.cm.numColsUpdates;

export function useEditableCols(): [EditableCols | und, (val: IExportableCols) => void] {
    useSelector(numColsUpdatesSelector);
    const dispatch = useDispatch();

    return [localEditableCols, (val: IExportableCols) => {
        localEditableCols = new EditableCols(val);
        dispatch(riseUpColsUpdates());
    }];
}
