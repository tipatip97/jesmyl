import { memo, useEffect } from 'react';
import { Route, Routes, useParams, useSearchParams } from 'react-router-dom';
import ScheduleWidgetTgDayView from '../complect/schedule-widget/general/TgDayView';
import IndexMain from '../components/index/parts/main/IndexMain';
import { soki } from '../soki';
import { AppName } from './App.model';
import { routingApps } from './routing-apps';

const AppRouter = memo(() => {
  return (
    <Routes>
      <Route
        path=":appName/*"
        element={<Router />}
      />
      <Route
        path="schedule-day"
        element={<ScheduleWidgetTgDayView />}
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

const effect = () => soki.addUrl();

const Router = () => {
  const params = useParams();
  const app = routingApps[params.appName as AppName] ?? routingApps['cm'];
  const [searchs] = useSearchParams();

  useEffect(effect, [params, searchs]);

  useEffect(() => {
    if (app === undefined) return;

    return hookEffectLine()
      .setTimeout(() => soki.pullCurrentAppData(app.appName), 300)
      .effect();
  }, [app]);

  return <>{app?.router(otherRoute)}</>;
};

export default AppRouter;
