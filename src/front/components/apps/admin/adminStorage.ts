import { JStorage } from "../../../complect/JStorage";
import { NavigationStorage } from "../../../complect/nav-configurer/Navigation.model";
import { AdminStorage } from "./Admin.model";

const adminStorage: JStorage<NavigationStorage<AdminStorage>> = new JStorage<NavigationStorage<AdminStorage>>('admin');
export default adminStorage;