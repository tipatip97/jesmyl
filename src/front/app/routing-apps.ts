import { TheIconType } from '../complect/the-icon/model';
import { bibleRoutingApp } from '../components/apps/bible/routing/bibleRoutingApp';
import { cmRoutingApp } from '../components/apps/cm/routing/cmRoutingApp';
import { AppName } from './App.model';

export type RoutingAppConfig = {
  appName: AppName;
  router: (mainNode: React.ReactNode) => React.ReactNode;
  footer: React.ReactNode;
  title: React.ReactNode;
  Icon: TheIconType;
  lazies: React.ReactNode[];
  level: number;
};

export const routingApps: Partial<Record<AppName, RoutingAppConfig>> = {
  cm: cmRoutingApp,
  bible: bibleRoutingApp,
};
