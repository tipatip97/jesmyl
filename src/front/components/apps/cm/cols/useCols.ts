import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../shared/store";
import { riseUpColsUpdates } from "../Cm.store";
import { Cols } from "./Cols";
import { IExportableCols } from "./Cols.model";

export let localCols: Cols | und;

const numColsUpdatesSelector = (state: RootState) => state.cm.numColsUpdates;

export function useCols(): [Cols | und, (val: IExportableCols) => void] {
    useSelector(numColsUpdatesSelector);
    const dispatch = useDispatch();

    return [localCols, (val: IExportableCols) => {
        localCols = new Cols(val);
        dispatch(riseUpColsUpdates());
    }];
}
