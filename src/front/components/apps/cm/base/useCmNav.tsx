import { NavigationConfig } from '../../../../complect/nav-configurer/Navigation';
import { INavigationRouteChildItem, UseNavAction } from '../../../../complect/nav-configurer/Navigation.model';
import useNavConfigurer from '../../../../complect/nav-configurer/useNavConfigurer';
import { IconBookOpen02StrokeRounded } from '../../../../complect/the-icon/icons/book-open-02';
import { iconPackOfLeftToRightListBullet } from '../../../../complect/the-icon/icons/left-to-right-list-bullet';
import { iconPackOfPlaylist01 } from '../../../../complect/the-icon/icons/playlist-01';
import { RoutePhasePoint } from '../../../router/Router.model';
import CmApplication from '../Cm';
import { CmNavData, CmStorage } from '../Cm.model';
import { cmExer } from '../CmExer';
import TheCat from '../col/cat/TheCat';
import TheComposition from '../col/com/TheComposition';
import { editorNav } from '../editor/editorNav';
import Lists from '../lists/Lists';
import Marks from '../lists/marks/Marks';
import TheMeetings from '../lists/meetings/TheMeetings';
import TheMeetingsEvent from '../lists/meetings/TheMeetingsEvent';
import SelectedComs from '../lists/selected-coms/SelectedComs';
import Translations from '../translation/Translation';

export const translationNavPoint: RoutePhasePoint = ['translation'];
const translationNav: INavigationRouteChildItem<CmNavData> = {
  phase: translationNavPoint,
  node: <Translations />,
};

export const comNavPhasePoint: RoutePhasePoint = ['com'];

const comNav: INavigationRouteChildItem<CmNavData> = {
  phase: comNavPhasePoint,
  node: <TheComposition />,
  next: [translationNav],
};

const comNext = [comNav, translationNav];

const navigation: NavigationConfig<CmStorage, CmNavData> = new NavigationConfig('cm', {
  title: 'Песни возрождённых',
  root: content => <CmApplication content={content} />,
  rootPhase: 'all',
  Icon: IconBookOpen02StrokeRounded,
  exer: cmExer,
  jumpByLink: {
    selectedComws: ({ value: selectedComws, jump }) =>
      jump({
        path: ['lists', 'selected'],
        data: { selectedComws },
      }),
    ccomw: ({ value: ccomw, jump }) => jump({ path: ['all', 'com'], data: { ccomw } }),
  },
  routes: [
    {
      iconSelfPack: iconPackOfLeftToRightListBullet,
      phase: ['all'],
      title: 'Все',
      node: <TheCat all />,
      next: [comNav],
    },
    {
      iconSelfPack: iconPackOfPlaylist01,
      phase: ['lists'],
      title: 'Списки',
      node: <Lists />,
      next: [
        {
          phase: ['marks'],
          node: <Marks />,
          next: [...comNext],
        },
        {
          phase: ['cat'],
          node: <TheCat />,
          next: [...comNext],
        },
        {
          phase: ['selected'],
          node: <SelectedComs />,
          slideBackOn: navData => !navData.selectedComws?.length,
          next: [...comNext],
        },
        {
          phase: ['meetings'],
          node: <TheMeetings />,
          next: [
            {
              phase: ['event'],
              node: <TheMeetingsEvent />,
              next: [...comNext],
            },
          ],
        },
      ],
    },
    editorNav,
  ],
});

const actions: UseNavAction[] = [];

export default function useCmNav() {
  return useNavConfigurer<CmStorage, CmNavData>('cm', actions, navigation);
}
