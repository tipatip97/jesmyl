import { useMemo } from 'react';

const setter = () => ({});
const emptyArr: [] = [];

export const useActualRef = <Value>(value: Value): { readonly current: Value } => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const ref = useMemo(setter as never, emptyArr as never) as { readonly current: Value };
  (ref as any).current = value;

  return ref;
};
