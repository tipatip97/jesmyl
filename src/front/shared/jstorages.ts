import { AppName } from '../app/App.model';
import { JStorage } from '../complect/JStorage';
import { NavigationStorage } from '../complect/nav-configurer/Navigation.model';
import admin from '../components/apps/admin/adminStorage';
import bible from '../components/apps/bible/bibleStorage';
import cm from '../components/apps/cm/cmStorage';
import gamer from '../components/apps/gamer/gamerStorage';
import leader from '../components/apps/leader/leaderStorage';
import index from '../components/index/indexStorage';

interface Sto {}
const stub = new JStorage<NavigationStorage<Sto>, unknown>('complect');

export const appStorage: Record<AppName, JStorage<any, any>> = {
  index,
  tuner: stub,
  admin,
  gamer,
  cm,
  leader,
  bible,
};
