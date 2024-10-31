import { useEffect, useState } from 'react';
import { IMoleculeFractionalStore } from '.';
import Eventer, { EventerValueListeners } from '../../../back/complect/Eventer';
import { ServerStoreContent } from '../../../back/complect/soki/parts/120-ServerStore';
import { itIt, retUnd } from '../../../back/complect/utils';
import mylib from '../my-lib/MyLib';

export class FractionalServerStore<Key extends string | number, Value> implements IMoleculeFractionalStore<Value> {
  updateServerStoreContent: (content: ServerStoreContent<Value>) => void = retUnd;
  self = { [this.contentValuePrefix]: this };
  listeners: EventerValueListeners<{ key: Key; value: Value }> = [];

  constructor(
    public contentValuePrefix: `${string}/${string}::`,
    public lastWriteTsPrefix: string,
    private defaultValue: Value,
    private valueParser: (strValue: string) => Value = itIt as never,
    private valueStringifier: (value: Value) => string = itIt as never,
  ) {}

  private lastWriteTs(key: Key, setTs?: number) {
    if (setTs !== undefined) localStorage[`${this.lastWriteTsPrefix}${key}`] = setTs;

    return +localStorage[`${this.lastWriteTsPrefix}${key}`] || 0;
  }

  private knownKeys: Set<Key> = (() => {
    const set = new Set<Key>();

    Object.keys(localStorage).forEach(lsKey => {
      if (!lsKey.startsWith(this.contentValuePrefix)) return;
      const key = lsKey.slice(this.contentValuePrefix.length);
      set.add((isNaN(+key) ? key : +key) as never);
    });

    return set;
  })();

  insertContents = (ts: number, contents: ServerStoreContent[]) => {
    this.knownKeys.forEach(key => {
      const localTs = this.lastWriteTs(key);

      if (!localTs || localTs < ts) return;

      contents.push({
        key: `${this.contentValuePrefix}${key}` as never,
        ts: localTs,
        value: this.get(key),
      });
    });
  };

  onFreshServerStoreContentChange = (content: ServerStoreContent<Value>) => {
    if (!mylib.isStr(content.value) || !content.key.startsWith(this.contentValuePrefix)) return;
    const [, comwStr] = content.key.split('::');
    const key = (isNaN(+comwStr) ? comwStr : +comwStr) as Key;

    if (this.lastWriteTs(key) >= content.ts) return;

    this.set(key, content.value, content.ts);
  };

  get = (comw: Key): Value => {
    return this.valueParser(localStorage[`${this.contentValuePrefix}${comw}`]);
  };

  setters: Partial<Record<Key, (value: Value | ((value: Value) => Value)) => void>> = {};

  set = (key: Key, value: Value, forceTs?: number) => {
    const lsKey = `${this.contentValuePrefix}${key}` as const;
    const stringifiedValue = this.valueStringifier(value);

    if (localStorage[lsKey] === stringifiedValue || (!localStorage[lsKey] && !stringifiedValue)) return;

    if (value == null) localStorage.removeItem(lsKey);
    else localStorage[lsKey] = stringifiedValue;

    this.knownKeys.add(key);

    const ts = this.lastWriteTs(key, forceTs ?? Date.now());

    Eventer.invokeValue(this.listeners, { value, key });
    this.updateServerStoreContent({ ts, key: lsKey, value });
  };

  useValue = (key: Key) => {
    const [value, setValue] = useState(this.defaultValue);

    useEffect(() => {
      setValue(this.get(key));

      return Eventer.listenValue(this.listeners, event => {
        if (event.key === key) setValue(event.value);
      });
    }, [key]);

    return [
      value,
      (this.setters[key] ??= valueScalar =>
        this.set(key, mylib.isFunc(valueScalar) ? valueScalar(this.get(key)) : valueScalar)),
    ] as const;
  };
}
