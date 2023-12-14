import { useCallback } from "react";
import { GamerAliasRoomState } from "../Alias.model";
import { AliasHelp } from "../AliasHelp";
import { useNounsPronounsLines } from "./nouns-pronouns-lines";
import { useAliasPacks } from "./packs";
import { useAliasRoomState } from "./state";

export const takeAliasCurrentWordNid = (state: GamerAliasRoomState | und) => state?.words[0];

export const useAliasWordInfo = () => useAliasWordInfoByState(useAliasRoomState());

export const useAliasCurrentWordInfo = () => {
    const state = useAliasRoomState();

    return useAliasWordInfoByState(state)(takeAliasCurrentWordNid(state));
};

export const useAliasWordInfoByState = (state: GamerAliasRoomState | undefined) => {
    const packs = useAliasPacks();
    const nounPronsLines = useNounsPronounsLines();

    return useCallback((nid: number | und) => {
        return AliasHelp.takeWordInfo(packs, state?.dicts, nid, nounPronsLines);
    }, [nounPronsLines, packs, state?.dicts]);
};
