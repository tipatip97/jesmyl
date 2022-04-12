import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { cmStorage } from "../../../../store/jstorages";
import { setCurrentApp } from "../../../board/Board.store";
import { CmPhase } from "../Cm.model";
import { setCmPhase, switchCmFullscreen } from "../Cm.store";
import { useMarks } from "../marks/useMarks";
import useRollMode from "./useRoll";


const phaseJumps: Record<CmPhase, CmPhase | null> = {
    // если значение - null, то переход на предыдущую фазу
    cats: null,
    com: "cat",
    cat: "cats",
    editor: "com",
    news: null,
    translations: 'com',
    lists: null,
    other: null,
};

export default function useNav() {
    const dispatch = useDispatch();

    const ret = {
        rollMode: useRollMode(),
        marks: useMarks(),
        phase: useSelector((state: RootState) => state.cm.phase),
        prevPhase: useSelector((state: RootState) => state.cm.prevPhase),
        setPhase: (val: CmPhase) => {
            if (ret.phase !== 'cats' && ret.phase && phaseJumps[ret.phase]) cmStorage.set('prevPhase', ret.phase);
            cmStorage.set('phase', val);
            dispatch(setCmPhase(val));
        },
        isFullScreen: useSelector((state: RootState) => state.cm.isCmFullscreen),
        switchFullscreen: (isFullscreen?: boolean) => dispatch(switchCmFullscreen(isFullscreen)),
        isCanGoBack: (phase: CmPhase) => {
            return (ret.phase && ret.phase !== 'cats' && phaseJumps[ret.phase] !== null)
                || (phase && phase !== 'cats' && phaseJumps[phase] !== null);
        },
        goBack: () => {
            if (!ret.phase) return;
            if (ret.phase === 'cats') {
                dispatch(setCurrentApp(null));
                return;
            }

            if (ret.rollMode.rollMode) {
                ret.rollMode.switchRollMode(null);
                ret.rollMode.switchRollModeMarks(false);
                return;
            }

            if (ret.isFullScreen) {
                ret.switchFullscreen(false);
                if (ret.phase === 'translations') ret.setPhase('com');
                return;
            }

            const newPhase = phaseJumps[ret.phase] ?? ret.prevPhase ?? 'cats';

            ret.setPhase(newPhase as CmPhase);
        }
    };

    return ret;
}
