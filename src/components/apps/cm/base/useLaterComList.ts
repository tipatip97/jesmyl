import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { cmStorage } from "../../../../store/jstorages";
import { updateLaterComwList } from "../Cm.store";
import { Com } from "../col/com/Com";
import { Cols } from "../cols/Cols";
import { useCols } from "../cols/useCols";

let laterComs: Com[];
const setLaterComs = (cols: Cols, list: number[]) => laterComs = list.map(comw => cols.coms.find(com => com.wid === comw)).filter(com => com) as Com[];

export default function useLaterComList({ maxStack = 4 } = {}) {
    const dispatch = useDispatch();
    const list = useSelector((state: RootState) => state.cm.laterComwList);
    const [cols] = useCols();

    if (cols && laterComs == null) setLaterComs(cols, list);
    useEffect(() => { cols && setLaterComs(cols, list); }, [list]);

    const ret = {
        laterComs,
        updateLaterComwList: (list: number[]) => dispatch(updateLaterComwList(list)),
        addLaterComw: (comw: number) => {
            const newList = [comw].concat(list
                .filter((laterComw) => laterComw !== comw)
                .filter((_, laterComwi) => maxStack - 1 > laterComwi)
            );
            ret.updateLaterComwList(newList);
            cmStorage.set('laterComwList', newList);
        },
    };
    return ret;
}