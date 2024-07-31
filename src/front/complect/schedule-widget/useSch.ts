import { useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { IScheduleWidgetWid } from '../../models';
import { atom, useAtomSet, useAtomValue } from '../atoms';

export const useCschw = (): IScheduleWidgetWid | typeof NaN => {
  const paramSchw = +useParams().schw!;
  const searchParamSchw = +useSearchParams()[0].get('schw')!;

  const schw = isNaN(searchParamSchw) ? searchParamSchw : paramSchw;

  return schw;
};

const lastSchwAtom = atom(NaN, 'index', 'lastSchw');

export const useFixActualSchw = (schw: IScheduleWidgetWid | typeof NaN) => {
  const set = useAtomSet(lastSchwAtom);

  useEffect(() => {
    if (isNaN(schw)) return;
    set(schw);
  }, [schw, set]);
};

export const useActualSchw = (): IScheduleWidgetWid | typeof NaN => useAtomValue(lastSchwAtom);
