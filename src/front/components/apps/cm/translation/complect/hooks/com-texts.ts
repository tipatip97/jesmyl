import { useComTranslationBlock } from '../../../atoms';
import { useCmScreenTranslationCurrentConfig } from '../controlled/hooks/configs';
import { useCmCurrentComTexts } from './get-com-text';

export const useCmScreenTranslationComTextNavigations = () => {
  const [currTexti, setCurrTexti] = useComTranslationBlock();
  const texts = useCmCurrentComTexts(useCmScreenTranslationCurrentConfig()?.pushKind);

  const state = {
    text: texts && texts[currTexti],
    currTexti,
    nextText: () => {
      if (texts && currTexti < texts.length - 1) state.setTexti(currTexti + 1);
    },
    prevText: () => {
      if (currTexti > 0) state.setTexti(currTexti - 1);
    },
    setTexti: (blocki: number) => {
      setCurrTexti(blocki);
      const nextd = window.document.getElementById(`translation-window-line-${blocki}`);

      if (nextd) {
        const nextParent = nextd.parentElement;
        if (nextParent) nextParent.scrollLeft = nextd.offsetLeft + nextd.clientWidth / 2 - nextParent.clientWidth / 2;
      }
    },
  };

  return state;
};
