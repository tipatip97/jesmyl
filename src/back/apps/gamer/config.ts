import { Executer } from "../../complect/executer/Executer";
import { FilerAppConfig } from "../../complect/filer/Filer.model";
import smylib from "../../complect/soki/complect/SMyLib";
import { GamerAliasRoomState, GamerAliasRoomStatePhase } from "./games/alias.model";

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
                                    phase: GamerAliasRoomStatePhase.Wait,
                                    teams: "{teams}",
                                    speaks: "{speaks}",
                                    words: "{words}",
                                    roundTime: "{roundTime}",
                                    speakeri: "{speakeri}",
                                    dream: "{dream}",
                                },
                                args: {
                                    teams: "#List",
                                    speaks: "#List",
                                    words: "#List",
                                    roundTime: "#Number",
                                    speakeri: "#Number"
                                }
                            },
                            "<start speech>": {
                                action: "startAliasSpeech",
                                method: "set_all",
                                value: {
                                    phase: GamerAliasRoomStatePhase.Speech,
                                    startTs: "{startTs}"
                                },
                                args: {
                                    startTs: "#Number"
                                },
                            },
                            "<start timeout>": {
                                action: "startAliasSpeechTimeout",
                                delay: (props) => (props?.$$vars?.$$currentValue?.roundTime || 1) * 1000,
                                method: "set_all",
                                value: {
                                    phase: GamerAliasRoomStatePhase.Results,
                                    startTs: 0,
                                }
                            },
                            "<reset game>": {
                                action: "resetAliasGame",
                                method: "set_all",
                                value: {
                                    phase: GamerAliasRoomStatePhase.Initial,
                                    startTs: 0,
                                }
                            },
                            "<compute score>": {
                                action: "rememberAliasScore",
                                method: "set_all",
                                value: {
                                    phase: GamerAliasRoomStatePhase.Wait,
                                },
                                args: {
                                    teami: "#Number",
                                    scoreIncrement: "#Number"
                                },
                                side: (props) => {
                                    const state: GamerAliasRoomState = props?.$$vars?.$$currentValue;
                                    let members: string[] = [];
                                    let currTeami = -1;
                                    const currentSpeakeri = state.speakeri || 0;

                                    let startNextMembersi = -1;
                                    let finishNextMembersi = -1;

                                    state.teams.forEach((team, teami, teama) => {
                                        members = members.concat(team.members);

                                        if (currTeami !== -1 || members.length <= currentSpeakeri) return;

                                        currTeami = teami;

                                        if (teami === teama.length - 1) {
                                            startNextMembersi = 0;
                                            finishNextMembersi = teama[0].members.length;
                                        } else {
                                            startNextMembersi = members.length;
                                            finishNextMembersi = members.length + teama[teami + 1].members.length;
                                        }
                                    });

                                    const nextTeamSpeaks = state.speaks.slice(startNextMembersi, finishNextMembersi);
                                    const minSpeak = Math.min(...nextTeamSpeaks);
                                    const speaksii = smylib.mapFilter(nextTeamSpeaks, (speaks, speaksi) => speaks === minSpeak ? speaksi : undefined);

                                    const speakeri: number = startNextMembersi + smylib.randomItem(speaksii);

                                    return {
                                        '/': {
                                            method: 'set_all',
                                            value: {
                                                speakeri,
                                            },
                                        },
                                        '/words': {
                                            method: 'remove',
                                            value: 0,
                                        },
                                        [`/speaks/${state.speakeri}`]: {
                                            method: 'formula' as const,
                                            value: 'X + 1'
                                        },
                                        [`/teams/{teami}`]: {
                                            method: "set_all",
                                            value: {
                                                inc: null,
                                                cor: null
                                            },
                                            '/score': {
                                                method: "formula",
                                                value: "X + {scoreIncrement}"
                                            },
                                            '/rounds': {
                                                method: "formula",
                                                value: "X + 1"
                                            }
                                        }
                                    };
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