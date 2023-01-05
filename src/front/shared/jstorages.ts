import { JStorageName } from "../app/App.model";
import { ComplectStorage } from "../complect/Complect.model";
import { JStorage } from "../complect/JStorage";
import { NavigationStorage } from "../complect/nav-configurer/Navigation.model";
import { AdminStorage } from "../components/apps/admin/Admin.model";
import { CmStorage } from "../components/apps/cm/Cm.model";
import { LeaderStoraged } from "../components/apps/leader/Leader.model";
import { SpyStorage } from "../components/apps/spy/Spy.model";
import { TunerStorage } from "../components/apps/tuner/Tuner.model";
import { IndexStorage } from "../components/index/Index.model";

export const appStorage: Record<JStorageName, JStorage<any>> = {
    index: new JStorage<NavigationStorage<IndexStorage>>('index'),
    tuner: new JStorage<NavigationStorage<TunerStorage>>('tuner'),
    admin: new JStorage<NavigationStorage<AdminStorage>>('admin'),
    spy: new JStorage<NavigationStorage<SpyStorage>>('spy'),
    complect: new JStorage<NavigationStorage<ComplectStorage>>('complect'),
    cm: new JStorage<NavigationStorage<CmStorage>>('cm'),
    leader: new JStorage<NavigationStorage<LeaderStoraged>>('leader'),
};

export const indexStorage: JStorage<NavigationStorage<IndexStorage>> = appStorage.index;
export const tunerStorage: JStorage<NavigationStorage<TunerStorage>> = appStorage.tuner;
export const adminStorage: JStorage<NavigationStorage<AdminStorage>> = appStorage.admin;
export const spyStorage: JStorage<NavigationStorage<SpyStorage>> = appStorage.spy;
export const complectStorage: JStorage<NavigationStorage<ComplectStorage>> = appStorage.complect;
export const cmStorage: JStorage<NavigationStorage<CmStorage>> = appStorage.cm;
export const leaderStorage: JStorage<NavigationStorage<LeaderStoraged>> = appStorage.leader;
