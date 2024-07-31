import Eventer, { EventerValueListeners } from '../../back/complect/Eventer';

export type JStorageListener<Val> = (val: Val) => void;

export class JStorage<Scope> {
  private nonCachable: (keyof Scope)[] = [] as never;
  private dbOpen: IDBOpenDBRequest;
  private listens: Partial<Record<keyof Scope, EventerValueListeners<Scope[keyof Scope]>>> = {};

  properties: Record<keyof Scope, any> = {} as never;

  constructor(storageName: string, config?: { nonCachable?: (keyof Scope)[] }) {
    if (config?.nonCachable) this.nonCachable = config.nonCachable;
    this.dbOpen = indexedDB.open(storageName);
    this.initDB(this.dbOpen);

    (window as any)[`${storageName}Storage`] = this;
  }

  private initDB(dbOpen: IDBOpenDBRequest) {
    dbOpen.onupgradeneeded = () => {
      const db = dbOpen.result;
      if (!db.objectStoreNames.contains('data')) {
        db.createObjectStore('data');
      }
    };
  }

  refreshAreas<Key extends keyof Scope>(areas: Key[], contents: Record<Key, unknown>) {
    areas.forEach(key => {
      const val = contents[key] as NonUndefined<Scope[Key]>;
      if (val !== undefined) {
        this.set(key, val);
      }
    });
  }

  get<Key extends keyof Scope>(key: Key): Promise<Scope[Key] | undefined> {
    return new Promise(resolve => {
      const read = async () => {
        if (this.dbOpen.readyState !== 'done') {
          resolve(await this.get(key));
          return;
        }
        try {
          const data = this.dbOpen.result
            .transaction('data', 'readonly')
            .objectStore('data')
            .get(key as string);
          data.onsuccess = () => resolve(data.result);
        } catch (error) {}
      };

      if (this.dbOpen.readyState === 'done') read();
      else setTimeout(read, 100);
    });
  }

  async getOr<Key extends keyof Scope>(key: Key, def: Scope[Key]) {
    return ((await this.get(key)) ?? def) as Promise<NonUndefined<Scope[Key]>>;
  }

  on<Key extends keyof Scope, Value extends Scope[Key], InitialValue>(
    key: Key,
    callback: (value: Value) => void,
    initialValue: InitialValue,
  ) {
    if (this.properties[key] === undefined) this.properties[key] = initialValue;
    if (this.listens[key] === undefined) this.listens[key] = new Set();

    setTimeout(async () => {
      const val = (await this.get(key)) as Value | und;
      if (val === undefined) return;
      callback(val);
      this.properties[key] = val;
    });

    return Eventer.listenValue(this.listens[key]!, callback as never);
  }

  set<Key extends keyof Scope>(key: Key, val: Scope[Key] | ((prevValue: Scope[Key]) => Scope[Key])): void {
    if (val === null) {
      this.rem(key);

      if (this.properties[key] === val) return;
      if (this.listens[key] !== undefined) Eventer.invokeValue(this.listens[key]!, val as never);
      this.properties[key] = val;

      return;
    }
    const value = typeof val === 'function' ? (val as <V>(v: V) => V)(this.properties[key]) : val;

    if (this.properties[key] === value) return;
    if (this.listens[key] !== undefined) Eventer.invokeValue(this.listens[key]!, value);
    this.properties[key] = value;

    if (this.nonCachable.includes(key)) return;

    if (this.dbOpen.readyState !== 'done') {
      setTimeout(() => this.set(key, val));
      return;
    }

    try {
      this.dbOpen.result
        .transaction('data', 'readwrite')
        .objectStore('data')
        .put(value, key as string);
    } catch (error) {}
  }

  rem(key: keyof Scope) {
    if (this.dbOpen.readyState !== 'done') {
      setTimeout(() => this.rem(key));
      return;
    }
    try {
      this.dbOpen.result
        .transaction('data', 'readwrite')
        .objectStore('data')
        .delete(key as string);
    } catch (error) {}
  }
}
