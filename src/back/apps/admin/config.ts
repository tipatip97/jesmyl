import { Executer } from '../../complect/executer/Executer';
import { FilerAppConfig } from '../../complect/filer/Filer.model';

const config: FilerAppConfig = {
  title: 'ADMINO',
  requirements: {
    userList: {
      level: 100,
      rootPath: 'bonjour',
      ext: null,
      refreshTrigger: 'register',
    },
  },
  actions: Executer.prepareActionList({
    '/userList/[login === {login}]/level': {
      action: 'setUserLevel',
      title: 'Пользователь "$fio" теперь имеет уровень доступа $level',
      method: 'set',
      level: 100,
      value: '{level}',
      isSequre: true,
      args: {
        level: '#Number',
        login: '#String',
        fio: '#String',
      },
    },
  }),
};

export default config;
