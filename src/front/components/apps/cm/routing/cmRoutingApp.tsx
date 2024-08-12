import { FunctionComponent } from 'react';
import { Route } from 'react-router-dom';
import { RoutingAppConfig } from '../../../../app/routing-apps';
import { IconBookOpen02StrokeRounded } from '../../../../complect/the-icon/icons/book-open-02';
import TheComposition from '../col/com/TheComposition';
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

export const cmCompositionRoute = (Parent: FunctionComponent<any>) => (
  <Route
    path=":comw/*"
    element={
      <Parent>
        <TheComposition />
      </Parent>
    }
  />
);
