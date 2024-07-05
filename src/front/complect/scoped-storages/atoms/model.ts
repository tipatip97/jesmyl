import { JStorage } from '../../JStorage';

const storages: Record<string, JStorage<any>> = {};
const emptyFunc = () => {};

export class Atom<Value, Key extends string, Sunscriber extends (value: Value) => void = (value: Value) => void> {
  private value: Value;
  private subs = new Set<Sunscriber>();
  private save: (val: Value) => void = emptyFunc;

  constructor(value: Value, storageName?: string, key?: Key) {
    this.value = value;

    if (!storageName || !key) return;

    const storage = (storages[key] ??= new JStorage(storageName));

    this.save = val => storage.set(key, val);

    (async () => {
      const value = await storage.get(key);
      if (value === undefined) return;
      this.justSet(value);
    })();
  }

  get = () => this.value;

  invokeSubs = (sub: Sunscriber) => sub(this.value);

  justSet = (value: Value) => {
    this.value = value;
    this.subs.forEach(this.invokeSubs, this);
  };

  set = (value: Value) => {
    this.save(value);
    this.justSet(value);
  };

  subscribe = (sub: Sunscriber) => {
    this.subs.add(sub);
    return () => {
      this.subs.delete(sub);
    };
  };
}
