import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { cmStorage } from "../../../../store/jstorages";
import { setCurrentApp } from "../../../board/Board.store";
import { CmPhase } from "../Cm.model";
import { setCmPhase } from "../Cm.store";


const phaseJumps: Record<CmPhase, CmPhase | null> = {
    // если значение - null, то переход на предыдущую фазу
    cats: null,
    com: "cat",
    cat: "cats",
    editor: "com",
    news: null,
    translations: 'com',
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
