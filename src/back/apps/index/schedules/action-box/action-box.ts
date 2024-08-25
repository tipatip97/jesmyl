import { filer } from '../../../../complect/filer/Filer';
import { ActionBox, ActionBoxOnFinalCallback, ActionBoxValue } from '../../../../models';
import smylib from '../../../../shared/SMyLib';
import { makeTwiceKnownName } from '../../complect/makeTwiceKnownName';
import { IScheduleWidget, IScheduleWidgetUserCati } from '../../models/ScheduleWidget.model';
import { NounPronsType } from '../../models/nounProns.model';
import { scheduleWidgetRegTypeRights, scheduleWidgetUserRights, ScheduleWidgetUserRoleRight } from '../../rights';
import { indexScheduleSetMessageInform } from '../tg-bot-inform/tg-inform';
import { ScheduleWidgetActionBoxCleans } from './cleans';
import { scheduleWidgetCtrlTypeActionBox } from './ctrl/type';

const emptyArray: [] = [];

const onTgInformingChangeSuccess: ActionBoxOnFinalCallback = (props, _value, auth) => {
  if (props !== null) indexScheduleSetMessageInform(props.schw, auth, props.dayi);
};

const getNounPronsWords = () => filer.contents.index['nounPronsWords'].data as NounPronsType;

const makeTitlesTitle =
  (addText?: ((args: Record<string, unknown>) => string) | null, topKey?: keyof IScheduleWidget) =>
  (args: Record<string, unknown>) => {
    const schedule = ScheduleWidgetActionBoxCleans.getSchedule(args.schw);

    if (schedule === undefined) return '';

    return `В расписании <b>${schedule.title}</b>${addText?.(args) ?? ''} ${
      args.key === 'topic'
        ? (args.value ? (schedule[args.key] ? 'изменена' : 'добавлена') : 'удалена') + ' тема'
        : args.key === 'dsc'
          ? (args.value ? (schedule[args.key] ? 'изменено' : 'добавлено') : 'удалено') + ' описание'
          : args.key === 'title'
            ? (args.value ? (schedule[args.key] ? 'изменён' : 'добавлен') : 'удалён') + ' заголовок'
            : args.key === 'tgChatReqs' || topKey === 'tgChatReqs'
              ? (args.value ? (schedule.tgChatReqs ? 'изменены' : 'добавлены') : 'удалены') + ' TG-реквизиты'
              : `${args.key}:`
    }${args.value ? ` <b>"${args.value}"</b>` : ''}`;
  };

const addUserValue = {
  fio: '{*fio}',
  login: '{*login}',
  nick: '{*nick}',
  tgId: '{*tgId}',
} as const;

const newSchedule: ActionBoxValue<IScheduleWidget> = {
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
        mi: 0 as never,
        R: scheduleWidgetUserRights.getAllRights(),
      },
    ],
    roles: [
      {
        mi: 0,
        title: 'Координатор',
        icon: 'Teacher',
        user: 0,
      },
    ],
    type: scheduleWidgetRegTypeRights.collectRights(),
    defu: scheduleWidgetUserRights.collectRights(ScheduleWidgetUserRoleRight.Read),
  },
  games: {
    criterias: [{ title: 'Сила', sorts: {} as never }],
    list: [],
  },
  lists: {
    cats: [
      {
        icon: 'UserGroup',
        title: 'Группа',
        titles: ['Наставники', 'Участники'],
      },
    ],
    units: [
      {
        cat: IScheduleWidgetUserCati.def,
        mi: 1,
        title: 'Первая',
        dsc: '',
      },
    ],
  },
};

