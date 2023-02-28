import { ReactNode } from "react";
import { EvaIconName } from "../eva-icon/EvaIcon";
import { Exer } from "../exer/Exer";
import { FreeNavRoute, INavigationConfig, INavigationRouteChildItem, INavigationRouteItem, INavigationRouteRootItem, JumpByLink, NavigationForEachPhaseProps, NavigationForEachPhaseSlideBy, NavigationStorage, NavPhase, NavPhasePoint, NavRoute } from "./Navigation.model";

export class NavigationConfig<T, Storage extends NavigationStorage<T>, NavData = any> implements INavigationConfig<Storage, NavData> {
    root: (content: ReactNode) => JSX.Element;
    rootPhase: NavPhase | null;
    routes: INavigationRouteRootItem<NavData>[];
    exer?: Exer<Storage>;
    logo?: EvaIconName;
    endPoints: [NavPhasePoint, NavPhase[]][];
    jumpByLink?: JumpByLink<NavData>;
    private _data?: Partial<NavData>;
    private onGeneralFooterButtonClicks: Record<NavPhase, Record<string, () => void>> = {};

    constructor({ routes, root, rootPhase, exer, logo, jumpByLink }: INavigationConfig<Storage, NavData>) {
        this.root = root;
        this.rootPhase = rootPhase;
        this.routes = routes;
        this.checkRoutes(routes);
        this.exer = exer;
        this.logo = logo;
        this.jumpByLink = jumpByLink;
        this.endPoints = this.fillEndPoints();
    }

    get data() { return this._data; }
    private set data(data) { this._data = data; }
    setData(data: Partial<NavData>) { this.data = { ...this.data, ...data }; }

    invokeGeneralFooterButtonClickListeners(listenLine: NavPhase) {
        Object.values(this.onGeneralFooterButtonClicks[listenLine] || {}).forEach(cb => cb());
    }

    onGeneralFooterButtonClick(listenLine: NavPhase, listenerName: string) {
        return (cb: () => void) => {
            this.onGeneralFooterButtonClicks[listenLine] ??= {};
            this.onGeneralFooterButtonClicks[listenLine][listenerName] = cb;
            return () => {
                delete this.onGeneralFooterButtonClicks[listenLine][listenerName];
            };
        };
    }

