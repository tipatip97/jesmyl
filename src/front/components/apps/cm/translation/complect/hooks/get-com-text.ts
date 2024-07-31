import { useMemo } from 'react';
import { useCom } from '../../../col/com/useCcom';

export const useCmCurrentComTexts = (pushKind: number | und) => {
  const com = useCom();

  return useMemo(() => com?.getOrderedTexts(true, pushKind), [com, pushKind]);
};
