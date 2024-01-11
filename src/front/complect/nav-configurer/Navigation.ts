import { ReactNode } from 'react';
import { AppName } from '../../app/App.model';
import { Auth } from '../../components/index/Index.model';
import { FreeRoutePath, RoutePath, RoutePhase, RoutePhasePoint } from '../../components/router/Router.model';
import {
  INavigationConfig,
  INavigationRouteChildItem,
  INavigationRouteItem,
  NavigationForEachPhaseProps,
  NavigationForEachPhaseSlideBy,
  NavigationStorage,
} from './Navigation.model';

export class NavigationConfig<Storage, NavData = {}> {
  appName: AppName;
  nav: INavigationConfig<NavigationStorage<Storage>, NavData>;
  endPoints: [RoutePhasePoint, RoutePhase[]][];
  private _data?: Partial<NavData>;
  private onGeneralFooterButtonClicks: Record<RoutePhase, Record<string, () => void>> = {};

  constructor(appName: AppName, nav: INavigationConfig<NavigationStorage<Storage>, NavData>) {
    this.appName = appName;
    this.nav = nav;
    this.checkRoutes(nav.routes);
    this.endPoints = this.fillEndPoints();
  }

  get data() {
    return this._data;
  }
  private set data(data) {
    this._data = data;
  }
  setData(data: Partial<NavData>) {
    this.data = { ...this.data, ...data };
  }

  invokeGeneralFooterButtonClickListeners(listenLine: RoutePhase) {
    Object.values(this.onGeneralFooterButtonClicks[listenLine] || {}).forEach(cb => cb());
  }

  onGeneralFooterButtonClick(listenLine: RoutePhase, listenerName: string) {
    return (cb: () => void) => {
      this.onGeneralFooterButtonClicks[listenLine] ??= {};
      this.onGeneralFooterButtonClicks[listenLine][listenerName] = cb;
      return () => {
        delete this.onGeneralFooterButtonClicks[listenLine][listenerName];
      };
    };
  }

  fillEndPoints() {
    const endPoints: [RoutePhasePoint, RoutePhase[]][] = [];
    this.forEachPhase({
      slideBy: NavigationForEachPhaseSlideBy.Each,
      onNextRelative: (item, route) => {
        endPoints.push([item.phase, route.concat(item.phase)]);
      },
      isEndPoint: (item, route) => {
        endPoints.push([item.phase, route.concat(item.phase)]);
        return () => false;
      },
    });
    return endPoints;
  }

  checkRoutes(routes: INavigationRouteItem<NavData>[], phases: RoutePhase[] = []) {
    const stack: RoutePhase[] = [];
    routes.forEach(({ phase: [phase], next }) => {
      if (stack.indexOf(phase) > -1)
        throw Error(`На уровне "/${phases.join('/')}" найдены одинаковые ключи фазы "${phase}"`);

      stack.push(phase);
      if (next) this.checkRoutes(next, phases.concat(phase));
    });
  }

  isPathPosible(path?: FreeRoutePath): boolean {
    if (path == null) return false;

    let item: INavigationRouteItem<NavData> | nil;
    let items: INavigationRouteItem<NavData>[] = this.nav.routes;

    for (let phasei = 0; phasei < path.length; phasei++) {
      const currPhase = path[phasei];
      item = items.find(({ phase: [phase] }) => currPhase === phase);
      if (phasei === path.length - 1) break;

      if (item?.next) items = item.next;
      else {
        item = null;
        break;
      }
    }

    return !!item;
  }

  forEachPhase({
    currentRoute,
    isEndPoint,
    onNextRelative,
    slideBy = NavigationForEachPhaseSlideBy.InlineEach,
  }: NavigationForEachPhaseProps<NavData>) {
    const makeRoute = (
      topRoute: RoutePath,
      routes?: INavigationRouteChildItem<NavData>[],
      deep?: number,
    ): RoutePath | nil => {
      if (!routes) return null;
      for (let routei = 0; routei < routes.length; routei++) {
        const route = routes[routei];

        if (currentRoute && deep !== undefined && currentRoute.length > deep) {
          if (route.phase[0] !== currentRoute[deep]) continue;
        }

        const endPointReflect = isEndPoint?.(route, topRoute, deep != null);

        if (endPointReflect) {
          let item: INavigationRouteItem<NavData> = route;
          while (onNextRelative && typeof item.node === 'function') {
            const defaultChild = item.defaultChild;
            const nextItem = (
              item.defaultChild ? item.next?.find(it => defaultChild === it.phase[0]) : item.next?.[0]
            ) as INavigationRouteItem<NavData> | nil;

            if (!nextItem) break;

            onNextRelative(item, topRoute, deep != null);
            item = nextItem;
          }
          if (endPointReflect()) return;
        }
        makeRoute(topRoute.concat(route.phase), route.next, deep === undefined ? deep : deep + 1);
      }
    };

    if (slideBy === NavigationForEachPhaseSlideBy.Inline || slideBy === NavigationForEachPhaseSlideBy.InlineEach)
      makeRoute([], this.nav.routes, 0);

    if (
      slideBy === NavigationForEachPhaseSlideBy.Each ||
      slideBy === NavigationForEachPhaseSlideBy.EachInline ||
      slideBy === NavigationForEachPhaseSlideBy.InlineEach
    )
      makeRoute([], this.nav.routes);

    if (slideBy === NavigationForEachPhaseSlideBy.EachInline) makeRoute([], this.nav.routes, 0);
  }

