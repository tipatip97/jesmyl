import { useEffect, useRef, useState } from 'react';

const metric = 'px';

const defaultStep = 3;
const minStep = 1;

export const useBibleScreenTranslationFontSizeAdapter = (content: string, subUpdater: string | number) => {
  const [isInit, setIsInit] = useState(true);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isInit) setTimeout(setIsInit, 100, false);

    if (isInit || !content || contentRef.current === null || wrapperRef.current === null) return;
    const wrapper = wrapperRef.current;
    const container = contentRef.current;
    const conainerStyle = contentRef.current.style;

    const prevOpacity = conainerStyle.opacity;
    conainerStyle.opacity = '0';

    let fontSize = conainerStyle.fontSize.endsWith(metric) ? parseInt(conainerStyle.fontSize) : 16;
    let step = defaultStep;
    let manipulationsCountLimit = 100000;

    const inc = () => {
      if (step < 1) return;

      while (wrapper.clientHeight > container.clientHeight && fontSize < 5000) {
        conainerStyle.fontSize = (fontSize += step) + metric;
        if (manipulationsCountLimit-- < 0) return;
      }
    };

    const dec = (param: 'clientHeight' | 'clientWidth') => {
      if (step < 1) return;

      while (wrapper[param] < container[param] && fontSize > 0) {
        conainerStyle.fontSize = (fontSize -= step) + metric;
        if (manipulationsCountLimit-- < 0) return;
      }
    };

    let isPhaseTurn = true;

    if (wrapper.clientHeight < container.clientHeight) {
      do {
        if (isPhaseTurn) dec('clientHeight');
        else inc();

        isPhaseTurn = !isPhaseTurn;
        step = Math.floor(step / 2);

        if (manipulationsCountLimit-- < 0) return;
      } while (step > minStep);
    } else {
      do {
        if (isPhaseTurn) inc();
        else dec('clientHeight');

        isPhaseTurn = !isPhaseTurn;
        step = Math.floor(step / 2);

        if (manipulationsCountLimit-- < 0) return;
      } while (step > minStep);
    }

    step = 1;
    dec('clientHeight');
    dec('clientWidth');

    conainerStyle.opacity = prevOpacity || '1';
  }, [content, isInit, subUpdater]);

  return [wrapperRef, contentRef] as const;
};
