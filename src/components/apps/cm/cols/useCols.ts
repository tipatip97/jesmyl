import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { cmStorage } from "../../../../store/jstorages";
import { riseUpColsUpdates } from "../Cm.store";
import { useCcat, useCcom } from "../col/useCcol";
import { Cols } from "./Cols";
import { IExportableCols } from "./Cols.model";

export let localCols = new Cols(cmStorage.getOr('cols', { cats: [], coms: [] }));

export function useCols(): [Cols, (val: IExportableCols) => void] {
    useSelector((state: RootState) => state.cm.numColsUpdates);
    const dispatch = useDispatch();
    const [ccat, setCcat] = useCcat();
    const [ccom, setCcom] = useCcom();

    return [localCols, (val: IExportableCols) => {
        localCols = new Cols(val);

        if (ccom) {
            const com = localCols.coms.find(com => com.wid === ccom.wid);
            if (com) setCcom(com);
        }
        if (ccat) {
            const cat = localCols.cats.find(cat => cat.wid === ccat.wid);
            if (cat) setCcat(cat);
        }
        dispatch(riseUpColsUpdates());
    }];
}
