import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { EditableCat } from '../categories/EditableCat';
import { useEditableCcat } from '../categories/useEditableCcat';
import { EditableCom } from './com/EditableCom';

export function useEditableCcom(): EditableCom | und {
  const zcat: EditableCat | und = useEditableCcat(0);
  const ccomw = +useParams().comw!;

  return useMemo(() => zcat?.coms.find(com => com.wid === ccomw), [ccomw, zcat]);
}
