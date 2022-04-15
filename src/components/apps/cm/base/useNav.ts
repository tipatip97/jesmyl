import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { getNewPhase } from "../Cm.complect";
import { CmPhase, SetPhasePayload } from "../Cm.model";
import { setCmPhase, switchCmFullscreen } from "../Cm.store";
import { useMarks } from "../lists/marks/useMarks";

// верни тут true, если событие "назад" уже не должно иметь эффекта
type UseNavAction = () => boolean | void | any;

const firstPhase: CmPhase = 'all';
const actions: UseNavAction[] = [];

export default function useNav() {
    const dispatch = useDispatch();

    const ret = {
        marks: useMarks(),
        phase: useSelector((state: RootState) => state.cm.phase),
        prevPhase: useSelector((state: RootState) => state.cm.prevPhase),
        specialPhase: useSelector((state: RootState) => state.cm.specialPhase),
        setPhase: (val: SetPhasePayload) => dispatch(setCmPhase(val)),
        isFullScreen: useSelector((state: RootState) => state.cm.isCmFullscreen),
        switchFullscreen: (isFullscreen?: boolean) => dispatch(switchCmFullscreen(isFullscreen)),
        registerBackAction: (action: UseNavAction) => {
            actions.unshift(action);
            return () => actions.splice(actions.findIndex(ac => ac !== action), 1);
        },
        goBack: () => {
            if (actions.length) {
                if (actions.some(action => {
                    if (action && action() === true) {
                        actions.shift();
                        return false;
                    }
                    return true;
                })) return;
            }

            if (!ret.phase || ret.phase === firstPhase || ret.phase === firstPhase) {
                return;
            }

            if (ret.isFullScreen) {
                ret.switchFullscreen(false);
                if (ret.phase === 'translation') ret.setPhase('com');
                return;
            }

            const newPhase: SetPhasePayload = getNewPhase(ret.phase, ret.specialPhase, ret.prevPhase);

            if (newPhase) ret.setPhase(newPhase);
        }
    };

    return ret;
}
