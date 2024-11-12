export type SimpleKeyValue<Key = string, Value = unknown> = SimpleValueKey<Value, Key>;
export type SimpleValueKey<Value = unknown, Key = string> = {
  key: Key;
  value: Value;
};
