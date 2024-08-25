import { useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { IScheduleWidgetWid } from '../../models';
import { atom, useAtomSet, useAtomValue } from '../atoms';
import mylib from '../my-lib/MyLib';

export const useCschw = (): IScheduleWidgetWid | NaN => {
  const paramSchw = +useParams().schw!;
  const searchParamSchw = +useSearchParams()[0].get('schw')!;

  const schw = isNaN(searchParamSchw) ? searchParamSchw : paramSchw;

  return schw;
};

const lastSchwAtom = atom(NaN, 'index', 'lastSchw');

export const useFixActualSchw = (schw: IScheduleWidgetWid | NaN) => {
  const set = useAtomSet(lastSchwAtom);

  useEffect(() => {
    if (mylib.isNaN(schw)) return;
    set(schw);
  }, [schw, set]);
};

export const useActualSchw = (): IScheduleWidgetWid | NaN => useAtomValue(lastSchwAtom);
