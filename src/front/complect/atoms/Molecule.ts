import { MoleculeOptions } from '.';
import { ServerStoreContent } from '../../../back/complect/soki/parts/120-ServerStore';
import { retUnd } from '../../../back/complect/utils';
import { AppName, getAppNameFromString } from '../../app/App.model';
import { JStorage } from '../JStorage';
import { MyLib } from '../my-lib/MyLib';
import { Atom } from './AnAtom';

const serverSavedKeyPrefix = 'lastWrite:';
export const removeMoleculeServerSavedItemTimesFromLocalStorage = () => {
  MyLib.keys(localStorage as Record<string, string>).forEach(key => {
    if (key.startsWith(serverSavedKeyPrefix)) localStorage.removeItem(key);
  });
};

export class Molecule<
  T,
  StorageName extends string = string,
  Atoms extends { [Key in keyof T]: Atom<T[Key]> } = { [Key in keyof T]: Atom<T[Key]> },
> {
  private atoms = {} as Atoms;
  private newAtom: <Key extends keyof T>(key: Key) => Atom<T[Key]>;
  private keys: (keyof T)[] = [];

  makeServerStoreRequest: () => ServerStoreContent[] | und;
  private getLastWtiteLocalStorageItemName: (key: keyof T) => string;

  onServerStorageValueSend = (_contents: ServerStoreContent[], _appName: AppName) => {};

  constructor(
    values: Required<{ [Key in keyof T]: T[Key] | Atom<T[Key]> }>,
    storageName: StorageName,
    options?: MoleculeOptions<T>,
  ) {
    new JStorage(storageName);

    this.getLastWtiteLocalStorageItemName = key => `${serverSavedKeyPrefix}${storageName}/${key as string}`;

    const serverStored = options?.serverStored || [];

    this.atoms = {
      ...MyLib.entries(values).reduce((atoms: Atoms, [key, value]) => {
        this.keys.push(key);

        const atom = ((atoms as any)[key] =
          value instanceof Atom ? value : new Atom(value, storageName, key as string));

        if (serverStored.includes(key)) {
          const appName = getAppNameFromString(storageName);

          if (appName !== null) {
            let sendTimeout: TimeOut;

            atom.onValueSetForServerUserStore = (value: unknown) => {
              const ts = (localStorage[this.getLastWtiteLocalStorageItemName(key)] = Date.now());

              clearTimeout(sendTimeout);
              sendTimeout = setTimeout(() => {
                this.onServerStorageValueSend([{ key: key as string, ts, value }], appName);
              }, 1000);
            };
          }
        }

        return atoms;
      }, {} as Atoms),
    };

    this.newAtom = key => (this.atoms[key] = new Atom(undefined as never, storageName, key as string) as never)!;

    this.makeServerStoreRequest = serverStored
      ? () => {
          return serverStored.map((key): ServerStoreContent => {
            return {
              key: key as string,
              ts: this.getServerStoreContentValueWritten(key),
              value: this.get(key),
            };
          }, {});
        }
      : retUnd;
  }

  set = <Key extends keyof T>(key: Key, value: T[Key]) =>
    (this.atoms[key] === undefined ? this.newAtom(key) : this.atoms[key]).set(value as never);

  get = <Key extends keyof T>(key: Key): T[Key] => this.atoms[key]?.get() as never;

  take = <Key extends keyof T>(key: Key): NonUndefined<Atoms[Key]> => this.atoms[key] as never;

  select = <Value>(selector: (atoms: Atoms) => Atom<Value>): NonUndefined<Atom<Value>> => selector(this.atoms);

  rem = <Key extends keyof T>(key: Key) => this.atoms[key].rem();

  private reduceKeyValues = (dict: T, key: keyof T) => {
    dict[key] = this.get(key);
    return dict;
  };

  getValues = () => this.keys.reduce(this.reduceKeyValues, {} as T);

  saveFreshContents(
    contents: {
      key: string;
      ts: number;
      value: unknown;
    }[],
  ) {
    contents.forEach(({ key, value, ts }) => {
      const incomingKey = key as keyof T;
      if (ts > this.getServerStoreContentValueWritten(incomingKey)) {
        this.take(incomingKey).set(value as never, false, true);
        localStorage[this.getLastWtiteLocalStorageItemName(key as never)] = ts;
      }
    });
  }

  private getServerStoreContentValueWritten(key: keyof T) {
    return +localStorage[this.getLastWtiteLocalStorageItemName(key)] || 0;
  }

  prepareFreshContents(keys: (keyof T)[]) {
    return keys.map((key): { key: string; ts: number; value: unknown } => {
      return {
        ts: this.getServerStoreContentValueWritten(key),
        key: key as string,
        value: this.get(key),
      };
    });
  }
}
