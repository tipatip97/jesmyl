import { useDispatch, useSelector } from "react-redux";
import { cmStorage } from "../../../../../shared/jstorages";
import { RootState } from "../../../../../shared/store";
import { selectCcol } from "../../Cm.store";
import { localCols } from "../../cols/useCols";
import { Cat } from "./Cat";

let ccat: Cat | undefined;
let zeroCat: Cat | nil;

const numColsUpdatesSelector = (state: RootState) => state.cm.numColsUpdates;
const ccatwSelector = (state: RootState) => state.cm.ccatw;

export function useCcat(): [Cat | nil, (val: Cat) => void, Cat | undefined] {
    useSelector(numColsUpdatesSelector);
    const dispatch = useDispatch();
    const ccatw = useSelector(ccatwSelector);

    if (!zeroCat) zeroCat = localCols?.cats.find((cat) => 0 === cat.wid);
    if (!ccat && ccatw != null) ccat = localCols?.cats.find((cat) => ccatw === cat.wid);

    return [
        ccat,
        (val: Cat) => {
            if (val) {
                ccat = val;
                cmStorage.set("ccatw", val.wid);
                dispatch(selectCcol({ fieldn: "catw", val: val.wid }));
            }
        },
        zeroCat
    ];
}
