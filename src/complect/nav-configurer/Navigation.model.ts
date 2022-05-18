import { ReactNode } from "react";
import { EvaIconName } from "../eva-icon/EvaIcon";
import { Exer } from "../exer/Exer";
import { ExerStorage } from "../exer/Exer.model";

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

export type NavigationStorage<T> = T & ExerStorage & {
    route: FreeNavRoute;
}

export interface INavigationConfig<Storage extends ExerStorage> {
    root: (content: ReactNode) => JSX.Element;
    // переход в данную фазу будет при навигации назад, и пустом роуте
    rootPhase: NavPhase | null;
    routes: INavigationRouteRootItem[];
    exer?: Exer<Storage>;
}

export interface INavigationRouteChildItem<Data extends Record<string, any> | und = Record<string, any>> {
    readonly phase: NavPhasePoint;
    // компоненту можно передать содержимое его потомков, если typeof node === 'function'
    node: ReactNode | ((props: NavigationThrowNodeProps) => ReactNode);
    // если typeof node === 'function' - этот параметр будет указывать,
    // на какой роут нужно перейти по умолчанию
    defaultChild?: NavPhase;
    // передаётся в useNav()
    data?: Data,
    accessRule?: string;
    next?: INavigationRouteChildItem[];
}

export interface INavigationRouteRootItem extends INavigationRouteChildItem {
    title: string;
    icon: EvaIconName;
}

export type NavPhasePoint = [string];
export type NavPhase = string;
export type NavRoute = NavPhase[];
export type FreeNavRoute = NavRoute | null;

export interface MainNavigationNodeProps {
    content: ReactNode;
}

export interface NavigationThrowNodeProps {
    outletContent: ReactNode;
    relativePoint: NavPhasePoint | nil;
    currentChildPhase: NavPhase;
    data?: Record<string, any> | nil;
}