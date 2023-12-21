import { NavigationConfig } from '../../../complect/nav-configurer/Navigation';
import { UseNavAction } from '../../../complect/nav-configurer/Navigation.model';
import useNavConfigurer from '../../../complect/nav-configurer/useNavConfigurer';
import Admin from './Admin';
import { AdminNavData, AdminStorage } from './Admin.model';
import AdminApp from './AdminApp';
import TheUser from './complect/users/TheUser';

const adminNavigation = new NavigationConfig<AdminStorage, AdminNavData>('admin', {
  title: 'Админ',
  level: 100,
  root: content => <AdminApp content={content} />,
  rootPhase: 'admin',
  logo: 'twitter',
  routes: [
    {
      phase: ['admin'],
      icon: 'twitter',
      title: 'Админ',
      node: <Admin />,
      next: [
        {
          phase: ['user'],
          node: <TheUser />,
        },
      ],
    },
  ],
});

const actions: UseNavAction[] = [];

export default function useAdminNav() {
  return useNavConfigurer<AdminStorage, AdminNavData>('admin', actions, adminNavigation);
}
