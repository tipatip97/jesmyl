import { Executer } from "../../complect/executer/Executer";
import { FilerAppConfig } from "../../complect/filer/Filer.model";
import { rootDirective, SokiAppName } from "../../complect/soki/soki.model";

export interface Application {
    name: SokiAppName;
    title: string;
    description: string;
    level: number;
    disabled: boolean;
    hidden: boolean;
    params?: string[];
}

const config: FilerAppConfig = {
    title: 'JESMYL',
    requirements: [
        'schedules',
        {
            name: "apps",
            prepareContent: (apps: Application[], auth) => {
                const authLevel = auth?.level || 0;
                return apps.map((app) => {
                    if (!app.hidden && (app.level || 0) <= authLevel) return app;
                    else return null;
                }).filter(app => app);
            }
        },
        {
            name: 'appVersion',
            watch: [`${rootDirective}/version.json`, (content) => JSON.parse(content).num],
        }
    ],
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
                        roles: [{
                            mi: 0,
                            title: 'Координатор',
                            icon: 'github-outline',
                            user: { fio: '{*fio}', login: '{*login}' },
                        }]
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
                            args: {
                                key: ['topic', 'dsc'],
                                value: '#String',
                            }
                        }
                    },
                    '/roles': {
                        expected: [],
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
                                    args: { key: '#String' }
                                },
                            },
                            '/req': {
                                D: {
                                    method: 'delete'
                                },
                                C: {
                                    method: 'set',
                                    value: { fio: '{*fio}', login: '{*login}' },
                                },
                            },
                            '/user': {
                                D: {
                                    method: 'delete',
                                },
                                U: {
                                    args: { value: '#Dict' }
                                },
                                '/{key}': {
                                    scopeNode: 'userField',
                                    U: {
                                        args: {
                                            value: '#String',
                                            key: ['title', 'alias'],
                                        }
                                    },
                                },
                            },
                        }
                    },
                    '/atts': {
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
                                    '/{key}': {
                                        scopeNode: 'field',
                                        U: {
                                            args: {
                                                key: ['topic', 'dsc', 'tm', 'type'],
                                            }
                                        }
                                    },
                                    '/atts': {
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