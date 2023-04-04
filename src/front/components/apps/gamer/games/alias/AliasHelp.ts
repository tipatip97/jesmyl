export class AliasHelp {
    static decodeMemberNid = (nid?: number): [number, number] | null => {
        if (nid == null || isNaN(nid)) return null;
        const [all, teami, , memberi = 0] = ('' + nid).match(/(\d+)(\.(\d+))?/) || [];

        if (all === undefined) return null;

        return [+teami, +memberi - (nid < 0 ? 1 : 0)];
    };

    static encodeMemberNid = (teami: number, memberi: number) => {
        return (!memberi || memberi % 10 ? 1 : -1) * +`${teami}.${!memberi || memberi % 10 ? memberi : memberi + 1}`;
    };

    static decodeWordNid = (nid?: number): [number, number, number] | null => {
        if (nid == null || isNaN(nid)) return null;
        const [all, packi, , leveli = 0, wordi = 0] = ('' + nid).match(/(\d+)(\.(\d))?(\d+)?/) || [];

        if (all === undefined) return null;

        return [+packi, +leveli, +wordi - (nid < 0 ? 1 : 0)];
    };

    static encodeWordNid = (packi: number, leveli: number, wordi: number) => {
        return (!wordi || wordi % 10 ? 1 : -1) * +`${packi}.${leveli}${!wordi || wordi % 10 ? wordi : wordi + 1}`;
    };
}
