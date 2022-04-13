import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { cmStorage } from "../../../../store/jstorages";
import { selectCcol } from "../Cm.store";
import { localCols } from "../cols/useCols";
import { Cat } from "./cat/Cat";
import { Com } from "./com/Com";

let ccom: Com | undefined;
let ccat: Cat | undefined;
let zeroCat: Cat | nil;

export function useCcom(): [Com, (val: Com) => void] {
    useSelector((state: RootState) => state.cm.numComUpdates);
    const dispatch = useDispatch();
    const ccolw = useSelector((state: RootState) => state.cm.ccomw);

    if (!zeroCat) zeroCat = localCols.cats.find((cat) => 0 === cat.wid);

    return [
        (ccom || (ccom = localCols.coms.find((com) => ccolw === com.wid))) as Com,
        (val: Com) => {
            ccom = val as Com;

            cmStorage.set("ccomw", val?.wid);
            dispatch(selectCcol({ fieldn: "comw", val: val?.wid }));
        }
    ];
}

export function useCcat(): [Cat, (val: Cat) => void, Cat | undefined] {
    useSelector((state: RootState) => state.cm.numColsUpdates);
    const dispatch = useDispatch();
    const ccolw = useSelector((state: RootState) => state.cm.ccatw);

    if (!zeroCat) zeroCat = localCols.cats.find((cat) => 0 === cat.wid);

    return [
        (ccat || (ccat = localCols.cats.find((cat) => ccolw === cat.wid))) as Cat,
        (val: Cat) => {
            ccat = val as Cat;

            cmStorage.set("ccatw", val?.wid);
            dispatch(selectCcol({ fieldn: "catw", val: val?.wid }));
        },
        zeroCat
    ];
}
