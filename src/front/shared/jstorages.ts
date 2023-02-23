import { JStorageName } from "../app/App.model";
import { JStorage } from "../complect/JStorage";
import { NavigationStorage } from "../complect/nav-configurer/Navigation.model";
import admin from "../components/apps/admin/adminStorage";
import cm from "../components/apps/cm/cmStorage";
import leader from "../components/apps/leader/leaderStorage";
import spy from "../components/apps/spy/spyStorage";
import index from "../components/index/indexStorage";

interface Sto { }
const stub: JStorage<NavigationStorage<Sto>> = new JStorage<NavigationStorage<Sto>>('complect');

export const appStorage: Record<JStorageName, JStorage<any>> = {
    index,
    tuner: stub,
    admin,
    spy,
    complect: stub,
    cm,
    leader,
};
