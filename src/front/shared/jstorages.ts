import { AppName } from '../app/App.model';
import { JStorage } from '../complect/JStorage';
import { NavigationStorage } from '../complect/nav-configurer/Navigation.model';
import admin from '../components/apps/admin/adminStorage';
import cm from '../components/apps/cm/cmStorage';
import gamer from '../components/apps/gamer/gamerStorage';

interface Sto {}
const stub = new JStorage<NavigationStorage<Sto>>('complect');

export const appStorage: Record<AppName, JStorage<any>> = {
  index: stub,
  tuner: stub,
  admin,
  gamer,
  cm,
  leader: stub,
  bible: stub,
};
