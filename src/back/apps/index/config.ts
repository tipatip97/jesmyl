import { Executer } from '../../complect/executer/Executer';
import { FilerAppConfig } from '../../complect/filer/Filer.model';
import { rootDirective } from '../../complect/soki/soki.model';
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
  },
  actions: Executer.prepareActionList({
    '/schedules': indexSchedulesActionBox,
  }),
};

export default config;
