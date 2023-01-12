import { useDispatch, useSelector } from "react-redux";
import { cmStorage } from "../../../../../shared/jstorages";
import { RootState } from "../../../../../shared/store";
import { riseUpComUpdate, selectCcol } from "../../Cm.store";
import { localCols } from "../../cols/useCols";
import { Com } from "./Com";

let ccom: Com | nil = null;

const numColsUpdatesSelector = (state: RootState) => state.cm.numColsUpdates;
const numComUpdatesSelector = (state: RootState) => state.cm.numComUpdates;
const ccomwSelector = (state: RootState) => state.cm.ccomw;

export function useCcom(): [Com | nil, (val: Com, isPreventSave?: boolean) => void] {
    useSelector(numColsUpdatesSelector);
    useSelector(numComUpdatesSelector);
    const dispatch = useDispatch();
    const ccomw = useSelector(ccomwSelector);

    if (!ccom && ccomw != null) ccom = localCols?.coms.find((com) => ccomw === com.wid);

    return [
        ccom,
        (com: Com, isPreventSave?: boolean) => {
            if (com) {
                ccom = com;
                dispatch(selectCcol({ fieldn: "comw", val: com.wid }));
                dispatch(riseUpComUpdate());
                if (isPreventSave) return;
                cmStorage.set("ccomw", com.wid);
            }
        }
    ];
}
