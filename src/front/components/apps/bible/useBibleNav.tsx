import { NavigationConfig } from '../../../complect/nav-configurer/Navigation';
import { UseNavAction } from '../../../complect/nav-configurer/Navigation.model';
import useNavConfigurer from '../../../complect/nav-configurer/useNavConfigurer';
import { BibleStorage } from './model';

const navigation: NavigationConfig<BibleStorage, {}> = new NavigationConfig('bible', {
  title: 'Библия',
  root: content => <div>{content}</div>,
  rootPhase: 'all',
  logo: 'book',
  routes: [
    {
      icon: 'navigation-2',
      phase: ['all'],
      title: 'Библия',
      node: <></>,
    },
  ],
});

const actions: UseNavAction[] = [];

export default function useBibleNav() {
  return useNavConfigurer<BibleStorage, {}>('bible', actions, navigation);
}
