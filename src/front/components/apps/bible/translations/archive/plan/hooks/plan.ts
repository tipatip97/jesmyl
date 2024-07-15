import { useCallback } from 'react';
import { atom, useAtom, useAtomSet, useAtomValue } from '../../../../../../../complect/atoms';
import mylib from '../../../../../../../complect/my-lib/MyLib';
import { useActualRef } from '../../../../../../../complect/useActualRef';
import { bibleMolecule } from '../../../../molecules';
import { BibleTranslationAddress } from '../../../../model';

const planAtom = atom<BibleTranslationAddress[]>([]);

export const useBibleTranslationPlan = () => useAtomValue(bibleMolecule.take('translationPlan'));

export const useBibleTranslationAddToPlan = () => {
  const planRef = useActualRef(useAtom(planAtom));

  return useCallback(
    (item: BibleTranslationAddress) => {
      const [plan, setPlan] = planRef.current;

      const previ = plan.findIndex(planItem => mylib.isEq(planItem, item));
      const newPlan = [...plan];
      if (previ > -1) newPlan.splice(previ, 1);
      newPlan.unshift(item);

      setPlan(newPlan);
    },
    [planRef],
  );
};

export const useBibleClearTranslationPlanSetter = () => {
  const setPlan = useAtomSet(planAtom);

  return useCallback(() => setPlan([]), [setPlan]);
};
