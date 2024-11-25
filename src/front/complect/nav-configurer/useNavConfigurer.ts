import { mylib } from 'front/utils';
import { useCallback, useRef } from 'react';
import { AppName } from '../../app/App.model';
import { routerMolecule } from '../../components/router/molecules';
import {
  RouteCast,
  RoutePathVariated,
  RoutePhasePoint,
  RoutePhasePointVariated,
  RoutePlaceVariated,
} from '../../components/router/Router.model';
import { useAtom, useAtomSet, useAtomValue } from '../atoms';
import { useFullScreen } from '../useFullscreen';
import { NavigationConfig } from './Navigation';
import { NavigationStorage, UseNavAction } from './Navigation.model';

const emptyData = {};

export default function useNavConfigurer<Storage, NavDataNative = {}>(
  appName: AppName,
  actions: UseNavAction[],
  nav: NavigationConfig<NavigationStorage<Storage>, NavDataNative>,
) {
  type NavData = Partial<NavDataNative>;

  const [isFullScreen, switchFullscreen] = useFullScreen();
  const [indexCast, setIndexRouteCast] = useAtom(routerMolecule.take('index'));
  const [appRouteCast, setAppRouteCast] = useAtom(routerMolecule.take(appName));
  const route =
    appRouteCast?.last === undefined ? null : appRouteCast.net.find(([phase]) => appRouteCast.last === phase);
  const appRouteData = (useAtomValue(routerMolecule.take(`${appName}.data`)) ?? emptyData) as NavDataNative;
  const setAppRouteData = useAtomSet(routerMolecule.take(`${appName}.data`));
  const routeRef = useRef(route);
  routeRef.current = route;

  const updateAppRouteData = useCallback(
    (data: NavData | ((prev?: NavData) => NavData), isPreventSave?: boolean) => {
      setAppRouteData(
        {
          ...appRouteData,
          ...(mylib.isFunc(data) ? data(appRouteData as never) : data),
        },
        isPreventSave,
      );
    },
    [appRouteData, setAppRouteData],
  );

  const navigate = useCallback(
    (pathSlice: RoutePathVariated<NavData>, isPreventSave?: boolean) => {
      const routePath = mylib.isArr(pathSlice) ? pathSlice : pathSlice?.path;

      const path = routePath && nav.getGoToRoute([], routePath);

      if (path || routePath === undefined) {
        let net = appRouteCast?.net || [];
        let last = routePath === undefined ? undefined : appRouteCast?.last;

        if (pathSlice && !mylib.isArr(pathSlice)) updateAppRouteData(pathSlice.data);

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

        setAppRouteCast(value, isPreventSave);
      }
    },
    [appRouteCast, nav, setAppRouteCast, updateAppRouteData],
  );

  const goBack = useCallback(
    (isForceBack = false) => {
      if (actions.length) {
        if (
          actions.some(action => {
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
          const indexRouteCast = indexCast;
          const value: RouteCast = {
            ...indexRouteCast,
            last: undefined,
            net: indexRouteCast?.net ?? [],
          };

          setIndexRouteCast(value, isPreventSave);
        }
      }
    },
    [appName, nav, navigate, indexCast, setIndexRouteCast],
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
          actions.findIndex(ac => ac !== action),
          1,
        );
    },
    [actions],
  );

  return {
    nav,
    route,
    navigateToRoot,
    appRouteData: appRouteData!,
    navigate,
    setAppRouteData: updateAppRouteData,
    goBack,
    goTo,
    jumpTo,
    registerBackAction,
  };
}
