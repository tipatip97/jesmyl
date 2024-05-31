import { useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../shared/store';
import { switchComplectFullscreen } from './Complect.store';

const isFullscreenSelector = (state: RootState) => state.complect.isFullscreen;

export default function useFullScreen(): [boolean, (isFullscreen?: boolean) => void] {
  const dispatch = useDispatch();
  const isFullScreen = useSelector(isFullscreenSelector);
  const isFullScreenRef = useRef(isFullScreen);
  isFullScreenRef.current = isFullScreen;

  return [
    isFullScreen,
    useCallback(
      (isFullscreen?: boolean) => {
        dispatch(switchComplectFullscreen(isFullscreen));
        try {
          if (isFullscreen ?? !isFullScreenRef.current) document.body.requestFullscreen();
          else if (document.fullscreenElement) document.exitFullscreen();
        } catch (e) {}
      },
      [dispatch, isFullScreenRef],
    ),
  ];
}
