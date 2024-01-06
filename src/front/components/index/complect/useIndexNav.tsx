import modalService from '../../../complect/modal/Modal.service';
import { NavigationConfig } from '../../../complect/nav-configurer/Navigation';
import { UseNavAction } from '../../../complect/nav-configurer/Navigation.model';
import useNavConfigurer from '../../../complect/nav-configurer/useNavConfigurer';
import serviceMaster from '../../../complect/service/serviceMaster';
import { Index } from '../Index';
import { IndexNavData, IndexStorage } from '../Index.model';
import IndexActions from '../parts/actions/Actions';
import IndexMyFiles from '../parts/actions/files/MyFiles';
import { IndexAuthorization } from '../parts/login/IndexAuthorization';
import Main from '../parts/main/IndexMain';
import { IndexConsole } from '../parts/settings/Console';
import IndexSettings from '../parts/settings/Settings';
import ScheduleWidgetAlarmScheduleList from './AlarmScheduleList';

const actions: UseNavAction[] = [];
const navigate = new NavigationConfig<IndexStorage, IndexNavData>('index', {
  title: 'Index',
  root: content => <Index content={content} />,
  rootPhase: null,
  jumpByLink: {
    swInvite: (value, key, alt) => {
      serviceMaster('index')<string>(key, value)
        .then(text => modalService.alert(text, 'Успех'))
        .catch(errorMessage => modalService.alert(errorMessage));

      return alt.Reject;
    },
    schw: schw => ({ data: { schw }, path: ['other', 'schedules'] }),
  },
  routes: [
    {
      phase: ['other'],
      title: 'Другое',
      icon: 'arrow-circle-right',
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
