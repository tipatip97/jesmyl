import { memo } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import IndexMain from '../components/index/parts/main/IndexMain';
import { AppName } from './App.model';
import { routingApps } from './routing-apps';

const AppRouter = memo(() => {
  return (
    <Routes>
      <Route
        path=":appName/*"
        element={<Router />}
      />
    </Routes>
  );
});

const otherRoute = (
  <Route
    path="!other/*"
    element={<IndexMain />}
  />
);

const Router = () => <>{routingApps[useParams().appName as AppName]?.router(otherRoute)}</>;

export default AppRouter;
