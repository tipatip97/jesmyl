import { NavRoute } from "../../../complect/nav-configurer/Navigation.model";

export interface TunerState {
    route: NavRoute;
}
export interface TunerStorage {
    route: NavRoute;
    lastUpdate: number;
}