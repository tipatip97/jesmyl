import smylib from "./complect/soki/complect/SMyLib";

export const sequreMD5Passphrase = 'dbd2f9f2ccd2c687c3e2cf63fc662a78';


export const actionBoxSetSystems = {
    w: () => Date.now() + Math.random(),
    mi: (list?: { mi: number }[]) => {
        if (!smylib.isArr(list)) return undefined;
        let max = -1;
        list?.forEach?.((item) => item.mi > max && (max = item.mi));
        return max + 1;
    },
};
