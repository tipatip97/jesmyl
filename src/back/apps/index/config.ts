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
                C: {
                    value: {
                        w: '{schw}',
                        title: '{title}',
                    },
                    args: {
                        schw: '#Number',
                        title: '#String',
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
                                C: {
                                    args: {
                                        value: '#String'
                                    }
                                },
                                D: {
                                    value: ['.', '===', '{attn}'],
                                    args: {
                                        attn: '#String'
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
                            value: {
                                w: '{@setNewWid()}',
                                list: [],
                                wup: 7,
                            }
                        },
                        '/[w === {dayw}]': {
                            scopeNode: 'dayw',
                            args: {
                                dayw: '#Number'
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