
export const appNames = ['index', 'cm', 'tuner', 'admin', 'spy', 'lider'] as const;

export type AppName = typeof appNames[number];
export type JStorageName = AppName | 'complect';