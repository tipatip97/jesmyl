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

export function useCcol<Coln extends keyof NavColField>(coln: Coln): [NavColField[Coln], (val: NavColField[Coln]) => void] {
    useSelector((state: RootState) => state.cm.numColsUpdates);
    const dispatch = useDispatch();
    const ccolw = useSelector(
        coln === 'com'
            ? (state: RootState) => state.cm.ccomw
            : (state: RootState) => state.cm.ccatw
    );

    return [
        (
            coln === 'com'
                ? (ccom || (ccom = localCols.coms.find((com) => ccolw === com.wid)))
                : (ccat || (ccat = localCols.cats.find((cat) => ccolw === cat.wid)))
        ) as NavColField[Coln],
        (val: NavColField[Coln]) => {
            if (coln === 'com') ccom = val as Com;
            else ccat = val as Cat;

            cmStorage.set(`c${coln}w`, val?.wid);
            dispatch(selectCcol({ fieldn: `${coln}w`, val: val?.wid }));
        }]
}
