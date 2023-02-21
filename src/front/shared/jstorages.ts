import { JStorageName } from "../app/App.model";
import { JStorage } from "../complect/JStorage";
import admin from "../components/apps/admin/adminStorage";
import cm from "../components/apps/cm/cmStorage";
import leader from "../components/apps/leader/leaderStorage";
import spy from "../components/apps/spy/spyStorage";
import index from "../components/index/indexStorage";

export const appStorage: Record<JStorageName, JStorage<any>> = {
    index,
    tuner: index,
    admin,
    spy,
    complect: index,
    cm,
    leader,
};
