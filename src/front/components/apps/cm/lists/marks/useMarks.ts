import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../shared/store";
import { setMarkList } from "../../Cm.store";
import cmStorage from "../../cmStorage";
import { Com } from "../../col/com/Com";
import { useCols } from "../../cols/useCols";

const marksSelector = (state: RootState) => state.cm.marks;

export function useMarks() {
    const dispatch = useDispatch();
    const marks = useSelector(marksSelector);
    const [cols] = useCols();
    const unsets: number[] = [];
    const markedComs = cols && marks.map(comw => {
        const com = cols.coms.find(com => com.wid === comw);
        if (com === undefined) unsets.push(comw);
        return com;
    }).filter(com => com) as Com[];

    const ret = {
        marks: markedComs?.map(com => com.wid),
        markedComs,
        setMarks: (val: number[]) => {
            cmStorage.set('marks', val);
            dispatch(setMarkList(val));
        },
        toggleMarked: (comw: number) => ret.isMarked(comw) ? ret.removeMark(comw) : ret.addMarks(comw),
        addMarks: (comws: number | number[]) => ret.marks && ret.setMarks(ret.marks.concat([comws].flat().filter(comw => ret.marks && ret.marks.indexOf(comw) < 0))),
        removeMark: (comw: number) => ret.marks && ret.setMarks(ret.marks.filter(mark => mark !== comw)),
        isMarked: (comw: number) => !!ret.marks && ret.marks.indexOf(comw) > -1,
        bumerangMarks: (comw: number) => {
            if (!ret.marks || ret.marks.length < 2) return;
            const comwi = ret.marks.indexOf(comw);
            const find = (dir: number) => ret.marks && ret.marks.indexOf(ret.marks[dir > 0 ? 'reduce' : 'reduceRight']((curr: number | null, cw, cwi, cwa) => curr == null ? cw === comw ? cwi : null : curr > cwa.length ? curr : cw, null) as number);

            const index = find(comwi ? -1 : 1);

            if (index != null)
                [ret.marks[index], ret.marks[comwi]] = [ret.marks[comwi], ret.marks[index]];

            ret.setMarks(ret.marks);
        },
    };

    if (unsets.length > 0) ret.marks && cmStorage.set('marks', ret.marks.filter(comw => unsets.indexOf(comw) === -1));

    return ret;
}
