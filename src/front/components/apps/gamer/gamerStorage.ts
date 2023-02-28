import { JStorage } from "../../../complect/JStorage";
import { NavigationStorage } from "../../../complect/nav-configurer/Navigation.model";
import { GamerStorage } from "./Gamer.model";

const gamerStorage: JStorage<NavigationStorage<GamerStorage>> = new JStorage<NavigationStorage<GamerStorage>>('gamer');
export default gamerStorage;