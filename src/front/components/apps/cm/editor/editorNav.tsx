import React from 'react';
import {
  INavigationRouteChildItem,
  INavigationRouteRootItem,
} from '../../../../complect/nav-configurer/Navigation.model';
import { iconPackOfArrange } from '../../../../complect/the-icon/icons/arrange';
import { iconPackOfBookOpen01 } from '../../../../complect/the-icon/icons/book-open-01';
import { iconPackOfBookOpen02 } from '../../../../complect/the-icon/icons/book-open-02';
import { iconPackOfCalendar02 } from '../../../../complect/the-icon/icons/calendar-02';
import { iconPackOfComputer } from '../../../../complect/the-icon/icons/computer';
import { iconPackOfDistributeVerticalTop } from '../../../../complect/the-icon/icons/distribute-vertical-top';
import { iconPackOfEdit01 } from '../../../../complect/the-icon/icons/edit-01';
import { iconPackOfEdit02 } from '../../../../complect/the-icon/icons/edit-02';
import { iconPackOfHeadphones } from '../../../../complect/the-icon/icons/headphones';
import { iconPackOfLayers01 } from '../../../../complect/the-icon/icons/layers-01';
import { iconPackOfMusicNote01 } from '../../../../complect/the-icon/icons/music-note-01';
import { iconPackOfPlaylist03 } from '../../../../complect/the-icon/icons/playlist-03';
import { iconPackOfSchoolReportCard } from '../../../../complect/the-icon/icons/school-report-card';
import { iconPackOfText } from '../../../../complect/the-icon/icons/text';
import { iconPackOfTextVerticalAlignment } from '../../../../complect/the-icon/icons/text-vertical-alignment';
import { iconPackOfUmbrella } from '../../../../complect/the-icon/icons/umbrella';
import { iconPackOfView } from '../../../../complect/the-icon/icons/view';
import { iconPackOfVoice } from '../../../../complect/the-icon/icons/voice';
import { TheIconSelfPack } from '../../../../complect/the-icon/model';
import { RoutePhasePoint } from '../../../router/Router.model';
import { CmNavData } from '../Cm.model';

const LazyTheComposition = React.lazy(() => import('../col/com/TheComposition'));
const LazyEditor = React.lazy(() => import('./Editor'));
const LazyChordRedactor = React.lazy(() => import('./chord-redactor/ChordRedactor'));
const LazyEditCategories = React.lazy(() => import('./col/categories/EditCategories'));
const LazyEditCategory = React.lazy(() => import('./col/categories/EditCategory'));
const LazyEditComposition = React.lazy(() => import('./col/compositions/EditComposition'));
const LazyEditCompositions = React.lazy(() => import('./col/compositions/EditCompositions'));
const LazyCategoryBinds = React.lazy(() => import('./col/compositions/complect/CategoryBinds'));
const LazyComOnTranslations = React.lazy(() => import('./col/compositions/complect/ComOnTranslations'));
const LazyEditableCompositionWatch = React.lazy(() => import('./col/compositions/complect/Watch'));
const LazyComAudio = React.lazy(() => import('./col/compositions/complect/audio/ComAudio'));
const LazyChordApplicationsRedactor = React.lazy(
  () => import('./col/compositions/complect/chord-applications/ChordApplicationsRedactor'),
);
const LazyEditableCompositionMain = React.lazy(
  () => import('./col/compositions/complect/main/EditableCompositionMain'),
);
const LazyOrdersRedactor = React.lazy(() => import('./col/compositions/complect/orders/OrdersRedactor'));
const LazyTextsChordsRedactor = React.lazy(
  () => import('./col/compositions/complect/texts_chords-redactor/TextsChordsRedactor'),
);
const LazyComRepeats = React.lazy(() => import('./col/compositions/repeats/ComRepeats'));
const LazyEERules = React.lazy(() => import('./ee-rules/EERules'));
const LazyExecsVisor = React.lazy(() => import('./execs/ExecsVisor'));
const LazyEditMeetings = React.lazy(() => import('./meetings/EditMeetings'));
const LazyEditMeetingsEvent = React.lazy(() => import('./meetings/EditMeetingsEvent'));
const LazyMp3RulesRedactor = React.lazy(() => import('./mp3-rule-redactor/Mp3RulesRedactor'));

