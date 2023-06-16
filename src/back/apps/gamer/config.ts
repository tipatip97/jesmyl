import { Executer } from "../../complect/executer/Executer";
import { FilerAppConfig } from "../../complect/filer/Filer.model";

const config: FilerAppConfig = {
    title: 'Игрок',
    requirements: {
        locations: null,
        rooms: null,
        aliasWords: null,
    },
    actions: Executer.prepareActionList({
        "/locations": {
            "<add>": {
                level: 50,
                action: "addNewLocation",
                shortTitle: "Добавить локацию",
                method: "push",
                uniqs: [
                    "."
                ],
                value: "{location}",
                args: {
                    location: "#String"
                }
            }
        },
        "/aliasWords": {
            "<add>": {
                level: 50,
                action: "addNewAliasWord",
                shortTitle: "Добавить Алиас-слово",
                method: "push",
                uniqs: [
                    "."
                ],
                args: {
                    value: "#String"
                }
            }
        },
        "/rooms": {
            "<add>": {
                action: "addNewRoom",
                title: "Добавлена новая комната $name",
                shortTitle: "Создание комнаты",
                method: "push",
                level: 3,
                value: {
                    w: "{@setNewWid()}",
                    name: "{name}",
                    members: [
                        {
                            login: "{*login}",
                            name: "{*fio}",
                            status: "owner"
                        }
                    ],
                    games: {}
                },
                args: {
                    name: "#String"
                }
            },
            "<rem>": {
                action: "removeRoom",
                method: "remove",
                shortTitle: "Удаление комнаты",
                level: 50,
                args: {
                    roomw: "#Number"
                },
                value: [
                    "w",
                    "===",
                    "{roomw}"
                ]
            },
            "/[w === {roomw}]": {
                args: {
                    roomw: "#Number"
                },
                "/members": {
                    fixAccesses: {
                        amIManager: [
                            [
                                "login",
                                "===&",
                                "{*login}",
                                "status",
                                "in",
                                [
                                    "owner",
                                    "admin"
                                ]
                            ]
                        ],
                        amIOwner: [
                            [
                                "login",
                                "===&",
                                "{*login}",
                                "status",
                                "===",
                                "owner"
                            ]
                        ],
                        isMemberNotOwner: [
                            [
                                "login",
                                "===&",
                                "{login}",
                                "status",
                                "!==",
                                "owner"
                            ]
                        ]
                    },
                    "<requestAddToRoom>": {
                        action: "requestAddToRoom",
                        shortTitle: "Запросить вход",
                        method: "push",
                        uniqs: [
                            "login"
                        ],
                        args: {
                            login: "#String",
                            fio: "#String"
                        },
                        value: {
                            w: "{@setNewWid()}",
                            login: "{*login}",
                            name: "{*fio}",
                            status: "requester"
                        }
                    },
                    "/[login === {login}]": {
                        access: "$amIManager && $isMemberNotOwner",
                        args: {
                            login: "#String"
                        },
                        "/status": {
                            "<add>": {
                                action: "acceptMemberToRoom",
                                shortTitle: "Добавить участника",
                                method: "set",
                                value: "member"
                            },
                            "<up>": {
                                action: "riseUpToAdmin",
                                shortTitle: "Сделать админом",
                                method: "set",
                                value: "admin"
                            },
                            "<down>": {
                                action: "riseDownToUser",
                                shortTitle: "Понизить до участника",
                                method: "set",
                                value: "member"
                            }
                        },
                        "/isInactive": {
                            "<ban>": {
                                action: "banCurrentRoomMember",
                                shortTitle: "Заблокировать участника",
                                method: "set",
                                value: true
                            },
                            "<unban>": {
                                action: "unbanCurrentRoomMember",
                                shortTitle: "Разблокировать участника",
                                method: "set",
                                value: false
                            }
                        }
                    }
                },
                "/currentGame": {
                    action: "setCurrentGameName",
                    shortTitle: "Сменить игру",
                    method: "set",
                    args: {
                        value: [
                            "spy",
                            "alias"
                        ]
                    }
                },
                "/games": {
                    "/spy": {
                        access: "$amIManager",
                        expected: {},
                        "<resetResults>": {
                            side: {
                                "/finisher": {
                                    method: "set",
                                    value: null
                                },
                                "/retired": {
                                    method: "set",
                                    value: null
                                }
                            },
                            "/roles": {
                                action: "resetSpyResults",
                                shortTitle: "Сбросить результаты",
                                method: "set",
                                value: null
                            }
                        },
                        "<startGame>": {
                            args: {
                                location: "#String",
                                spiesCount: "#Number"
                            },
                            side: {
                                "/iterations": {
                                    method: "formula",
                                    value: "X + 1"
                                },
                                "/finisher": {
                                    method: "set",
                                    value: null
                                },
                                "/locations": {
                                    method: "push",
                                    value: "{location}"
                                },
                                "/spiesCount": {
                                    method: "set",
                                    value: "{spiesCount}"
                                }
                            },
                            "/roles": {
                                action: "startSpyGame",
                                shortTitle: "Начать игру",
                                method: "set",
                                value: "{roles}",
                                args: {
                                    roles: "#Dict"
                                }
                            }
                        },
                        "/finisher": {
                            action: "finishSpyGame",
                            shortTitle: "Завершить игру",
                            method: "set",
                            value: {
                                login: "{*login}",
                                name: "{*fio}"
                            }
                        },
                        "<in start game>": {
                            "/retired": {
                                "<excludeMember>": {
                                    action: "excludeSpyMember",
                                    shortTitle: "Исключить участника",
                                    method: "push",
                                    value: "{login}",
                                    uniqs: [
                                        "."
                                    ],
                                    args: {
                                        login: "#String"
                                    }
                                }
                            },
                            "/locations": {
                                args: {
                                    value: "#String"
                                },
                                "<add>": {
                                    action: "strikeSpyLocation",
                                    shortTitle: "Исключить локацию",
                                    method: "push",
                                    uniqs: [
                                        "."
                                    ]
                                },
                                "<rem>": {
                                    action: "unstrikeSpyLocation",
                                    shortTitle: "Вернуть локацию",
                                    method: "remove_each",
                                    value: [
                                        ".",
                                        "===",
                                        "{value}"
                                    ]
                                }
                            }
                        }
                    },
                    "/alias": {
                        "<phases>": {
                            "<start round>": {
                                expected: {},
                                action: "startAliasRound",
                                method: "set_all",
                                value: {
                                    phase: 1,
                                    teams: "{teams}",
                                    speakers: "{speakers}",
                                    words: "{words}",
                                    roundTime: "{roundTime}",
                                    speakeri: "{speakeri}"
                                },
                                args: {
                                    teams: "#List",
                                    speakers: "#List",
                                    words: "#List",
                                    roundTime: "#Number",
                                    speakeri: "#Number"
                                }
                            },
                            "<start speech>": {
                                action: "startAliasSpeech",
                                method: "set_all",
                                value: {
                                    phase: 2,
                                    startTs: "{startTs}"
                                },
                                args: {
                                    startTs: "#Number"
                                }
                            },
                            "<finish>": {
                                action: "finishAliasSpeech",
                                method: "set_all",
                                value: {
                                    phase: 3,
                                    startTs: 0
                                }
                            },
                            "<compute score>": {
                                action: "rememberAliasScore",
                                method: "set_all",
                                value: {
                                    phase: 1,
                                    speakeri: "{nextSpeakeri}"
                                },
                                args: {
                                    nextSpeakeri: "#Number",
                                    teami: "#Number",
                                    scoreIncrement: "#Number"
                                },
                                side: {
                                    "/teams/{teami}": {
                                        method: "set_all",
                                        value: {
                                            inc: null,
                                            cor: null
                                        },
                                        "/score": {
                                            method: "formula",
                                            value: "X + {scoreIncrement}"
                                        }
                                    }
                                }
                            }
                        },
                        "<strike word>": {
                            side: {
                                "/words": {
                                    method: "remove",
                                    value: 0
                                }
                            },
                            "/teams/{teami}/{scope}": {
                                action: "strikeAliasWord",
                                method: "push",
                                value: "{word}",
                                args: {
                                    scope: [
                                        "cor",
                                        "inc"
                                    ],
                                    teami: "#Number",
                                    word: "#Number"
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