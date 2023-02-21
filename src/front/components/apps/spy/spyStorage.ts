import { JStorage } from "../../../complect/JStorage";
import { NavigationStorage } from "../../../complect/nav-configurer/Navigation.model";
import { SpyStorage } from "./Spy.model";

const spyStorage: JStorage<NavigationStorage<SpyStorage>> = new JStorage<NavigationStorage<SpyStorage>>('spy');
export default spyStorage;