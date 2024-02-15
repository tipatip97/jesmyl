import { useCallback } from 'react';
import mylib from '../../../../../../../complect/my-lib/MyLib';
import { useStorageValueGetter } from '../../../../../../../complect/useStorage';
import bibleStorage from '../../../../bibleStorage';
import { justBibleStorageSet } from '../../../../hooks/storage';
import { BibleTranslationAddress } from '../../../../model';

export const useBibleTranslationPlan = () => useStorageValueGetter(bibleStorage, 'translationPlan', []);

export const useBibleTranslationAddToPlan = () => {
  const plan = useBibleTranslationPlan();

  return useCallback(
    (item: BibleTranslationAddress) => {
      const previ = plan.findIndex(planItem => mylib.isEq(planItem, item));
      const newPlan = [...plan];
      if (previ > -1) newPlan.splice(previ, 1);
      newPlan.unshift(item);

      justBibleStorageSet('translationPlan', newPlan);
    },
    [plan],
  );
};

export const useBibleClearTranslationPlanSetter = () => {
  return useCallback(() => justBibleStorageSet('translationPlan', []), []);
};
