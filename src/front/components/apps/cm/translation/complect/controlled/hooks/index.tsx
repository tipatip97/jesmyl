import { useDispatch, useSelector } from 'react-redux';
import { css } from 'styled-components';
import { renderComponentInNewWindow } from '../../../../../../../..';
import { styledComponentsObserver } from '../../../../../../../complect/StyledComponentsObserver';
import { RootState } from '../../../../../../../shared/store';
import di from '../../../../Cm.store';
import useCmNav from '../../../../base/useCmNav';
import { Com } from '../../../../col/com/Com';
import { useTranslation } from '../../../useTranslation';
import TranslationScreen from '../TranslationScreen';
import { useCmTranslationConfigs } from './configs';

const translationUpdatesSelector = (state: RootState) => state.cm.translationUpdates;

export type ControlledTranslationStateRef = { current: ReturnType<typeof useControlledTranslation> };

export function useControlledTranslation() {
  useSelector(translationUpdatesSelector);
  const dispatch = useDispatch();
  const { configs, currWin, currentConfigi, windows } = useCmTranslationConfigs();

  const { setAppRouteData } = useCmNav();
  const setCom = (com: Com) => setAppRouteData({ ccomw: com.wid });

  const state = {
    ...useTranslation(),
    configs,
    currWin,
    currentConfigi,
    closeTranslation: () => {
      windows.forEach(win => win?.close());
      return false;
    },
    watchTranslation: (isSetFirstCom = false, windowi?: number) => {
      if (configs.length === windows.length && windowi === undefined) return;

      const watch = (windowi: number) =>
        renderComponentInNewWindow(
          win => {
            windows[windowi] = win;
            if (configs[windowi]) win.document.title = configs[windowi].title;

            dispatch(di.riseUpTranslationUpdates());
            const style = win.document.createElement('style');
            win.document.body.appendChild(style);
            style.innerText = newWindowBaseStyle;

            const muteObserver = styledComponentsObserver.listen(styleText => style.append(styleText));

            const closeWin = () => win.close();

            window.addEventListener('unload', closeWin);
            win.addEventListener('unload', () => {
              muteObserver();
              window.removeEventListener('unload', closeWin);
              windows[windowi] = null;
              dispatch(di.riseUpTranslationUpdates());
            });

            return (
              <TranslationScreen
                screeni={windowi}
                win={win}
                canShowLimits
              />
            );
          },
          undefined,
          'cm-translation-window' + windowi,
          `top=${100 * windowi},left=30000,width=400,height=200`,
        );

      if (windowi !== undefined) {
        watch(windowi);
        return;
      }

      if (isSetFirstCom) {
        const [comList] = state.comPack;
        if (comList) setCom(comList[0]);
      }

      const len = configs.length - windows.length;

      for (let windowi = 0; windowi < len; windowi++) watch(windowi);
    },
  };

  return state;
}

const newWindowBaseStyle =
  '' +
  css`
    body {
      margin: 0;
      padding: 0;
      user-select: none;
    }
  `;
