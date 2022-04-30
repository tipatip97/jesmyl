import { ReactNode } from "react";
import { EvaIconName } from "../eva-icon/EvaIcon";

export type SetPhasePayload<Phase, SpecialPhase> = Phase | nil | [Phase | nil, SpecialPhase | nil, boolean?];

// верни тут true, если событие "назад" уже не должно иметь эффекта
export type UseNavAction = () => boolean | void | any;

export type FooterItem<Phase> = null | {
    title: string;
    icon: EvaIconName;
    phases: Phase[];
    activeWithSpecialPhases?: boolean;
    accessRule?: string;
}

export interface INavigationConfig {
    root: (content: ReactNode) => JSX.Element;
    // переход в данную фазу будет при навигации назад, и пустом роуте
    rootPhase: NavPhase | null;
    routes: INavigationRouteRootItem[];
}

export interface INavigationRouteChildItem {
    phase: string;
    // компоненту можно передать содержимое его потомков, если typeof node === 'function'
    node: ReactNode | ((props: NavigationThrowNodeProps) => ReactNode);
    accessRule?: string;
    next?: INavigationRouteChildItem[];
}

export interface INavigationRouteRootItem extends INavigationRouteChildItem {
    title: string;
    icon: EvaIconName;
}

export type NavPhase = string;
export type NavRoute = NavPhase[] | nil;

export interface MainNavigationNodeProps {
    content: ReactNode;
}

export interface NavigationThrowNodeProps {
    outletContent: ReactNode;
    currentPhase: NavPhase | nil;
}
