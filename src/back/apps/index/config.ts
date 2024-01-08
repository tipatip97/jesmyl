import { Executer } from '../../complect/executer/Executer';
import { ExecutionArgs, ExecutionDict, ExecutionReal } from '../../complect/executer/Executer.model';
import { FilerAppConfig } from '../../complect/filer/Filer.model';
import { rootDirective } from '../../complect/soki/soki.model';
import { ActionBoxValue } from '../../models';
import { Application } from './models/Application';
import {
  IScheduleWidget,
  IScheduleWidgetDay,
  IScheduleWidgetDayEvent,
  IScheduleWidgetUser,
  ScheduleStorage,
} from './models/ScheduleWidget.model';
import {
  ScheduleWidgetRegType,
  ScheduleWidgetUserRoleRight,
  scheduleWidgetRegTypeRights,
  scheduleWidgetUserRights,
} from './rights';

interface SchedulesBag {
  users: IScheduleWidgetUser[];
  schw: number;
  schedule: IScheduleWidget<string>;
}

const emptyArray: [] = [];
const emptyLists = { cats: [], units: [] };
const itNNull = (it: unknown) => it !== null;

const mapCantReadTitlesDayEvent = (event: IScheduleWidgetDayEvent) => ({
  ...event,
  topic: undefined,
  dsc: undefined,
  atts: undefined,
  rate: undefined,
});

const mapCantReadTitlesDay = (day: IScheduleWidgetDay) => ({
  ...day,
  topic: undefined,
  dsc: undefined,
  list: day.list.map(mapCantReadTitlesDayEvent),
});

const mapCantReadSpecialsDayEvent = (event: IScheduleWidgetDayEvent) => {
  return event.secret === 1
    ? {
        ...event,
        topic: undefined,
        dsc: undefined,
        atts: undefined,
        rate: undefined,
      }
    : event;
};

const mapCantReadSpecialsDay = (day: IScheduleWidgetDay): IScheduleWidgetDay => ({
  ...day,
  list: day.list.map(mapCantReadSpecialsDayEvent),
});

const mapCantReadSpecialsDayWithoutTech = (day: IScheduleWidgetDay, dayi: number): IScheduleWidgetDay =>
  dayi === 0
    ? {
        list: emptyArray,
        mi: 0,
        wup: 0,
      }
    : {
        ...day,
        list: day.list.map(mapCantReadSpecialsDayEvent),
      };

type ScheduleWidgetOnCantReadExec = ExecutionDict<
  unknown,
  ExecutionArgs<
    unknown,
    {
      schw: number;
      tattMi?: number;
      attKey?: string;
      dayi?: number;
    },
    { $$event?: IScheduleWidgetDayEvent }
  >
>;

type ScheduleWidgetOnCantReadRule = ExecutionReal<unknown, ExecutionArgs<unknown, { schw: number }, {}>>;

