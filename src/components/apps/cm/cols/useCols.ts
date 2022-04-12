import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { cmStorage } from "../../../../store/jstorages";
import { riseUpColsUpdates } from "../Cm.store";
import { useCcol } from "../col/useCcol";
import { Cols } from "./Cols";
import { IExportableCols } from "./Cols.model";

export let localCols = new Cols(cmStorage.getOr('cols', { cats: [], coms: [] }));

export function useCols(): [Cols, (val: IExportableCols) => void] {
    useSelector((state: RootState) => state.cm.numColsUpdates);
    const dispatch = useDispatch();
    const [ccat, setCcat] = useCcol('cat');
    const [ccom, setCcom] = useCcol('com');

    return [localCols, (val: IExportableCols) => {
        localCols = new Cols(val);

        if (ccom) setCcom(localCols.coms.find(com => com.wid === ccom.wid));
        if (ccat) setCcat(localCols.cats.find(cat => cat.wid === ccat.wid));
        dispatch(riseUpColsUpdates());
    }];
}
