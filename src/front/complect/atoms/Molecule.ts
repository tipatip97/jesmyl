import { MoleculeOptions } from '.';
import { ServerStoreContent } from '../../../back/complect/soki/parts/120-ServerStore';
import { AppName, getAppNameFromString } from '../../app/App.model';
import { SMyLib } from '../../models';
import { Atom } from './AnAtom';

const retUnd = () => undefined;

export class Molecule<
  T,
  StorageName extends string = string,
  Atoms extends { [Key in keyof T]: Atom<T[Key]> } = { [Key in keyof T]: Atom<T[Key]> },
> {
  private atoms = {} as Atoms;
  private newAtom: <Key extends keyof T>(key: Key) => Atom<T[Key]>;
  private keys: (keyof T)[] = [];

  makeServerStoreSequest: () => ServerStoreContent[] | und;
  getLastWtiteLocalStorageItemName: (key: keyof T) => string;

  serverStoredSet: Set<keyof T>;

  onServerStorageValueSend = (_contents: ServerStoreContent[], _appName: AppName) => {};

  constructor(
    values: Required<{ [Key in keyof T]: T[Key] | Atom<T[Key]> }>,
    storageName: StorageName,
    options?: MoleculeOptions<T>,
  ) {
    this.getLastWtiteLocalStorageItemName = key => `lastWrite:${storageName}/${key as string}`;

    const serverStored = options?.serverStored;
    this.serverStoredSet = new Set(serverStored ?? []);

    this.atoms = {
      ...SMyLib.entries(values).reduce((atoms: Atoms, [key, value]) => {
        this.keys.push(key);

        const atom = ((atoms as any)[key] =
          value instanceof Atom ? value : new Atom(value, storageName, key as string));

        if (this.serverStoredSet.has(key)) {
          const appName = getAppNameFromString(storageName);

          if (appName !== null) {
            let sendTimeout: TimeOut;

            atom.onValueSetForServerUserStore = (value: unknown) => {
              const ts = (localStorage[this.getLastWtiteLocalStorageItemName(key)] = Date.now());

              clearTimeout(sendTimeout);
              sendTimeout = setTimeout(() => {
                this.onServerStorageValueSend([{ key: key as string, ts, value }], appName);
              }, 200);
            };
          }
        }

        return atoms;
      }, {} as Atoms),
    };

    this.newAtom = key => (this.atoms[key] = new Atom(undefined as never, storageName, key as string) as never)!;

    this.makeServerStoreSequest = serverStored
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
      if (ts > this.getServerStoreContentValueWritten(incomingKey))
        this.take(incomingKey).set(value as never, false, true);
    });
  }

  private getServerStoreContentValueWritten(key: keyof T) {
    localStorage[this.getLastWtiteLocalStorageItemName(key)] ??= Date.now();
    return +localStorage[this.getLastWtiteLocalStorageItemName(key)];
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
