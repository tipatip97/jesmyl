import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import mylib from '../../../../../../../complect/my-lib/MyLib';
import { RootState } from '../../../../../../../shared/store';
import { bibleStoreActions } from '../../../../Bible.store';
import { BibleTranslationAddress } from '../../../../model';

const planSelector = (state: RootState) => state.bible.translationPlan;

export const useBibleTranslationPlan = () => useSelector(planSelector);

export const useBibleTranslationAddToPlan = () => {
  const dispatch = useDispatch();
  const plan = useBibleTranslationPlan();

  return useCallback(
    (item: BibleTranslationAddress) => {
      const previ = plan.findIndex(planItem => mylib.isEq(planItem, item));
      const newPlan = [...plan];
      if (previ > -1) newPlan.splice(previ, 1);
      newPlan.unshift(item);

      dispatch(bibleStoreActions.translationPlan(newPlan));
    },
    [dispatch, plan],
  );
};

export const useBibleClearTranslationPlanSetter = () => {
  const dispatch = useDispatch();

  return useCallback(() => dispatch(bibleStoreActions.translationPlan([])), [dispatch]);
};