    fillEndPoints() {
        const endPoints: [NavPhasePoint, NavPhase[]][] = [];
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

    checkRoutes(routes: INavigationRouteItem<NavData>[], phases: NavPhase[] = []) {
        const stack: NavPhase[] = [];
        routes.forEach(({ phase: [phase], next }) => {
            if (stack.indexOf(phase) > -1)
                throw Error(`На уровне "/${phases.join('/')}" найдены одинаковые ключи фазы "${phase}"`);

            stack.push(phase);
            if (next) this.checkRoutes(next, phases.concat(phase));
        });
    }

    isRoutePosible(route?: FreeNavRoute): boolean {
        if (route == null) return false;

        let item: INavigationRouteItem<NavData> | nil;
        let items: INavigationRouteItem<NavData>[] = this.routes;

        for (let phasei = 0; phasei < route.length; phasei++) {
            const currPhase = route[phasei];
            item = items.find(({ phase: [phase] }) => currPhase === phase);
            if (phasei === (route.length - 1)) break;

            if (item?.next) items = item.next;
            else {
                item = null;
                break;
            }
        }

        return !!item;
    }

    forEachPhase({ currentRoute, isEndPoint, onNextRelative, slideBy = NavigationForEachPhaseSlideBy.InlineEach }: NavigationForEachPhaseProps<NavData>) {
        const makeRoute = (topRoute: NavRoute, routes?: INavigationRouteChildItem<NavData>[], deep?: number): NavRoute | nil => {
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
                        const nextItem = (item.defaultChild
                            ? item.next?.find(it => defaultChild === it.phase[0])
                            : item.next?.[0]) as INavigationRouteItem<NavData> | nil;

                        if (!nextItem) break;

                        onNextRelative(item, topRoute, deep != null);
                        item = nextItem;
                    }
                    if (endPointReflect()) return;
                }
                makeRoute(topRoute.concat(route.phase), route.next, deep === undefined ? deep : deep + 1);
            }
        };

        if (
            slideBy === NavigationForEachPhaseSlideBy.Inline
            || slideBy === NavigationForEachPhaseSlideBy.InlineEach
        )
            makeRoute([], this.routes, 0);

        if (
            slideBy === NavigationForEachPhaseSlideBy.Each
            || slideBy === NavigationForEachPhaseSlideBy.EachInline
            || slideBy === NavigationForEachPhaseSlideBy.InlineEach
        )
            makeRoute([], this.routes);

        if (slideBy === NavigationForEachPhaseSlideBy.EachInline)
            makeRoute([], this.routes, 0);
    }

    getJumpToRoute(currentRoute?: FreeNavRoute, phasePoint?: NavPhasePoint): NavRoute | nil {
        const currRoute = currentRoute || [];
        let retRoute;
        const setSearches = (route?: FreeNavRoute) => {
            if (route) {
                route[route.length - 1] = route[route.length - 1];
            }
            return route;
        };
        for (let pointi = 0; pointi < this.endPoints.length; pointi++) {
            const [point, route] = this.endPoints[pointi];

            if (point === phasePoint) {
                if (!retRoute) retRoute = route;

                if (!currRoute.some((phase, phasei) => phase !== route[phasei]))
                    return setSearches(route);
            }
        }

        return setSearches(retRoute);
    }

    getGoToRoute(route: NavRoute, phase: NavPhase | NavPhase[], relativePoint?: NavPhasePoint | nil) {
        let item: INavigationRouteItem<NavData> | nil;
        let items: INavigationRouteItem<NavData>[] = this.routes;
        const newRoute: NavPhase[] = [];
        const line = [route, phase].flat();

        const addRelatives = (point?: NavPhase | nil) => {
            if (typeof item?.node === 'function') {
                item = (point
                    ? item.next?.find(({ phase: [phase] }) => phase === point)
                    : item.defaultChild != null
                        ? item.next?.find(({ phase: [phase] }) => phase === item?.defaultChild) ?? item.next?.[0]
                        : item.next?.[0]) as INavigationRouteItem<NavData>;
                const relativePhase: NavPhasePoint | nil = item?.phase;

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

    getGoBackRoute(route: NavRoute): NavPhase[] {
        let item: INavigationRouteItem<NavData> | nil;
        let items: INavigationRouteItem<NavData>[] | nil = this.routes;
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

    findContent(route?: FreeNavRoute, onImpossible?: () => void): ReactNode {
        if (!this.isRoutePosible(route)) {
            if (route) console.error(`Фаза "/${route.join('/')}" не существует!`);
            setTimeout(() => onImpossible?.());
            return null;
        }

        const findContent = (route: FreeNavRoute | undefined, navigationItems: INavigationRouteItem<NavData>[]): ReactNode => {
            let items: INavigationRouteItem<NavData>[] | nil = navigationItems;
            let throwItem: INavigationRouteChildItem<NavData> | nil;
            const throwRoute = route?.slice(0) || [];

            const item: INavigationRouteItem<NavData> | nil = route?.reduce<INavigationRouteItem<NavData> | nil>((_, phase) => {
                if (throwItem) return throwItem;
                const item = (items as INavigationRouteChildItem<NavData>[])?.find(({ phase: [currPhase] }) => currPhase === phase);
                items = item?.next as never;
                throwRoute.shift();
                if (item && typeof item.node === 'function') throwItem = item;
                return item;
            }, null);

            return item
                ? (item.accessRule == null || (this.exer != null && this.exer.actionAccessedOrNull(item.accessRule)))
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

        const content = findContent(route, this.routes);
        if (content == null) onImpossible?.();
        return content;
    }
}