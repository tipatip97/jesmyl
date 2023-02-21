import { JStorage } from "../../../complect/JStorage";
import { NavigationStorage } from "../../../complect/nav-configurer/Navigation.model";
import { CmStorage } from "./Cm.model";

const cmStorage: JStorage<NavigationStorage<CmStorage>> = new JStorage<NavigationStorage<CmStorage>>('cm');
export default cmStorage;