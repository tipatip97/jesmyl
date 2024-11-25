import { MyLib } from 'front/utils';
import { ServerStoreContent } from 'shared/api';
import { emptyFunc, retUnd } from 'shared/utils';
import { MoleculeOptions } from '.';
import { AppName, getAppNameFromString } from '../../app/App.model';
import { JStorage } from '../JStorage';
import { Atom } from './AnAtom';

const serverStoreValueLastWriteTsKeyPrefix = 'lastWrite:';
const appLastWriteTsLsPrefix = 'lastAppWriteTs/';
const dynamicStorePrefixes = new Set<string>();
const dynamicStoreSeparator = '::';

export const removeMoleculeServerSavedItemTimesFromLocalStorage = () => {
  MyLib.keys(localStorage as Record<string, string>).forEach(key => {
    if (key.startsWith(serverStoreValueLastWriteTsKeyPrefix)) localStorage.removeItem(key);
    if (key.startsWith(appLastWriteTsLsPrefix)) localStorage.removeItem(key);

    dynamicStorePrefixes.forEach(prefix => {
      if (key.startsWith(prefix)) localStorage.removeItem(key);
    });
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

  getLastAppWriteTs: () => number | und = retUnd;

  onServerStorageValueSend = (_contents: ServerStoreContent[], _appName: AppName) => {};
  saveFreshContents: (contents: ServerStoreContent[]) => void = retUnd;
  collectFreshServerStoreContents: (ts: number) => ServerStoreContent[] | und = retUnd;

  constructor(
    values: Required<{ [Key in keyof T]: T[Key] | Atom<T[Key]> }>,
    storageName: StorageName,
    options?: MoleculeOptions<T>,
  ) {
    new JStorage(storageName);

    const appName = getAppNameFromString(storageName);
    let onAtomValueSetForServerUserStore: (key: keyof T) => ((value: unknown) => void) | und = retUnd;

    this.newAtom = key => (this.atoms[key] = new Atom(undefined as never, storageName, key as string) as never)!;
    const serverStoredSet = new Set(options?.serverStored);

    if (appName && (serverStoredSet.size || options?.dynamicStores)) {
      const dynamicStores = options?.dynamicStores;

      const makeStringBySlashFromKey = (key: keyof T) => `${storageName}/${key as string}` as const;
      const takeKeyFromStringBySlash = (str: StringBySlash) => str.slice(storageName.length + 1) as keyof T;

      const appLastTsKey = `${appLastWriteTsLsPrefix}${appName}` as const;
      const appLastWriteTs = (setTs?: number) => {
        if (setTs !== undefined) localStorage[appLastTsKey] = setTs;

        return +localStorage[appLastTsKey] || 0;
      };

      const serverStoreValueLastWriteTs = (key: StringBySlash, ts?: number) => {
        if (ts !== undefined) localStorage[`${serverStoreValueLastWriteTsKeyPrefix}${key}`] = ts;

        return +localStorage[`${serverStoreValueLastWriteTsKeyPrefix}${key}`] || 0;
      };

      this.getLastAppWriteTs = appLastWriteTs;

      MyLib.values(dynamicStores).forEach(store => {
        let sendTimeout: TimeOut;

        if (store.contentValuePrefix) dynamicStorePrefixes.add(store.contentValuePrefix);
        if (store.lastWriteTsPrefix) dynamicStorePrefixes.add(store.lastWriteTsPrefix);

        store.updateServerStoreContent = content => {
          appLastWriteTs(content.ts);

          clearTimeout(sendTimeout);
          sendTimeout = setTimeout(() => {
            this.onServerStorageValueSend([content], appName);
          }, 1000);
        };
      });

      const saveServerStoreContentValue = (content: ServerStoreContent) => {
        if (content.ts > serverStoreValueLastWriteTs(content.key)) {
          this.take(takeKeyFromStringBySlash(content.key)).set(content.value as never, false, true);
          serverStoreValueLastWriteTs(content.key, content.ts);
        }
      };

      const updateLastAppWriteTs = (contents: ServerStoreContent[]) => {
        let maxAppLastTs = 0;

        for (const content of contents) if (maxAppLastTs < content.ts) maxAppLastTs = content.ts;

        if (maxAppLastTs) appLastWriteTs(maxAppLastTs);
      };

      if (dynamicStores) {
        const saveFractionalOrServerStoreContentValue = (content: ServerStoreContent) => {
          const parts = content.key.split(dynamicStoreSeparator);

          if (parts.length > 1) {
            dynamicStores[`${parts[0]}${dynamicStoreSeparator}`]?.onFreshServerStoreContentChange(content);
            return;
          }

          saveServerStoreContentValue(content);
        };

        this.saveFreshContents = contents => {
          contents.forEach(saveFractionalOrServerStoreContentValue);
          updateLastAppWriteTs(contents);
        };
      } else {
        this.saveFreshContents = contents => {
          contents.forEach(saveServerStoreContentValue);
          updateLastAppWriteTs(contents);
        };
      }

      const insertServerStored = serverStoredSet.size
        ? (ts: number, contents: ServerStoreContent[]) => {
            serverStoredSet.forEach(key => {
              const localTs = serverStoreValueLastWriteTs(makeStringBySlashFromKey(key));

              if (!localTs || localTs <= ts) return;

              contents.push({ ts, key: makeStringBySlashFromKey(key), value: this.get(key) });
            });
          }
        : emptyFunc;

      const insertFractionalStores = dynamicStores
        ? (ts: number, contents: ServerStoreContent[]) => {
            MyLib.values(dynamicStores).forEach(store => store.insertContents(ts, contents));
          }
        : emptyFunc;

      this.collectFreshServerStoreContents = ts => {
        const contents: ServerStoreContent[] = [];

        insertServerStored(ts, contents);
        insertFractionalStores(ts, contents);

        return contents;
      };

      let sendTimeout: TimeOut;
      onAtomValueSetForServerUserStore = key => value => {
        const ts = serverStoreValueLastWriteTs(makeStringBySlashFromKey(key), Date.now());

        appLastWriteTs(ts);

        clearTimeout(sendTimeout);
        sendTimeout = setTimeout(() => {
          this.onServerStorageValueSend([{ key: `${appName}/${key as string}`, ts, value }], appName);
        }, 1000);
      };
    }

    this.atoms = {
      ...MyLib.entries(values).reduce((atoms: Atoms, [key, value]) => {
        this.keys.push(key);

        const atom = ((atoms as any)[key] =
          value instanceof Atom ? value : new Atom(value, storageName, key as string));

        if (serverStoredSet.has(key)) {
          atom.onValueSetForServerUserStore = onAtomValueSetForServerUserStore(key);
        }

        return atoms;
      }, {} as Atoms),
    };
  }

  set = <Key extends keyof T>(key: Key, value: T[Key]) => {
    try {
      this.atoms[key].set(value as never);
    } catch (error) {
      (this.atoms[key] === undefined ? this.newAtom(key) : this.atoms[key]).set(value as never);
    }
  };

  get = <Key extends keyof T>(key: Key): T[Key] => this.atoms[key]?.get() as never;

  take = <Key extends keyof T>(key: Key): NonUndefined<Atoms[Key]> =>
    (this.atoms[key] === undefined ? this.newAtom(key) : this.atoms[key]) as never;

  select = <Value>(selector: (atoms: Atoms) => Atom<Value>): NonUndefined<Atom<Value>> => selector(this.atoms);

  rem = <Key extends keyof T>(key: Key) => this.atoms[key].rem();

  private reduceKeyValues = (dict: T, key: keyof T) => {
    dict[key] = this.get(key);
    return dict;
  };

  getValues = () => this.keys.reduce(this.reduceKeyValues, {} as T);
}
