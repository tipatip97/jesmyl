import { JStorage } from "../../complect/JStorage";
import { NavigationStorage } from "../../complect/nav-configurer/Navigation.model";
import { IndexStorage } from "./Index.model";

const indexStorage: JStorage<NavigationStorage<IndexStorage>> = new JStorage<NavigationStorage<IndexStorage>>('index', { nonCachable: ['statistic'] });

export default indexStorage;