const newSchedule: ActionBoxValue<IScheduleWidget<string>> = {
  w: '{schw}',
  title: '{title}',
  app: '{app}',
  dsc: '',
  topic: '',
  days: emptyArray,
  tatts: emptyArray,
  types: emptyArray,
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
        mi: 0,
        nick: '{*nick}',
        fio: '{*fio}',
        login: '{*login}',
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

const config: FilerAppConfig = {
  title: 'JESMYL',
  requirements: {
    schedules: {
      onCantRead: (
        isShareData,
        exec: ScheduleWidgetOnCantReadExec,
        rule: ScheduleWidgetOnCantReadRule,
        auth,
        bag: SchedulesBag,
        schedules: ScheduleStorage<string>,
        whenRejButTs,
      ): string | null | typeof whenRejButTs => {
        if (rule.RRej === true) return isShareData ? 'block' : null;
        if (rule.RRej === false) return null;

        if (bag.schedule === undefined || bag.schw !== exec.args?.schw) {
          bag.schw = exec.args?.schw!;
          if (bag.schw === undefined) return 'no_schw';

          bag.schedule = schedules.list.find(sch => sch.w === bag.schw)!;
          if (bag.schedule === undefined) return 'no_sch';
          bag.users = bag.schedule.ctrl.users!;
        }

        if (auth == null) return 'unauth';
        if (bag.users === undefined) return 'no_users';

        const user = bag.users.find(user => auth.login === user.login);
        if (user === undefined) {
          if (rule.action === 'joinUserByLink') return isShareData ? whenRejButTs : null;
          if (rule.args?.$$vars?.accessActionWithoutUser === true) return null;
          if (scheduleWidgetRegTypeRights.checkIsHasRights(bag.schedule.ctrl.type, ScheduleWidgetRegType.Public))
            return null;
          return whenRejButTs;
        }

        const userR = user.R ?? bag.schedule.ctrl.defu;

        if (exec.args !== undefined) {
          let tattMi = -1;

          try {
            if (exec.args.tattMi !== undefined) tattMi = exec.args.tattMi;

            if (exec.args.attKey !== undefined) {
              tattMi = +exec.args.attKey.split(':')[2];
              if (isNaN(tattMi)) tattMi = -1;
            }

            if (tattMi >= 0) {
              const tatt = bag.schedule.tatts.find(tatt => tatt.mi === tattMi);
              if (tatt !== undefined && !scheduleWidgetUserRights.checkIsCan(userR, tatt.R)) return whenRejButTs;
            }
          } catch (error) {}
        }

        if (!scheduleWidgetUserRights.checkIsHasRights(userR, ScheduleWidgetUserRoleRight.ReadSpecials)) {
          if (
            exec.args !== undefined &&
            ((bag.schedule.withTech === 1 && exec.args.dayi === 0) || exec.args.$$vars?.$$event?.secret === 1)
          )
            return whenRejButTs;
        }

        if (rule.RRej == null) return null;

        return scheduleWidgetUserRights.checkIsHasRights(userR, rule.RRej) ? null : whenRejButTs;
      },
      prepareContent: (schedules: ScheduleStorage<string>, auth): ScheduleStorage<string> => {
        if (!auth) {
          const list = schedules.list
            .map((schedule): IScheduleWidget<string> => {
              if (
                scheduleWidgetRegTypeRights.checkIsHasRights(schedule.ctrl.type, ScheduleWidgetRegType.Public) &&
                !scheduleWidgetRegTypeRights.checkIsHasRights(
                  schedule.ctrl.type,
                  ScheduleWidgetRegType.BeforeRegistration,
                )
              )
                return {
                  ...schedule,
                  days: schedule.days.map(
                    schedule.withTech === 1 ? mapCantReadSpecialsDayWithoutTech : mapCantReadSpecialsDay,
                  ),
                  ctrl: {
                    cats: emptyArray,
                    roles: emptyArray,
                    users: emptyArray,
                    type: schedule.ctrl.type,
                    defu: schedule.ctrl.defu,
                  },
                };

              return null!;
            })
            .filter(itNNull);

          return { list };
        }

        const authLogin = auth.login;
        const list = schedules.list.map((schedule): IScheduleWidget<string> => {
          const user = schedule.ctrl.users.find(user => user.login === authLogin);

          if (user === undefined) {
            if (scheduleWidgetRegTypeRights.checkIsHasRights(schedule.ctrl.type, ScheduleWidgetRegType.Public)) {
              if (
                !scheduleWidgetRegTypeRights.checkIsHasRights(
                  schedule.ctrl.type,
                  ScheduleWidgetRegType.BeforeRegistration,
                )
              ) {
                return {
                  ...schedule,
                  days: schedule.days.map(
                    schedule.withTech === 1 ? mapCantReadSpecialsDayWithoutTech : mapCantReadSpecialsDay,
                  ),
                  ctrl: {
                    cats: emptyArray,
                    roles: emptyArray,
                    users: schedule.ctrl.users,
                    type: schedule.ctrl.type,
                    defu: schedule.ctrl.defu,
                  },
                };
              }

              return {
                ...schedule,
                days: schedule.days[0]
                  ? schedule.days[1]
                    ? [
                        { wup: schedule.days[0].wup, mi: 0, list: emptyArray },
                        { wup: schedule.days[1].wup, mi: 1, list: emptyArray },
                      ]
                    : [{ wup: schedule.days[0].wup, mi: 0, list: emptyArray }]
                  : emptyArray,
                dsc: '',
                tatts: emptyArray,
                types: emptyArray,
                ctrl: {
                  cats: emptyArray,
                  roles: emptyArray,
                  users: emptyArray,
                  type: schedule.ctrl.type,
                  defu: schedule.ctrl.defu,
                },
              };
            }

            return {
              title: '',
              app: schedule.app,
              w: schedule.w,
              lists: emptyLists,
              start: 0,
              days: emptyArray,
              tatts: emptyArray,
              types: emptyArray,
              dsc: '',
              topic: '',
              ctrl: {
                cats: emptyArray,
                roles: emptyArray,
                users: emptyArray,
                type: schedule.ctrl.type,
                defu: schedule.ctrl.defu,
              },
            };
          }

          const userR = user.R ?? schedule.ctrl.defu;

          if (
            (userR === undefined || userR === 0) &&
            scheduleWidgetRegTypeRights.checkIsHasRights(schedule.ctrl.type, ScheduleWidgetRegType.Public) &&
            (!scheduleWidgetRegTypeRights.checkIsHasRights(
              schedule.ctrl.type,
              ScheduleWidgetRegType.BeforeRegistration,
            ) ||
              !scheduleWidgetRegTypeRights.checkIsHasRights(schedule.ctrl.type, ScheduleWidgetRegType.HideContent))
          ) {
            return {
              ...schedule,
              days: schedule.days.map(
                schedule.withTech === 1 ? mapCantReadSpecialsDayWithoutTech : mapCantReadSpecialsDay,
              ),
              ctrl: {
                cats: emptyArray,
                roles: emptyArray,
                users: user === undefined ? emptyArray : [user],
                type: schedule.ctrl.type,
                defu: schedule.ctrl.defu,
              },
            };
          }

          if (!scheduleWidgetUserRights.checkIsHasRights(userR, ScheduleWidgetUserRoleRight.Read)) {
            return {
              ...schedule,
              days: emptyArray,
              topic: '',
              tatts: emptyArray,
              dsc: '',
              types: emptyArray,
              lists: emptyLists,
              ctrl: {
                cats: emptyArray,
                roles: emptyArray,
                users: user === undefined ? emptyArray : [user],
                type: schedule.ctrl.type,
                defu: schedule.ctrl.defu,
              },
            };
          }

          if (!scheduleWidgetUserRights.checkIsHasRights(userR, ScheduleWidgetUserRoleRight.ReadTitles)) {
            return {
              ...schedule,
              days: schedule.days.map(mapCantReadTitlesDay),
              topic: '',
              tatts: emptyArray,
              dsc: '',
              ctrl: {
                cats: emptyArray,
                roles: emptyArray,
                users: schedule.ctrl.users,
                type: schedule.ctrl.type,
                defu: schedule.ctrl.defu,
              },
            };
          }

          if (!scheduleWidgetUserRights.checkIsHasRights(userR, ScheduleWidgetUserRoleRight.ReadSpecials)) {
            return {
              ...schedule,
              days: schedule.days.map(
                schedule.withTech === 1 ? mapCantReadSpecialsDayWithoutTech : mapCantReadSpecialsDay,
              ),
              ctrl: {
                cats: emptyArray,
                roles: emptyArray,
                users: schedule.ctrl.users,
                type: schedule.ctrl.type,
                defu: schedule.ctrl.defu,
              },
            };
          }

          return schedule;
        });

        return {
          ...schedules,
          list,
        };
      },
    },
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
    '/schedules': {
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
                value: { fio: '{*fio}', nick: '{*nick}', login: '{*login}' },
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
                  value: {
                    fio: '{*fio}',
                    login: '{*login}',
                    nick: '{*nick}',
                  },
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
                  value: {
                    fio: '{*fio}',
                    nick: '{*nick}',
                    login: '{*login}',
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
              '/{key}': {
                scopeNode: 'field',
                U: {
                  args: {
                    key: ['tm', 'title'],
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
                '/[mi === {eventMi}]': {
                  scopeNode: 'eventMi',
                  $$var: '$$event',
                  args: {
                    eventMi: '#Number',
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
                        key: ['tm', 'type'],
                      },
                    },
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
    },
  }),
};

export default config;
