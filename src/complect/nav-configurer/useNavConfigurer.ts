import { PayloadAction } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../shared/store";
import { JStorage } from "../JStorage";
import useFullScreen from "../useFullscreen";
import { NavigationConfig } from "./Navigation";
import { FreeNavRoute, NavigationStorage, NavPhase, NavPhasePoint, UseNavAction } from "./Navigation.model";

export default function useNavConfigurer<T, Storage extends NavigationStorage<T>>(
    actions: UseNavAction[],
    setPhaseAction: (payload: NavigationStorage<T>) => PayloadAction<NavigationStorage<T>>,
    nav: NavigationConfig<Storage, Storage>,
    storage: JStorage<Storage>,
    routeSelector: (state: RootState) => FreeNavRoute,
) {

    const dispatch = useDispatch();
    const [isFullScreen, switchFullscreen] = useFullScreen();

    const ret = {
        nav,
        route: useSelector(routeSelector),
        navigateToRoot: () => nav.rootPhase && ret.navigate([nav.rootPhase]),
        navigate: (topRoute: FreeNavRoute, isPreventSave?: boolean) => {
            const route = topRoute && nav.goTo([], topRoute);
            if (route) {
                dispatch(setPhaseAction({ route } as never));
                if (isPreventSave) return;
                storage.set('route', route);
            }
        },
        goTo: (phase: NavPhase | NavPhase[], relativePoint?: NavPhasePoint | nil, isPreventSave?: boolean) => {
            const newRoute = nav.goTo(ret.route || [], phase, relativePoint);
            if (newRoute) ret.navigate(newRoute, isPreventSave);
        },
        jumpTo: (phasePoint: NavPhasePoint, isPreventSave?: boolean) => {
            const newRoute = nav.jumpTo(phasePoint);
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
