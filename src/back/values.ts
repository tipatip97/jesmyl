import smylib from "./complect/soki/complect/SMyLib";

export const sequreMD5Passphrase = 'dbd2f9f2ccd2c687c3e2cf63fc662a78';


export const actionBoxSetSystems = {
    w: () => Date.now() + Math.random(),
    mi: (field: string, list?: any[]) => {
        if (!smylib.isArr(list)) return 0;
        let max = -1;
        list.forEach?.((item) => item[field] != null && item[field] > max && (max = item[field]));
        return max + 1;
    },
};

export const sokiWhenRejButTs = ['return this array if need send empty exec list, but sent lastUpdate', 'JSON STR DATA'] as const;
