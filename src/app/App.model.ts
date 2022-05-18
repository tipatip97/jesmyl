
export const appNames = ['index', 'cm', 'tuner', 'admin'] as const;

export type AppName = typeof appNames[number];
export type JStorageName = AppName | 'complect';