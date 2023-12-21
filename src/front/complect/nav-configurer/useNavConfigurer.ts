import { useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppName } from '../../app/App.model';
import {
  RouteCast,
  RoutePathVariated,
  RoutePhasePoint,
  RoutePhasePointVariated,
  RoutePlaceVariated,
} from '../../components/router/Router.model';
import di from '../../components/router/Router.store';
import { RootState } from '../../shared/store';
import mylib from '../my-lib/MyLib';
import useFullScreen from '../useFullscreen';
import { NavigationConfig } from './Navigation';
import { NavigationStorage, UseNavAction } from './Navigation.model';

const routerStoreSelector = (state: RootState) => state.router;
const emptyDict = {};

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
  const route =
    appRouteCast?.last === undefined ? null : appRouteCast.net.find(([phase]) => appRouteCast.last === phase);
  const appRouteData = (routerStore[`${appName}.data`] as NavData) || emptyDict;
  const routeRef = useRef(route);
  routeRef.current = route;

  const setAppRouteData = useCallback(
    (data: NavData | ((prev?: NavData) => NavData), isPreventSave?: boolean) => {
      dispatch(
        di.routerFixNavigateData({
          appName,
          isPreventSave,
          value: {
            ...appRouteData,
            ...(mylib.isFunc(data) ? data(appRouteData) : data),
          },
        }),
      );
    },
    [appName, appRouteData, dispatch],
  );

  const navigate = useCallback(
    (pathSlice: RoutePathVariated<NavData>, isPreventSave?: boolean) => {
      const routePath = mylib.isArr(pathSlice) ? pathSlice : pathSlice?.path;

      const path = routePath && nav.getGoToRoute([], routePath);

      if (path || routePath === undefined) {
        let net = appRouteCast?.net || [];
        let last = routePath === undefined ? undefined : appRouteCast?.last;

        if (pathSlice && !mylib.isArr(pathSlice)) setAppRouteData(pathSlice.data);

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

        dispatch(di.routerFixNavigateCast(fix));
      }
    },
    [appName, appRouteCast, dispatch, nav, setAppRouteData],
  );

  const goBack = useCallback(
    (isForceBack = false) => {
      if (actions.length) {
        if (
          actions.some((action) => {
            actions.shift();
            return action?.(isForceBack);
          }) &&
          !isForceBack
        )
          return;
      }

      if (isFullScreen) {
        switchFullscreen(false);
        return;
      }

      if (routeRef.current) {
        const line = nav.getGoBackRoute(routeRef.current);
        if (line.length) navigate(line);
        else navigate(nav.nav.rootPhase === null ? null : [nav.nav.rootPhase]);
      }
    },
    [actions, isFullScreen, nav, navigate, routeRef, switchFullscreen],
  );

  const goTo = useCallback(
    (topPhase: RoutePlaceVariated<NavData>, relativePoint?: RoutePhasePoint | nil, isPreventSave?: boolean) => {
      const phase = mylib.isArr(topPhase) || mylib.isStr(topPhase) ? topPhase : topPhase.place;
      const data = mylib.isArr(topPhase) || mylib.isStr(topPhase) ? null : topPhase?.data;

      const path = nav.getGoToRoute(routeRef.current || [], phase, relativePoint);
      if (path) navigate(data ? { path, data } : path, isPreventSave);
    },
    [nav, navigate, routeRef],
  );

  const jumpTo = useCallback(
    (phasePoint: RoutePhasePointVariated<NavData>, isPreventSave?: boolean) => {
      const point = mylib.isArr(phasePoint) ? phasePoint : phasePoint?.phase;
      const data = mylib.isArr(phasePoint) ? null : phasePoint?.data;

      const path = nav.getJumpToRoute(routeRef.current, point);
      if (path) {
        navigate(data ? { path, data } : path, isPreventSave);

        if (appName !== 'index') {
          const indexRouteCast = routerStore.index;
          const value: RouteCast = {
            ...indexRouteCast,
            last: undefined,
            net: indexRouteCast?.net ?? [],
          };

          const fix = {
            appName: 'index' as never,
            isPreventSave,
            value,
          };

          dispatch(di.routerFixNavigateCast(fix));
        }
      }
    },
    [appName, dispatch, nav, navigate, routeRef, routerStore.index],
  );

  const navigateToRoot = useCallback(
    () => nav.nav.rootPhase && navigate([nav.nav.rootPhase]),
    [nav.nav.rootPhase, navigate],
  );

  const registerBackAction = useCallback(
    (action: UseNavAction) => {
      actions.unshift(action);
      return () =>
        actions.splice(
          actions.findIndex((ac) => ac !== action),
          1,
        );
    },
    [actions],
  );

  return {
    nav,
    route,
    navigateToRoot,
    appRouteData,
    navigate,
    setAppRouteData,
    goBack,
    goTo,
    jumpTo,
    registerBackAction,
  };
}
