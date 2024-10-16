import { SetStateAction, useEffect, useMemo, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { ABSOLUTE__FLOAT__POPUP } from '../complect/absolute-popup/useAbsoluteFloatPopup';
import { contextCreator } from '../complect/contextCreator';
import JesmylLogo from '../complect/jesmyl-logo/JesmylLogo';
import { KEYBOARD_FLASH } from '../complect/keyboard/KeyboardInput';
import { KeyboardInputStorage } from '../complect/keyboard/KeyboardStorage';
import { MyLib } from '../complect/my-lib/MyLib';
import { IconArrowShrink02StrokeRounded } from '../complect/the-icon/icons/arrow-shrink-02';
import listenThemeChanges from '../complect/theme-changer';
import { useFullScreen } from '../complect/useFullscreen';
import { useAppFontFamilyAtom, useCurrentApp } from '../components/index/molecules';
import { applyFontFamilyFromMyFiles } from '../components/index/parts/actions/files/utils/set-font-family-effect';
import { IndexAdvertisingReminder } from '../components/index/parts/advertising/Reminder';
import { useIsReadyRouter } from '../components/router/atoms';
import './App.scss';

listenThemeChanges();

const emptyArr: [] = [];
const emptyDict = {};

const [SetAppRootAnchorNodesContext, useSetAppRootAnchorNodesContext] = contextCreator(
  (_nodes: SetStateAction<Record<string, React.ReactNode>>) => {},
);

export { useSetAppRootAnchorNodesContext };

export default function AppComponent() {
  const currentApp = useCurrentApp();
  const [appFontFamily] = useAppFontFamilyAtom();
  const [isFullscreen, switchFullscreen] = useFullScreen();
  const [keyboardOpen, setKeyboardOpen] = useState(false);
  const [isShowLogo, setIsShowLogo] = useState(true);
  const [, setIsReady] = useIsReadyRouter();
  const [rootAnchorNodes, setRootAnchorNodes] = useState<Record<string, React.ReactNode>>(emptyDict);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      event.code === 'Escape' && switchFullscreen(false);
    };

    window.addEventListener('keydown', onKeyDown);

    return () => window.removeEventListener('keydown', onKeyDown);
  }, [switchFullscreen]);

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

  const keyboardProps = useMemo(() => {
    return {
      onFocus: (input: KeyboardInputStorage | nil) => {
        setKeyboardOpen(true);
      },
      onBlur: () => {
        setKeyboardOpen(false);
      },
    };
  }, []);

  return (
    <SetAppRootAnchorNodesContext.Provider value={setRootAnchorNodes}>
      {MyLib.values(rootAnchorNodes)}
      <div className={`above-container ${keyboardOpen ? 'keyboard-open' : ''}`}>
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
          <ABSOLUTE__FLOAT__POPUP onOpen={() => {}} />
          <Outlet />
          <IndexAdvertisingReminder />
        </div>
        <KEYBOARD_FLASH {...keyboardProps} />
      </div>
    </SetAppRootAnchorNodesContext.Provider>
  );
}
