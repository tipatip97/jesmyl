import {
  INavigationRouteChildItem,
  INavigationRouteRootItem,
} from '../../../../complect/nav-configurer/Navigation.model';
import { iconPackOfArrange } from '../../../../complect/the-icon/icons/arrange';
import { iconPackOfBookOpen01 } from '../../../../complect/the-icon/icons/book-open-01';
import { IconBookOpen02StrokeRounded } from '../../../../complect/the-icon/icons/book-open-02';
import { iconPackOfCalendar02 } from '../../../../complect/the-icon/icons/calendar-02';
import { IconComputerStrokeRounded } from '../../../../complect/the-icon/icons/computer';
import { IconDistributeVerticalTopStrokeRounded } from '../../../../complect/the-icon/icons/distribute-vertical-top';
import { iconPackOfEdit01 } from '../../../../complect/the-icon/icons/edit-01';
import { iconPackOfEdit02 } from '../../../../complect/the-icon/icons/edit-02';
import { iconPackOfHeadphones } from '../../../../complect/the-icon/icons/headphones';
import { IconLayers01StrokeRounded } from '../../../../complect/the-icon/icons/layers-01';
import { iconPackOfMusicNote01 } from '../../../../complect/the-icon/icons/music-note-01';
import { IconPlaylist03StrokeRounded } from '../../../../complect/the-icon/icons/playlist-03';
import { IconSchoolReportCardStrokeRounded } from '../../../../complect/the-icon/icons/school-report-card';
import { iconPackOfText } from '../../../../complect/the-icon/icons/text';
import { IconTextVerticalAlignmentStrokeRounded } from '../../../../complect/the-icon/icons/text-vertical-alignment';
import { IconUmbrellaStrokeRounded } from '../../../../complect/the-icon/icons/umbrella';
import { IconViewStrokeRounded } from '../../../../complect/the-icon/icons/view';
import { IconVoiceStrokeRounded } from '../../../../complect/the-icon/icons/voice';
import { TheIconType, TheIconSelfPack } from '../../../../complect/the-icon/model';
import { RoutePhasePoint } from '../../../router/Router.model';
import { CmNavData } from '../Cm.model';
import TheComposition from '../col/com/TheComposition';
import Translations from '../translation/Translation';
import Editor from './Editor';
import ChordRedactor from './chord-redactor/ChordRedactor';
import EditCategories from './col/categories/EditCategories';
import EditCategory from './col/categories/EditCategory';
import EditComposition from './col/compositions/EditComposition';
import EditCompositions from './col/compositions/EditCompositions';
import CategoryBinds from './col/compositions/complect/CategoryBinds';
import ComOnTranslations from './col/compositions/complect/ComOnTranslations';
import EditableCompositionWatch from './col/compositions/complect/Watch';
import ComAudio from './col/compositions/complect/audio/ComAudio';
import ChordApplicationsRedactor from './col/compositions/complect/chord-applications/ChordApplicationsRedactor';
import EditableCompositionMain from './col/compositions/complect/main/EditableCompositionMain';
import OrdersRedactor from './col/compositions/complect/orders/OrdersRedactor';
import TextsChordsRedactor from './col/compositions/complect/texts_chords-redactor/TextsChordsRedactor';
import ComRepeats from './col/compositions/repeats/ComRepeats';
import EERules from './ee-rules/EERules';
import ExecsVisor from './execs/ExecsVisor';
import EditMeetings from './meetings/EditMeetings';
import EditMeetingsEvent from './meetings/EditMeetingsEvent';
import Mp3RulesRedactor from './mp3-rule-redactor/Mp3RulesRedactor';

export const editCompositionNavs: INavigationRouteChildItem<
  CmNavData,
  {
    Icon?: TheIconType;
    iconText?: string;
  }
