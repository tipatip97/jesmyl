import { useCallback } from 'react';
import { LocalSokiAuth } from '../../../models';
import mylib from '../../my-lib/MyLib';

export const useCheckIsAccessed = (auth: LocalSokiAuth) => {
  return useCallback(
    (level: ((auth: LocalSokiAuth) => boolean) | number | nil, isNullifyed?: boolean) => {
      if (level == null) return isNullifyed ? true : null;
      if (mylib.isFunc(level)) return level(auth) || null;

      return level <= +(auth.level ?? 0) ? true : null;
    },
    [auth],
  );
};
