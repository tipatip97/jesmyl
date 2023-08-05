import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../shared/store";
import di from "../Cm.store";
import cmStorage from "../cmStorage";
import { Com } from "../col/com/Com";
import { Cols } from "../cols/Cols";
import { useCols } from "../cols/useCols";

let laterComs: Com[];
const setLaterComs = (cols: Cols, list: number[]) => laterComs = list.map(comw => cols.coms.find(com => com.wid === comw)).filter(com => com) as Com[];
const laterComwListSelector = (state: RootState) => state.cm.laterComwList;

export default function useLaterComList({ maxStack = 4 } = {}) {
    const dispatch = useDispatch();
    const list = useSelector(laterComwListSelector);
    const cols = useCols();

    if (cols && laterComs == null) setLaterComs(cols, list);
    useEffect(() => { cols && setLaterComs(cols, list); }, [cols, list]);

    const ret = useMemo(() => ({
        laterComs,
        updateLaterComwList: (list: number[]) => dispatch(di.laterComwList(list)),
        addLaterComw: (comw: number) => {
            const newList = [comw].concat(list
                .filter((laterComw) => laterComw !== comw)
                .filter((_, laterComwi) => maxStack - 1 > laterComwi)
            );
            ret.updateLaterComwList(newList);
            cmStorage.set('laterComwList', newList);
        },
    }), [dispatch, list, maxStack]);
    return ret;
}