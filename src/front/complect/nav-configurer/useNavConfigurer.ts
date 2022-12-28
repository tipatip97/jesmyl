import { useDispatch, useSelector } from "react-redux";
import { AppName } from "../../app/App.model";
import { updateIndexRouting } from "../../components/index/Index.store";
import { indexStorage } from "../../shared/jstorages";
import { RootState } from "../../shared/store";
import useFullScreen from "../useFullscreen";
import { NavigationConfig } from "./Navigation";
import { FreeNavRoute, NavigationStorage, NavPhase, NavPhasePoint, UseNavAction } from "./Navigation.model";

export default function useNavConfigurer<T, Storage extends NavigationStorage<T>, NavData = {}>(
    appName: AppName,
    actions: UseNavAction[],
    nav: NavigationConfig<Storage, Storage, NavData>,
) {

    const dispatch = useDispatch();
    const [isFullScreen, switchFullscreen] = useFullScreen();
    const appRouting = useSelector((state: RootState) => state.index.routing?.[appName]);
    const route = appRouting?.current == null ? null : appRouting.routes.find(([phase]) => appRouting.current === phase);// || (nav.rootPhase ? [nav.rootPhase] : nav.routes[0].phase);

    const ret = {
        nav,
        route,
        navigateToRoot: () => nav.rootPhase && ret.navigate([nav.rootPhase]),
        navigate: (topRoute: FreeNavRoute, isPreventSave?: boolean) => {
            const route = topRoute && nav.getGoToRoute([], topRoute);

            if (route || topRoute === null) {
                const indexRouting = indexStorage.get('routing');
                const appRouting = indexRouting?.[appName];

                let routes = appRouting?.routes || [];
                let current = topRoute === null ? null : appRouting?.current;

                if (route) {
                    const [generalPhase] = route;

                    if (generalPhase === current) {
                        nav.invokeGeneralFooterButtonClickListeners(generalPhase);
                    }

                    if (topRoute.length > 1 || generalPhase === current) {
                        routes = routes.filter(([phase]) => generalPhase !== phase).concat([route]);
                    } else {
                        routes = routes.some(([phase]) => generalPhase === phase) ? routes : routes.concat([route]);
                    }

                    current = generalPhase;
                }

                const routing = {
                    ...indexRouting,
                    [appName]: {
                        ...appRouting,
                        current,
                        routes,
                    }
                };
                dispatch(updateIndexRouting(routing));
                if (isPreventSave) return;
                indexStorage.set('routing', routing);
            }
        },
        goTo: (phase: NavPhase | NavPhase[], relativePoint?: NavPhasePoint | nil, isPreventSave?: boolean) => {
            const newRoute = nav.getGoToRoute(ret.route || [], phase, relativePoint);
            if (newRoute) ret.navigate(newRoute, isPreventSave);
        },
        jumpTo: (phasePoint: NavPhasePoint, isPreventSave?: boolean) => {
            const newRoute = nav.getJumpToRoute(ret.route, phasePoint);
            if (newRoute) ret.navigate(newRoute, isPreventSave);
        },
        registerBackAction: (action: UseNavAction) => {
            actions.unshift(action);
            return () => actions.splice(actions.findIndex(ac => ac !== action), 1);
        },
        goBack: (isForceBack = false) => {
            if (actions.length) {
                if (actions.some(action => {
                    actions.shift();
                    return action?.(isForceBack);
                }) && !isForceBack) return;
            }

            if (isFullScreen) {
                switchFullscreen(false);
                return;
            }

            if (ret.route) {
                const line = nav.getGoBackRoute(ret.route);
                if (line.length) ret.navigate(line);
                else ret.navigate(nav.rootPhase === null ? null : [nav.rootPhase]);
            }
        }
    };

    return ret;
}
