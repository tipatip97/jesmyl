import { ReactNode } from "react";
import { FreeNavRoute, INavigationConfig, INavigationRouteChildItem, INavigationRouteRootItem, NavPhase, NavPhasePoint, NavRoute } from "./Navigation.model";

export class NavigationConfig implements INavigationConfig {
    root: (content: ReactNode) => JSX.Element;
    rootPhase: NavPhase | null;
    routes: INavigationRouteRootItem[];

    constructor({ routes, root, rootPhase }: INavigationConfig) {
        this.root = root;
        this.rootPhase = rootPhase;
        this.routes = routes;
        this.checkRoutes(routes);
    }

    checkRoutes(routes: INavigationRouteRootItem[] | INavigationRouteChildItem[], phases: NavPhase[] = []) {
        const stack: NavPhase[] = [];
        routes.forEach(({ phase: [phase], next }) => {
            if (stack.indexOf(phase) > -1)
                throw Error(`На уровне "/${phases.join('/')}" найдены одинаковые ключи фазы "${phase}"`);

            stack.push(phase);
            if (next) this.checkRoutes(next, phases.concat(phase));
        });
    }

    isRoutePosible(route: FreeNavRoute): boolean {
        if (route == null) return false;

        let item: INavigationRouteRootItem | INavigationRouteChildItem | nil;
        let items: INavigationRouteRootItem[] | INavigationRouteChildItem[] = this.routes;

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

    goTo(route: NavRoute, phase: NavPhase | NavPhase[], relativePoint?: NavPhasePoint | nil) {
        let item: INavigationRouteRootItem | INavigationRouteChildItem | nil;
        let items: INavigationRouteRootItem[] | INavigationRouteChildItem[] = this.routes;
        const newRoute: NavPhase[] = [];
        const line = [route, phase].flat();

        if (!this.isRoutePosible(route)) {
            console.error(`Фаза "/${line.join('/')}" не существует!`);
            return;
        }

        const addRelatives = (point?: NavPhase | nil) => {
            if (typeof item?.node === 'function') {
                item = point
                    ? item.next?.find(({ phase: [phase] }) => phase === point)
                    : item.defaultChild != null
                        ? item.next?.find(({ phase: [phase] }) => phase === item?.defaultChild) ?? item.next?.[0]
                        : item.next?.[0];
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
            newRoute.push(item.phase[0]);
            if (item.next) items = item.next;
            if (item.phase === relativePoint) {
                addRelatives([phase].flat()[0]);
                break;
            }
            if (phasei === line.length - 1) addRelatives();
        }

        return newRoute;
    }

    goBack(route: NavRoute): NavPhase[] {
        let item: INavigationRouteRootItem | INavigationRouteChildItem | nil;
        let items: INavigationRouteRootItem[] | INavigationRouteChildItem[] | nil = this.routes;
        let line: INavigationRouteChildItem[] = [];

        for (let phasei = 0; phasei < route.length; phasei++) {
            const currPhase = route[phasei];
            item = items?.find(({ phase: [phase] }) => currPhase === phase);
            if (!item) break;
            line.push(item);
            items = item.next;
        }

        if (item) {
            line = line.slice(0, -1);
            let last = line[line.length - 1];
            while (typeof last?.node === 'function') {
                line = line.slice(0, -1);
                last = line[line.length - 1];
            }
        }

        return line.map(({ phase: [phase] }) => phase);
    }

    findContent(route: FreeNavRoute, onImpossible?: () => void): ReactNode {
        if (!this.isRoutePosible(route)) {
            if (route) console.error(`Фаза "/${route.join('/')}" не существует!`);
            setTimeout(() => onImpossible?.());
            return null;
        }

        const findContent = (route: FreeNavRoute, navigationItems: INavigationRouteRootItem[] | INavigationRouteChildItem[]): ReactNode => {
            let items: INavigationRouteRootItem[] | INavigationRouteChildItem[] | nil = navigationItems;
            let throwItem: INavigationRouteChildItem | nil;
            const throwRoute = route?.slice(0) || [];

            const item: INavigationRouteChildItem | nil = route?.reduce<INavigationRouteChildItem | nil>((_, phase) => {
                if (throwItem) return throwItem;
                const item = (items as INavigationRouteChildItem[])?.find(({ phase: [currPhase] }) => currPhase === phase);
                items = item?.next as never;
                throwRoute.shift();
                if (item && typeof item.node === 'function') throwItem = item;
                return item;
            }, null);

            return item
                ? typeof item.node === 'function'
                    ? item.node({
                        outletContent: findContent(throwRoute, items),
                        relativePoint: item.phase,
                        currentChildPhase: throwRoute[0],
                        data: item.data,
                    })
                    : item.node
                : null;
        };

        const content = findContent(route, this.routes);
        if (content == null) onImpossible?.();
        return content;
    }
}