export const editCompositionNavs: INavigationRouteChildItem<
  CmNavData,
  {
    iconPack?: TheIconSelfPack;
    iconText?: string;
  }
>[] = [
  {
    phase: ['watch'],
    node: <LazyEditableCompositionWatch />,
    data: {
      iconPack: iconPackOfView,
    },
  },
  {
    phase: ['applications'],
    node: <LazyChordApplicationsRedactor />,
    data: {
      iconPack: iconPackOfUmbrella,
    },
  },
  {
    phase: ['orders'],
    node: <LazyOrdersRedactor />,
    data: {
      iconPack: iconPackOfDistributeVerticalTop,
    },
  },
  {
    phase: ['texts'],
    node: <LazyTextsChordsRedactor ccoln="texts" />,
    data: {
      iconPack: iconPackOfTextVerticalAlignment,
    },
  },
  {
    phase: ['chords'],
    node: <LazyTextsChordsRedactor ccoln="chords" />,
    data: {
      iconPack: iconPackOfPlaylist03,
    },
  },
  {
    phase: ['audio'],
    node: <LazyComAudio />,
    data: {
      iconPack: iconPackOfVoice,
    },
  },
  {
    phase: ['catBinds'],
    node: <LazyCategoryBinds />,
    data: {
      iconPack: iconPackOfBookOpen02,
    },
  },
  {
    phase: ['repeats'],
    node: <LazyComRepeats />,
    data: {
      iconPack: iconPackOfLayers01,
    },
  },
  {
    phase: ['translations'],
    node: <LazyComOnTranslations />,
    data: {
      iconPack: iconPackOfComputer,
    },
  },
  {
    phase: ['main'],
    node: <LazyEditableCompositionMain />,
    data: {
      iconPack: iconPackOfSchoolReportCard,
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
    node: <LazyEditCategories />,
    accessLevel: 100,
    data: {
      title: 'Категории',
      iconSelfPack: iconPackOfBookOpen01,
    },
    next: [
      {
        phase: ['cat'],
        node: <LazyEditCategory />,
      },
    ],
  },
  {
    phase: ['coms'],
    node: <LazyEditCompositions />,
    data: {
      title: 'Песни',
      iconSelfPack: iconPackOfHeadphones,
    },
    next: [
      {
        phase: editComNavPhasePoint,
        node: props => <LazyEditComposition {...props} />,
        next: editCompositionNavs,
      },
    ],
  },
  {
    phase: ['meetings'],
    node: <LazyEditMeetings />,
    accessLevel: 50,
    data: {
      title: 'События',
      iconSelfPack: iconPackOfCalendar02,
    },
    next: [
      {
        phase: editEventNavPhasePoint,
        node: <LazyEditMeetingsEvent />,
        next: [
          {
            phase: ['com'],
            node: <LazyTheComposition />,
          },
        ],
      },
    ],
  },
  {
    phase: ['chord'],
    node: <LazyChordRedactor />,
    accessLevel: 50,
    data: {
      title: 'Редактор аккордов',
      iconSelfPack: iconPackOfArrange,
    },
  },
  {
    phase: ['mp3Rules'],
    node: <LazyMp3RulesRedactor />,
    accessLevel: 80,
    data: {
      title: 'Редактор MP3 правил',
      iconSelfPack: iconPackOfMusicNote01,
    },
  },
  {
    phase: ['e-e'],
    node: <LazyEERules />,
    accessLevel: 100,
    data: {
      title: 'Ё-Е правила',
      iconSelfPack: iconPackOfText,
    },
  },
  {
    phase: ['execs'],
    node: <LazyExecsVisor />,
    accessLevel: 100,
    data: {
      title: 'Изменения',
      iconSelfPack: iconPackOfEdit01,
    },
  },
];

export const editorNav: INavigationRouteRootItem<CmNavData> = {
  phase: ['editor'],
  node: <LazyEditor />,
  title: 'Редактор',
  iconSelfPack: iconPackOfEdit02,
  accessLevel: 50,
  next: editorRouteItems,
};
