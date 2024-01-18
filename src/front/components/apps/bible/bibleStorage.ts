import { JStorage } from '../../../complect/JStorage';
import { NavigationStorage } from '../../../complect/nav-configurer/Navigation.model';
import { BibleStorage } from './model';

const bibleStorage = new JStorage<NavigationStorage<BibleStorage>, BibleStorage>('bible');

export default bibleStorage;
