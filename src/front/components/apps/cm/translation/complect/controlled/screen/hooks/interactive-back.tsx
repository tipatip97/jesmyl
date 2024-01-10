import { ReactNode, useEffect } from 'react';
import { CSSProperties } from 'styled-components';
import { BackgroundNameType } from '../../../../../../../index/parts/actions/files/complect/BackgroundSelector';
import { takeInteractiveFileBackground } from '../../../../../../../index/parts/actions/files/utils/take-interactive-file-background';

const style: CSSProperties = {
  position: 'absolute',
  objectFit: 'cover',
};

export const useSetScreenInteractiveBackground = (
  win: Window | nil,
  background: BackgroundNameType | und,
  setBackground: (node: ReactNode) => void,
) => {
  useEffect(() => {
    if (background === undefined) {
      setBackground(null);
      return;
    }

    takeInteractiveFileBackground(
      background,
      (type, src) => {
        if (type === 'video') {
          setBackground(
            <video
              autoPlay
              muted
              loop
              src={src}
              className="full-size pointers-none"
              style={style}
            />,
          );
          return;
        }

        if (type === 'image') {
          setBackground(
            <img
              alt=""
              src={src}
              className="full-size pointers-none"
              style={style}
            />,
          );
          return;
        }
      },
      () => setBackground(null),
    );
  }, [background, setBackground, win]);
};
