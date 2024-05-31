import { ActionBox, ActionBoxOnFinalCallback, ActionBoxValue } from '../../../models';
import { IScheduleWidget } from '../models/ScheduleWidget.model';
import { ScheduleWidgetUserRoleRight, scheduleWidgetRegTypeRights, scheduleWidgetUserRights } from '../rights';
import { indexScheduleSetMessageInform } from './tg-bot-inform/tg-inform';

const emptyArray: [] = [];

const onTgInformingChangeSuccess: ActionBoxOnFinalCallback = (props, _value, auth) => {
  if (props !== null) indexScheduleSetMessageInform(props.schw, auth, props.dayi);
};

const addUserValue = {
  fio: '{*fio}',
  login: '{*login}',
  nick: '{*nick}',
  tgId: '{*tgId}',
} as const;

const newSchedule: ActionBoxValue<IScheduleWidget<string>> = {
  w: '{schw}',
  title: '{title}',
  app: '{app}',
  dsc: '',
  topic: '',
  days: emptyArray,
  tatts: emptyArray,
  types: emptyArray,
  tgInformTime: 5,
  start: () => {
    const date = new Date();
    date.setMonth(date.getMonth() + 1);
    date.setHours(0, 0, 0, 0);
    return date.getTime();
  },
  ctrl: {
    cats: ['Основное'],
    users: [
      {
        ...addUserValue,
        mi: 0,
        R: scheduleWidgetUserRights.getAllRights(),
      },
    ],
    roles: [
      {
        mi: 0,
        title: 'Координатор',
        icon: 'github-outline',
        user: 0,
      },
    ],
    type: scheduleWidgetRegTypeRights.collectRights(),
    defu: scheduleWidgetUserRights.collectRights(ScheduleWidgetUserRoleRight.Read),
  },
  lists: {
    cats: [
      {
        icon: 'people-outline',
        title: 'Группа',
        titles: ['Наставники', 'Участники'],
      },
    ],
    units: [
      {
        cat: 0,
        mi: 1,
        title: 'Первая',
        dsc: '',
      },
    ],
  },
};

