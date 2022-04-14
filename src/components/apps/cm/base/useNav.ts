import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { getNewPhase } from "../Cm.complect";
import { CmPhase, SetPhasePayload } from "../Cm.model";
import { setCmPhase, switchCmFullscreen } from "../Cm.store";
import useAbsolutePopup from "./absolute-popup/useAbsolutePopup";
import { useMarks } from "../lists/marks/useMarks";
import useRollMode from "./useRoll";


const firstPhase: CmPhase = 'all';

export default function useNav() {
    const dispatch = useDispatch();
    const  { isAbsolutePopupOpen, closeAbsolutePopup } = useAbsolutePopup();

    const ret = {
        rollMode: useRollMode(),
        marks: useMarks(),
        phase: useSelector((state: RootState) => state.cm.phase),
        prevPhase: useSelector((state: RootState) => state.cm.prevPhase),
        specialPhase: useSelector((state: RootState) => state.cm.specialPhase),
        setPhase: (val: SetPhasePayload) => dispatch(setCmPhase(val)),
        isFullScreen: useSelector((state: RootState) => state.cm.isCmFullscreen),
        switchFullscreen: (isFullscreen?: boolean) => dispatch(switchCmFullscreen(isFullscreen)),
        goBack: () => {
            if (isAbsolutePopupOpen) {
                closeAbsolutePopup();
                return;
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

            if (ret.rollMode.rollMode) {
                ret.rollMode.switchRollMode(null);
                ret.rollMode.switchRollModeMarks(false);
            }
        }
    };

    return ret;
}
