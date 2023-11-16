import { NumberCollectionMinificator } from "../../../../../complect/number-collection-minificator/NumberCollectionMinificator";

const ncmWords = NumberCollectionMinificator([1]);
const ncmMembers = NumberCollectionMinificator();

export class AliasHelp {
    static encodeMemberNid = (teami: number, memberi: number) => {
        return ncmMembers.encode(teami, null, memberi);
    };

    static decodeWordNid = (nid?: number | null): [number, number, number] | null => {
        return ncmWords.decode(nid)?.flat() as never;
    };

    static encodeWordNid = (packi: number, leveli: number, wordi: number) => {
        return ncmWords.encode(packi, [leveli], wordi);
    };
}
