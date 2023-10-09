import mylib from "../../../complect/my-lib/MyLib";
import { getRandomTwiceName } from "../../../complect/random-twice-name/getRandomTwiceName";
import indexStorage from "../indexStorage";

let deviceId: string | und;
const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.repeat(3).split('');
const symbols = '@#$%^&+?><|\\/-_*'.repeat(3).split('').concat(letters);

const takeRandomSymbols = (take = 3) =>
    Array(take)
        .fill('.')
        .map((_, i) => i === 0 || i === take - 1
            ? mylib.randomItem(letters)
            : mylib.randomItem(symbols)
        )
        .join('');

export const takeDeviceId = async () => {
    if (deviceId !== undefined) return deviceId;
    deviceId = await indexStorage.get('deviceId');

    if (!deviceId) {
        deviceId = getRandomTwiceName().join('_') + '_' + takeRandomSymbols();
        indexStorage.set('deviceId', deviceId);
    }

    return deviceId;
};
