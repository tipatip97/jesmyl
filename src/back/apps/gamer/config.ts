import { Executer } from '../../complect/executer/Executer';
import { FilerAppConfig } from '../../complect/filer/Filer.model';
import { aliasGameConfig } from './games/alias/alias.config';
import { spyGameConfig } from './games/spy/spy.config';

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
              status: 'requester',
            },
          },
          '/[login === {login}]': {
            access: '$amIManager && $isMemberNotOwner',
            args: {
              login: '#String',
            },
            '/status': {
              '<add>': {
                action: 'acceptMemberToRoom',
                shortTitle: 'Добавить участника',
                method: 'set',
                value: 'member',
              },
              '<up>': {
                action: 'riseUpToAdmin',
                shortTitle: 'Сделать админом',
                method: 'set',
                value: 'admin',
              },
              '<down>': {
                action: 'riseDownToUser',
                shortTitle: 'Понизить до участника',
                method: 'set',
                value: 'member',
              },
            },
            '/isInactive': {
              '<ban>': {
                action: 'banCurrentRoomMember',
                shortTitle: 'Заблокировать участника',
                method: 'set',
                value: true,
              },
              '<unban>': {
                action: 'unbanCurrentRoomMember',
                shortTitle: 'Разблокировать участника',
                method: 'set',
                value: false,
              },
            },
          },
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
