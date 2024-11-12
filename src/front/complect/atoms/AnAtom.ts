import { emptyFunc } from 'shared/utils';
import { JStorage } from '../JStorage';
import { mylib } from 'front/utils';

const storages: Record<string, JStorage<any>> = {};
const registered = new Set<StringBySlash>();

export class Atom<
  Value,
  Key extends string = string,
  Sunscriber extends (value: Value) => void = (value: Value) => void,
> {
  private value: Value;
  private subs = new Set<Sunscriber>();
  private save: (val: Value) => void = emptyFunc;
  private setInTopStorage: (value: Value) => void = () => {};

  onValueChange?: (value: Value) => void;
  onValueSetForServerUserStore?: (value: Value) => void;
  rem: () => void;
  getStorageValue: () => Promise<Value>;

  constructor(value: Value, storageName?: string, key?: Key, valuesStorage?: Record<string, unknown>) {
    this.value = value;

    this.rem =
      value == null
        ? () => {
            this.value = null!;
            this.save(null!);
          }
        : emptyFunc;

    this.getStorageValue = async () => this.value;

    if (!storageName || !key) return;

    if (valuesStorage !== undefined) this.setInTopStorage = value => (valuesStorage[key] = value);

    const name = `${storageName}/${key}` as const;

    if (registered.has(name)) throw Error(`Атом ${name} уже зарегистрирован`);
    registered.add(name);

    const storage = (storages[storageName] ??= new JStorage(storageName));

    this.save = val => storage.set(key, val);

    this.getStorageValue = async () => {
      const val = await storage.get(key);
      return val === undefined ? this.value : val;
    };

    (async () => {
      const value = await storage.get(key);

      if (value === undefined || (mylib.isNum(value) && isNaN(value))) return;
      this.justSet(value);
      if (this.subs.size === 0) setTimeout(this.justSet, 100, value);
      this.onValueChange?.(value);
    })();
  }

  get = () => this.value;

  invokeSubs = (sub: Sunscriber) => sub(this.value);

  justSet = (value: Value) => {
    this.value = value;
    this.subs.forEach(this.invokeSubs, this);
    this.setInTopStorage(value);
  };

  set = (
    value: Value | ((prev: Value) => Value),
    isPreventSave?: boolean,
    isRejectValueSetForServerUserStoreCallbackInvoke?: boolean,
  ) => {
    const val = mylib.isFunc(value) ? value(this.value) : value;
    if (val === this.value || val === undefined || (typeof val === 'number' && isNaN(val))) return;

    this.onValueChange?.(val);
    this.justSet(val);

    if (!isRejectValueSetForServerUserStoreCallbackInvoke) this.onValueSetForServerUserStore?.(val);

    if (isPreventSave === true) return;

    this.save(val);
  };

  toggle = (is?: boolean) => this.set((is ?? ((is: boolean) => !is)) as never);
  inkrement = (ink: number) => this.set((+this.value + ink) as never);

  subscribe = (sub: Sunscriber) => {
    this.subs.add(sub);
    return () => {
      this.subs.delete(sub);
    };
  };
}
