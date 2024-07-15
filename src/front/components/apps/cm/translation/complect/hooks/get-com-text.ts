import { useMemo } from 'react';
import { useCcom } from '../../../col/com/useCcom';

export const useCmCurrentComTexts = (pushKind: number | und, comw?: number) => {
  const ccom = useCcom(comw);

  return useMemo(() => ccom?.getOrderedTexts(true, pushKind), [ccom, pushKind]);
};
