import { PayloadAction } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../shared/store";
import { JStorage } from "../JStorage";
import useFullScreen from "../useFullscreen";
import { NavigationConfig } from "./Navigation";
import { NavPhase, NavRoute, UseNavAction } from "./Navigation.model";


export default function useNavConfigurer<Storage extends { route: NavRoute }>(
    actions: UseNavAction[],
    setPhaseAction: (payload: { route: NavRoute }) => PayloadAction<{ route: NavRoute }>,
    nav: NavigationConfig,
    storage: JStorage<Storage>,
    routeSelector: (state: RootState) => NavRoute,
) {

    const dispatch = useDispatch();
    const [isFullScreen, switchFullscreen] = useFullScreen();

    const ret = {
        nav,
        route: useSelector(routeSelector),
        navigate: (route: NavRoute, isPreventSave?: boolean) => {
            if (route && !nav.findContent(route)) {
                console.error(`Фаза "/${route.join('/')}" не существует!`);
                return;
            }
            dispatch(setPhaseAction({ route }));
            if (isPreventSave) return;
            storage.set('route', route);
        },
        goTo: (phase: NavPhase | NavPhase[], isPreventSave?: boolean) => {
            ret.navigate([...(ret.route || []), ...[phase].flat()], isPreventSave);
        },
        replace: (phase: NavPhase | NavPhase[], isPreventSave?: boolean) => {
            ret.navigate([...(ret.route || []).slice(0, -1), ...[phase].flat()], isPreventSave)
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

            if (ret.route?.length) {
                const newNav = [...(ret.route || []).slice(0, -1)];

                if (newNav.length) ret.navigate(newNav);
                else ret.navigate(nav.rootPhase === null ? null : [nav.rootPhase]);
            }
        }
    };

    return ret;
}
