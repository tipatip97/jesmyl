import { JStorageName } from '../app/App.model';
import { JStorage } from '../complect/JStorage';
import { NavigationStorage } from '../complect/nav-configurer/Navigation.model';
import admin from '../components/apps/admin/adminStorage';
import cm from '../components/apps/cm/cmStorage';
import leader from '../components/apps/leader/leaderStorage';
import gamer from '../components/apps/gamer/gamerStorage';
import index from '../components/index/indexStorage';
import router from '../components/router/routerStorage';

interface Sto {}
const stub = new JStorage<NavigationStorage<Sto>, unknown>('complect');

export const appStorage: Record<JStorageName, JStorage<any, any>> = {
  index,
  tuner: stub,
  admin,
  gamer,
  cm,
  leader,
  complect: stub,
  strong: stub,
  router,
};
