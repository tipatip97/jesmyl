import { JStorage } from "../../../complect/JStorage";
import { NavigationStorage } from "../../../complect/nav-configurer/Navigation.model";
import { LeaderStoraged } from "./Leader.model";

const leaderStorage: JStorage<NavigationStorage<LeaderStoraged>> = new JStorage<NavigationStorage<LeaderStoraged>>('leader');
export default leaderStorage;