import { JStorage } from '../../../complect/JStorage';
import { NavigationStorage } from '../../../complect/nav-configurer/Navigation.model';
import { CmState, CmStorage } from './Cm.model';

const cmStorage = new JStorage<NavigationStorage<CmStorage>, CmState>('cm');
export default cmStorage;
