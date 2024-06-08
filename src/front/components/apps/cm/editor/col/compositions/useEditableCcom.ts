import { useMemo } from 'react';
import useCmNav from '../../../base/useCmNav';
import { useEditableCcat } from '../categories/useEditableCcat';
import { EditableCat } from '../categories/EditableCat';

export function useEditableCcom() {
  const zcat: EditableCat | und = useEditableCcat(0);
  const {
    appRouteData: { ccomw },
  } = useCmNav();

  return useMemo(() => zcat?.coms.find(com => com.wid === ccomw), [ccomw, zcat]);
}
