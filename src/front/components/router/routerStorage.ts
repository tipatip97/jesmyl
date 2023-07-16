import { JStorage } from "../../complect/JStorage";
import { NavigationStorage } from "../../complect/nav-configurer/Navigation.model";
import { RouterState } from "./Router.model";

const routerStorage = new JStorage<NavigationStorage<RouterState>, RouterState>('router');
export default routerStorage;
