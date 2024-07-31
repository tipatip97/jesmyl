import { useEffect, useMemo } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { CmComWid } from '../../../../../../back/apps/cm/Cm.enums';
import { atom, useAtomSet, useAtomValue } from '../../../../../complect/atoms';
import { useNumComUpdates } from '../../atoms';
import { useCols } from '../../cols/useCols';
import { Com } from './Com';

export const useCcomw = (): CmComWid | typeof NaN => {
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

export const useTakeActualComw = () => {
  const setComw = useAtomSet(ccomwAtom);
  const comw = useCcomw();

  useEffect(() => {
    if (isNaN(comw)) return;
    setComw(comw);
  }, [comw, setComw]);
};

export const useActualCcomw = (): CmComWid | typeof NaN => +useAtomValue(ccomwAtom)!;
