import { NavigationConfig } from '../../../complect/nav-configurer/Navigation';
import { UseNavAction } from '../../../complect/nav-configurer/Navigation.model';
import useNavConfigurer from '../../../complect/nav-configurer/useNavConfigurer';
import { BibleStorage } from './model';
import { BibleReaderCurrentBookPage } from './reader/book/CurrentBookPage';
import { BibleReaderSearchPage } from './reader/search/SearchPage';

const navigation: NavigationConfig<BibleStorage, {}> = new NavigationConfig('bible', {
  title: 'Библия',
  root: content => <>{content}</>,
  rootPhase: 'chapter',
  logo: 'book',
  routes: [
    {
      icon: 'file-text',
      phase: ['chapter'],
      title: 'Глава',
      node: <BibleReaderCurrentBookPage />,
    },
    {
      icon: 'search',
      phase: ['search'],
      title: 'Поиск',
      node: <BibleReaderSearchPage />,
    },
  ],
});

const actions: UseNavAction[] = [];

export default function useBibleNav() {
  return useNavConfigurer<BibleStorage, {}>('bible', actions, navigation);
}
