import { Executer } from '../../complect/executer/Executer';
import { FilerAppConfig } from '../../complect/filer/Filer.model';
import { rootDirective } from '../../complect/soki/soki.model';
import { Application } from './models/Application';
import { indexSchedulesActionBox } from './schedules/action-box';
import { indexSchedulesConfig } from './schedules/filer-requirement';

const config: FilerAppConfig = {
  title: 'JESMYL',
  requirements: {
    schedules: indexSchedulesConfig,
    apps: {
      prepareContent: (apps: Application[], auth) => {
        const authLevel = auth?.level || 0;
        return apps
          .map(app => {
            if (!app.hidden && (app.level || 0) <= authLevel) return app;
            else return null;
          })
          .filter(app => app);
      },
    },
    appVersion: {
      watch: [`${rootDirective}/+version.json`, content => JSON.parse(content).num],
    },
    nounPronsWords: null,
    fileAssociations: null,
  },
  actions: Executer.prepareActionList({
    '/schedules': indexSchedulesActionBox,
  }),
};

export default config;
