import { JStorage } from "../../../complect/JStorage";
import { NavigationStorage } from "../../../complect/nav-configurer/Navigation.model";
import { LeaderState, LeaderStoraged } from "./Leader.model";

const leaderStorage = new JStorage<NavigationStorage<LeaderStoraged>, LeaderState>('leader');
export default leaderStorage;