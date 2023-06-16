import { Executer } from "../../complect/executer/Executer";
import { FilerAppConfig } from "../../complect/filer/Filer.model";

const config: FilerAppConfig = {
    title: 'Лидер помощник',
    requirements: {
        people: null,
        contexts: null,
        games: null,
    },
    actions: Executer.prepareActionList({
        '/people': {
            expected: {},
            '/humans': {
                expected: [],
                uniqs: [
                    'name'
                ],
                '<add one>': {
                    level: 20,
                    action: 'addHuman',
                    title: 'Добавлен новый участник $name',
                    method: 'push',
                    value: {
                        w: '{@setNewWid()}',
                        ts: '{ts}',
                        name: '{name}',
                        notes: '{?notes}',
                        ufp1: '{?ufp1}',
                        ufp2: '{?ufp2}',
                        isMan: '{isMan}',
                        bDay: '{bDay}',
                        isInactive: '{?isInactive}'
                    },
                    args: {
                        ts: '#Number',
                        name: '#String',
                        notes: '#string',
                        ufp1: '#number',
                        ufp2: '#number',
                        bDay: '#Number',
                        isMan: '#Boolean',
                        isInactive: '#boolean'
                    }
                },
                '<add many>': {
                    level: 20,
                    action: 'addManyHumans',
                    setInEachValueItem: {
                        '.': {
                            w: '{@setNewWid()}'
                        }
                    },
                    title: 'Добавлено несколько участников',
                    method: 'concat',
                    args: {
                        value: '#List'
                    }
                },
                '/[w === {wid}]': {
                    '/name': {
                        level: 20,
                        action: 'setHumanName',
                        title: 'Изменено имя участника \'$prev\' на \'$value\'',
                        method: 'set',
                        args: {
                            value: '#String'
                        }
                    },
                    '/ufp1': {
                        level: 20,
                        action: 'setHumanUfp1',
                        title: 'Изменено значение Уровня физ. подготовки (1) участника \'$humann\'',
                        method: 'set',
                        args: {
                            value: '#Number',
                            humann: '#String'
                        }
                    },
                    '/ufp2': {
                        level: 20,
                        action: 'setHumanUfp2',
                        title: 'Изменено значение Уровня физ. подготовки (2) участника \'$humann\'',
                        method: 'set',
                        args: {
                            value: '#Number',
                            humann: '#String'
                        }
                    },
                    '/isMan': {
                        level: 20,
                        action: 'setHumanIsMan',
                        title: 'Изменено значение пола участника \'$humann\'',
                        method: 'set',
                        args: {
                            value: '#Boolean',
                            humann: '#String'
                        }
                    },
                    '/notes': {
                        level: 20,
                        action: 'setHumanNotes',
                        title: 'Изменена заметка участника \'$humann\'',
                        method: 'set',
                        args: {
                            value: '#String',
                            humann: '#String'
                        }
                    },
                    '/bDay': {
                        level: 20,
                        action: 'setHumanBDay',
                        title: 'Изменена дата рождения \'$humann\'',
                        method: 'set',
                        args: {
                            value: '#Number',
                            humann: '#String'
                        }
                    },
                    '/group': {
                        level: 20,
                        action: 'setHumanGroup',
                        title: 'Изменена группа \'$humann\'',
                        method: 'set',
                        args: {
                            value: '#Number',
                            humann: '#String'
                        }
                    },
                    '/isInactive': {
                        level: 20,
                        action: 'setHumanInactive',
                        title: 'Участник \'$humann\' исключён',
                        method: 'set',
                        args: {
                            value: '#Boolean',
                            humann: '#String'
                        }
                    }
                }
            }
        },
        '/games': {
            expected: {},
            '/teamGames': {
                expected: [],
                '<add>': {
                    uniqs: ['ts'],
                    level: 30,
                    action: 'addTeamGame',
                    title: 'Добавлена новая командная игра $name',
                    method: 'push',
                    value: {
                        w: '{@setNewWid()}',
                        owner: '{*login}',
                        fio: '{*fio}',
                        ts: '{ts}',
                        name: '{name}',
                        teams: '{teams}',
                        timerNames: '{timerNames}',
                        contextw: '{contextw}',
                        timerFields: '{timerFields}'
                    },
                    args: {
                        ts: '#Number',
                        name: '#String',
                        teams: '#list',
                        timerNames: '#list',
                        timerFields: '#dict',
                        contextw: '#Number'
                    },
                    setInEachValueItem: {
                        'teams, teams.comments': {
                            fio: '{*fio}',
                            owner: '{*login}',
                            w: '{@setNewWid()}'
                        }
                    }
                },
                '<rem>': {
                    level: 30,
                    action: 'removeTeamGame',
                    method: 'remove',
                    value: [
                        'w',
                        '===',
                        '{gamew}'
                    ],
                    args: {
                        gamew: '#Number'
                    }
                },
                '/[w === {gamew}]': {
                    args: {
                        gamew: '#Number'
                    },
                    '/timerNames': {
                        level: 30,
                        action: 'updateGameTimerNames',
                        method: 'set',
                        value: '{list}',
                        args: {
                            list: '#List'
                        }
                    },
                    '/timerFields': {
                        expected: {},
                        level: 30,
                        action: 'updateGameTimerFields',
                        method: 'set_all',
                        value: {
                            mode: '{mode}',
                            teams: '{teams}',
                            joins: '{joins}',
                            sort: '{sort}',
                        },
                        args: {
                            mode: '#number',
                            joins: '#number',
                            teams: '#list',
                            sort: '#num',
                        }
                    },
                    '/teams': {
                        '<update>': {
                            level: 30,
                            action: 'updateGameTeamList',
                            method: 'set',
                            value: '{list}',
                            args: {
                                list: '#List'
                            },
                            setInEachValueItem: {
                                '., comments': {
                                    fio: '{*fio}',
                                    owner: '{*login}',
                                    w: '{@setNewWid()}'
                                }
                            }
                        },
                        '/[w === {teamw}]': {
                            args: {
                                teamw: '#Number'
                            },
                            '/comments': {
                                expected: [],
                                action: 'addCommentToGameTeam',
                                method: 'push',
                                value: {
                                    w: '{@setNewWid()}',
                                    comment: '{comment}',
                                    fio: '{*fio}',
                                    owner: '{*login}'
                                },
                                args: {
                                    comment: '#String'
                                }
                            },
                            '/members': {
                                args: {
                                    humanw: '#Number'
                                },
                                '<rem>': {
                                    action: 'removeMemberFromTeam',
                                    method: 'remove',
                                    level: 30,
                                    value: [
                                        '.',
                                        '===',
                                        '{humanw}'
                                    ]
                                },
                                '<add>': {
                                    uniqs: [
                                        '.'
                                    ],
                                    level: 30,
                                    action: 'addMemberToTeam',
                                    method: 'push',
                                    value: '{humanw}'
                                }
                            }
                        }
                    },
                    '/timers': {
                        '<add>': {
                            expected: [],
                            uniqs: [
                                'ts'
                            ],
                            level: 20,
                            action: 'addGameTimer',
                            title: 'Добавлен новый таймер $name для игры $gamen',
                            method: 'push',
                            value: {
                                w: '{@setNewWid()}',
                                fio: '{*fio}',
                                owner: '{*login}',
                                ts: '{ts}',
                                name: '{name}',
                                mode: '{mode}',
                                sort: '{sort}',
                                joins: '{joins}',
                                start: '{start}',
                                starts: '{starts}',
                                teams: '{teams}',
                                finishes: '{finishes}',
                                comments: '{comments}'
                            },
                            args: {
                                ts: '#Number',
                                name: '#String',
                                mode: '#number',
                                sort: '#num',
                                joins: '#number',
                                start: '#number',
                                starts: '#list',
                                teams: '#list',
                                comments: '#list',
                                finishes: '#dict'
                            },
                            setInEachValueItem: {
                                comments: {
                                    fio: '{*fio}',
                                    owner: '{*login}',
                                    w: '{@setNewWid()}'
                                }
                            }
                        },
                        '/[w === {timerw}]': {
                            args: {
                                timerw: '#Number'
                            },
                            '/finishes': {
                                expected: {},
                                '/{teamw}': {
                                    level: 20,
                                    action: 'changeFinishTime',
                                    method: 'set',
                                    args: {
                                        value: '#Number',
                                        teamw: '#Number'
                                    }
                                },
                            },
                            '/comments': {
                                expected: [],
                                action: 'addCommentForGameTimer',
                                method: 'push',
                                value: {
                                    w: '{@setNewWid()}',
                                    comment: '{comment}',
                                    fio: '{*fio}',
                                    owner: '{*login}'
                                },
                                args: {
                                    comment: '#String'
                                }
                            },
                            '/isInactive': {
                                action: 'setIsInactiveGameTimer',
                                method: 'set',
                                args: {
                                    value: '#Boolean'
                                }
                            },
                            '/sort': {
                                action: 'setTimerResultsSortDirection',
                                method: 'set',
                                args: {
                                    value: '#Num'
                                }
                            },
                            '/teams': {
                                action: 'updateTimerTeamList',
                                method: 'set',
                                args: {
                                    value: '#List'
                                }
                            }
                        }
                    }
                }
            }
        },
        '/contexts': {
            expected: { list: [] },
            '/list': {
                '<add>': {
                    action: 'addContext',
                    level: 30,
                    method: 'push',
                    setSystems: ['w'],
                    value: {
                        name: '{name}',
                        participants: []
                    },
                    args: {
                        name: '#String',
                    }
                },
                '/[w === {contextw}]': {
                    args: {
                        contextw: '#Number'
                    },
                    '<rule>': {
                        action: 'ruleIsCanRedactGroupMentorList',
                        level: 30
                    },
                    '/{listn}': {
                        '<add>': {
                            action: 'addHumanToContext',
                            method: 'push',
                            uniqs: [
                                '.'
                            ],
                            value: '{humanw}',
                            args: {
                                humanw: '#Number',
                                listn: [
                                    'mentors',
                                    'members'
                                ]
                            }
                        },
                        '<rem>': {
                            action: 'removeHumanFromContext',
                            method: 'remove_each',
                            uniqs: [
                                '.'
                            ],
                            value: ['.', '===', '{humanw}'],
                            args: {
                                humanw: '#Number',
                                listn: [
                                    'mentors',
                                    'members'
                                ]
                            }
                        }
                    },
                    '/blanks': {
                        expected: [],
                        level: 40,
                        action: 'addContextGroupFieldBlanks',
                        method: 'concat',
                        uniqs: [
                            'key'
                        ],
                        value: '{list}',
                        args: {
                            list: '#List'
                        },
                        '/[key === {key}]': {
                            args: {
                                key: '#String'
                            },
                            '/{fieldn}': {
                                action: 'setContextGroupFieldBlankField',
                                method: 'set',
                                args: {
                                    fieldn: [
                                        'name',
                                        'def',
                                        'value',
                                        'type'
                                    ],
                                    value: '#Any'
                                }
                            }
                        }
                    },
                    '/groups': {
                        '<add>': {
                            expected: [],
                            action: 'addContextGroup',
                            method: 'push',
                            uniqs: [
                                'w'
                            ],
                            value: {
                                w: '{@setNewWid()}',
                                ts: '{ts}',
                                name: '{name}',
                                mentors: '{mentors}',
                                members: '{members}'
                            },
                            args: {
                                ts: '#Number',
                                name: '#String',
                                members: '#List',
                                mentors: '#List'
                            }
                        },
                        '/[w === {groupw}]': {
                            args: {
                                groupw: '#Number'
                            },
                            '/name': {
                                action: 'setContextGroupName',
                                method: 'set',
                                args: {
                                    value: '#String'
                                }
                            },
                            '/fields': {
                                level: 30,
                                expected: {},
                                action: 'setContextGroupFields',
                                method: 'set_all',
                                args: {
                                    value: '#Dict'
                                }
                            },
                            '/{fieldn}': {
                                args: {
                                    fieldn: [
                                        'members',
                                        'mentors'
                                    ]
                                },
                                '<add>': {
                                    action: 'addContextGroupHumans',
                                    method: 'concat',
                                    uniqs: [
                                        '.'
                                    ],
                                    args: {
                                        value: '#List'
                                    }
                                },
                                '<rem>': {
                                    action: 'delContextGroupHumans',
                                    method: 'remove_each',
                                    value: [
                                        '.',
                                        'in',
                                        '{value}'
                                    ]
                                }
                            }
                        }
                    }
                }
            }
        }
    }),
}

export default config;