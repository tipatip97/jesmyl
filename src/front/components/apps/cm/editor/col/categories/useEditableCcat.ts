import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { EditableCols } from '../EditableCols';
import { useEditableCols } from '../useEditableCols';
import { EditableCat } from './EditableCat';

export function useEditableCcat(catw?: number): EditableCat | und {
  const cols: EditableCols | und = useEditableCols();
  const ccatw = +useParams().catw!;

  return useMemo(() => {
    if (cols) {
      if (catw != null) return cols.cats.find(cat => cat.wid === catw);
      else return ccatw === undefined ? undefined : cols.cats.find(cat => cat.wid === ccatw);
    }
  }, [ccatw, cols, catw]);
}
