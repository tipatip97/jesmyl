import { Com } from "./Com";
import { IExportableCom } from "./Com.model";

describe('Com', () => {
    const icom: IExportableCom = {
        n: 'NAME',
        w: 123,
        o: [
            {
                w: 0,
                p: [[4, 8, 3]],
                s: 'one',
                u: 0,
                r: {
                    '2:2': 4,
                    'a3:3': 2,
                },
            },
            {
                w: 1,
                p: [[2, 5, 8]],
                s: '+',
            },
            {
                w: 2,
                p: [[7, 5, 0]],
                s: '+',
            },
            {
                w: 3,
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
