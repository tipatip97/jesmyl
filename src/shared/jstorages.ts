import { JStorageName } from "../app/App.model";
import { ComplectStorage } from "../complect/Complect.model";
import { JStorage } from "../complect/JStorage";
import { CmStorage } from "../components/apps/cm/Cm.model";
import { TunerStorage } from "../components/apps/tuner/Tuner.model";
import { IndexStorage } from "../components/index/Index.model";

export const appStorage: Record<JStorageName, JStorage<any>> = {
    index: new JStorage<IndexStorage>('index'),
    tuner: new JStorage<TunerStorage>('tuner'),
    complect: new JStorage<ComplectStorage>('complect'),
    cm: new JStorage<CmStorage>('cm'),
};

export const indexStorage: JStorage<IndexStorage> = appStorage['index'];
export const tunerStorage: JStorage<TunerStorage> = appStorage['tuner'];
export const complectStorage: JStorage<ComplectStorage> = appStorage['complect'];
export const cmStorage: JStorage<CmStorage> = appStorage['cm'];

