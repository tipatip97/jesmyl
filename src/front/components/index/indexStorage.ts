import { JStorage } from '../../complect/JStorage';
import { NavigationStorage } from '../../complect/nav-configurer/Navigation.model';
import { IndexState, IndexStorage } from './Index.model';

const indexStorage = new JStorage<NavigationStorage<IndexStorage>, IndexState>('index', {
  nonCachable: ['statistic', 'liveData'],
});

export default indexStorage;
