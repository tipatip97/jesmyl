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
      node: (
        <Suspense>
          <LazyMain />
        </Suspense>
      ),
      next: [
        {
          phase: ['settings'],
          node: (
            <Suspense>
              <LazyIndexSettings />
            </Suspense>
          ),
          next: [
            {
              phase: ['console'],
              node: (
                <Suspense>
                  <LazyIndexConsole />
                </Suspense>
              ),
            },
          ],
        },
        {
          phase: ['login'],
          node: (
            <Suspense>
              <LazyIndexAuthorization />
            </Suspense>
          ),
        },
        {
          phase: ['schedules'],
          node: (
            <Suspense>
              <LazyScheduleWidgetListPage />
            </Suspense>
          ),
          next: [
            {
              phase: ['schedule'],
              node: (
                <Suspense>
                  <LazyScheduleWidgetPage />
                </Suspense>
              ),
              next: [
                {
                  phase: indexScheduleWidgetTranslationPagePhase,
                  node: (
                    <Suspense>
                      <IndexScheduleWidgetTranslations />
                    </Suspense>
                  ),
                },
              ],
            },
          ],
        },
        {
          phase: ['actions'],
          node: (
            <Suspense>
              <LazyIndexActions />
            </Suspense>
          ),
          next: [
            {
              phase: ['files'],
              node: (
                <Suspense>
                  <LazyIndexMyFiles />
                </Suspense>
              ),
            },
          ],
        },
      ],
    },
  ],
  lazies: [
    <LazyMain />,
    <LazyIndexSettings />,
    <LazyIndexConsole />,
    <LazyIndexAuthorization />,
    <LazyScheduleWidgetListPage />,
    <LazyScheduleWidgetPage />,
    <IndexScheduleWidgetTranslations />,
    <LazyIndexActions />,
    <LazyIndexMyFiles />,
  ],
});

export default function useIndexNav() {
  return useNavConfigurer<IndexStorage, IndexNavData>('index', actions, navigate);
}
