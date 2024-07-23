import { ReactNode } from 'react';
import {
  FreeRoutePath,
  RoutePath,
  RoutePathVariated,
  RoutePhase,
  RoutePhasePoint,
} from '../../components/router/Router.model';
import { LocalSokiAuth } from '../../models';
import { Exer } from '../exer/Exer';
import { ExerStorage } from '../exer/Exer.model';
import { ToastModalConfig } from '../modal/useToast';
import { TheIconSelfPack, TheIconType } from '../the-icon/model';

export type SetPhasePayload<Phase, SpecialPhase> = Phase | nil | [Phase | nil, SpecialPhase | nil, boolean?];

// верни тут true, если событие "назад" должно ТОЛЬКО обработать этот Action (не переводить назад)
export type UseNavAction = (isForceBack: boolean) => boolean;

export type FooterItem<Phase> = null | {
  title: string;
  icon: TheIconType;
  phases: Phase[];
  activeWithSpecialPhases?: boolean;
  accessRule?: string;
};

export type NavigationStorage<Storage> = Storage & ExerStorage;

export interface JumpByLinkActions {}

type JumpByLink<NavData> = Partial<{
  [Key in keyof NavData]: (event: {
    value: NavData[Key];
    key: Key;
    auth: LocalSokiAuth | null;

    jump: (path: RoutePathVariated<any>) => void;
    jumpToRoot: () => void;
    rejectClearRoute: () => void;
    errorToast: (content?: React.ReactNode, config?: ToastModalConfig) => void;
  }) => void;
}>;

export interface INavigationConfig<Storage extends ExerStorage, NavData> {
  root: (content: ReactNode) => JSX.Element;
  // переход в данную фазу будет при навигации назад, и пустом роуте
  rootPhase: RoutePhase | null;
  routes: INavigationRouteRootItem<NavData>[];
  exer?: Exer<Storage>;
  Icon?: TheIconType;
  jumpByLink?: JumpByLink<NavData>;
  title: string;
  level?: number;
  useIsCanRead?: (value?: any) => boolean;
  lazies: JSX.Element[];
}

export type INavigationRouteItem<NavData> = INavigationRouteChildItem<NavData> | INavigationRouteRootItem<NavData>;

export interface INavigationRouteChildItem<
  NavData,
  Data extends Record<string, any> | und = Record<string, any>,
  PhaseName = string,
> {
  readonly phase: RoutePhasePoint<PhaseName>;
  // компоненту можно передать содержимое его потомков, если typeof node === 'function'
  // такая фаза считается проходящей
  node: ReactNode | ((props: NavigationThrowNodeProps<NavData>) => ReactNode);
  // если typeof node === 'function' - этот параметр будет указывать,
  // на какой роут нужно перейти по умолчанию
  defaultChild?: RoutePhase;
  // передаётся в useNav() как есть
  data?: Data;
  accessLevel?: number | ((auth: LocalSokiAuth) => boolean);
  next?: INavigationRouteChildItem<NavData>[];
  slideBackOn?: (data: Partial<NavData>) => boolean;
}

export interface INavigationRouteRootItem<NavData> extends INavigationRouteChildItem<NavData> {
  title: string;
  iconSelfPack: TheIconSelfPack;
  markBadge?: (storeData?: NavData) => number | boolean | nil;
}

export interface MainNavigationNodeProps {
  content: ReactNode;
}

export interface NavigationThrowNodeProps<NavData> {
  outletContent: ReactNode;
  // если фаза является проходящей, она может выступать как относительная точка
  // в этом параметре передаётся картеж относительной точки
  relativePoint: RoutePhasePoint | nil;
  currentChildPhase: RoutePhase;
  childItems?: INavigationRouteChildItem<NavData>[];
  data?: Record<string, any> | nil;
}

export enum NavigationForEachPhaseSlideBy {
  Inline,
  Each,
  InlineEach,
  EachInline,
}

export interface NavigationForEachPhaseProps<NavData> {
  currentRoute?: FreeRoutePath;
  isEndPoint?: (
    item: INavigationRouteItem<NavData>,
    topRoute: RoutePath,
    isInline: boolean,
  ) => // если возвращена эта функция - будет обработка фазовой точки
  // верни здесь true, чтоб прекратить проход по точкам
  () => boolean;
  onNextRelative?: (item: INavigationRouteItem<NavData>, topRoute: RoutePath, isInline: boolean) => void;
  slideBy?: NavigationForEachPhaseSlideBy;
}
