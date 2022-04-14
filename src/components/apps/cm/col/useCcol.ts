import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { cmStorage } from "../../../../store/jstorages";
import { riseUpComUpdate, selectCcol } from "../Cm.store";
import { localCols } from "../cols/useCols";
import { Cat } from "./cat/Cat";
import { Com } from "./com/Com";

let ccom: Com | nil = null;
let ccat: Cat | undefined;
let zeroCat: Cat | nil;

export function useCcom(): [Com | nil, (val: Com) => void] {
    useSelector((state: RootState) => state.cm.numColsUpdates);
    useSelector((state: RootState) => state.cm.numComUpdates);
    const dispatch = useDispatch();
    const ccomw = useSelector((state: RootState) => state.cm.ccomw);

    if (!ccom && ccomw) ccom = localCols?.coms.find((com) => ccomw === com.wid);

    return [
        ccom,
        (val: Com) => {
            ccom = val as Com;

            cmStorage.set("ccomw", val?.wid);
            dispatch(selectCcol({ fieldn: "comw", val: val?.wid }));
            dispatch(riseUpComUpdate());
        }
    ];
}

export function useCcat(): [Cat | nil, (val: Cat) => void, Cat | undefined] {
    useSelector((state: RootState) => state.cm.numColsUpdates);
    const dispatch = useDispatch();
    const ccatw = useSelector((state: RootState) => state.cm.ccatw);

    if (!zeroCat) zeroCat = localCols?.cats.find((cat) => 0 === cat.wid);
    if (!ccat && ccatw) ccat = localCols?.cats.find((cat) => ccatw === cat.wid);

    return [
        ccat,
        (val: Cat) => {
            ccat = val as Cat;

            cmStorage.set("ccatw", val?.wid);
            dispatch(selectCcol({ fieldn: "catw", val: val?.wid }));
        },
        zeroCat
    ];
}
