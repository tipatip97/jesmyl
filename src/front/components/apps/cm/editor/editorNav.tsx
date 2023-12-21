import { EvaIconName } from '../../../../complect/eva-icon/EvaIcon';
import {
  INavigationRouteChildItem,
  INavigationRouteRootItem,
} from '../../../../complect/nav-configurer/Navigation.model';
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
import EditableCompositionMain from './col/compositions/complect/EditableCompositionMain';
import EditableCompositionWatch from './col/compositions/complect/Watch';
import ComAudio from './col/compositions/complect/audio/ComAudio';
import ChordApplicationsRedactor from './col/compositions/complect/chord-applications/ChordApplicationsRedactor';
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
    icon?: EvaIconName;
    iconText?: string;
  }
>[] = [
  {
    phase: ['watch'],
    node: <EditableCompositionWatch />,
    data: {
      icon: 'eye',
    },
  },
  {
    phase: ['applications'],
    node: <ChordApplicationsRedactor />,
    data: {
      icon: 'umbrella',
    },
  },
  {
    phase: ['orders'],
    node: <OrdersRedactor />,
    data: {
      icon: 'grid',
    },
  },
  {
    phase: ['texts'],
    node: <TextsChordsRedactor ccoln="texts" />,
    data: {
      icon: 'file-text',
    },
  },
  {
    phase: ['chords'],
    node: <TextsChordsRedactor ccoln="chords" />,
    data: {
      icon: 'options-2',
    },
  },
  {
    phase: ['audio'],
    node: <ComAudio />,
    data: {
      icon: 'music',
    },
  },
  {
    phase: ['catBinds'],
    node: <CategoryBinds />,
    data: {
      icon: 'book-open',
    },
  },
  {
    phase: ['repeats'],
    node: <ComRepeats />,
    data: {
      icon: 'layers',
    },
  },
  {
    phase: ['translations'],
    node: <ComOnTranslations />,
    data: {
      icon: 'monitor',
    },
  },
  {
    phase: ['main'],
    node: <EditableCompositionMain />,
    data: {
      icon: 'credit-card',
    },
  },
];

export const editComNavPhasePoint: RoutePhasePoint = ['com'];
export const editEventNavPhasePoint: RoutePhasePoint = ['event'];

export const editorRouteItems: INavigationRouteChildItem<
  CmNavData,
  {
    title: string;
    icon: EvaIconName;
  }
>[] = [
  {
    phase: ['cats'],
    node: <EditCategories />,
    accessRule: 'canWatch',
    data: {
      title: 'Категории',
      icon: 'book-open-outline',
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
      icon: 'headphones-outline',
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
    accessRule: 'canEditMeetings',
    data: {
      title: 'События',
      icon: 'calendar-outline',
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
    accessRule: 'canEditChords',
    data: {
      title: 'Редактор аккордов',
      icon: 'options-2-outline',
    },
  },
  {
    phase: ['mp3Rules'],
    node: <Mp3RulesRedactor />,
    accessRule: 'canEditMp3Rules',
    data: {
      title: 'Редактор MP3 правил',
      icon: 'music-outline',
    },
  },
  {
    phase: ['e-e'],
    node: <EERules />,
    accessRule: 'canEditEERules',
    data: {
      title: 'Ё-Е правила',
      icon: 'text-outline',
    },
  },
  {
    phase: ['execs'],
    node: <ExecsVisor />,
    accessRule: 'canWatch',
    data: {
      title: 'Изменения',
      icon: 'pantone-outline',
    },
  },
];

export const editorNav: INavigationRouteRootItem<CmNavData> = {
  phase: ['editor'],
  node: <Editor />,
  title: 'Редактор',
  icon: 'edit',
  accessRule: 'canRedact',
  next: editorRouteItems,
};
