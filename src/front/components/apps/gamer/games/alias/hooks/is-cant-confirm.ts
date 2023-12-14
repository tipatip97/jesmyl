import { useMemo } from "react";
import { GamerAliasRoomState } from "../Alias.model";

export const useAliasIsCantConfirmResults = (state: GamerAliasRoomState | und) => {
    return useMemo(() => {
        return state?.invert
            && (state.fix.some((fixNid) => state.inc.includes(fixNid)
              && !state.invert![fixNid]?.length)
                || state.cor.some(fixNid => !state.fix.includes(fixNid)
                  && state.invert![fixNid]?.length));
    }, [state?.cor, state?.fix, state?.inc, state?.invert]);
};
