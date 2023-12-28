import { useMemo } from 'react';
import { GamerAliasRoomState } from '../Alias.model';

export const useAliasIsCantConfirmResults = (state: GamerAliasRoomState | und) => {
  return useMemo(() => {
    return (
      state?.invert &&
      (state.fix.some(
        fixWordi => !state.invert![fixWordi]?.length && state.inc.some(winfo => winfo.wordi === fixWordi),
      ) ||
        state.cor.some(winfo => !state.fix.includes(winfo.wordi) && state.invert![winfo.wordi]?.length))
    );
  }, [state?.cor, state?.fix, state?.inc, state?.invert]);
};
