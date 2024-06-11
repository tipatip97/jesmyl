import { Executer } from '../../complect/executer/Executer';
import { FilerAppConfig } from '../../complect/filer/Filer.model';

const config: FilerAppConfig = {
  title: 'Текст Библии',
  requirements: {
    rst: {},
  },
  actions: Executer.prepareActionList({}),
};

export default config;
