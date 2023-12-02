import smylib from "../../../../shared/SMyLib";
import { NumberCollectionMinificator } from "../../../../shared/number-collection-minificator/NumberCollectionMinificator";
import { AliasWordInfo, AliasWordNid, AliasWordsPack } from "./alias.model";

const ncmWords = NumberCollectionMinificator([1]);
const ncmMembers = NumberCollectionMinificator();

export class AliasHelp {
    static encodeMemberNid = (teami: number, memberi: number) => {
        return ncmMembers.encode(teami, null, memberi);
    };

    static decodeWordNid = (nid?: number | null): [number, number, number] | null => {
        return ncmWords.decode(nid)?.flat() as never;
    };

    static encodeWordNid = (packi: number, weight: number, wordi: number) => {
        return ncmWords.encode(packi, [weight], wordi);
    };

    static takeWordInfo = (aliasWords: AliasWordsPack[], dicts?: number[], nid?: AliasWordNid): und | AliasWordInfo => {
        if (nid == null) return undefined;
        const nids = AliasHelp.decodeWordNid(nid);
        if (!nids) return undefined;
        const [packi, weight, wordi] = nids;
        if (aliasWords?.[packi] === undefined) return undefined;
        const word = smylib.keys(aliasWords[packi].words)[wordi];
        return {
            word,
            packi,
            nid,
            weight,
            max: dicts?.[packi] ?? 1,
        };
    };

    static computeGameScore = (corrects: AliasWordInfo[], incorrects: AliasWordInfo[], fix: number[]) => {
        return (
            corrects.reduce((sum, attrs) => {
                return sum + (fix.includes(attrs.nid)
                    ? -((attrs.max + 1) - attrs.weight)
                    : attrs.weight);
            }, 0)
            - incorrects.reduce((sum, attrs) => {
                return sum + (fix.includes(attrs.nid)
                    ? -attrs.weight
                    : ((attrs.max + 1) - attrs.weight));
            }, 0)
        );
    };
}
