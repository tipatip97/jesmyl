import { atom, useAtomValue } from '../../../complect/atoms';
import { makeRandomTwiceName } from '../../../complect/hooks/random-twice-name/useGetRandomTwiceName';
import mylib from '../../../complect/my-lib/MyLib';
import { indexMolecule } from '../molecules';

export const deviceIdAtom = atom('', 'index', 'deviceId');

export const useDeviceId = () => useAtomValue(deviceIdAtom);

let deviceId: string | und;
const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.repeat(3).split('');
const symbols = "@#$%^&+=:;.,'~!?><|\\/-_*".repeat(3).split('').concat(letters);

const takeRandomSymbols = (take = 4) =>
  Array(take)
    .fill('.')
    .map((_, i) => (i === 0 || i === take - 1 ? mylib.randomItem(letters) : mylib.randomItem(symbols)))
    .join('');

const nounPronsWordsAtom = indexMolecule.select(store => store.nounPronsWords);

export const takeDeviceId = async () => {
  try {
    if (deviceId !== undefined) return deviceId;
    deviceId = await deviceIdAtom.getStorageValue();
    const storage = await nounPronsWordsAtom.getStorageValue();

    if (!storage) return '';

    if (!deviceId || deviceId.startsWith('__')) {
      deviceId = makeRandomTwiceName(storage).join('_') + '_' + takeRandomSymbols();
      if (!deviceId.startsWith('__')) deviceIdAtom.set(deviceId);
    }

    return deviceId;
  } catch (error) {
    console.error(error);
    return '';
  }
};
