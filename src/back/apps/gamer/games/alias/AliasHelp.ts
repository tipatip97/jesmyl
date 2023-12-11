import { replacePronounEnd } from "../../../index/complect/wordRegEnds";
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

    static takeWordInfo = (aliasWords: AliasWordsPack[], dicts?: number[], nid?: AliasWordNid, randomNounProns?: Record<"pronouns" | "nouns", string[]>): null | AliasWordInfo => {
        if (nid == null) return null;
        const nids = AliasHelp.decodeWordNid(nid);
        if (!nids) return null;
        let [packi, weight, wordi] = nids;

        if ((packi > 9999 || packi < -9999) && (Math.trunc(packi) >= 10000 || Math.trunc(packi) < -10000)) {
            const pack = packi + (packi < 0 ? 1 : -1) * 10000;
            weight = weight === 0 ? 10 : weight;

            if (randomNounProns === undefined) return {
                word: '???',
                packi: pack,
                nid,
                weight,
                max: weight,
                minus: 1,
                plus: weight,
            };

            return {
                word: replacePronounEnd(randomNounProns.pronouns[pack], randomNounProns.nouns[wordi]).join(' ').toUpperCase(),
                packi: pack,
                nid,
                weight,
                max: weight,
                minus: 1,
                plus: weight,
            };
        }

        if (aliasWords?.[packi] === undefined) return null;
        const max = dicts?.[packi] ?? 1;

        return {
            word: smylib.keys(aliasWords[packi].words)[wordi],
            packi,
            nid,
            weight,
            max,
            minus: (max || 0) + 1 - (weight || 0),
            plus: weight,
        };
    };

    static computeGameScore = (corrects: AliasWordInfo[], incorrects: AliasWordInfo[], fix: number[]) => {
        return (
            corrects.reduce((sum, attrs) => sum + (fix.includes(attrs.nid) ? -attrs.minus : attrs.plus), 0)
            - incorrects.reduce((sum, attrs) => sum + (fix.includes(attrs.nid) ? -attrs.plus : attrs.minus), 0)
        );
    };
}
