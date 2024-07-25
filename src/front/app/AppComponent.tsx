import { useEffect, useState } from 'react';
import JesmylLogo from '../complect/jesmyl-logo/JesmylLogo';
import useToast from '../complect/modal/useToast';
import { IconArrowShrink02StrokeRounded } from '../complect/the-icon/icons/arrow-shrink-02';
import listenThemeChanges from '../complect/theme-changer';
import { useFullScreen } from '../complect/useFullscreen';
import { useAppFontFamilyAtom, useCurrentApp } from '../components/index/molecules';
import { applyFontFamilyFromMyFiles } from '../components/index/parts/actions/files/utils/set-font-family-effect';
import { useIsReadyRouter } from '../components/router/atoms';
import './App.scss';
import AppRouter from './AppRouter';

listenThemeChanges();

const emptyArr: [] = [];

export default function AppComponent() {
  const currentApp = useCurrentApp();
  const [appFontFamily] = useAppFontFamilyAtom();
  const [isFullscreen, switchFullscreen] = useFullScreen();
  const [keyboardOpen, setKeyboardOpen] = useState(false);
  // const { goBack, registerBackAction } = navConfigurers[currentApp]();
  const [errorToastNode, errorToast] = useToast({ mood: 'ko' });
  // const { jumpToApp } = useApps(errorToast);
  const [isShowLogo, setIsShowLogo] = useState(true);
  const [, setIsReady] = useIsReadyRouter();

  // useEffect(() => {
  //   const onKeyDown = (event: KeyboardEvent) => {
  //     event.code === 'Escape' && switchFullscreen(false);
  //     if (event.code === 'ArrowLeft' && event.altKey) {
  //       event.preventDefault();
  //       goBack();
  //     }
  //   };

  //   window.addEventListener('keydown', onKeyDown);

  //   return () => window.removeEventListener('keydown', onKeyDown);
  // }, [goBack, switchFullscreen]);

  useEffect(() => {
    if (appFontFamily == null) return;
    applyFontFamilyFromMyFiles(appFontFamily, window);
    document.body.style.fontFamily = '"' + appFontFamily + '"';

    return () => {
      document.body.style.fontFamily = '';
    };
  }, [appFontFamily]);

  useEffect(() => {
    return hookEffectLine().setTimeout(setIsShowLogo, 1200, false).setTimeout(setIsReady, 100, true).effect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, emptyArr);

  // useEffect(() => {
  //   (async () => {
  //     if (window.location.href.startsWith(jesmylHostName)) {
  //       const decodeds = crossApplicationLinkCoder.decode(window.location.href);
  //       if (decodeds) {
  //         const { appName, key, value } = decodeds;
  //         if (appName && key && value !== undefined) {
  //           jumpToApp(appName, key as never, value);
  //         }
  //       }
  //     }
  //   })();
  // }, [jumpToApp]);

  // const onOpen = useCallback((close: () => boolean) => registerBackAction(() => close()), [registerBackAction]);
  // const keyboardProps = useMemo(() => {
  //   return {
  //     onFocus: (input: KeyboardInputStorage | nil) => {
  //       setKeyboardOpen(true);
  //       registerBackAction(() => !input || input.blur());
  //     },
  //     onBlur: () => {
  //       setKeyboardOpen(false);
  //     },
  //   };
  // }, [registerBackAction]);

  return (
    <div className={`above-container ${keyboardOpen ? 'keyboard-open' : ''}`}>
      {errorToastNode}
      {isShowLogo && (
        <div className="jesmyl-smile-box flex center absolute full-width full-height z-index:5">
          <JesmylLogo className="no-fade-in-effect" />
        </div>
      )}
      <div className={`application-container app_${currentApp}${isFullscreen ? ' fullscreen-mode' : ''}`}>
        <IconArrowShrink02StrokeRounded
          className="collapse-fullscreen-button pointer"
          onClick={() => switchFullscreen(false)}
        />
        {/* <ABSOLUTE__FLOAT__POPUP onOpen={onOpen} /> */}
        <AppRouter />
        {/* <AppFooter /> */}
      </div>
      {/* <KEYBOARD_FLASH {...keyboardProps} /> */}
    </div>
  );
}
