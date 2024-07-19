import { useCallback, useContext } from 'react';
import { css } from 'styled-components';
import { renderComponentInNewWindow } from '../../../../..';
import { CurrentForceViweAppContext } from '../Translation.contexts';
import { TranslationScreen } from '../TranslationScreen';
import { useGetScreenTranslationConfig, useScreenTranslationConfigs } from './configs';
import { useScreenTranslationWindows, useUpdateScreenTranslationWindows } from './windows';

export const useWatchScreenTranslations = () => {
  const getCurrentConfig = useGetScreenTranslationConfig();
  const windows = useScreenTranslationWindows();
  const configs = useScreenTranslationConfigs();
  const updateWindows = useUpdateScreenTranslationWindows();
  const forceViewApp = useContext(CurrentForceViweAppContext);

  return useCallback(() => {
    if (configs.length === windows.length) return;
    const newWindows = [...windows];

    const watch = (windowi: number) =>
      renderComponentInNewWindow(
        win => {
          newWindows[windowi] = win;
          win.document.title = getCurrentConfig(windowi)?.title ?? win.document.title;

          const style = win.document.createElement('style');
          win.document.body.appendChild(style);
          style.innerHTML = newWindowBaseStyle;

          const closeWin = () => win.close();

          window.addEventListener('unload', closeWin);
          win.addEventListener('unload', () => {
            window.removeEventListener('unload', closeWin);
            const newWindows = [...windows];

            newWindows[windowi] = null;
            updateWindows(newWindows);
          });

          return (
            <TranslationScreen
              screeni={windowi}
              win={win}
              forceViewApp={forceViewApp}
            />
          );
        },
        undefined,
        'cm-translation-window' + windowi,
        `top=${100 * windowi},left=30000,width=400,height=200`,
      );

    const len = configs.length - windows.length;

    for (let windowi = 0; windowi < len; windowi++) watch(windowi);

    updateWindows(newWindows);
  }, [configs.length, forceViewApp, getCurrentConfig, updateWindows, windows]);
};

const newWindowBaseStyle =
  '' +
  css`
    body {
      margin: 0;
      padding: 0;
      user-select: none;
    }
  `;
