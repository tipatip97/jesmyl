import { ReactNode } from "react";
import { AppName } from "../../app/App.model";
import { EvaIconName } from "../eva-icon/EvaIcon";
import { Exer } from "../exer/Exer";
import { ExerStorage } from "../exer/Exer.model";

export type SetPhasePayload<Phase, SpecialPhase> = Phase | nil | [Phase | nil, SpecialPhase | nil, boolean?];

// верни тут true, если событие "назад" должно ТОЛЬКО обработать этот Action (не переводить назад)
export type UseNavAction = (isForceBack: boolean) => boolean;

export type FooterItem<Phase> = null | {
    title: string,
    icon: EvaIconName,
    phases: Phase[],
    activeWithSpecialPhases?: boolean,
    accessRule?: string,
}

export type NavigationStorage<T> = T & ExerStorage & {
}

export interface JumpByLinkAlt {
    Reject: ['REJECT'],
    RootPhase: ['ROOT_PHASE'],
}

export type JumpByLink<
    NavData,
    DataName extends keyof NavData = keyof NavData
> = (key: DataName, value: NavData[DataName] | und, alt: JumpByLinkAlt) => NavRouteVariated<NavData> | JumpByLinkAlt[keyof JumpByLinkAlt];

export interface INavigationConfig<Storage extends ExerStorage, NavData> {
    root: (content: ReactNode) => JSX.Element,
    // переход в данную фазу будет при навигации назад, и пустом роуте
    rootPhase: NavPhase | null,
    routes: INavigationRouteRootItem<NavData>[],
    exer?: Exer<Storage>,
    logo?: EvaIconName,
    jumpByLink?: JumpByLink<NavData>,
}

export type INavigationRouteItem<NavData> = INavigationRouteChildItem<NavData> | INavigationRouteRootItem<NavData>;

export interface INavigationRouteChildItem<NavData, Data extends Record<string, any> | und = Record<string, any>, PhaseName = string> {
    readonly phase: NavPhasePoint<PhaseName>,
    // компоненту можно передать содержимое его потомков, если typeof node === 'function'
    // такая фаза считается проходящей
    node: ReactNode | ((props: NavigationThrowNodeProps<NavData>) => ReactNode),
    // если typeof node === 'function' - этот параметр будет указывать,
    // на какой роут нужно перейти по умолчанию
    defaultChild?: NavPhase,
    // передаётся в useNav() как есть
    data?: Data,
    accessRule?: string,
    next?: INavigationRouteChildItem<NavData>[],
    slideBackOn?: (data: Partial<NavData>) => boolean,
}

export interface INavigationRouteRootItem<NavData> extends INavigationRouteChildItem<NavData> {
    title: string,
    icon: EvaIconName,
    markBadge?: (storeData?: NavData) => number | boolean | nil,
}

export type NavPhasePoint<PhaseName = string> = [PhaseName];
export type NavPhase = string;
export type NavRoute = NavPhase[];

export type NavPlaceWithData<NavData> = { place: NavPhase | NavRoute, data: Partial<NavData> };
export type NavPlaceVariated<NavData> = NavPlaceWithData<NavData> | NavPhase | NavRoute;

export type NavPhasePointWithData<NavData> = { phase: NavPhasePoint, data: Partial<NavData> };
export type NavPhasePointVariated<NavData> = NavPhasePointWithData<NavData> | NavPhasePoint | null;

export type NavRouteWithData<NavData> = { route: NavRoute, data: Partial<NavData> };
export type NavRouteVariated<NavData> = NavRouteWithData<NavData> | NavRoute | null;

export type FreeNavRoute = NavRoute | null;

export type NavRouting = Partial<Record<
    AppName,
    {
        routes: NavRoute[],
        current: NavPhase | null,
        data: Record<string, unknown>,
    }
>>;

export interface MainNavigationNodeProps {
    content: ReactNode,
}

export interface NavigationThrowNodeProps<NavData> {
    outletContent: ReactNode,
    // если фаза является проходящей, она может выступать как относительная точка
    // в этом параметре передаётся картеж относительной точки
    relativePoint: NavPhasePoint | nil,
    currentChildPhase: NavPhase,
    childItems?: INavigationRouteChildItem<NavData>[],
    data?: Record<string, any> | nil,
}

export enum NavigationForEachPhaseSlideBy {
    Inline,
    Each,
    InlineEach,
    EachInline,
}

export interface NavigationForEachPhaseProps<NavData> {
    currentRoute?: FreeNavRoute,
    isEndPoint?: (item: INavigationRouteItem<NavData>, topRoute: NavRoute, isInline: boolean) =>
        // если возвращена эта функция - будет обработка фазовой точки
        // верни здесь true, чтоб прекратить проход по точкам
        () => boolean,
    onNextRelative?: (item: INavigationRouteItem<NavData>, topRoute: NavRoute, isInline: boolean) => void,
    slideBy?: NavigationForEachPhaseSlideBy,
}
