import { SokiAppName, sokiAppNames } from '../models';

export type AppName = SokiAppName;
export const appNames = sokiAppNames;

export const getAppNameFromString = (appNameStr: string) =>
  appNames.includes(appNameStr as never) ? (appNameStr as AppName) : null;
