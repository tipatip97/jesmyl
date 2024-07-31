import { RoutingAppConfig } from '../../../../app/routing-apps';
import { IconBookOpen02StrokeRounded } from '../../../../complect/the-icon/icons/book-open-02';
import { CmFooter } from './CmFooter';
import { CmRouter } from './CmRouter';

export const cmRoutingApp: RoutingAppConfig = {
  appName: 'cm',
  title: 'Песни возрождённых',
  router: mainNode => <CmRouter mainNode={mainNode} />,
  footer: <CmFooter />,
  Icon: IconBookOpen02StrokeRounded,
  lazies: [],
  level: 0,
};
