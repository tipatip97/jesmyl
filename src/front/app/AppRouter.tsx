import { memo, useEffect, useMemo } from 'react';
import onBackButton from '../complect/back-button-listener';
import useIndexNav from '../components/index/complect/useIndexNav';
import { useAuth } from '../components/index/molecules';
import { useIsReadyRouter } from '../components/router/atoms';
import navConfigurers from '../shared/navConfigurers';
import { AppName } from './App.model';

const AppRouter = memo(({ appName }: { appName: AppName }) => {
  const index = useIndexNav();
  const app = navConfigurers[appName || 'index']();
  const auth = useAuth();
  const [isReady] = useIsReadyRouter();

  useEffect(() => {
    const indexGoBack = index.goBack;
    const appGoBack = app.goBack;

    return onBackButton.listen(() => {
      if (!appName || appName === 'index') indexGoBack();
      appGoBack();
    });
  }, [app.goBack, appName, index.goBack]);

  const appContent = useMemo(
    () => (index.route != null ? null : app.nav.findContent(auth, app.route, () => app.navigateToRoot(), isReady)),
    [index.route, app, auth, isReady],
  );

  const indexContent = useMemo(
    () => (index.route == null ? null : index.nav.findContent(auth, index.route)),
    [index.route, index.nav, auth],
  );

  return index.route != null ? index.nav.nav.root(indexContent) : app.nav.nav.root(appContent);
});

export default AppRouter;
