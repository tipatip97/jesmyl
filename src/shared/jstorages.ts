import { JStorageName } from "../app/App.model";
import { ComplectStorage } from "../complect/Complect.model";
import { JStorage } from "../complect/JStorage";
import { CmStorage } from "../components/apps/cm/Cm.model";
import { TunerStorage } from "../components/apps/tuner/Tuner.model";
import { IndexStorage } from "../components/index/Index.model";


export const indexStorage = new JStorage<IndexStorage>('index');
export const tunerStorage = new JStorage<TunerStorage>('tuner');
export const complectStorage = new JStorage<ComplectStorage>('complect');
export const cmStorage = new JStorage<CmStorage>('cm');

export const appStorage: Record<JStorageName, JStorage<any>> = {
    index: indexStorage,
    tuner: tunerStorage,
    complect: complectStorage,
    cm: cmStorage
};

