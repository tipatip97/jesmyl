import { NounPronsType } from "../../../../../../models";
import { AliasWordsPack, GamerAliasRoomState } from "../Alias.model";
import { AliasHelp } from "../AliasHelp";
import { useNounsPronouns } from "./nouns-pronouns-lines";
import { useAliasPacks } from "./packs";
import { useAliasRoomState } from "./state";


export const useTokenSortedWordsNaked = () => takeTokenSortedWords(useAliasRoomState(), useAliasPacks(), useNounsPronouns());

export const takeTokenSortedWords = (state: GamerAliasRoomState | und, packs: AliasWordsPack[], nounsProns: NounPronsType | und) => {
    return AliasHelp.getTokenizedWordInfos(state?.token, state?.dicts, state?.lens, packs, nounsProns);
};
