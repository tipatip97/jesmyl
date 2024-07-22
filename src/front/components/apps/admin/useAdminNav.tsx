import React, { Suspense } from 'react';
import { NavigationConfig } from '../../../complect/nav-configurer/Navigation';
import { UseNavAction } from '../../../complect/nav-configurer/Navigation.model';
import useNavConfigurer from '../../../complect/nav-configurer/useNavConfigurer';
import { iconPackOfManager } from '../../../complect/the-icon/icons/manager';
import { AdminNavData, AdminStorage } from './Admin.model';

const LazyAdmin = React.lazy(() => import('./Admin'));
const LazyAdminApp = React.lazy(() => import('./AdminApp'));
const LazyTheUser = React.lazy(() => import('./complect/users/TheUser'));

const adminNavigation = new NavigationConfig<AdminStorage, AdminNavData>('admin', {
  title: 'Админ',
  level: 100,
  root: content => (
    <Suspense>
      <LazyAdminApp content={content} />
    </Suspense>
  ),
  rootPhase: 'admin',
  routes: [
    {
      phase: ['admin'],
      iconSelfPack: iconPackOfManager,
      title: 'Админ',
      node: (
        <Suspense>
          <LazyAdmin />
        </Suspense>
      ),
      next: [
        {
          phase: ['user'],
          node: (
            <Suspense>
              <LazyTheUser />
            </Suspense>
          ),
        },
      ],
    },
  ],
});

const actions: UseNavAction[] = [];

const lazies = [<LazyAdminApp content />, <LazyAdmin />, <LazyTheUser />];

export default function useAdminNav() {
  return useNavConfigurer<AdminStorage, AdminNavData>('admin', actions, adminNavigation, lazies);
}
