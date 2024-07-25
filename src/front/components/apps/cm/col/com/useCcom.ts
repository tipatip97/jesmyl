import { useMemo } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { useNumComUpdates } from '../../atoms';
import { useCols } from '../../cols/useCols';
import { Com } from './Com';

export function useCcom(topComw?: number): Com | und {
  useNumComUpdates();
  const cols = useCols();
  const params = useParams();
  const searchParams = useSearchParams();
  const comw = topComw ?? searchParams[0].has('comw') ? +searchParams[0].get('comw')! : +params.comw!;

  return useMemo(() => cols?.coms.find(com => com.wid === comw), [comw, cols]);
}
