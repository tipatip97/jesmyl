import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../../../shared/store';
import cmStoreActions from '../../../Cm.store';
import { useCmCurrentComTexts } from './get-com-text';

const translationBlockSelector = (state: RootState) => state.cm.translationBlock;

export const useCmScreenTranslationComCurrentText = () => {
  const texts = useCmCurrentComTexts();
  const currTexti = useSelector(translationBlockSelector);
  return texts && texts[currTexti];
};

export const useCmScreenTranslationComTextNavigations = () => {
  const dispatch = useDispatch();
  const currTexti = useSelector(translationBlockSelector);
  const texts = useCmCurrentComTexts();

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
      dispatch(cmStoreActions.translationBlock(blocki));
      const nextd = window.document.getElementById(`translation-window-line-${blocki}`);

      if (nextd) {
        const nextParent = nextd.parentElement;
        if (nextParent) nextParent.scrollLeft = nextd.offsetLeft + nextd.clientWidth / 2 - nextParent.clientWidth / 2;
      }
    },
  };

  return state;
};
