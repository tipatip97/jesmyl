import { JStorage } from "../../complect/JStorage";
import { NavigationStorage } from "../../complect/nav-configurer/Navigation.model";
import { RouterState } from "./Router.model";

const routerStorage: JStorage<NavigationStorage<RouterState>> = new JStorage<NavigationStorage<RouterState>>('router');
export default routerStorage;
