import { useMemo } from 'react';
import { useCcom } from '../../../col/com/useCcom';

export const useCmCurrentComTexts = () => {
  const ccom = useCcom();
  return useMemo(() => ccom?.getOrderedTexts(), [ccom]);
};
