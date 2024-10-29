import { useEffect } from 'react';
import { Route, useParams, useSearchParams } from 'react-router-dom';
import { atom, useAtomSet } from '../complect/atoms';
import IndexMain from '../components/index/parts/main/IndexMain';
import { IndexSecretChats } from '../components/index/parts/main/secret-chat/SecretChats';
import { soki } from '../soki';
import { AppName } from './App.model';
import { routingApps } from './routing-apps';
import { useInitSoki } from './useInitSoki';

const AppRouterProvider = () => {
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

const otherRoute = (
  <>
    <Route
      path="!chats/*"
      element={<IndexSecretChats withoutBackButton />}
    />
    <Route
      path="!other/*"
      element={<IndexMain />}
    />
  </>
);

const appNameAtom = atom<AppName>('cm');

export default AppRouterProvider;
