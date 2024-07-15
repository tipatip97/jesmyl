import { JStorage } from '../JStorage';
import mylib from '../my-lib/MyLib';

const storages: Record<string, JStorage<any>> = {};
const emptyFunc = () => {};
const registered = new Set<`${string}/${string}`>();

export class Atom<
  Value,
  Key extends string = string,
  Sunscriber extends (value: Value) => void = (value: Value) => void,
> {
  private value: Value;
  private subs = new Set<Sunscriber>();
  private save: (val: Value) => void = emptyFunc;
  private key?: Key;

  storage?: JStorage<Record<string, Value>>;
  onValueChange?: (value: Value) => void;
  rem: () => void;

  constructor(value: Value, storageName?: string, key?: Key) {
    this.value = value;

    this.rem =
      value == null
        ? () => {
            this.value = null!;
            this.save(null!);
          }
        : () => {};

    if (!storageName || !key) return;

    const name = `${storageName}/${key}` as const;

    if (registered.has(name)) throw Error(`Атом ${name} уже зарегистрирован`);
    registered.add(name);

    this.key = key;

    const storage = (this.storage = storages[storageName] ??= new JStorage(storageName));

    this.save = val => storage.set(key, val);

    (async () => {
      const value = await storage.get(key);
      if (value === undefined) return;
      this.justSet(value);
    })();
  }

  get = () => this.value;
  getStorageValue = async () =>
    this.storage === undefined || this.key === undefined
      ? this.value
      : (await this.storage.get(this.key)) ?? this.value;

  invokeSubs = (sub: Sunscriber) => sub(this.value);

  justSet = (value: Value) => {
    this.value = value;
    this.subs.forEach(this.invokeSubs, this);
  };

  set = (value: Value | ((prev: Value) => Value), isPreventSave?: boolean) => {
    const val = mylib.isFunc(value) ? value(this.value) : value;

    if (value === undefined) return;

    this.onValueChange?.(val);
    this.justSet(val);

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
