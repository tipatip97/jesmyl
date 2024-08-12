import { memo, useEffect } from 'react';
import { Route, Routes, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { atom, useAtomSet, useAtomValue } from '../complect/atoms';
import ScheduleWidgetTgDayView from '../complect/schedule-widget/general/TgDayView';
import IndexMain from '../components/index/parts/main/IndexMain';
import { soki } from '../soki';
import { AppName } from './App.model';
import { AppServiceActions, appServiceActionsRouteName as scheduleWidgetActionsRouteName } from './AppActions';
import { routingApps } from './routing-apps';
import { useInitSoki } from './useInitSoki';

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
      <Route
        path={scheduleWidgetActionsRouteName}
        element={<AppServiceActions />}
      />
      <Route
        path="*"
        element={<Redirect />}
      />
    </Routes>
  );
});

const Redirect = () => {
  const appName = useAtomValue(appNameAtom);
  const navigate = useNavigate();

  useEffect(() => {
    return hookEffectLine()
      .setTimeout(() => navigate(`/${appName}/i`), 500)
      .effect();
  }, [appName, navigate]);

  return <></>;
};

const otherRoute = (
  <Route
    path="!other/*"
    element={<IndexMain />}
  />
);

const appNameAtom = atom<AppName>('cm');

const Router = () => {
  const params = useParams();
  const app = routingApps[params.appName as AppName] ?? routingApps['cm'];
  const [searchs] = useSearchParams();
  const setAppName = useAtomSet(appNameAtom);

  useEffect(() => {
    soki.addUrl();
    if (app) setAppName(app.appName);
  }, [app, params, searchs, setAppName]);
  useInitSoki();

  return <>{app?.router(otherRoute)}</>;
};

export default AppRouter;
