import React, { Suspense } from 'react';
import { RoutingAppConfig } from '../../../../app/routing-apps';
import { IconBook02StrokeRounded } from '../../../../complect/the-icon/icons/book-02';
import { BibleFooter } from './BibleFooter';

const BibleRouter = React.lazy(() => import('./BibleRouter'));

export const bibleRoutingApp: RoutingAppConfig = {
  appName: 'bible',
  title: 'Библия',
  router: mainNode => (
    <Suspense>
      <BibleRouter mainNode={mainNode} />
    </Suspense>
  ),
  footer: <BibleFooter />,
  Icon: IconBook02StrokeRounded,
  level: 0,
  lazies: [<BibleRouter mainNode />],
};
