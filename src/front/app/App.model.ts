import { SokiAppName, sokiAppNames } from "../models";


export type AppName = SokiAppName;
export const appNames = sokiAppNames;
export type JStorageName = AppName | 'complect' | 'router' | 'strong';