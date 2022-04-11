import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { cmStorage } from "../../../../store/jstorages";
import { CmRollMode } from "../Cm.model";
import { changeRollMode, changeRollModeMarks } from "../Cm.store";

const setRollInterval = (): number => interval = ((20 - speedRollKf) || .7) * 30;

let speedRollKf = cmStorage.getOr('speedRollKf', 10);
let container: HTMLElement | null = null;
let speedScreen: HTMLDivElement | null = null;
let interval: number;
let rollMode: CmRollMode = null;

export default function useRoll() {
    const dispatch = useDispatch();

    const ret = {
        setRollModeContainer: (topContainer: HTMLDivElement) => container = topContainer.parentElement,
        setRollSpeedScreenContainer: (topSpeedScreen: HTMLDivElement) => {
            speedScreen = topSpeedScreen;
            ret.updateSpeedRollKf(0);
        },
        rollModeMarks: useSelector((state: RootState) => state.cm.rollModeMarks),
        switchRollModeMarks: (isMarks?: boolean) => dispatch(changeRollModeMarks(isMarks ?? !ret.rollModeMarks)),
        rollMode: useSelector((state: RootState) => state.cm.rollMode),
        switchRollMode: (topRollMode: CmRollMode) => {
            rollMode = topRollMode;
            dispatch(changeRollMode(topRollMode));
        },
        speedRollKf,
        updateSpeedRollKf: (delta: 1 | -1 | 0) => {
            if (!speedScreen || (delta && (delta < 0 ? speedRollKf <= 1 : speedRollKf >= 20))) return;
            speedRollKf += delta;
            setRollInterval();
            cmStorage.set('speedRollKf', speedRollKf);
            speedScreen.innerText = (speedRollKf / 10).toFixed(1);
        },
        toggleRoll: () => {
            if (!rollMode) return;
            if (rollMode !== 'play') {
                ret.switchRollMode('play');
                startRoll(ret.switchRollMode);
            } else {
                ret.switchRollMode('pause');
            }
        },
    };
    return ret;
}


const startRoll = (switchRollMode: (rollMode: CmRollMode) => void) => {
    if (!container) return;

    const scroll = (dec: number, container: HTMLElement) => setTimeout(() => {
        if (rollMode !== 'play') return;
        const prevScrollTop = container.scrollTop;
        container.scrollTop += 1;
        const diff = container.scrollTop === prevScrollTop ? 1 : 0;

        if (dec > 0) scroll(dec - diff, container);
        else switchRollMode('pause');
    }, interval);

    scroll(10, container);
};
