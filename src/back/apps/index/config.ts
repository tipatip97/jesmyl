import { Executer } from '../../complect/executer/Executer';
import { rootDirective } from '../../complect/filer/Filer.complect';
import { FilerAppConfig } from '../../complect/filer/Filer.model';
import { indexSchedulesActionBox } from './schedules/action-box/action-box';
import { indexSchedulesConfig } from './schedules/filer-requirement';

const config: FilerAppConfig = {
  title: 'JESMYL',
  requirements: {
    schedules: indexSchedulesConfig,
    appVersion: {
      watch: [`${rootDirective}/+version.json`, content => JSON.parse(content).num],
    },
    nounPronsWords: null,
    fileAssociations: null,
    serverUserStore: { level: 1000 },
    crAlarm: { level: 1000 },
  },
  actions: Executer.prepareActionList({
    '/schedules': indexSchedulesActionBox,
    '/serverUserStore': { expected: {}, action: 'init' },
    '/crAlarm': { expected: [], action: 'init' },
  }),
};

export default config;
