import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { soki } from '../soki';
import { AppName } from './App.model';

export const useInitSoki = (topAppName?: AppName) => {
  const appName = useParams().appName ?? topAppName ?? 'index';

  useEffect(() => {
    if (appName === undefined) return;

    return hookEffectLine()
      .setTimeout(() => soki.pullCurrentAppData(appName as AppName), 500)
      .effect();
  }, [appName]);
};
