import { ActionBox } from '../../../../models';

export const spyGameConfig: ActionBox = {
  access: '$amIManager',
  expected: {},
  '<resetResults>': {
    side: {
      '/finisher': {
        method: 'set',
        value: null,
      },
      '/retired': {
        method: 'set',
        value: null,
      },
    },
    '/roles': {
      action: 'resetSpyResults',
      shortTitle: 'Сбросить результаты',
      method: 'set',
      value: null,
    },
  },
  '<startGame>': {
    args: {
      location: '#String',
      spiesCount: '#Number',
    },
    side: {
      '/iterations': {
        method: 'formula',
        value: 'X + 1',
      },
      '/finisher': {
        method: 'set',
        value: null,
      },
      '/locations': {
        method: 'push',
        value: '{location}',
      },
      '/spiesCount': {
        method: 'set',
        value: '{spiesCount}',
      },
      '/startMs': {
        method: 'set',
        value: () => Date.now(),
      },
      '/roundTm': {
        method: 'set',
        value: '{roundTm}',
      },
    },
    '/roles': {
      action: 'startSpyGame',
      shortTitle: 'Начать игру',
      method: 'set',
      value: '{roles}',
      args: {
        roles: '#Dict',
      },
    },
  },
  '/finisher': {
    action: 'finishSpyGame',
    shortTitle: 'Завершить игру',
    method: 'set',
    value: {
      login: '{*login}',
      name: '{*fio}',
    },
  },
  '<in start game>': {
    '/retired': {
      '<excludeMember>': {
        action: 'excludeSpyMember',
        shortTitle: 'Исключить участника',
        method: 'push',
        value: '{login}',
        uniqs: ['.'],
        args: {
          login: '#String',
        },
      },
    },
    '/locations': {
      args: {
        value: '#String',
      },
      '<add>': {
        action: 'strikeSpyLocation',
        shortTitle: 'Исключить локацию',
        method: 'push',
        uniqs: ['.'],
      },
      '<rem>': {
        action: 'unstrikeSpyLocation',
        shortTitle: 'Вернуть локацию',
        method: 'remove_each',
        value: ['.', '===', '{value}'],
      },
    },
  },
};
