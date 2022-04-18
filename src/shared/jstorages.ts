import { ComplectStorage } from "../complect/Complect.model";
import { JStorage } from "../complect/JStorage";
import { CmStorage } from "../components/apps/cm/Cm.model";
import { IndexStorage } from "../components/index/Index.model";
import { AppName } from "../app/App.model";


export const indexStorage = new JStorage<IndexStorage>('index');
export const complectStorage = new JStorage<ComplectStorage>('complect');
export const cmStorage = new JStorage<CmStorage>('cm');

export const appStorage: Record<AppName, JStorage> = {
    index: indexStorage,
    cm: cmStorage
};

