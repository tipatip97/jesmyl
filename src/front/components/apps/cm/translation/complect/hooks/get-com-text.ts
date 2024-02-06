import { useMemo } from 'react';
import { useCcom } from '../../../col/com/useCcom';

export const useCmCurrentComTexts = (comw?: number) => {
  const ccom = useCcom(comw);
  return useMemo(() => ccom?.getOrderedTexts(), [ccom]);
};
