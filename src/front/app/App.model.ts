import { SokiAppName, sokiAppNames } from "../../back/complect/soki/Soki.model";

export type AppName = SokiAppName;
export const appNames = sokiAppNames;
export type JStorageName = AppName | 'complect';