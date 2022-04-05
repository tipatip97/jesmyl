import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { cmStorage } from "../../../store/jstorages";
import { ChordVisibleVariant, CmPhase } from "./Cm.model";
import { colsForceUpdate, selectCcol, setPhase, updateChordVisibleVariant } from "./Cm.store";
import { Cat } from "./col/cat/Cat";
import { Com } from "./col/com/Com";
import { Cols } from './cols/Cols';

type HookRet<T> = [T | undefined, (val: T) => void];

const localCols = new Cols(cmStorage.getOr('cols', { cats: [], coms: [] }));

export function useCols(): [Cols, (val: Cols) => void] {
    useSelector((state: RootState) => state.cm.numColsUpdates);
    const dispatch = useDispatch();
    const [cols, setCols] = useState<Cols>(localCols);

    return [cols, (val: Cols) => {
        dispatch(colsForceUpdate());
        setCols(val);
    }];
}


export function usePhase(): HookRet<CmPhase> {
    const dispatch = useDispatch();
    const phase = useSelector((state: RootState) => state.cm.phase);

    return [phase, (val: CmPhase) => {
        cmStorage.set('phase', val);
        dispatch(setPhase(val));
    }];
}

export function useChordVisibleVariant(): HookRet<ChordVisibleVariant> {
    const dispatch = useDispatch();
    const chordVisibleVariant = useSelector((state: RootState) => state.cm.chordVisibleVariant);

    return [chordVisibleVariant, (val: ChordVisibleVariant) => {
        cmStorage.set('chordVisibleVariant', val);
        dispatch(updateChordVisibleVariant(val));
    }];
}

type NavColField = {
    com?: Com;
    cat?: Cat;
};

let ccom: Com | undefined;
let ccat: Cat | undefined;

export function useCcol<Fieldn extends keyof NavColField>(fieldn: Fieldn): HookRet<NavColField[Fieldn]> {
    const [cols] = useCols();
    const dispatch = useDispatch();
    const ccolw = useSelector((state: RootState) => state.cm[fieldn as never]);
    let ccol: NavColField[Fieldn];

    if (fieldn === 'com') ccol = (ccom || (ccom = cols.coms.find((com) => ccolw === com.wid))) as NavColField[Fieldn];
    else ccol = (ccat || (ccat = cols.cats.find((cat) => ccolw === cat.wid))) as NavColField[Fieldn];

    return [ccol, (val: NavColField[Fieldn]) => {
        if (fieldn === 'com') ccom = val as never;
        else ccat = val as never;

        cmStorage.set(`c${fieldn}w`, val?.wid);
        dispatch(selectCcol({ fieldn: `${fieldn}w`, val: val?.wid }));
    }]
}

