import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { cmStorage } from "../../../store/jstorages";
import { setCurrentApp } from "../../board/Board.store";
import { ChordVisibleVariant, CmPhase } from "./Cm.model";
import { colsForceUpdate, selectCcol, setMarkList, setCmPhase, updateChordVisibleVariant, setMeetingList } from "./Cm.store";
import { Cat } from "./col/cat/Cat";
import { Com } from "./col/com/Com";
import { Cols } from './cols/Cols';
import { IExportableCols } from "./cols/Cols.model";
import { Meetings } from "./complect/meetings/Meetings";

type HookRet<T> = [T | undefined, (val: T) => void];

let localCols = new Cols(cmStorage.getOr('cols', { cats: [], coms: [] }));

export function useCols(): [Cols, (val: IExportableCols) => void] {
    useSelector((state: RootState) => state.cm.numColsUpdates);
    const dispatch = useDispatch();
    const [ccat, setCcat] = useCcol('cat');
    const [ccom, setCcom] = useCcol('com');

    return [localCols, (val: IExportableCols) => {
        localCols = new Cols(val);

        if (ccom) setCcom(localCols.coms.find(com => com.wid === ccom.wid));
        if (ccat) setCcat(localCols.cats.find(cat => cat.wid === ccat.wid));
        dispatch(colsForceUpdate());
    }];
}

type NavColField = {
    com?: Com;
    cat?: Cat;
};

let ccom: Com | undefined;
let ccat: Cat | undefined;

export function useCcol<Fieldn extends keyof NavColField>(fieldn: Fieldn): HookRet<NavColField[Fieldn]> {
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


const phaseJumps: Record<CmPhase, CmPhase | null> = {
    // если значение - null, то переход на предыдущую фазу
    cats: null,
    com: "cat",
    cat: "cats",
    editor: "com",
    news: null,
    translations: null,
};

export function usePhase() {
    const dispatch = useDispatch();
    const phase = useSelector((state: RootState) => state.cm.phase);
    const prevPhase = useSelector((state: RootState) => state.cm.prevPhase);
    const setPhase = (val: CmPhase) => {
        if (phase !== 'cats' && phase && phaseJumps[phase]) cmStorage.set('prevPhase', phase);
        cmStorage.set('phase', val);
        dispatch(setCmPhase(val));
    };

    const ret = {
        phase,
        prevPhase,
        setPhase,
        isCanGoBack: (phase: CmPhase) => {
            return (ret.phase && ret.phase !== 'cats' && phaseJumps[ret.phase] !== null)
                || (phase && phase !== 'cats' && phaseJumps[phase] !== null);
        },
        goBack: () => {
            if (phase === 'cats') {
                dispatch(setCurrentApp(null));
                return;
            }

            if (!phase) return;
            const newPhase = phaseJumps[phase] ?? prevPhase ?? 'cats';

            setPhase(newPhase as CmPhase);
        }
    };

    return ret;
}

export function useChordVisibleVariant(): HookRet<ChordVisibleVariant> {
    const dispatch = useDispatch();
    const chordVisibleVariant = useSelector((state: RootState) => state.cm.chordVisibleVariant);

    return [chordVisibleVariant, (val: ChordVisibleVariant) => {
        cmStorage.set('chordVisibleVariant', val);
        dispatch(updateChordVisibleVariant(val));
    }];
}

export function useMarks() {
    const dispatch = useDispatch();
    const marks = useSelector((state: RootState) => state.cm.marks);
    const [cols] = useCols();
    const unsets: number[] = [];
    const markedComs = marks.map(comw => {
        const com = cols.coms.find(com => com.wid === comw);
        if (com === undefined) unsets.push(comw);
        return com;
    }).filter(com => com) as Com[];

    const ret = {
        marks: markedComs.map(com => com.wid),
        markedComs,
        setMarks: (val: number[]) => {
            cmStorage.set('marks', val);
            dispatch(setMarkList(val));
        },
        toggle: (comw: number) => ret.isMarked(comw) ? ret.removeMark(comw) : ret.addMarks(comw),
        addMarks: (comws: number | number[]) => ret.setMarks(ret.marks.concat(comws)),
        removeMark: (comw: number) => ret.setMarks(ret.marks.filter(mark => mark !== comw)),
        isMarked: (comw: number) => ret.marks.indexOf(comw) > -1,
        bumerangMarks: (comw: number) => {
            if (ret.marks.length < 2) return;
            const comwi = ret.marks.indexOf(comw);
            const find = (dir: number) => ret.marks.indexOf(ret.marks[dir > 0 ? 'reduce' : 'reduceRight']((curr: number | null, cw, cwi, cwa) => curr == null ? cw === comw ? cwi : null : curr > cwa.length ? curr : cw, null) as number);

            const index = find(comwi ? -1 : 1);

            [ret.marks[index], ret.marks[comwi]] = [ret.marks[comwi], ret.marks[index]];

            ret.setMarks(ret.marks);
        },
    };

    if (unsets.length > 0) cmStorage.set('marks', ret.marks.filter(comw => unsets.indexOf(comw) === -1));

    return ret;
}

let meetings = new Meetings(cmStorage.getOr('cm_meetings', []));

export function useMeetings() {
    const dispatch = useDispatch();
    useSelector((state: RootState) => state.cm.cm_meetings);

    cmStorage.listen('cm_meetings', 'useMeetings hook', (val) => dispatch(setMeetingList(val)));

    return {
        meetings: meetings.stack,
        isEditable: false,
        createMeeting: () => meetings.create((meetings) => dispatch(setMeetingList(meetings))),
    };
}