export const indexSchedulesActionBox: ActionBox<IScheduleWidget<string>[]> = {
  scopeNode: 'schs',
  expected: { list: [] },
  '/list': {
    D: {
      value: ['w', '===', '{schw}'],
    },
    C: {
      RRej: true,
      value: newSchedule,
      args: {
        schw: '#Number',
        title: '#String',
        app: '#String',
      },
    },
    onSuccess: onTgInformingChangeSuccess,
    '/[w === {schw}]': {
      scopeNode: 'schw',
      args: {
        schw: '#Number',
      },
      '<copy>': {
        scopeNode: 'copy',
        C: {
          method: 'set_all',
          args: {
            value: '#Dict',
          },
        },
      },
      '/start': {
        U: {
          args: {
            value: '#Number',
          },
        },
        setEachInParent: { 'days.list': { tgInform: 1 } },
        onSuccess: onTgInformingChangeSuccess,
      },
      '/{key}': {
        scopeNode: 'field',
        U: {
          RRej: ScheduleWidgetUserRoleRight.ReadTitles,
          args: {
            key: ['topic', 'dsc', 'title'],
            value: '#String',
          },
        },
      },
      '/withTech': {
        U: {
          RRej: true,
          args: {
            value: '#Num',
          },
        },
      },
      '/tgInform': {
        U: {
          args: {
            value: '#Num',
          },
        },
        onSuccess: onTgInformingChangeSuccess,
      },
      '/tgInformTime': {
        U: {
          args: {
            value: '#Number',
          },
        },
        onSuccess: onTgInformingChangeSuccess,
      },
      '/ctrl': {
        '/type': {
          U: {
            RRej: true,
            args: {
              value: '#Number',
            },
          },
        },
        '/defu': {
          U: {
            RRej: true,
            args: {
              value: '#Number',
            },
          },
        },
        '/cats': {
          scopeNode: 'categories',
          C: {
            value: '',
          },
          '/{cati}': {
            scopeNode: 'cati',
            U: {},
          },
        },
        '/users': {
          C: {
            RRej: ScheduleWidgetUserRoleRight.Read,
            setSystems: ['mi'],
            value: addUserValue,
          },
          '<add me by link>': {
            scopeNode: 'addMeByLink',
            C: {
              setSystems: ['mi'],
              args: {
                $$vars: {
                  accessActionWithoutUser: true,
                },
              },
              value: addUserValue,
            },
          },
          '<add user>': {
            scopeNode: 'newUser',
            C: {
              setSystems: ['mi'],
            },
          },
          '/[mi === {userMi}]': {
            scopeNode: 'userMi',
            args: {
              userMi: '#Number',
            },
            '<join>': {
              action: 'joinUserByLink',
              method: 'set_all',
              value: addUserValue,
            },
            '<userData>': {
              scopeNode: 'userData',
              U: {
                method: 'set_all',
                value: {
                  fio: '{fio}',
                  nick: '{*nick}',
                  login: '{login}',
                },
              },
            },
            '<setUserTgInform action>': {
              action: 'setUserTgInform',
              method: 'set_all',
              value: {
                tgInform: '{value}',
              },
              args: {
                value: '#Num',
              },
            },
            '<tg alerts>': {
              scopeNode: 'tgInform',
              U: {
                method: 'set_all',
                value: {
                  tgInform: '{value}',
                  tgId: '{*tgId}',
                },
                args: {
                  value: '#Num',
                },
              },
            },
            '/fio': {
              U: {
                args: {
                  value: '#String',
                },
              },
            },
            '/R': {
              U: {
                RRej: true,
                args: {
                  value: '#Number',
                },
              },
            },
            '/li': {
              expected: {},
              '/{cati}': {
                scopeNode: 'cati',
                C: {
                  method: 'set',
                },
                D: {
                  method: 'delete',
                },
              },
            },
          },
        },
        '/roles': {
          C: {
            setSystems: ['mi'],
            value: {
              title: '',
            },
          },
          '/[mi === {roleMi}]': {
            scopeNode: 'roleMi',
            '/{key}': {
              scopeNode: 'field',
              U: {
                args: { key: '#String' },
              },
            },
            '/user': {
              D: {
                method: 'delete',
              },
            },
          },
        },
      },
      '/lists': {
        scopeNode: 'lists',
        '/cats': {
          C: {
            value: {
              title: '',
              icon: 'list',
              titles: ['Руководители', 'Участники'],
            },
          },
          '/{cati}': {
            scopeNode: 'cati',
            '/{key}': {
              scopeNode: 'field',
              U: {},
            },
            '/titles': {
              '/0': {
                scopeNode: 'mentorsTitle',
                U: {},
              },
              '/1': {
                scopeNode: 'membersTitle',
                U: {},
              },
            },
          },
        },
        '/units': {
          C: {
            setSystems: ['mi'],
            value: {
              cat: '{cati}',
              title: '',
            },
            args: {
              cati: '#Number',
            },
          },
          '/[mi === {unitMi}]': {
            scopeNode: 'unitMi',
            '/{key}': {
              scopeNode: 'field',
              U: {},
            },
          },
        },
      },
      '/tatts': {
        RRej: ScheduleWidgetUserRoleRight.ReadTitles,
        expected: [],
        C: {
          setSystems: ['mi'],
          args: {
            value: '#Dict',
          },
        },
        '/[mi === {tattMi}]': {
          scopeNode: 'tattMi',
          '/{key}': {
            scopeNode: 'field',
            U: {
              args: { key: '#String' },
            },
          },
          '/titles': {
            C: {
              value: '',
            },
            '/{titlei}': {
              scopeNode: 'titlei',
              U: {
                args: {
                  titlei: '#Number',
                },
              },
            },
          },
        },
      },
      '/types': {
        expected: [],
        C: {
          value: {
            title: '',
          },
        },
        '/{typei}': {
          scopeNode: 'typei',
          args: {
            typei: '#Number',
          },
          '/atts': {
            RRej: ScheduleWidgetUserRoleRight.ReadTitles,
            expected: {},
            '/{attKey}': {
              scopeNode: 'attKey',
              args: {
                attKey: '#String',
              },
              U: {
                value: ['{value}'],
                args: {
                  value: '#Number',
                },
              },
              D: {
                method: 'delete',
              },
              '/0': {
                scopeNode: 'period',
                U: {
                  args: {
                    value: '#Number',
                  },
                },
              },
            },
          },
          '/tm': {
            U: {},
            onSuccess: onTgInformingChangeSuccess,
          },
          '/{key}': {
            scopeNode: 'field',
            U: {
              args: {
                key: ['title'],
              },
            },
          },
        },
      },
      '/days': {
        expected: [],
        C: {
          setSystems: ['mi'],
          value: {
            list: [],
            wup: 7,
          },
        },
        '/{dayi}': {
          scopeNode: 'dayi',
          args: {
            dayi: '#Number',
          },
          '/wup': {
            U: {},
            setEachInParent: { list: { tgInform: 1 } },
            onSuccess: onTgInformingChangeSuccess,
          },
          '/{key}': {
            scopeNode: 'field',
            U: {
              args: {
                key: '#String',
              },
            },
          },
          '/list': {
            C: {
              setSystems: ['mi'],
              value: {
                type: '{eventType}',
              },
              args: {
                eventType: '#Number',
              },
            },
            U: {
              method: 'insert_beforei',
              value: {
                find: ['mi', '===', '{eventMi}'],
                beforei: '{value}',
              },
              args: {
                eventMi: '#Number',
                value: '#Number',
              },
            },
            D: {
              value: ['mi', '===', '{eventMi}'],
              args: {
                eventMi: '#Number',
              },
            },
            onSuccess: onTgInformingChangeSuccess,
            '/[mi === {eventMi}]': {
              scopeNode: 'eventMi',
              $$var: '$$event',
              args: {
                eventMi: '#Number',
              },
              '/tgInform': {
                action: 'setEventIsNeedTgInform',
                method: 'set',
                args: {
                  value: [1, 0],
                },
              },
              '/{key}': {
                scopeNode: 'field',
                U: {
                  RRej: ScheduleWidgetUserRoleRight.ReadTitles,
                  args: {
                    key: ['topic', 'dsc'],
                  },
                },
              },
              '/secret': {
                U: {
                  args: {
                    value: '#Num',
                  },
                },
              },
              '/{techKey}': {
                scopeNode: 'techField',
                U: {
                  args: {
                    key: ['tm', 'type', 'tgInform'],
                  },
                },
                onSuccess: onTgInformingChangeSuccess,
              },
              '/rate': {
                expected: {},
                '/{rateMi}': {
                  expected: [0, ''],
                  scopeNode: 'rateMi',
                  '/0': {
                    scopeNode: 'rate',
                    U: {
                      args: {
                        value: '#Number',
                      },
                    },
                  },
                  '/1': {
                    scopeNode: 'description',
                    U: {
                      args: {
                        value: '#String',
                      },
                    },
                  },
                },
              },
              '/atts': {
                RRej: ScheduleWidgetUserRoleRight.ReadTitles,
                expected: {},
                '/{attKey}': {
                  scopeNode: 'attKey',
                  args: {
                    attKey: '#String',
                  },
                  U: {
                    args: {
                      value: ['#Dict', '#List'],
                      attKey: '#String',
                    },
                  },
                  D: {
                    method: 'delete',
                  },
                  '/{key}': {
                    scopeNode: 'listKey',
                    C: {},
                    D: {
                      method: 'remove',
                    },
                    '<move>': {
                      scopeNode: 'move',
                      U: {
                        method: 'insert_beforei',
                      },
                    },
                    '/{selector}': {
                      U: {},
                    },
                  },
                  '/eventw': {
                    D: {
                      method: 'delete',
                    },
                    U: {},
                  },
                  '/list': {
                    scopeNode: 'checkList',
                    C: {
                      value: [0, ''],
                    },
                    '/{itemMi}': {
                      scopeNode: 'itemMi',
                      args: {
                        itemMi: '#Number',
                      },
                      '/0': {
                        scopeNode: 'check',
                        U: {
                          args: {
                            value: '#Num',
                          },
                        },
                      },
                      '/1': {
                        scopeNode: 'title',
                        U: {
                          args: {
                            value: '#String',
                          },
                        },
                      },
                    },
                  },
                  '/values': {
                    scopeNode: 'keyValue',
                    C: {
                      setSystems: ['mi:2'],
                      value: ['{key}', '{value}'],
                      args: {
                        key: ['#String', '#Number', '#Boolean'],
                      },
                    },
                    '<move>': {
                      scopeNode: 'move',
                      U: {
                        method: 'insert_beforei',
                        value: {
                          find: [2, '===', '{key}'],
                          beforei: '{value}',
                        },
                      },
                    },
                    D: {
                      value: [2, '===', '{key}'],
                    },
                    '/[2 === {itemMi}]': {
                      scopeNode: 'itemMi',
                      args: {
                        itemMi: '#Number',
                      },
                      '/0': {
                        scopeNode: 'key',
                        U: {
                          args: {
                            value: ['#String', '#Number', '#Boolean'],
                          },
                        },
                      },
                      '/1': {
                        scopeNode: 'value',
                        U: {
                          args: {
                            value: ['#List', '#String'],
                          },
                        },
                        '<list>': {
                          scopeNode: 'list',
                          C: {},
                          D: {
                            value: '{key}',
                          },
                          '<move>': {
                            scopeNode: 'move',
                            U: {
                              method: 'insert_beforei',
                              value: {
                                find: '{find}',
                                beforei: '{value}',
                              },
                            },
                          },
                          '/{key}': {
                            scopeNode: 'key',
                            U: {},
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};
