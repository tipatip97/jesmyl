import { CmComWid } from '../../../../../../back/apps/cm/Cm.enums';
import { IExportableCom } from '../../../../../models';
import { Com } from './Com';

describe('Com', () => {
  const icom: IExportableCom = {
    n: 'NAME',
    w: CmComWid.def,
    o: [
      {
        w: 0 as never,
        p: [[4, 8, 3]],
        s: 'one',
        u: 0,
        r: {
          '2:2': 4,
          'a3:3': 2,
        },
      },
      {
        w: 1 as never,
        p: [[2, 5, 8]],
        s: '+',
      },
      {
        w: 2 as never,
        p: [[7, 5, 0]],
        s: '+',
      },
      {
        w: 3 as never,
        a: 0,
        inh: {
          r: {
            1: {
              '5:7': 2,
            },
          },
        },
      },
    ],
  };

  const com = new Com(icom, 3);

  it('orders', () => {
    expect(com.orders?.[3].positions?.[0]).toStrictEqual([4, 8, 3]);
    expect(com.orders?.[0].repeats).toStrictEqual({ '2:2': 4, 'a3:3': 2 });
    expect(com.orders?.[3].repeats).toStrictEqual({ '2:2': 4 });
    expect(com.orders?.[5].repeats).toStrictEqual({ '5:7': 2 });
  });
});
