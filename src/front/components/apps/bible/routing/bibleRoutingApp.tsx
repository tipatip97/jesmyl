import { RoutingAppConfig } from '../../../../app/routing-apps';
import { IconBook02StrokeRounded } from '../../../../complect/the-icon/icons/book-02';
import { BibleFooter } from './BibleFooter';
import { BibleRouter } from './BibleRouter';

export const bibleRoutingApp: RoutingAppConfig = {
  appName: 'bible',
  title: 'Библия',
  router: mainNode => <BibleRouter mainNode={mainNode} />,
  footer: <BibleFooter />,
  Icon: IconBook02StrokeRounded,
  level: 0,
  lazies: [],
};
