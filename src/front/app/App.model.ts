import { SokiAppName, sokiAppNames } from "../../back/complect/soki/soki.model";

export type AppName = SokiAppName;
export const appNames = sokiAppNames;
export type JStorageName = AppName | 'complect';