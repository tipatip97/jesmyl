import React, { Suspense } from 'react';
import { NavigationConfig } from '../../../../complect/nav-configurer/Navigation';
import { UseNavAction } from '../../../../complect/nav-configurer/Navigation.model';
import useNavConfigurer from '../../../../complect/nav-configurer/useNavConfigurer';
import { IconBookOpen02StrokeRounded } from '../../../../complect/the-icon/icons/book-open-02';
import { iconPackOfLeftToRightListBullet } from '../../../../complect/the-icon/icons/left-to-right-list-bullet';
import { iconPackOfPlaylist01 } from '../../../../complect/the-icon/icons/playlist-01';
import { RoutePhasePoint } from '../../../router/Router.model';
import { CmNavData, CmStorage } from '../Cm.model';
import { cmExer } from '../CmExer';
import { editorNav } from '../editor/editorNav';

const LazyTranslations = React.lazy(() => import('../translation/Translation'));

const LazyCmTranslationComListContextInCat = React.lazy(() => import('./translations/InCat'));
const LazyCmTranslationComListContextInMarks = React.lazy(() => import('./translations/InMarks'));
const LazyCmTranslationComListContextInMeetings = React.lazy(() => import('./translations/InMeetings'));
const LazyCmTranslationComListContextInSelected = React.lazy(() => import('./translations/InSelected'));
const LazyCmTranslationComListContextInZeroCat = React.lazy(() => import('./translations/InZeroCat'));

const LazyTheCat = React.lazy(() => import('../col/cat/TheCat'));
const LazyLists = React.lazy(() => import('../lists/Lists'));
const LazyMarks = React.lazy(() => import('../lists/marks/Marks'));
const LazyTheMeetings = React.lazy(() => import('../lists/meetings/TheMeetings'));
const LazyTheMeetingsEvent = React.lazy(() => import('../lists/meetings/TheMeetingsEvent'));
const LazySelectedComs = React.lazy(() => import('../lists/selected-coms/SelectedComs'));

export const translationNavPoint: RoutePhasePoint = ['translation'];

export const comNavPhasePoint: RoutePhasePoint = ['com'];
const props = { children: null };

const LazyTheComposition = React.lazy(() => import('../col/com/TheComposition'));
const LazyCmApplication = React.lazy(() => import('../Cm'));

const makeComNext = (render: (props: { children: React.ReactNode }) => JSX.Element) => {
  const next = {
    phase: translationNavPoint,
    node: render({
      children: (
        <Suspense>
          <LazyTranslations />
        </Suspense>
      ),
    }),
  };
  return [
    {
      phase: comNavPhasePoint,
      node: render({
        children: (
          <Suspense>
            <LazyTheComposition />
          </Suspense>
        ),
      }),
      next: [next],
    },
    next,
  ];
};

const navigation: NavigationConfig<CmStorage, CmNavData> = new NavigationConfig('cm', {
  title: 'Песни возрождённых',
  root: content => (
    <Suspense>
      <LazyCmApplication content={content} />
    </Suspense>
  ),
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
      node: (
        <Suspense>
          <LazyTheCat all />
        </Suspense>
      ),
      next: makeComNext(props => <LazyCmTranslationComListContextInZeroCat {...props} />),
    },
    {
      iconSelfPack: iconPackOfPlaylist01,
      phase: ['lists'],
      title: 'Списки',
      node: (
        <Suspense>
          <LazyLists />
        </Suspense>
      ),
      next: [
        {
          phase: ['marks'],
          node: (
            <Suspense>
              <LazyMarks />
            </Suspense>
          ),
          next: makeComNext(props => <LazyCmTranslationComListContextInMarks {...props} />),
        },
        {
          phase: ['cat'],
          node: (
            <Suspense>
              <LazyTheCat />
            </Suspense>
          ),
          next: makeComNext(props => <LazyCmTranslationComListContextInCat {...props} />),
        },
        {
          phase: ['selected'],
          node: (
            <Suspense>
              <LazySelectedComs />
            </Suspense>
          ),
          slideBackOn: navData => !navData.selectedComws?.length,
          next: makeComNext(props => <LazyCmTranslationComListContextInSelected {...props} />),
        },
        {
          phase: ['meetings'],
          node: (
            <Suspense>
              <LazyTheMeetings />
            </Suspense>
          ),
          next: [
            {
              phase: ['event'],
              node: (
                <Suspense>
                  <LazyTheMeetingsEvent />
                </Suspense>
              ),
              next: makeComNext(props => <LazyCmTranslationComListContextInMeetings {...props} />),
            },
          ],
        },
      ],
    },
    editorNav,
  ],
  lazies: [
    <LazyTranslations />,
    <LazyTheComposition />,
    <LazyCmApplication content />,
    <LazyTheCat all />,
    <LazyCmTranslationComListContextInZeroCat {...props} />,
    <LazyLists />,
    <LazyMarks />,
    <LazyCmTranslationComListContextInMarks {...props} />,
    <LazyTheCat />,
    <LazyCmTranslationComListContextInCat {...props} />,
    <LazySelectedComs />,
    <LazyCmTranslationComListContextInSelected {...props} />,
    <LazyTheMeetings />,
    <LazyTheMeetingsEvent />,
    <LazyCmTranslationComListContextInMeetings {...props} />,
  ],
});

const actions: UseNavAction[] = [];

export default function useCmNav() {
  return useNavConfigurer<CmStorage, CmNavData>('cm', actions, navigation);
}
