import { ExecutionArgs } from "../../../../complect/executer/Executer.model";
import { filer } from "../../../../complect/filer/Filer";
import { ActionBox } from "../../../../models";
import smylib from "../../../../shared/SMyLib";
import { AliasHelp } from "./AliasHelp";
import { AliasWordsPack, GamerAliasRoomState, GamerAliasRoomStatePhase } from "./alias.model";

const isIs = (is: unknown) => is;

const getCurrValue = <Ret>(props: ExecutionArgs | nil): Ret => props?.$$vars?.$$currentValue;
const speechTimerId = (state: GamerAliasRoomState) => 'alias-timeout:' + state.teams[0].title;
const clearSpeechTimer = (props: ExecutionArgs | null) => {
    const state = getCurrValue<GamerAliasRoomState | nil>(props);
    if (!state) return;
    return {
        clearId: speechTimerId(state),
    };
};

export const aliasGameConfig: ActionBox = {
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
                dicts: "{dicts}",
                cor: [],
                inc: [],
                fix: [],
                rej: {},
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
            timer: (props) => {
                const state = getCurrValue<GamerAliasRoomState | nil>(props);
                if (!state) return;
                return {
                    startMs: (state.roundTime || 1) * 1000,
                    startId: speechTimerId(state),
                };
            },
            method: "set_all",
            value: {
                phase: GamerAliasRoomStatePhase.Results,
                startTs: 0,
            }
        },
        "<pass end>": {
            action: "resetAliasSpeech",
            method: "set_all",
            timer: clearSpeechTimer,
            value: {
                phase: GamerAliasRoomStatePhase.Results,
                startTs: 0,
            }
        },
        "<reset game>": {
            action: "resetAliasGame",
            method: "set_all",
            timer: clearSpeechTimer,
            value: {
                phase: GamerAliasRoomStatePhase.Initial,
                startTs: 0,
            }
        },
        "<compute score>": {
            action: "computeAliasScore",
            method: "set_all",
            value: {
                phase: GamerAliasRoomStatePhase.Wait,
            },
            side: (props) => {
                const state = getCurrValue<GamerAliasRoomState | nil>(props);
                if (state == null) return;
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

                const aliasWords: AliasWordsPack[] = filer.contents.gamer?.aliasWords?.data;
                const mapper = (nid: number) => AliasHelp.takeWordInfo(aliasWords, state.dicts, nid)!;

                const score = aliasWords
                    ? AliasHelp.computeGameScore(
                        state.cor.map(mapper).filter(isIs),
                        state.inc.map(mapper).filter(isIs),
                        state.fix,
                    )
                    : -12;

                return {
                    '/': {
                        method: 'set_all',
                        value: {
                            speakeri,
                            inc: [],
                            cor: [],
                            fix: [],
                            rej: {},
                        },
                    },
                    '/words': {
                        method: 'remove',
                        value: 0,
                    },
                    [`/speaks/${state.speakeri}`]: {
                        method: 'formula',
                        value: 'X + 1'
                    },
                    [`/teams/${currTeami}/score`]: {
                        method: "set",
                        value: state.teams[currTeami].score + score,
                    },
                    [`/teams/${currTeami}/rounds`]: {
                        method: "formula",
                        value: "X + 1",
                    }
                } as const;
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
        "/{scope}": {
            action: "strikeAliasWord",
            method: "push",
            value: "{word}",
            args: {
                scope: [
                    "cor",
                    "inc"
                ],
                word: "#Number"
            }
        }
    },
    "/fix": {
        expected: [],
        action: "fixAliasWord",
        method: "toggle",
        value: '{nid}',
        args: {
            nid: "#Number"
        },
    },
    "/rej": {
        expected: {},
        action: "rejectAliasWord",
        side: (props, auth) => {
            const rej = getCurrValue<Record<number, number[]>>(props);
            return {
                '/{nid}': rej?.[props?.nid]
                    ? {
                        method: "toggle",
                        value: auth?.login,
                    }
                    : {
                        method: "set",
                        value: [auth?.login],
                    },
            };
        },
    },
};
