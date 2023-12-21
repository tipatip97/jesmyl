import { ReactNode, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../shared/store';
import { setFullscreenContentOpenMode } from '../Complect.store';
import EvaIcon from '../eva-icon/EvaIcon';
import Portal from '../popups/[complect]/Portal';
import './FullscreenContent.scss';

export type FullScreenContentOpenMode = null | 'open' | 'closable';

let fullscreenContent: ReactNode;
let isOpen = false;
let onOpenPopup: ((close: () => boolean) => void) | und;

const fullscreenContentOpenModeSelector = (state: RootState) => state.complect.fullscreenContentOpenMode;

export default function useFullscreenContent() {
  const ret = {
    dispatch: useDispatch(),
    fullscreenContentOpenMode: useSelector(fullscreenContentOpenModeSelector),
    closeFullscreenContent: (): boolean => {
      ret.dispatch(setFullscreenContentOpenMode(null));
      fullscreenContent = null;
      if (!isOpen) return false;
      isOpen = false;
      if (document.fullscreenElement) document.exitFullscreen();
      return true;
    },
    openFullscreenContent: (
      content: ReactNode | ((close: () => void) => ReactNode),
      closable = false,
      isRequestFullscreen = false,
    ) => {
      if (isRequestFullscreen) document.body.requestFullscreen();
      isOpen = true;
      onOpenPopup?.(ret.closeFullscreenContent);
      fullscreenContent = typeof content === 'function' ? content(ret.closeFullscreenContent) : content;
      ret.dispatch(setFullscreenContentOpenMode(closable ? 'closable' : 'open'));
    },
  };
  return ret;
}

export function FULLSCREEN__CONTENT({ onOpen }: { onOpen: (close: () => boolean) => void }) {
  onOpenPopup = onOpen;
  const { fullscreenContentOpenMode, closeFullscreenContent } = useFullscreenContent();
  useEffect(() => window.addEventListener('keydown', event => event.code === 'Escape' && closeFullscreenContent()), []);

  return fullscreenContentOpenMode ? (
    <Portal>
      <div
        className={`fullscreen-content-container ${fullscreenContentOpenMode || ''}`}
        onClick={fullscreenContentOpenMode === 'closable' ? () => closeFullscreenContent() : undefined}
      >
        {fullscreenContentOpenMode === 'closable' ? null : (
          <EvaIcon
            name="close"
            className="close-button"
            onClick={() => closeFullscreenContent()}
          />
        )}
        <div className="full-container padding-big-gap">{fullscreenContent}</div>
      </div>
    </Portal>
  ) : null;
}