  getJumpToRoute(currentRoute?: FreeRoutePath, phasePoint?: RoutePhasePoint): RoutePath | nil {
    const currRoute = currentRoute || [];
    let retRoute;
    const setSearches = (route?: FreeRoutePath) => {
      if (route) {
        route[route.length - 1] = route[route.length - 1];
      }
      return route;
    };
    for (let pointi = 0; pointi < this.endPoints.length; pointi++) {
      const [point, route] = this.endPoints[pointi];

      if (point === phasePoint) {
        if (!retRoute) retRoute = route;

        if (!currRoute.some((phase, phasei) => phase !== route[phasei])) return setSearches(route);
      }
    }

    return setSearches(retRoute);
  }

  getGoToRoute(
    route: RoutePath,
    phase: RoutePhase | RoutePhase[],
    relativePoint?: RoutePhasePoint | nil,
  ): RoutePath | und {
    let item: INavigationRouteItem<NavData> | nil;
    let items: INavigationRouteItem<NavData>[] = this.nav.routes;
    const newRoute: RoutePhase[] = [];
    const line = [route, phase].flat();

    const addRelatives = (point?: RoutePhase | nil) => {
      if (typeof item?.node === 'function') {
        item = (
          point
            ? item.next?.find(({ phase: [phase] }) => phase === point)
            : item.defaultChild != null
              ? item.next?.find(({ phase: [phase] }) => phase === item?.defaultChild) ?? item.next?.[0]
              : item.next?.[0]
        ) as INavigationRouteItem<NavData>;
        const relativePhase: RoutePhasePoint | nil = item?.phase;

        if (relativePhase != null) {
          newRoute.push(relativePhase[0]);
          addRelatives();
        }
      }
    };

    for (let phasei = 0; phasei < line.length; phasei++) {
      const currPhase = line[phasei];
      item = items.find(({ phase: [phase] }) => currPhase === phase);
      if (!item) break;

      if (phasei === route.length) newRoute.push(item.phase[0]);
      else newRoute.push(item.phase[0]);

      if (item.next) items = item.next as never;
      if (item.phase === relativePoint) {
        addRelatives([phase].flat()[0]);
        break;
      }
      if (phasei === line.length - 1) addRelatives();
    }
    if (!item) {
      console.error(`Фаза "/${line.join('/')}" не существует!`);
      return;
    }

    return newRoute;
  }

  getGoBackRoute(route: RoutePath): RoutePhase[] {
    let item: INavigationRouteItem<NavData> | nil;
    let items: INavigationRouteItem<NavData>[] | nil = this.nav.routes;
    let line: INavigationRouteItem<NavData>[] = [];

    for (let phasei = 0; phasei < route.length; phasei++) {
      const currPhase = route[phasei];
      item = items?.find(({ phase: [phase] }) => currPhase === phase);
      if (!item) break;
      line.push(item);
      items = item.next as never;
    }

    if (item) {
      let last;
      do {
        line = line.slice(0, -1);
        last = line[line.length - 1];
      } while (last && (typeof last.node === 'function' || last.slideBackOn?.(this.data ?? {})));
    }

    return line.map(({ phase: [phase] }) => phase);
  }

  findContent(
    auth: Auth,
    path?: FreeRoutePath,
    onImpossible?: () => void,
    isReadyInvokeImpossible?: boolean,
  ): ReactNode {
    if (!this.isPathPosible(path)) {
      if (path) console.error(`Фаза "/${path.join('/')}" не существует!`);
      if (isReadyInvokeImpossible && onImpossible !== undefined) setTimeout(onImpossible, 100);
      return null;
    }

    const findContent = (
      path: FreeRoutePath | undefined,
      navigationItems: INavigationRouteItem<NavData>[],
    ): ReactNode => {
      let items: INavigationRouteItem<NavData>[] | nil = navigationItems;
      let throwItem: INavigationRouteChildItem<NavData> | nil;
      const throwRoute = path?.slice(0) || [];

      const item: INavigationRouteItem<NavData> | nil = path?.reduce<INavigationRouteItem<NavData> | nil>(
        (_, phase) => {
          if (throwItem) return throwItem;
          const item = (items as INavigationRouteChildItem<NavData>[])?.find(
            ({ phase: [currPhase] }) => currPhase === phase,
          );
          items = item?.next as never;
          throwRoute.shift();
          if (item && typeof item.node === 'function') throwItem = item;
          return item;
        },
        null,
      );

      return item
        ? item.accessLevel == null ||
          (this.nav.exer != null && this.nav.exer.levelAccessedOrNull(item.accessLevel, auth))
          ? typeof item.node === 'function'
            ? item.node({
                outletContent: findContent(throwRoute, items),
                relativePoint: item.phase,
                currentChildPhase: throwRoute[0],
                childItems: item.next,
                data: item.data,
              })
            : item.node
          : null
        : null;
    };

    const content = findContent(path, this.nav.routes);
    if (isReadyInvokeImpossible && content == null && onImpossible !== undefined) setTimeout(onImpossible, 100);
    return content;
  }
}
