import { ReactNode } from "react";
import { INavigationConfig, INavigationRouteChildItem, INavigationRouteRootItem, NavPhase, NavRoute } from "./Navigation.model";

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
        routes.forEach(({ phase, next }) => {
            if (stack.indexOf(phase) > -1)
                throw Error(`На уровне "/${phases.join('/')}" найдены одинаковые ключи фазы "${phase}"`);

            stack.push(phase);
            if (next) this.checkRoutes(next, phases.concat(phase));
        });
    }

    findContent(route: NavRoute): ReactNode {
        const findContent = (route: NavRoute, navigationItems: INavigationRouteRootItem[] | INavigationRouteChildItem[]): ReactNode => {
            let items: INavigationRouteRootItem[] | INavigationRouteChildItem[] | nil = navigationItems;
            let throwItem: INavigationRouteChildItem | nil;
            const throwRoute = route?.slice(0) || [];

            const item: INavigationRouteChildItem | nil = route?.reduce<INavigationRouteChildItem | nil>((_, phase) => {
                if (throwItem) return throwItem;
                const item = (items as INavigationRouteChildItem[])?.find((item) => item.phase === phase);
                items = item?.next as never;
                throwRoute.shift();
                if (item && typeof item.node === 'function') throwItem = item;
                return item;
            }, null);

            return item
                ? typeof item.node === 'function'
                    ? item.node({
                        outletContent: findContent(throwRoute, items),
                        currentPhase: throwRoute[0],
                        data: item.data,
                    })
                    : item.node
                : null;
        };

        return findContent(route, this.routes);
    }
}