import { mylib } from 'front/utils';
import { useEffect, useMemo } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { CmComWid } from '../../../../../../shared/api/complect/apps/cm/complect/enums';
import { atom, useAtomSet, useAtomValue } from '../../../../../complect/atoms';
import { useNumComUpdates } from '../../atoms';
import { useCols } from '../../cols/useCols';
import { Com } from './Com';

export const useCcomw = (): CmComWid | NaN => {
  const params = useParams();
  const searchParams = useSearchParams();
  return searchParams[0].has('comw') ? +searchParams[0].get('comw')! : +params.comw!;
};

export function useCcom(topComw?: number): Com | und {
  useNumComUpdates();
  const cols = useCols();
  const ccomw = useCcomw();
  const comw = topComw ?? ccomw;

  return useMemo(() => cols?.coms.find(com => com.wid === comw), [comw, cols]);
}

export const ccomwAtom = atom<CmComWid | und>(undefined);

export function useCom(): Com | und {
  const cols = useCols();
  const comw = useAtomValue(ccomwAtom);

  return useMemo(() => cols?.coms.find(com => com.wid === comw), [comw, cols]);
}

export const useTakeActualComw = (): number | NaN => {
  const setComw = useAtomSet(ccomwAtom);
  const comw = useCcomw();

  useEffect(() => {
    if (mylib.isNaN(comw)) return;
    setComw(comw);
  }, [comw, setComw]);

  return comw;
};

export const useActualCcomw = (): CmComWid | NaN => +useAtomValue(ccomwAtom)!;
