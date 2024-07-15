import { JStorage } from '../../../complect/JStorage';
import { NavigationStorage } from '../../../complect/nav-configurer/Navigation.model';
import { GamerStoraged } from './Gamer.model';

const gamerStorage = new JStorage<NavigationStorage<GamerStoraged>>('gamer');
export default gamerStorage;
