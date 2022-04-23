import { JStorageName } from "../app/App.model";
import { ComplectStorage } from "../complect/Complect.model";
import { Exer } from "../complect/exer/Exer";
import { JStorage } from "../complect/JStorage";
import { CmStorage } from "../components/apps/cm/Cm.model";
import { IndexStorage } from "../components/index/Index.model";


export const indexStorage = new JStorage<IndexStorage>('index');
export const complectStorage = new JStorage<ComplectStorage>('complect');
export const cmStorage = new JStorage<CmStorage>('cm');

export const appStorage: Record<JStorageName, JStorage<any>> = {
    index: indexStorage,
    complect: complectStorage,
    cm: cmStorage
};

