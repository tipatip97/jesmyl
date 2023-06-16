import { Executer } from "../../complect/executer/Executer";
import { FilerAppConfig } from "../../complect/filer/Filer.model";
import { rootDirective } from "../../complect/soki/soki.model";
import { ScheduleWidgetRights, ScheduleWidgetUserRoleRight } from "./complect";
import { Application } from "./models/Application";
import { IScheduleWidget, IScheduleWidgetRoleUser, ScheduleStorage } from "./models/ScheduleWidget.model";

const notNull = (it: unknown) => it !== null;

interface SchedulesBag {
    users: IScheduleWidgetRoleUser[],
    schw: number,
}

const config: FilerAppConfig = {
    title: 'JESMYL',
    requirements: {
        schedules: {
            onCantRead: (isRead, exec, rule, auth, bag: SchedulesBag, schedules: ScheduleStorage<string>, whenRejButTs) => {
                if (rule.RRej == null) return null;
                if (rule.RRej === true) return isRead ? '0<' : null;
                if (rule.RRej === false) return null;

                if (auth == null) return '1<';

                if (bag.users === undefined || bag.schw !== exec.args?.schw) {
                    bag.schw = exec.args?.schw;
                    if (bag.schw === undefined) return '2<';

                    bag.users = schedules.list.find(sch => sch.w === bag.schw)?.roles.users!;
                }

                if (bag.users === undefined) return '3<';

                const user = bag.users.find(user => auth.login === user.login);
                if (user === undefined) return '4<';

                return ScheduleWidgetRights.checkIsHasRights(user.R, rule.RRej)
                    ? null
                    : whenRejButTs;
            },
            prepareContent: (schedules: ScheduleStorage<string>, auth): ScheduleStorage<string> => {
                if (!auth) return { list: [] };
                const authLogin = auth.login;

                return {
                    ...schedules,
                    list: schedules.list.map((schedule): IScheduleWidget<string> => {
                        const user = schedule.roles.users.find(user => user.login === authLogin);

                        if (user === undefined || !ScheduleWidgetRights.checkIsHasRights(user?.R, ScheduleWidgetUserRoleRight.Read))
                            return {
                                ...schedule,
                                days: undefined,
                                topic: undefined,
                                atts: undefined,
                                dsc: undefined,
                                types: undefined,
                                roles: {
                                    cats: [],
                                    list: [],
                                    users: user === undefined ? [] : [user],
                                }
                            };

                        if (!ScheduleWidgetRights.checkIsHasRights(user.R, ScheduleWidgetUserRoleRight.ReadTitles))
                            return {
                                ...schedule,
                                days: schedule.days?.map(day => ({
                                    ...day,
                                    topic: undefined,
                                    dsc: undefined,
                                    list: day.list.map(event => ({ mi: event.mi, type: event.type, tm: event.tm })),
                                })),
                                topic: undefined,
                                atts: undefined,
                                dsc: undefined,
                                roles: {
                                    cats: [],
                                    list: [],
                                    users: schedule.roles.users,
                                }
                            };

                        if (!ScheduleWidgetRights.checkIsHasRights(user.R, ScheduleWidgetUserRoleRight.ReadSpecials))
                            return {
                                ...schedule,
                                days: schedule.days?.map(day => ({
                                    ...day,
                                    list: day.list.map(event => {
                                        return { mi: event.mi, type: event.type, tm: event.tm, secret: event.secret }
                                    }),
                                })),
                                roles: {
                                    cats: [],
                                    list: [],
                                    users: schedule.roles.users,
                                }
                            };

                        return schedule;
                    }).filter(notNull),
                };
            }
        },
        apps: {
            prepareContent: (apps: Application[], auth) => {
                const authLevel = auth?.level || 0;
                return apps.map((app) => {
                    if (!app.hidden && (app.level || 0) <= authLevel) return app;
                    else return null;
                }).filter(app => app);
            }
        },
        appVersion: {
            watch: [`${rootDirective}/version.json`, (content) => JSON.parse(content).num],
        }
    },
    actions: Executer.prepareActionList({
        '/schedules': {
            scopeNode: 'schs',
            expected: { list: [] },
            '/list': {
                D: {
                    value: ['w', '===', '{value}'],
                },
                C: {
                    value: {
                        w: '{schw}',
                        title: '{title}',
                        app: '{app}',
                        roles: {
                            cats: ['Основное'],
                            users: [{ mi: 0, fio: '{*fio}', login: '{*login}' }],
                            list: [{
                                mi: 0,
                                title: 'Координатор',
                                icon: 'github-outline',
                                user: 0,
                                R: ScheduleWidgetRights.getAllRights(),
                            }]
                        }
                    },
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
                    '/start': {
                        U: {
                            args: {
                                value: '#Number',
                            }
                        }
                    },
                    '/{key}': {
                        scopeNode: 'field',
                        U: {
                            RRej: ScheduleWidgetUserRoleRight.ReadTitles,
                            args: {
                                key: ['topic', 'dsc'],
                                value: '#String',
                            }
                        }
                    },
                    '/roles': {
                        '/cats': {
                            scopeNode: 'categories',
                            C: {
                                value: '',
                            },
                            '/{cati}': {
                                scopeNode: 'cati',
                                U: {}
                            }
                        },
                        '/users': {
                            C: {
                                setSystems: ['mi'],
                                value: { fio: '{*fio}', login: '{*login}' },
                            },
                            '/[mi === {userMi}]': {
                                scopeNode: 'userMi',
                                args: {
                                    userMi: '#Number',
                                },
                                '/alias': {
                                    U: {
                                        args: {
                                            value: '#String',
                                        }
                                    },
                                },
                                '/R': {
                                    U: {
                                        RRej: true,
                                        args: {
                                            value: '#Number',
                                        }
                                    },
                                },
                            },
                        },
                        '/list': {
                            '<roles>': {
                                scopeNode: 'roles',
                                C: {
                                    setSystems: ['mi'],
                                    value: {
                                        title: '',
                                    },
                                },
                            },
                            '/[mi === {roleMi}]': {
                                scopeNode: 'roleMi',
                                '/{key}': {
                                    scopeNode: 'field',
                                    U: {
                                        args: { key: '#String' }
                                    },
                                },
                                '/user': {
                                    D: {
                                        method: 'delete',
                                    },
                                },
                            }
                        },
                    },
                    '/atts': {
                        RRej: ScheduleWidgetUserRoleRight.ReadTitles,
                        expected: [],
                        C: {
                            setSystems: ['mi'],
                            args: {
                                value: '#Dict',
                            },
                        },
                        '/[mi === {attMi}]': {
                            scopeNode: 'attMi',
                            '/{key}': {
                                scopeNode: 'field',
                                U: {
                                    args: { key: '#String' }
                                }
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
                                        }
                                    }
                                }
                            },
                        }
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
                                        }
                                    },
                                    D: {
                                        method: 'delete',
                                    },
                                    '/0': {
                                        scopeNode: 'period',
                                        U: {
                                            args: {
                                                value: '#Number',
                                            }
                                        },
                                    }
                                }
                            },
                            '/{key}': {
                                scopeNode: 'field',
                                U: {
                                    args: {
                                        key: ['tm', 'title']
                                    }
                                }
                            }
                        }
                    },
                    '/days': {
                        expected: [],
                        C: {
                            setSystems: ['mi'],
                            value: {
                                list: [],
                                wup: 7,
                            }
                        },
                        '/[mi === {dayMi}]': {
                            scopeNode: 'dayMi',
                            args: {
                                dayMi: '#Number'
                            },
                            '/{key}': {
                                scopeNode: 'field',
                                U: {
                                    args: {
                                        key: '#String'
                                    },
                                }
                            },
                            '/list': {
                                C: {
                                    setSystems: ['mi'],
                                    value: {
                                        type: '{eventType}',
                                    },
                                    args: {
                                        eventType: '#Number',
                                    }
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
                                    }
                                },
                                D: {
                                    value: ['mi', '===', '{eventMi}'],
                                    args: {
                                        eventMi: '#Number',
                                    }
                                },
                                '/[mi === {eventMi}]': {
                                    scopeNode: 'eventMi',
                                    args: {
                                        eventMi: '#Number',
                                    },
                                    '/{txtKey}': {
                                        scopeNode: 'txtField',
                                        U: {
                                            RRej: ScheduleWidgetUserRoleRight.ReadTitles,
                                            args: {
                                                key: ['topic', 'dsc'],
                                            }
                                        }
                                    },
                                    '/{key}': {
                                        scopeNode: 'field',
                                        U: {
                                            args: {
                                                key: ['tm', 'type', 'secret'],
                                            }
                                        }
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
                                                }
                                            },
                                            D: {
                                                method: 'delete',
                                            },
                                            '/list': {
                                                scopeNode: 'checkList',
                                                C: {
                                                    value: [0, ''],
                                                },
                                                '/{itemi}': {
                                                    scopeNode: 'itemi',
                                                    args: {
                                                        itemi: '#Number',
                                                    },
                                                    '/0': {
                                                        scopeNode: 'check',
                                                        U: {
                                                            args: {
                                                                value: '#Num',
                                                            }
                                                        },
                                                    },
                                                    '/1': {
                                                        scopeNode: 'title',
                                                        U: {
                                                            args: {
                                                                value: '#String',
                                                            }
                                                        }
                                                    },
                                                },
                                            },
                                            '/values': {
                                                scopeNode: 'keyValue',
                                                C: {
                                                    value: ['{key}', ''],
                                                    args: {
                                                        key: ['#String', '#Number', '#Boolean'],
                                                    },
                                                },
                                                '/{itemi}': {
                                                    scopeNode: 'itemi',
                                                    args: {
                                                        itemi: '#Number',
                                                    },
                                                    '/0': {
                                                        scopeNode: 'key',
                                                        U: {
                                                            args: {
                                                                value: ['#String', '#Number', '#Boolean'],
                                                            }
                                                        }
                                                    },
                                                    '/1': {
                                                        scopeNode: 'value',
                                                        U: {
                                                            args: {
                                                                value: '#String',
                                                            }
                                                        }
                                                    },
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    })
}

export default config;