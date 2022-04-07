import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { cmStorage } from "../../../../store/jstorages";
import { selectCcol } from "../Cm.store";
import { localCols } from "../cols/useCols";
import { Cat } from "./cat/Cat";
import { Com } from "./com/Com";

type NavColField = {
    com?: Com;
    cat?: Cat;
};

let ccom: Com | undefined;
let ccat: Cat | undefined;

export function useCcol<Fieldn extends keyof NavColField>(fieldn: Fieldn): [NavColField[Fieldn], (val: NavColField[Fieldn]) => void] {
    useSelector((state: RootState) => state.cm.numColsUpdates);
    const dispatch = useDispatch();
    const ccolw = useSelector((state: RootState) => state.cm[`c${fieldn}w`]);
    let ccol: NavColField[Fieldn];

    if (fieldn === 'com') ccol = (ccom || (ccom = localCols.coms.find((com) => ccolw === com.wid))) as NavColField[Fieldn];
    else ccol = (ccat || (ccat = localCols.cats.find((cat) => ccolw === cat.wid))) as NavColField[Fieldn];

    return [ccol, (val: NavColField[Fieldn]) => {
        if (fieldn === 'com') ccom = val as Com;
        else ccat = val as Cat;

        cmStorage.set(`c${fieldn}w`, val?.wid);
        dispatch(selectCcol({ fieldn: `${fieldn}w`, val: val?.wid }));
    }]
}
