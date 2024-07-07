import { useCallback, useMemo } from 'react';
import { AppName } from '../app/App.model';
import { useAuth, useCurrentApp } from '../components/index/molecules';
import { RoutePathVariated } from '../components/router/Router.model';
import navConfigurers, { NavDataRegister } from '../shared/navConfigurers';
import { soki } from '../soki';
import { ToastModalConfig } from './modal/useToast';
import { MyLib } from './my-lib/MyLib';
import useNavConfigurer from './nav-configurer/useNavConfigurer';
import { jesmylHostName } from './qr-code/useQRMaster';
import { useActualRef } from './useActualRef';

export default function useApps(errorToast: (content?: React.ReactNode, config?: ToastModalConfig) => void) {
  const [, setCurrentApp] = useCurrentApp();
  const auth = useAuth();
  const errorToastRef = useActualRef(errorToast);
  const appConfigs = useMemo(() => ({}), []) as Record<AppName, ReturnType<typeof useNavConfigurer>>;
  MyLib.entries(navConfigurers).forEach(([name, config]) => (appConfigs[name] = config()));

  const jumpToApp = useCallback(
    <GAppName extends AppName, NavData extends NavDataRegister[GAppName], Key extends keyof NavData>(
      appName: GAppName,
      key?: Key,
      value?: NavData[Key],
    ) => {
      const jump = (phase: RoutePathVariated<NavData>) => {
        if (appName !== 'index') {
          soki.onAppChange(appName);
          setCurrentApp(appName);
        }
        appConfigs[appName].navigate(phase);
        if (appName !== 'index') appConfigs.index.navigate(null, false);
      };

      const jumpToRoot = () => jump([appConfigs[appName].nav.nav.rootPhase!]);

      if (key === undefined) {
        jumpToRoot();
        return;
      }
      let isClearRoute = true;

      appConfigs[appName].nav.nav.jumpByLink?.[key]?.({
        value,
        key,
        auth,
        jump,
        jumpToRoot,
        rejectClearRoute: () => (isClearRoute = false),
        errorToast: errorToastRef.current,
      });

      Promise.resolve().then(() => {
        if (isClearRoute) {
          window.history.pushState({}, '', jesmylHostName);
        }
      });
    },
    [appConfigs, auth, errorToastRef, setCurrentApp],
  );

  return useMemo(() => {
    return {
      appConfigs,
      jumpToApp,
    };
  }, [appConfigs, jumpToApp]);
}