export const indexSchedulesActionBox: ActionBox<IScheduleWidget[]> = {
  scopeNode: 'schs',
  expected: { list: [] },
  '/list': {
    D: {
      value: ['w', '===', '{schw}'],
      title: args => `Расписание <b>${ScheduleWidgetActionBoxCleans.getScheduleTitle(args.schw)}</b> удалено`,
    },
    C: {
      RRej: true,
      value: newSchedule,
      setSystems: ['w'],
      args: {
        schw: '#number',
        title: '#String',
        app: '#String',
      },
      title: args => `Добавлено новое расписание <b>${args.title}</b>`,
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
          title: args =>
            `Сделана копия расписания <b>${(args.value as IScheduleWidget).title}</b>` +
            ` в <b>${ScheduleWidgetActionBoxCleans.getScheduleTitle(args.schw)}</b>`,
          value: args => {
            const value = { ...(args?.value as { title?: string }) };
            delete value.title;

            return value;
          },
          args: {
            value: '#Dict',
          },
        },
        onSuccess: onTgInformingChangeSuccess,
      },
      '/start': {
        U: {
          args: {
            value: '#Number',
          },
          title: args =>
            `В расписании <b>${ScheduleWidgetActionBoxCleans.getScheduleTitle(args.schw)}</b> изменена дата начала` +
            (smylib.isNum(args.value) ? ` - ${new Date(args.value).toLocaleDateString('ru')}` : ''),
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
          title: makeTitlesTitle(),
        },
      },
      '/withTech': {
        U: {
          RRej: true,
          args: {
            value: '#Num',
          },
          title: args =>
            `В расписании <b>${ScheduleWidgetActionBoxCleans.getScheduleTitle(args.schw)}</b> первый день -` +
            (args.value ? '' : ' не') +
            ` технический`,
        },
        onSuccess: onTgInformingChangeSuccess,
      },
      '/tgChatReqs': {
        U: {
          RRej: true,
          args: {
            value: '#String',
          },
          title: makeTitlesTitle(null, 'tgChatReqs'),
        },
        onSuccess: onTgInformingChangeSuccess,
      },
      '/tgInform': {
        U: {
          args: {
            value: '#Num',
          },
          title: args =>
            `В расписании <b>${ScheduleWidgetActionBoxCleans.getScheduleTitle(args.schw)}</b> ` +
            (args.value ? 'вк' : 'отк') +
            `лючено TG-информирвание`,
        },
        onSuccess: onTgInformingChangeSuccess,
      },
      '/tgInformTime': {
        U: {
          args: {
            value: '#Number',
          },
          title: args =>
            `В расписании <b>${ScheduleWidgetActionBoxCleans.getScheduleTitle(args.schw)}</b> TG-напомининия ` +
            (args.value ? `будут за ${args.value} мин.` : 'отключены'),
        },
        onSuccess: onTgInformingChangeSuccess,
      },
      '/ctrl': {
        '/type': scheduleWidgetCtrlTypeActionBox,
        '/defu': {
          U: {
            RRej: true,
            args: {
              value: '#Number',
            },
            title: args =>
              `В расписании <b>` +
              ScheduleWidgetActionBoxCleans.getScheduleTitle(args.schw) +
              `</b> изменено значение прав неизвестных пользователей по умолчанию` +
              (smylib.isNum(args.value)
                ? ` - ${
                    scheduleWidgetUserRights.texts[scheduleWidgetUserRights.rightsBalance(args.value)]?.role?.[0] ??
                    '<s>Неизвестный</s>'
                  }`
                : ''),
          },
        },
        '/cats': {
          scopeNode: 'categories',
          C: {
            value: '',
            title: args =>
              `В расписании <b>` +
              ScheduleWidgetActionBoxCleans.getScheduleTitle(args.schw) +
              `</b> добавлена новая категория`,
          },
          '/{cati}': {
            scopeNode: 'cati',
            U: {
              title: args =>
                `В расписании <b>` +
                ScheduleWidgetActionBoxCleans.getScheduleTitle(args.schw) +
                `</b> обновлена категория ${args.value}`,
            },
          },
        },
        '/users': {
          C: {
            RRej: ScheduleWidgetUserRoleRight.Read,
            setSystems: ['mi'],
            value: addUserValue,
            title: args => {
              const value = args.value as typeof addUserValue;

              const postfix = value == null ? '' : ` (${value.fio}, ${value.nick})`;

              return (
                `В расписании <b>` +
                ScheduleWidgetActionBoxCleans.getScheduleTitle(args.schw) +
                `</b> новый участник${postfix}`
              );
            },
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
              title: args => {
                const value = args.value as typeof addUserValue;

                const postfix = value == null ? '' : ` (${value.fio}, ${value.nick})`;

                return (
                  `В расписании <b>` +
                  ScheduleWidgetActionBoxCleans.getScheduleTitle(args.schw) +
                  `</b> добавился новый участник по ссылке${postfix}`
                );
              },
            },
          },
          '<add user from schedule>': {
            action: 'addUserFromTgSchedule',
            setSystems: ['mi'],
            value: { ...addUserValue, R: '{R}' },
            args: {
              R: '#Number',
              $$vars: {
                accessActionWithoutUser: true,
              },
            },
            method: 'push',
            title: args => {
              const value = args.value as typeof addUserValue;

              const postfix = value == null ? '' : ` (${value.fio}, ${value.nick})`;

              return (
                `В расписании <b>` +
                ScheduleWidgetActionBoxCleans.getScheduleTitle(args.schw) +
                `</b> добавился новый участник по переходу в TG-расписание${postfix}`
              );
            },
          },
          '<add user>': {
            scopeNode: 'newUser',
            C: {
              setSystems: ['mi'],
              title: args => {
                const value = args.value as typeof addUserValue;

                const postfix = value == null ? '' : ` (${value.fio})`;

                return (
                  `В расписании <b>` +
                  ScheduleWidgetActionBoxCleans.getScheduleTitle(args.schw) +
                  `</b> добавилась новая ссылка для участника${postfix}`
                );
              },
            },
          },
          '<add users>': {
            scopeNode: 'addUsers',
            setInEachValueItem: {
              '.': { R: scheduleWidgetUserRights.collectRights(ScheduleWidgetUserRoleRight.Read) },
            },
            U: {
              setItemSystems: ['mi'],
              method: 'concat',
              uniqs: ['fio'],
              title: args => {
                return (
                  `В расписании <b>` +
                  ScheduleWidgetActionBoxCleans.getScheduleTitle(args.schw) +
                  `</b> добавлены новые участники${smylib.isArr(args.value) ? ` - ${args.value} чел.` : ''}`
                );
              },
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
              title: args => {
                return (
                  `В расписании <b>` +
                  ScheduleWidgetActionBoxCleans.getScheduleTitle(args.schw) +
                  `</b> участник${smylib.isObj(args.value) ? ` ${args.value.fio}` : ''} присоединился по ссылке`
                );
              },
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
                title: args => {
                  return (
                    `В расписании <b>` +
                    ScheduleWidgetActionBoxCleans.getScheduleTitle(args.schw) +
                    `</b> данные участника${smylib.isObj(args.value) ? ` ${args.value.fio}` : ''} обновлены`
                  );
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
              title: args => {
                const schedule = ScheduleWidgetActionBoxCleans.getSchedule(args.schw);

                if (schedule == null) return '';

                const user = schedule.ctrl.users.find(user => user.mi === args.userMi);

                return (
                  `В расписании <b>` +
                  schedule.title +
                  `</b> участник${smylib.isObj(user) ? ` ${user.fio}` : ''} ` +
                  `${args.value ? 'подписался на' : 'отписался от'} TG-информирования`
                );
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
                title: args => {
                  const schedule = ScheduleWidgetActionBoxCleans.getSchedule(args.schw);

                  if (schedule == null) return '';

                  const user = schedule.ctrl.users.find(user => user.mi === args.userMi);

                  return (
                    `В расписании <b>` +
                    schedule.title +
                    `</b> участник${smylib.isObj(user) ? ` ${user.fio}` : ''} ` +
                    `${args.value ? 'подписался на' : 'отписался от'} TG-информирования через TG-bot`
                  );
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
      '/games': {
        scopeNode: 'games',
        expected: { criterias: [], list: [], strikedUsers: [] },
        '/criterias': {
          scopeNode: 'criterias',
          C: {
            value: {
              title: '',
              sorts: [],
            },
          },
          '/{criti}': {
            scopeNode: 'criti',
            args: {
              criti: '#Number',
            },
            '/title': {
              U: {},
            },
            '/sorts': {
              U: {
                method: 'set_all',
              },
            },
          },
        },
        '/list': {
          C: {
            setSystems: ['mi'],
            value: {
              title: 'Новая игра',
              teams: [],
            },
          },
          '/[mi === {gameMi}]': {
            scopeNode: 'gameMi',
            args: {
              gameMi: '#Number',
            },
            '/title': {
              U: {},
            },
            '/teams': {
              scopeNode: 'teams',
              '<create teams>': {
                setInEachValueItem: {
                  '.': {
                    title: () =>
                      makeTwiceKnownName(
                        smylib.randomItem(smylib.keys(getNounPronsWords().pronouns)),
                        smylib.randomItem(smylib.keys(getNounPronsWords().nouns)),
                      ).join(' '),
                  },
                },
                C: {
                  setItemSystems: ['mi'],
                  method: 'set',
                },
              },
            },
          },
        },
        '/strikedUsers': {
          C: {},
          D: {},
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
          args: {
            value: '#Dict',
          },
        },
        U: {
          method: 'concat',
          uniqs: ['title'],
          args: {
            value: '#List',
          },
        },
        '<addAttTypes>': {
          action: 'addAttTypes',
          method: 'concat',
          uniqs: ['title'],
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
          title: args =>
            `В расписание <b>${ScheduleWidgetActionBoxCleans.getScheduleTitle(args.schw)}</b> добавлен новый день`,
        },
        '/{dayi}': {
          scopeNode: 'dayi',
          args: {
            dayi: '#Number',
          },
          '/wup': {
            setEachInParent: { list: { tgInform: 1 } },
            onSuccess: onTgInformingChangeSuccess,
            U: {},
            '<action>': {
              onSuccess: onTgInformingChangeSuccess,
              action: 'setDayWup',
              method: 'set',
            },
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
            '<update>': {
              scopeNode: 'updateDayEventList',
              U: {
                setItemSystems: ['mi'],
              },
              onSuccess: onTgInformingChangeSuccess,
              title: args => {
                const schedule = ScheduleWidgetActionBoxCleans.getSchedule(args.schw);

                if (!schedule) return 'Расписание не найдено';
                const dayi = args.dayi as number;

                return (
                  `В расписании <b>` +
                  ScheduleWidgetActionBoxCleans.getScheduleTitle(args.schw) +
                  `</b> в ` +
                  (schedule.withTech ? (dayi ? dayi + '-ом' : 'техническом') : dayi + 1 + '-ом') +
                  ` дне обновлён список событий текстом`
                );
              },
            },
            '<put schedule>': {
              action: 'putDayEventList',
              method: 'set',
              setItemSystems: ['mi'],
              onSuccess: onTgInformingChangeSuccess,
              title: args => {
                const schedule = ScheduleWidgetActionBoxCleans.getSchedule(args.schw);

                if (!schedule) return 'Расписание не найдено';
                const dayi = args.dayi as number;

                return (
                  `В расписании <b>` +
                  ScheduleWidgetActionBoxCleans.getScheduleTitle(args.schw) +
                  `</b> в ` +
                  (schedule.withTech ? (dayi ? dayi + '-ом' : 'техническом') : dayi + 1 + '-ом') +
                  ` дне обновлён список событий`
                );
              },
            },
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
                '/{userMi}': {
                  expected: [0, ''],
                  scopeNode: 'userMi',
                  args: {
                    userMi: '#Number',
                  },
                  '/0': {
                    scopeNode: 'rate',
                    U: {
                      args: {
                        value: '#Number',
                      },
                    },
                    '<action>': {
                      action: 'setDayEventRate',
                      method: 'set',
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
