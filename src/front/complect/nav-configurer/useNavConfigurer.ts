import { useDispatch, useSelector } from "react-redux";
import { AppName } from "../../app/App.model";
import { RouteCast, RoutePathVariated, RoutePhasePoint, RoutePhasePointVariated, RoutePlaceVariated } from "../../components/router/Router.model";
import { routerFixNavigateCast, routerFixNavigateData } from "../../components/router/Router.store";
import { RootState } from "../../shared/store";
import mylib from "../my-lib/MyLib";
import useFullScreen from "../useFullscreen";
import { NavigationConfig } from "./Navigation";
import { NavigationStorage, UseNavAction } from "./Navigation.model";

const routerStoreSelector = (state: RootState) => state.router;

export default function useNavConfigurer<Storage, NavDataNative = {}>(
    appName: AppName,
    actions: UseNavAction[],
    nav: NavigationConfig<NavigationStorage<Storage>, NavDataNative>,
) {
    type NavData = Partial<NavDataNative>;

    const dispatch = useDispatch();
    const [isFullScreen, switchFullscreen] = useFullScreen();
    const routerStore = useSelector(routerStoreSelector);
    const appRouteCast = routerStore[appName];
    const route = appRouteCast?.last === undefined ? null : appRouteCast.net.find(([phase]) => appRouteCast.last === phase);
    const appRouteData = routerStore[`${appName}.data`] as NavData || {};

    const ret = {
        nav,
        route,
        navigateToRoot: () => nav.rootPhase && ret.navigate([nav.rootPhase]),
        appRouteData,
        setAppRouteData: (data: NavData | ((prev?: NavData) => NavData), isPreventSave?: boolean) => {
            dispatch(routerFixNavigateData({
                appName,
                isPreventSave,
                value: {
                    ...appRouteData,
                    ...(mylib.isFunc(data) ? data(appRouteData) : data),
                }
            }));
        },
        navigate: (pathSlice: RoutePathVariated<NavData>, isPreventSave?: boolean) => {
            const routePath = mylib.isArr(pathSlice) ? pathSlice : pathSlice?.path;

            const path = routePath && nav.getGoToRoute([], routePath);

            if (path || routePath === undefined) {
                let net = appRouteCast?.net || [];
                let last = routePath === undefined ? undefined : appRouteCast?.last;

                if (pathSlice && !mylib.isArr(pathSlice))
                    ret.setAppRouteData(pathSlice.data);

                if (path) {
                    const [generalPhase] = path;

                    if (generalPhase === last) {
                        nav.invokeGeneralFooterButtonClickListeners(generalPhase);
                    }

                    if (routePath.length > 1 || generalPhase === last) {
                        net = net.filter(([phase]) => generalPhase !== phase).concat([path]);
                    } else {
                        const prevPathi = net.findIndex(([phase]) => generalPhase === phase);
                        net = prevPathi > -1 ? net : net.concat([path]);

                        if (prevPathi > -1 && !nav.isPathPosible(net[prevPathi])) {
                            net = [...net];
                            net[prevPathi] = path;
                        }
                    }

                    last = generalPhase;
                }

                const value: RouteCast = { ...appRouteCast, last, net };

                const fix = {
                    appName,
                    isPreventSave,
                    value,
                };

                dispatch(routerFixNavigateCast(fix));
            }
        },
        goTo: (topPhase: RoutePlaceVariated<NavData>, relativePoint?: RoutePhasePoint | nil, isPreventSave?: boolean) => {
            const phase = mylib.isArr(topPhase) || mylib.isStr(topPhase) ? topPhase : topPhase.place;
            const data = mylib.isArr(topPhase) || mylib.isStr(topPhase) ? null : topPhase?.data;

            const path = nav.getGoToRoute(ret.route || [], phase, relativePoint);
            if (path) ret.navigate(data ? { path, data } : path, isPreventSave);
        },
        jumpTo: (phasePoint: RoutePhasePointVariated<NavData>, isPreventSave?: boolean) => {
            const point = mylib.isArr(phasePoint) ? phasePoint : phasePoint?.phase;
            const data = mylib.isArr(phasePoint) ? null : phasePoint?.data;

            const path = nav.getJumpToRoute(ret.route, point);
            if (path) ret.navigate(data ? { path, data } : path, isPreventSave);
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
