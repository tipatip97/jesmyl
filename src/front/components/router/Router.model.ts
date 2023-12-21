import { AppName } from '../../app/App.model';

export type RouterState = Partial<Record<AppName, RouteCast> & Record<`${AppName}.data`, Record<string, unknown>>> & {
  isReady: boolean;
};

export type RouteCast = {
  net: RoutePath[];
  last?: RoutePhase;
};

export type RoutePhasePoint<PhaseName = string> = [PhaseName];
export type RoutePhase = string;
export type RoutePath = RoutePhase[];
export type FreeRoutePath = RoutePath | null;

export type RoutePlaceWithData<NavData> = { place: RoutePhase | RoutePath; data: Partial<NavData> };
export type RoutePlaceVariated<NavData> = RoutePlaceWithData<NavData> | RoutePhase | RoutePath;

export type RoutePhasePointWithData<NavData> = { phase: RoutePhasePoint; data: Partial<NavData> };
export type RoutePhasePointVariated<NavData> = RoutePhasePointWithData<NavData> | RoutePhasePoint | null;

export type RoutePathWithData<NavData> = { path: RoutePath; data: Partial<NavData> };
export type RoutePathVariated<NavData> = RoutePathWithData<NavData> | RoutePath | null;

export interface RouterNavigateCast {
  appName: AppName;
  value: RouteCast;
  isPreventSave?: boolean;
}

export interface RouterNavigateData {
  appName: AppName;
  value: Record<string, unknown>;
  isPreventSave?: boolean;
}
