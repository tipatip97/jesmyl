import { NumberCollectionMinificator } from "./NumberCollectionMinificator";

const strfy = JSON.stringify;

describe('NumberCollectionMinificator', () => {
    it('encode/decode', () => {
        const ncm = NumberCollectionMinificator([1]);
        const source = ncm.zipPack(3, [2], 333);
        const encoded = ncm.encode(...source);

        expect(strfy(ncm.decode(encoded))).toBe(strfy(source));
    });

    it('encode/decode empty digits', () => {
        const ncm = NumberCollectionMinificator();
        const source = ncm.zipPack(3, null, 333);
        const encoded = ncm.encode(...source);

        expect(strfy(ncm.decode(encoded))).toBe(strfy(source));
    });

    it('encode/decode digits as null', () => {
        const ncm = NumberCollectionMinificator();
        const encoded = ncm.encode(1, null, 3);

        expect(strfy(ncm.decode(encoded))).toBe(strfy([1, [], 3]));
    });

    it('encode/decode large', () => {
        const ncm = NumberCollectionMinificator([4, 4, 4]);
        const source = ncm.zipPack(39, [2819, 938, 1717], 33);
        const encoded = ncm.encode(...source);

        expect(strfy(ncm.decode(encoded))).toBe(strfy(source));
    });

    it('encode/decode zero full ends', () => {
        const ncm = NumberCollectionMinificator([4, 4, 4]);
        const source = ncm.zipPack(888888, [1000, 0, 0], 0);
        const encoded = ncm.encode(...source);

        expect(strfy(ncm.decode(encoded))).toBe(strfy(source));
    });

    it('encode/decode zero ends', () => {
        const ncm = NumberCollectionMinificator([4, 4, 4]);
        const source = ncm.zipPack(8, [100, 0, 110], 0);
        const encoded = ncm.encode(...source);

        expect(strfy(ncm.decode(encoded))).toBe(strfy(source));
    });

    it('encode/decode zero all', () => {
        const ncm = NumberCollectionMinificator([4, 4, 4]);
        const source = ncm.zipPack(0, [0, 0, 0], 0);
        const encoded = ncm.encode(...source);

        expect(strfy(ncm.decode(encoded))).toBe(strfy(source));
    });

    it('encode/decode last zero ends', () => {
        const ncm = NumberCollectionMinificator([]);
        const source = ncm.zipPack(0, null, 300000);
        const encoded = ncm.encode(...source);

        expect(strfy(ncm.decode(encoded))).toBe(strfy(source));
    });
});
