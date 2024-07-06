import { makeRandomTwiceName } from '../../../complect/hooks/random-twice-name/useGetRandomTwiceName';
import mylib from '../../../complect/my-lib/MyLib';
import { deviceIdAtom, indexMolecule } from '../molecules';

let deviceId: string | und;
const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.repeat(3).split('');
const symbols = "@#$%^&+=:;.,'~!?><|\\/-_*".repeat(3).split('').concat(letters);

const takeRandomSymbols = (take = 3) =>
  Array(take)
    .fill('.')
    .map((_, i) => (i === 0 || i === take - 1 ? mylib.randomItem(letters) : mylib.randomItem(symbols)))
    .join('');

export const takeDeviceId = async () => {
  if (deviceId !== undefined) return deviceId;
  deviceId = await deviceIdAtom.getStorageValue();
  const storage = await indexMolecule.take('nounPronsWords').getStorageValue();

  if (storage === undefined) return '***S***';

  if (!deviceId || deviceId.startsWith('__')) {
    deviceId = makeRandomTwiceName(storage).join('_') + '_' + takeRandomSymbols();
    deviceIdAtom.set(deviceId);
  }

  return deviceId;
};
