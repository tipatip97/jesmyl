import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { cmStorage } from "../../../store/jstorages";
import { ChordVisibleVariant, CmPhase } from "./Cm.model";
import { colsForceUpdate, selectCcol, setPhase, updateChordVisibleVariant } from "./Cm.store";
import { Cat } from "./col/cat/Cat";
import { Com } from "./col/com/Com";
import { Cols } from './cols/Cols';


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



type NavField = {
    phase: CmPhase;
    ccom?: Com;
    ccat?: Cat;
    chordVisibleVariant: ChordVisibleVariant;
};

let ccat: Cat | undefined;
let ccom: Com | undefined;

export function useNav<Fieldn extends keyof NavField>(fieldn: Fieldn): [NavField[Fieldn], (val: NavField[Fieldn]) => void] {
    const [cols] = useCols();
    const dispatch = useDispatch();
    const phase = useSelector((state: RootState) => state.cm.phase);
    const chordVisibleVariant = useSelector((state: RootState) => state.cm.chordVisibleVariant);
    const ccatw = useSelector((state: RootState) => state.cm.ccatw);
    const ccomw = useSelector((state: RootState) => state.cm.ccomw);

    return (fieldn === 'ccat'
        ? [ccat || (ccat = cols.cats.find((cat) => ccatw === cat.wid)), (val: Cat) => {
            ccat = val;
            cmStorage.set('ccatw', val.wid);
            dispatch(selectCcol({ ccatw: val.wid }));
        }]
        : fieldn === 'ccom'
            ? [ccom || (ccom = cols.coms.find((com) => ccomw === com.wid)), (val: Com) => {
                ccom = val;
                cmStorage.set('ccomw', val.wid);
                dispatch(selectCcol({ ccomw: val.wid }));
            }]
            : fieldn === 'chordVisibleVariant'
                ? [chordVisibleVariant, (val: ChordVisibleVariant) => {
                    console.log(val, cmStorage);
                    cmStorage.set('chordVisibleVariant', val);
                    dispatch(updateChordVisibleVariant(val));
                }]
                : [phase, (val: CmPhase) => {
                    cmStorage.set('phase', val);
                    dispatch(setPhase(val));
                }]
    ) as never;
}

