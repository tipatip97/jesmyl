import { PayloadAction } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { FooterItem, SetPhasePayload, UseNavAction } from "./useNavConfigurer.model";
import { RootState } from "../../shared/store";
import { appStorage } from "../../shared/jstorages";
import { AppName } from "../../app/App.model";
import useFullScreen from "../useFullscreen";


export default function useNavConfigurer<App extends AppName, State extends RootState[App], Phase extends State['phase']>(
    appName: App,
    firstPhase: Phase,
    actions: UseNavAction[],
    setPhaseAction: (payload: { phase: State['phase'] | nil; prevPhase: State['phase'] | nil; specialPhase: State['specialPhase'] }) => PayloadAction<{ phase: State['phase'] | nil; prevPhase: State['phase'] | nil; specialPhase: State['specialPhase'] }>,
    getNewPhase: (
        phase: State['phase'],
        specialPhase: State['specialPhase'],
        prevPhase?: State['phase']
    ) => SetPhasePayload<State['phase'], State['specialPhase']>, footerItems: FooterItem<State['phase']>[]) {

    const dispatch = useDispatch();
    const storage = appStorage[appName];
    const [isFullScreen, switchFullscreen] = useFullScreen();

    const ret = {
        phase: useSelector((state: RootState): RootState[App]['phase'] => state[appName].phase),
        prevPhase: useSelector((state: RootState): RootState[App]['prevPhase'] => state[appName].prevPhase),
        specialPhase: useSelector((state: RootState): RootState[App]['specialPhase'] => state[appName].specialPhase),
        footerItems,
        setPhase: <Phase extends State['phase'], SpecialPhase extends State['specialPhase']>(val: SetPhasePayload<Phase, SpecialPhase>) => {
            const [phase, specialPhase, preventSaveLocal] = [val].flat() as [State['phase'] | nil, State['specialPhase'], boolean];

            const prevPhase = ret.phase === phase ? null : ret.phase;
            dispatch(setPhaseAction({ phase, prevPhase, specialPhase }));

            if (preventSaveLocal) return;

            storage.set('phase', phase);
            storage.set('prevPhase', prevPhase);
            if (specialPhase !== undefined) storage.set('specialPhase', specialPhase);
        },
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

            if (isFullScreen) {
                switchFullscreen(false);
                return;
            }

            const newPhase = getNewPhase(ret.phase, ret.specialPhase, ret.prevPhase);

            if (newPhase) ret.setPhase(newPhase);
        }
    };

    return ret;
}

export const setPhaseInState = <App extends AppName, State extends RootState[App]>(state: State, phase: State['phase'] | nil, prevPhase: State['prevPhase'] | nil, specialPhase: State['specialPhase'] | nil) => {
    if (phase != null) state.phase = phase;
    if (prevPhase !== phase && prevPhase != null) state.prevPhase = prevPhase;
    if (specialPhase !== undefined) state.specialPhase = specialPhase;
};