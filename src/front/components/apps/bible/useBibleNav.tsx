import React, { Suspense } from 'react';
import { CurrentForceViweAppContext } from '../+complect/translations/Translation.contexts';
import { NavigationConfig } from '../../../complect/nav-configurer/Navigation';
import { UseNavAction } from '../../../complect/nav-configurer/Navigation.model';
import useNavConfigurer from '../../../complect/nav-configurer/useNavConfigurer';
import { IconBook02StrokeRounded } from '../../../complect/the-icon/icons/book-02';
import { iconPackOfComputer } from '../../../complect/the-icon/icons/computer';
import { iconPackOfFile02 } from '../../../complect/the-icon/icons/file-02';
import { iconPackOfFileSearch } from '../../../complect/the-icon/icons/file-search';
import { BibleStorage } from './model';

const LazyBibleTranslationControlled = React.lazy(() => import('./translations/BibleTranslationControlled'));
const LazyBibleReaderCurrentBookPage = React.lazy(() => import('./reader/book/CurrentBookPage'));
const LazyBibleReaderSearchPage = React.lazy(() => import('./reader/search/SearchPage'));
const LazyBibleTranslatesContextProvider = React.lazy(() => import('./translates/TranslatesContext'));

const navigation: NavigationConfig<BibleStorage, {}> = new NavigationConfig('bible', {
  title: 'Библия',
  root: content => <>{content}</>,
  rootPhase: 'chapter',
  Icon: IconBook02StrokeRounded,
  routes: [
    {
      iconSelfPack: iconPackOfFile02,
      phase: ['chapter'],
      title: '',
      node: (
        <Suspense>
          <LazyBibleReaderCurrentBookPage />
        </Suspense>
      ),
    },
    {
      iconSelfPack: iconPackOfFileSearch,
      phase: ['search'],
      title: '',
      node: (
        <Suspense>
          <LazyBibleReaderSearchPage />
        </Suspense>
      ),
    },
    {
      iconSelfPack: iconPackOfComputer,
      phase: ['translation'],
      title: '',
      node: (
        <Suspense>
          <LazyBibleTranslatesContextProvider>
            <Suspense>
              <CurrentForceViweAppContext.Provider value="bible">
                <LazyBibleTranslationControlled
                  head
                  headTitle="Библия"
                  // useNav={useBibleNav as never}
                />
              </CurrentForceViweAppContext.Provider>
            </Suspense>
          </LazyBibleTranslatesContextProvider>
        </Suspense>
      ),
    },
  ],
  lazies: [
    <LazyBibleReaderCurrentBookPage />,
    <LazyBibleReaderSearchPage />,
    <LazyBibleTranslatesContextProvider />,
    <LazyBibleTranslationControlled
      head
      headTitle="Библия"
      // useNav={useBibleNav as never}
    />,
  ],
});

const actions: UseNavAction[] = [];

export default function useBibleNav() {
  return useNavConfigurer<BibleStorage, {}>('bible', actions, navigation);
}
