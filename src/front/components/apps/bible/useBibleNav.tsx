import { NavigationConfig } from '../../../complect/nav-configurer/Navigation';
import { UseNavAction } from '../../../complect/nav-configurer/Navigation.model';
import useNavConfigurer from '../../../complect/nav-configurer/useNavConfigurer';
import { IconBook02StrokeRounded } from '../../../complect/the-icon/icons/book-02';
import { iconPackOfFile02 } from '../../../complect/the-icon/icons/file-02';
import { iconPackOfFileSearch } from '../../../complect/the-icon/icons/file-search';
import { BibleStorage } from './model';
import BibleReaderCurrentBookPage from './reader/book/CurrentBookPage';
import BibleReaderSearchPage from './reader/search/SearchPage';

const navigation: NavigationConfig<BibleStorage, {}> = new NavigationConfig('bible', {
  title: 'Библия',
  root: content => <>{content}</>,
  rootPhase: 'chapter',
  Icon: IconBook02StrokeRounded,
  routes: [
    {
      iconSelfPack: iconPackOfFile02,
      phase: ['chapter'],
      title: 'Глава',
      node: <BibleReaderCurrentBookPage />,
    },
    {
      iconSelfPack: iconPackOfFileSearch,
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
