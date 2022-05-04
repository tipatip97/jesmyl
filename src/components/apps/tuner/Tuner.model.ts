import { FreeNavRoute } from "../../../complect/nav-configurer/Navigation.model";

export interface TunerState {
    route: FreeNavRoute;
}
export interface TunerStorage {
    route: FreeNavRoute;
    lastUpdate: number;
}