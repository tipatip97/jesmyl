import { JStorageName } from "../app/App.model";
import { ComplectStorage } from "../complect/Complect.model";
import { JStorage } from "../complect/JStorage";
import { NavigationStorage } from "../complect/nav-configurer/Navigation.model";
import { CmStorage } from "../components/apps/cm/Cm.model";
import { TunerStorage } from "../components/apps/tuner/Tuner.model";
import { IndexStorage } from "../components/index/Index.model";

export const appStorage: Record<JStorageName, JStorage<any>> = {
    index: new JStorage<NavigationStorage<IndexStorage>>('index'),
    tuner: new JStorage<NavigationStorage<TunerStorage>>('tuner'),
    complect: new JStorage<NavigationStorage<ComplectStorage>>('complect'),
    cm: new JStorage<NavigationStorage<CmStorage>>('cm'),
};

export const indexStorage: JStorage<NavigationStorage<IndexStorage>> = appStorage['index'];
export const tunerStorage: JStorage<NavigationStorage<TunerStorage>> = appStorage['tuner'];
export const complectStorage: JStorage<NavigationStorage<ComplectStorage>> = appStorage['complect'];
export const cmStorage: JStorage<NavigationStorage<CmStorage>> = appStorage['cm'];

