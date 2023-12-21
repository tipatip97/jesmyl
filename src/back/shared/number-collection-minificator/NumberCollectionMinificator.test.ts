import { NumberCollectionMinificator } from './NumberCollectionMinificator';

const strfy = JSON.stringify;

describe('NumberCollectionMinificator', () => {
  it('encode/decode', () => {
    const ncm = NumberCollectionMinificator([1]);
    const source = ncm.zipPack(3, [2], 333);
    const encoded = ncm.encode(...source);

    expect(strfy(ncm.decode(encoded))).toBe(strfy(source));
  });

  const tstWith444Array = (gen: number, arr: [number, number, number], tail: number) => {
    it('encode/decode ' + gen + ', [' + arr.join(', ') + '], ' + tail, () => {
      const ncm = NumberCollectionMinificator([4, 4, 4]);
      const source = ncm.zipPack(gen, arr, tail);
      const encoded = ncm.encode(...source);

      expect(strfy(ncm.decode(encoded))).toBe(strfy(source));
    });
  };

  tstWith444Array(0, [0, 0, 0], 0);
  tstWith444Array(8, [100, 0, 110], 0);
  tstWith444Array(888888, [1000, 0, 0], 0);
  tstWith444Array(-8, [1000, 0, 0], 0);
  tstWith444Array(39, [2819, 938, 1717], 33);
  tstWith444Array(-3, [2819, 938, 17], 33);

  const tstWithEmptyArray = (gen: number, tail: number) => {
    it('encode/decode ' + gen + ', ' + tail, () => {
      const ncm = NumberCollectionMinificator([]);
      const source = ncm.zipPack(gen, null, tail);
      const encoded = ncm.encode(...source);

      expect(strfy(ncm.decode(encoded))).toBe(strfy(source));
    });
  };

  tstWithEmptyArray(1, 3);
  tstWithEmptyArray(3, 333);
  tstWithEmptyArray(0, 3000000);
  tstWithEmptyArray(-20, 3000001);
  tstWithEmptyArray(-20, 3000002);
  tstWithEmptyArray(-20, 3000003);
  tstWithEmptyArray(-20, 3000004);
  tstWithEmptyArray(-20, 3000005);
  tstWithEmptyArray(-20, 3000006);
  tstWithEmptyArray(-20, 3000007);
  tstWithEmptyArray(-20, 3000008);
  tstWithEmptyArray(-20, 3000009);
  tstWithEmptyArray(-20, 30000010);
  tstWithEmptyArray(-20, 3000005000);
  tstWithEmptyArray(-20, 1);
  tstWithEmptyArray(-20, 2);
  tstWithEmptyArray(-20, 3);
  tstWithEmptyArray(-20, 4);
  tstWithEmptyArray(-20, 40000000000000);

  for (let i = -100; i < 100; i += 6) {
    for (let j = 0; j < 1000; j += 6) {
      tstWithEmptyArray(i, j);
    }
  }
});
