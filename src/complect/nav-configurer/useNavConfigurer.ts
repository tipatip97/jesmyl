import { PayloadAction } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../shared/store";
import { JStorage } from "../JStorage";
import useFullScreen from "../useFullscreen";
import { NavigationConfig } from "./Navigation";
import { FreeNavRoute, NavPhase, NavPhasePoint, UseNavAction } from "./Navigation.model";


export default function useNavConfigurer<Storage extends { route: FreeNavRoute }>(
    actions: UseNavAction[],
    setPhaseAction: (payload: { route: FreeNavRoute }) => PayloadAction<{ route: FreeNavRoute }>,
    nav: NavigationConfig,
    storage: JStorage<Storage>,
    routeSelector: (state: RootState) => FreeNavRoute,
) {

    const dispatch = useDispatch();
    const [isFullScreen, switchFullscreen] = useFullScreen();

    const ret = {
        nav,
        route: useSelector(routeSelector),
        navigateToRoot: () => nav.rootPhase && ret.navigate([nav.rootPhase]),
        navigate: (route: FreeNavRoute, isPreventSave?: boolean) => {
            dispatch(setPhaseAction({ route }));
            if (isPreventSave) return;
            storage.set('route', route);
        },
        goTo: (phase: NavPhase | NavPhase[], relativePoint?: NavPhasePoint | nil, isPreventSave?: boolean) => {
            const newRoute = nav.goTo(ret.route || [], phase, relativePoint);
            if (newRoute) ret.navigate(newRoute, isPreventSave);
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

            if (isFullScreen) {
                switchFullscreen(false);
                return;
            }

            if (ret.route) {
                const line = nav.goBack(ret.route);
                if (line.length) ret.navigate(line);
                else ret.navigate(nav.rootPhase === null ? null : [nav.rootPhase]);
            }
        }
    };

    return ret;
}
