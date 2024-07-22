import React, { Suspense } from 'react';
import { NavigationConfig } from '../../../complect/nav-configurer/Navigation';
import { UseNavAction } from '../../../complect/nav-configurer/Navigation.model';
import useNavConfigurer from '../../../complect/nav-configurer/useNavConfigurer';
import serviceMaster from '../../../complect/service/serviceMaster';
import { iconPackOfCircleArrowRight02 } from '../../../complect/the-icon/icons/circle-arrow-right-02';
import { RoutePhasePoint } from '../../router/Router.model';
import { Index } from '../Index';
import { IndexNavData, IndexStorage } from '../Index.model';
import { IndexScheduleWidgetTranslations } from './translations/LiveTranslations';

const LazyIndexAuthorization = React.lazy(() => import('../parts/login/IndexAuthorization'));
const LazyIndexConsole = React.lazy(() => import('../parts/settings/Console'));
const LazyScheduleWidgetListPage = React.lazy(() => import('../../../complect/schedule-widget/general/ListPage'));
const LazyIndexActions = React.lazy(() => import('../parts/actions/Actions'));
const LazyIndexMyFiles = React.lazy(() => import('../parts/actions/files/MyFiles'));
const LazyMain = React.lazy(() => import('../parts/main/IndexMain'));
const LazyIndexSettings = React.lazy(() => import('../parts/settings/Settings'));
const LazyScheduleWidgetPage = React.lazy(() => import('../../../complect/schedule-widget/general/Page'));

export const indexScheduleWidgetTranslationPagePhase: RoutePhasePoint = ['translation'];

const actions: UseNavAction[] = [];
const navigate = new NavigationConfig<IndexStorage, IndexNavData>('index', {
  title: 'Index',
  root: content => (
    <Suspense>
      <Index content={content} />
    </Suspense>
  ),
  rootPhase: null,
  jumpByLink: {
    swInvite: async ({ value, key, auth, rejectClearRoute, errorToast }) => {
      if (!auth || auth.level === 0) return rejectClearRoute();

      try {
        await serviceMaster('index')<string>(key, value);
      } catch (error) {
        errorToast('' + (error || 'Ошибка'));
      }
    },
    schw: ({ value: schw, jump }) => jump({ data: { schw }, path: ['other', 'schedules'] }),
  },
  routes: [
    {
      phase: ['other'],
      title: 'Другое',
      iconSelfPack: iconPackOfCircleArrowRight02,
      node: <LazyMain />,
      next: [
        {
          phase: ['settings'],
          node: <LazyIndexSettings />,
          next: [
            {
              phase: ['console'],
              node: <LazyIndexConsole />,
            },
          ],
        },
        {
          phase: ['login'],
          node: <LazyIndexAuthorization />,
        },
        {
          phase: ['schedules'],
          node: <LazyScheduleWidgetListPage />,
          next: [
            {
              phase: ['schedule'],
              node: <LazyScheduleWidgetPage />,
              next: [
                {
                  phase: indexScheduleWidgetTranslationPagePhase,
                  node: <IndexScheduleWidgetTranslations />,
                },
              ],
            },
          ],
        },
        {
          phase: ['actions'],
          node: <LazyIndexActions />,
          next: [
            {
              phase: ['files'],
              node: <LazyIndexMyFiles />,
            },
          ],
        },
      ],
    },
  ],
});

export default function useIndexNav() {
  return useNavConfigurer<IndexStorage, IndexNavData>('index', actions, navigate);
}
