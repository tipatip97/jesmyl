import { NavigationConfig } from '../../../complect/nav-configurer/Navigation';
import { UseNavAction } from '../../../complect/nav-configurer/Navigation.model';
import useNavConfigurer from '../../../complect/nav-configurer/useNavConfigurer';
import serviceMaster from '../../../complect/service/serviceMaster';
import { iconPackOfCircleArrowRight02 } from '../../../complect/the-icon/icons/circle-arrow-right-02';
import { RoutePhasePoint } from '../../router/Router.model';
import { Index } from '../Index';
import { IndexNavData, IndexStorage } from '../Index.model';
import IndexActions from '../parts/actions/Actions';
import IndexMyFiles from '../parts/actions/files/MyFiles';
import { IndexAuthorization } from '../parts/login/IndexAuthorization';
import Main from '../parts/main/IndexMain';
import { IndexConsole } from '../parts/settings/Console';
import IndexSettings from '../parts/settings/Settings';
import ScheduleWidgetAlarmScheduleList from './AlarmScheduleList';
import { IndexScheduleWidgetTranslations } from './translations/LiveTranslations';

export const indexScheduleWidgetTranslationPagePhase: RoutePhasePoint = ['translation'];

const actions: UseNavAction[] = [];
const navigate = new NavigationConfig<IndexStorage, IndexNavData>('index', {
  title: 'Index',
  root: content => <Index content={content} />,
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
      node: <Main />,
      next: [
        {
          phase: ['settings'],
          node: <IndexSettings />,
          next: [
            {
              phase: ['console'],
              node: <IndexConsole />,
            },
          ],
        },
        {
          phase: ['login'],
          node: <IndexAuthorization />,
        },
        {
          phase: ['schedules'],
          node: <ScheduleWidgetAlarmScheduleList />,
          next: [
            {
              phase: indexScheduleWidgetTranslationPagePhase,
              node: <IndexScheduleWidgetTranslations />,
            },
          ],
        },
        {
          phase: ['actions'],
          node: <IndexActions />,
          next: [
            {
              phase: ['files'],
              node: <IndexMyFiles />,
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
