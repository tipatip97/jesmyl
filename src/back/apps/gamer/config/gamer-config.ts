import { Executer } from '../../../complect/executer/Executer';
import { FilerAppConfig } from '../../../complect/filer/Filer.model';
import { aliasGameConfig } from '../games/alias/alias.config';
import { spyGameConfig } from '../games/spy/spy.config';
import { gamerMemberConfig } from './member';

const config: FilerAppConfig = {
  title: 'Игрок',
  requirements: {
    locations: null,
    rooms: null,
    aliasWordPacks: null,
  },
  actions: Executer.prepareActionList({
    '/locations': {
      '<add>': {
        level: 50,
        action: 'addNewLocation',
        shortTitle: 'Добавить локацию',
        method: 'push',
        uniqs: ['.'],
        value: '{location}',
        args: {
          location: '#String',
        },
      },
    },
    '/rooms': {
      '<add>': {
        action: 'addNewRoom',
        title: 'Добавлена новая комната $name',
        shortTitle: 'Создание комнаты',
        method: 'push',
        level: 3,
        value: {
          w: '{@setNewWid()}',
          name: '{name}',
          members: [
            {
              login: '{*login}',
              name: '{*fio}',
              tgId: '{*tgId}',
              status: 'owner',
            },
          ],
          games: {},
        },
        args: {
          name: '#String',
        },
      },
      '<rem>': {
        action: 'removeRoom',
        method: 'remove',
        shortTitle: 'Удаление комнаты',
        level: 50,
        args: {
          roomw: '#Number',
        },
        value: ['w', '===', '{roomw}'],
      },
      '/[w === {roomw}]': {
        args: {
          roomw: '#Number',
        },
        '/members': {
          fixAccesses: {
            amIManager: [['login', '===&', '{*login}', 'status', 'in', ['owner', 'admin']]],
            amIOwner: [['login', '===&', '{*login}', 'status', '===', 'owner']],
            isMemberNotOwner: [['login', '===&', '{login}', 'status', '!==', 'owner']],
          },
          '<requestAddToRoom>': {
            action: 'requestAddToRoom',
            shortTitle: 'Запросить вход',
            method: 'push',
            uniqs: ['login'],
            value: {
              login: '{*login}',
              name: '{*fio}',
              tgId: '{*tgId}',
              tgMsgId: '{tgMsgId}',
              status: 'requester',
            },
          },
          '/[login === {login}]': gamerMemberConfig,
        },
        '/currentGame': {
          action: 'setCurrentGameName',
          shortTitle: 'Сменить игру',
          method: 'set',
          args: {
            value: ['spy', 'alias'],
          },
        },
        '/games': {
          '/spy': spyGameConfig,
          '/alias': aliasGameConfig,
        },
      },
    },
  }),
};

export default config;
