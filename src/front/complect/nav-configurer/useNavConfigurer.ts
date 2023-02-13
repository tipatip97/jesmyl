import { useDispatch, useSelector } from "react-redux";
import { AppName } from "../../app/App.model";
import { updateIndexRouting } from "../../components/index/Index.store";
import { indexStorage } from "../../shared/jstorages";
import { RootState } from "../../shared/store";
import mylib from "../my-lib/MyLib";
import useFullScreen from "../useFullscreen";
import { NavigationConfig } from "./Navigation";
import { NavigationStorage, NavPhasePoint, NavPhasePointVariated, NavPlaceVariated, NavRouteVariated, UseNavAction } from "./Navigation.model";

export default function useNavConfigurer<T, Storage extends NavigationStorage<T>, NavData = {}>(
    appName: AppName,
    actions: UseNavAction[],
    nav: NavigationConfig<Storage, Storage, NavData>,
) {

    const dispatch = useDispatch();
    const [isFullScreen, switchFullscreen] = useFullScreen();
    const appRouting = useSelector((state: RootState) => state.index.routing?.[appName]);
    const route = appRouting?.current == null ? null : appRouting.routes.find(([phase]) => appRouting.current === phase);// || (nav.rootPhase ? [nav.rootPhase] : nav.routes[0].phase);
    const appRouteData = (appRouting?.data || {}) as Partial<NavData>;

    const ret = {
        nav,
        route,
        navigateToRoot: () => nav.rootPhase && ret.navigate([nav.rootPhase]),
        appRouteData,
        setAppRouteData: (data: Partial<NavData> | ((prev: Partial<NavData>) => Partial<NavData>), isPreventSave?: boolean) => {
            const indexRouting = indexStorage.get('routing');
            const appRouting = indexRouting?.[appName];

            const routing = {
                ...indexRouting,
                [appName]: {
                    ...appRouting,
                    data: {
                        ...appRouting?.data,
                        ...(mylib.isFunc(data) ? data(appRouteData) : data),
                    }
                }
            };

            dispatch(updateIndexRouting(routing));
            if (isPreventSave) return;
            indexStorage.set('routing', routing);
        },
        navigate: (topRoute: NavRouteVariated<NavData>, isPreventSave?: boolean) => {
            const theRoute = mylib.isArr(topRoute) ? topRoute : topRoute?.route ?? null;
            const theData = mylib.isArr(topRoute) ? null : topRoute?.data;

            const route = theRoute && nav.getGoToRoute([], theRoute);

            if (route || theRoute === null) {
                const indexRouting = indexStorage.get('routing');
                const appRouting = indexRouting?.[appName];

                let routes = appRouting?.routes || [];
                let current = theRoute === null ? null : appRouting?.current;

                if (route) {
                    const [generalPhase] = route;

                    if (generalPhase === current) {
                        nav.invokeGeneralFooterButtonClickListeners(generalPhase);
                    }

                    if (theRoute.length > 1 || generalPhase === current) {
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
                        data: {
                            ...appRouting?.data,
                            ...theData,
                        }
                    }
                };
                dispatch(updateIndexRouting(routing));
                if (isPreventSave) return;
                indexStorage.set('routing', routing);
            }
        },
        goTo: (topPhase: NavPlaceVariated<NavData>, relativePoint?: NavPhasePoint | nil, isPreventSave?: boolean) => {
            const phase = mylib.isArr(topPhase) || mylib.isStr(topPhase) ? topPhase : topPhase.place;
            const data = mylib.isArr(topPhase) || mylib.isStr(topPhase) ? null : topPhase?.data;

            const newRoute = nav.getGoToRoute(ret.route || [], phase, relativePoint);
            if (newRoute) ret.navigate(data ? { route: newRoute, data } : newRoute, isPreventSave);
        },
        jumpTo: (phasePoint: NavPhasePointVariated<NavData>, isPreventSave?: boolean) => {
            const point = mylib.isArr(phasePoint) ? phasePoint : phasePoint?.phase;
            const data = mylib.isArr(phasePoint) ? null : phasePoint?.data;

            const newRoute = nav.getJumpToRoute(ret.route, point);
            if (newRoute) ret.navigate(data ? { route: newRoute, data } : newRoute, isPreventSave);
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
