export type ServerStoreContent<Value = unknown> = {
  ts: number;
  key: StringBySlash;
  value: Value;
};
