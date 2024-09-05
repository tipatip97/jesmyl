import { AppName } from '../app/App.model';
import { JStorage } from '../complect/JStorage';
import admin from '../components/apps/admin/adminStorage';
import cm from '../components/apps/cm/cmStorage';
import gamer from '../components/apps/gamer/gamerStorage';

const stub = new JStorage<any>('complect');

export const appStorage: Record<AppName, JStorage<any>> = {
  index: stub,
  tuner: stub,
  admin,
  gamer,
  cm,
  wed: stub,
  leader: stub,
  bible: stub,
};
