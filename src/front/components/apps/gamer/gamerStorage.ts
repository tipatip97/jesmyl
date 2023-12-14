import { JStorage } from "../../../complect/JStorage";
import { NavigationStorage } from "../../../complect/nav-configurer/Navigation.model";
import { GamerState, GamerStorage } from "./Gamer.model";

const gamerStorage = new JStorage<NavigationStorage<GamerStorage>, GamerState>('gamer');
export default gamerStorage;