>[] = [
  {
    phase: ['watch'],
    node: <EditableCompositionWatch />,
    data: {
      Icon: IconViewStrokeRounded,
    },
  },
  {
    phase: ['applications'],
    node: <ChordApplicationsRedactor />,
    data: {
      Icon: IconUmbrellaStrokeRounded,
    },
  },
  {
    phase: ['orders'],
    node: <OrdersRedactor />,
    data: {
      Icon: IconDistributeVerticalTopStrokeRounded,
    },
  },
  {
    phase: ['texts'],
    node: <TextsChordsRedactor ccoln="texts" />,
    data: {
      Icon: IconTextVerticalAlignmentStrokeRounded,
    },
  },
  {
    phase: ['chords'],
    node: <TextsChordsRedactor ccoln="chords" />,
    data: {
      Icon: IconPlaylist03StrokeRounded,
    },
  },
  {
    phase: ['audio'],
    node: <ComAudio />,
    data: {
      Icon: IconVoiceStrokeRounded,
    },
  },
  {
    phase: ['catBinds'],
    node: <CategoryBinds />,
    data: {
      Icon: IconBookOpen02StrokeRounded,
    },
  },
  {
    phase: ['repeats'],
    node: <ComRepeats />,
    data: {
      Icon: IconLayers01StrokeRounded,
    },
  },
  {
    phase: ['translations'],
    node: <ComOnTranslations />,
    data: {
      Icon: IconComputerStrokeRounded,
    },
  },
  {
    phase: ['main'],
    node: <EditableCompositionMain />,
    data: {
      Icon: IconSchoolReportCardStrokeRounded,
    },
  },
];

export const editComNavPhasePoint: RoutePhasePoint = ['com'];
export const editEventNavPhasePoint: RoutePhasePoint = ['event'];

export const editorRouteItems: INavigationRouteChildItem<
  CmNavData,
  {
    title: string;
    iconSelfPack: TheIconSelfPack;
  }
>[] = [
  {
    phase: ['cats'],
    node: <EditCategories />,
    accessLevel: 100,
    data: {
      title: 'Категории',
      iconSelfPack: iconPackOfBookOpen01,
    },
    next: [
      {
        phase: ['cat'],
        node: <EditCategory />,
      },
    ],
  },
  {
    phase: ['coms'],
    node: <EditCompositions />,
    data: {
      title: 'Песни',
      iconSelfPack: iconPackOfHeadphones,
    },
    next: [
      {
        phase: editComNavPhasePoint,
        node: props => <EditComposition {...props} />,
        next: editCompositionNavs,
      },
    ],
  },
  {
    phase: ['meetings'],
    node: <EditMeetings />,
    accessLevel: 50,
    data: {
      title: 'События',
      iconSelfPack: iconPackOfCalendar02,
    },
    next: [
      {
        phase: editEventNavPhasePoint,
        node: <EditMeetingsEvent />,
        next: [
          {
            phase: ['com'],
            node: <TheComposition />,
            next: [
              {
                phase: ['translation'],
                node: <Translations />,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    phase: ['chord'],
    node: <ChordRedactor />,
    accessLevel: 50,
    data: {
      title: 'Редактор аккордов',
      iconSelfPack: iconPackOfArrange,
    },
  },
  {
    phase: ['mp3Rules'],
    node: <Mp3RulesRedactor />,
    accessLevel: 80,
    data: {
      title: 'Редактор MP3 правил',
      iconSelfPack: iconPackOfMusicNote01,
    },
  },
  {
    phase: ['e-e'],
    node: <EERules />,
    accessLevel: 100,
    data: {
      title: 'Ё-Е правила',
      iconSelfPack: iconPackOfText,
    },
  },
  {
    phase: ['execs'],
    node: <ExecsVisor />,
    accessLevel: 100,
    data: {
      title: 'Изменения',
      iconSelfPack: iconPackOfEdit01,
    },
  },
];

export const editorNav: INavigationRouteRootItem<CmNavData> = {
  phase: ['editor'],
  node: <Editor />,
  title: 'Редактор',
  iconSelfPack: iconPackOfEdit02,
  accessLevel: 50,
  next: editorRouteItems,
};
