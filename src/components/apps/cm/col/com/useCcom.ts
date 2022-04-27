import { useDispatch, useSelector } from "react-redux";
import { cmStorage } from "../../../../../shared/jstorages";
import { RootState } from "../../../../../shared/store";
import { riseUpComUpdate, selectCcol } from "../../Cm.store";
import { localCols } from "../../cols/useCols";
import { Com } from "../com/Com";

let ccom: Com | nil = null;

export function useCcom(): [Com | nil, (val: Com) => void] {
    useSelector((state: RootState) => state.cm.numColsUpdates);
    useSelector((state: RootState) => state.cm.numComUpdates);
    const dispatch = useDispatch();
    const ccomw = useSelector((state: RootState) => state.cm.ccomw);

    if (!ccom && ccomw != null) ccom = localCols?.coms.find((com) => ccomw === com.wid);

    return [
        ccom,
        (val: Com) => {
            if (val) {
                ccom = val;
                cmStorage.set("ccomw", val.wid);
                dispatch(selectCcol({ fieldn: "comw", val: val.wid }));
                dispatch(riseUpComUpdate());
            }
        }
    ];
}
