import { AnyAction, CaseReducer, Dispatch, PayloadAction } from '@reduxjs/toolkit';
import { JStorageName } from '../app/App.model';

export type JStorageListener<Val> = (val: Val) => void;

export class JStorage<Scope, State = Scope> {
  private prefix: string;
  private nonCachable: (keyof Scope)[] = [] as never;
  private dbOpen: IDBOpenDBRequest;
  private isContentInitialized = false;
  private dispatch?: Dispatch;
  private actions?: Record<keyof Scope, (val: any) => AnyAction>;
  private isFirstInit = false;

  properties: Record<keyof Scope, any> = {} as never;

  constructor(appName: JStorageName, config?: { nonCachable?: (keyof Scope)[] }) {
    this.prefix = `[${appName}]:`;
    if (config?.nonCachable) this.nonCachable = config.nonCachable;
    this.dbOpen = indexedDB.open(appName);
    this.initDB(this.dbOpen);

    (window as any)[`${appName}Storage`] = this;
  }

  private initDB(dbOpen: IDBOpenDBRequest) {
    dbOpen.onupgradeneeded = () => {
      this.isFirstInit = true;
      const db = dbOpen.result;
      if (!db.objectStoreNames.contains('data')) {
        db.createObjectStore('data');
        Object.keys(localStorage).forEach((name: string) => {
          if (name.startsWith(this.prefix)) localStorage.removeItem(name);
        });
      }
    };
  }

  refreshAreas<Key extends keyof Scope>(areas: Key[], contents: Record<Key, unknown>) {
    areas.forEach(key => {
      const val = contents[key] as NonUndefined<Scope[Key]>;
      if (val !== undefined) {
        this.set(key, val);
        if (this.actions?.[key]) this.dispatch?.(this.actions[key](val));
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
        const data = this.dbOpen.result
          .transaction('data', 'readonly')
          .objectStore('data')
          .get(key as string);
        data.onsuccess = () => resolve(data.result);
      };

      if (this.dbOpen.readyState === 'done') read();
      else setTimeout(read, 100);
    });
  }

  async getOr<Key extends keyof Scope>(key: Key, def: Scope[Key]): Promise<NonUndefined<Scope[Key]>> {
    return ((await this.get(key)) ?? def) as never;
  }

  initializators<Key extends keyof Scope | keyof State>(
    keys: Key[],
  ): Record<Key, CaseReducer<State, { payload: any; type: string }>> {
    const actions: Record<string, (state: Record<Key, unknown>, action: PayloadAction<unknown>) => void> = {};
    keys.forEach(
      key =>
        (actions[key as string] = (state, action) => {
          state[key] = action.payload;
          this.set(key as never, action.payload as never);
        }),
    );

    return actions as never;
  }

  initDispatches(dispatch: Dispatch, actions: Record<keyof Scope, (val: any) => AnyAction>, onInit?: () => AnyAction) {
    if (this.isContentInitialized) return;
    else this.isContentInitialized = true;

    this.actions = actions;
    this.dispatch = dispatch;
    let tries = 0;
    let readies = 0;

    setTimeout(() => {
      if (this.dbOpen.readyState !== 'done') {
        setTimeout(() => {
          this.isContentInitialized = false;
          this.initDispatches(dispatch, actions);
        });
        return;
      }
      const data = this.dbOpen.result.transaction('data', 'readonly').objectStore('data');

      const keys = data.getAllKeys();
      keys.onsuccess = () => {
        if (!keys.result.length && this.isFirstInit && onInit !== undefined) setTimeout(() => dispatch(onInit()), 100);

        keys.result.forEach(key => {
          if (onInit !== undefined) tries++;

          if (actions[key as keyof Scope] !== undefined) {
            const value = data.get(key);
            value.onsuccess = () => {
              if (value.result !== undefined) {
                this.properties[key as never] = value.result as never;
                dispatch(actions[key as keyof Scope](value.result));
              }

              if (onInit !== undefined && tries === ++readies) dispatch(onInit());
            };
          }
        });
      };
    }, 90);
  }

  set<Key extends keyof Scope>(key: Key, val: Scope[Key] | ((prevValue: Scope[Key]) => Scope[Key])): void {
    if (val === null) {
      this.rem(key);
      return;
    }
    this.properties[key] = typeof val === 'function' ? (val as <V>(v: V) => V)(this.properties[key]) : val;

    if (this.nonCachable.includes(key)) return;

    if (this.dbOpen.readyState !== 'done') {
      setTimeout(() => this.set(key, val));
      return;
    }

    this.dbOpen.result
      .transaction('data', 'readwrite')
      .objectStore('data')
      .put(this.properties[key], key as string);
  }

  rem(key: keyof Scope) {
    if (this.dbOpen.readyState !== 'done') {
      setTimeout(() => this.rem(key));
      return;
    }
    this.dbOpen.result
      .transaction('data', 'readwrite')
      .objectStore('data')
      .delete(key as string);
  }
}
