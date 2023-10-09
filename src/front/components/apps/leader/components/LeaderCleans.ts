import SourceBased from "../../../../complect/SourceBased";
import { ClientExecutionDict } from "../../../../complect/exer/Exer.model";
import mylib from "../../../../complect/my-lib/MyLib";
import { TeamGameImportable } from "../Leader.model";
import { leaderExer } from "../Leader.store";
import { getRandomTwiceName } from "../../../../complect/random-twice-name/getRandomTwiceName";
import { LeaderContextCreatable, LeaderContextImportable } from "./contexts/Contexts.model";
import { GameTeamExportable } from "./games/teams/GameTeams.model";
import { GameTimerConfigurable, GameTimerImportable, GameTimerImportableWithStrongConfigurable, GameTimerMode, GameTimerSortDirection, RateSortedItem } from "./games/timers/GameTimer.model";
import { LeaderGroupChangable, LeaderGroupCreatable, LeaderGroupExportable, LeaderGroupImportable } from "./groups/Groups.model";
import { HumanImportable } from "./people/People.model";

export class LeaderCleans {
    static truthableFilter = <Item>(item: Item) => item;

    static extractWidable = <Item extends { w: number }>(widables: Item[], wid: number): Item | undefined => {
        return widables.find(({ w }) => w === wid);
    };

    static extractWidables = <Item extends { w: number }>(widables: Item[], list: number[]): Item[] => {
        return widables
            ? list.map((wid) => this.extractWidable(widables, wid)!).filter(this.truthableFilter)
            : [] as Item[];
    }

    static isTeamCantMove = (timer: GameTimerImportable, teamw: number) => {
        return !!timer.finishes?.[teamw];
    };

    static getTimerStartTs = (timer: GameTimerImportable, game: TeamGameImportable, rowi: number) => {
        return (this.getTimerConfigurableField('mode', timer, game) === GameTimerMode.TimerTotal
            ? timer.start
            : timer.starts?.[rowi]) || 0;
    };

    static isTimerRowFinished = (timer: GameTimerImportable, game: TeamGameImportable | und, topRowi: number, isSomeOf = true) => {
        const finishes = timer.finishes || {};

        const teams = this.rateSortedTimerTeams(timer, game)
            .filter(({ rowi }) => topRowi === rowi);

        return !(isSomeOf
            ? teams.some(({ team }) => team && !finishes[team.w])
            : !teams.some(({ team }) => team && finishes[team.w]))
    };

    static getTimePeriodAsString = (start: number, finish: number) => {
        const date = new Date(finish - start);

        let hours: string | number = date.getUTCHours();
        if (!hours) hours = '';
        else if (hours < 10) hours = '0' + hours;

        let minutes: string | number = date.getUTCMinutes();
        if (minutes < 10) minutes = '0' + minutes;

        let seconds: string | number = date.getUTCSeconds();
        if (seconds < 10) seconds = '0' + seconds;

        return `${hours ? `${hours}:` : ''}${minutes}:${seconds}.${('' + date.getMilliseconds()).padStart(3, '0')}`;
    };

    static rateSortedTimerTeams = (timer?: GameTimerImportable, game?: TeamGameImportable, isFilterOnlyFinished?: boolean, specialSort?: GameTimerSortDirection): RateSortedItem[] => {
        const starts = timer?.starts || [];
        const finishes = timer?.finishes || {};
        const start = timer?.start || 0;

        let teamsNet = mylib.netFromLine(
            this.takeTimerTeamList(timer, game),
            this.getTimerConfigurableField('joins', timer, game),
            this.getTimerConfigurableField('mode', timer, game) === GameTimerMode.TimerTotal
                ? (team, rowi) => ({ team, start, finish: finishes[team.w], rowi })
                : (team, rowi) => ({ team, start: starts[rowi] || 0, finish: finishes[team.w], rowi })
        ).flat();

        if (isFilterOnlyFinished)
            teamsNet = teamsNet.filter(({ finish }) => finish);

        return teamsNet.sort(
            specialSort ?? this.getTimerConfigurableField('sort', timer, game)
                ? (a, b) => (a.finish - a.start) - (b.finish - b.start)
                : (b, a) => (a.finish - a.start) - (b.finish - b.start)
        );
    };

    static computeMinFromMs(ms: number) {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const date = new Date(today.getTime() + ms);
        return `${date.getHours() ? `${date.getHours()}::` : ''}${date.getMinutes()}:${('' + date.getSeconds()).padStart(2, '0')}.${date.getMilliseconds()}`;
    };

    static getTimerConfigurableField = <Key extends keyof GameTimerConfigurable>(key: Key, timer: GameTimerImportable | nil, game: TeamGameImportable | nil): NonNullable<GameTimerConfigurable[Key]> => {
        return this.getTimerConfigurableFieldAsIs(key, timer, game)
            ?? (key === 'mode' ? GameTimerMode.TimerTotal : key === 'joins' ? 1 : key === 'sort' ? GameTimerSortDirection.Desc : []) as never;
    };

    static getTimerConfigurableFieldAsIs = <Key extends keyof GameTimerConfigurable>(key: Key, timer: GameTimerImportable | nil, game: TeamGameImportable | nil): GameTimerConfigurable[Key] => {
        return timer?.[key] ?? game?.timerFields?.[key];
    };

    static takeTimerTeamList = (timer: GameTimerImportable | nil, game: TeamGameImportable | nil) => {
        if (!game?.teams) return [];
        const teams = game.teams;

        return this.getTimerConfigurableFieldAsIs('teams', timer, game)
            ?.map((teamw) => teams.find((team) => team.w === teamw)!)
            .filter(this.truthableFilter) ?? game.teams;
    };

    static membersReadyToPlay = (members: HumanImportable[]) => {
        return members.filter(member => !member.isInactive && member.ufp1 + member.ufp2);
    }

    static isTimerWasPublicate = (timers: GameTimerImportable[] | und, timerTs: number) => {
        return timers?.some((timer) => timer.ts === timerTs);
    }

    static generateNewTeamName = () => getRandomTwiceName().join(' ').toUpperCase();

    static takeGroupMentorNames = (humans: HumanImportable[] | und, group: LeaderGroupImportable) => {
        return (humans && this.extractWidables(humans, group.mentors)
            .map((mentor) => mentor.name.replace(/([А-ЯЁ])[а-яё]+ (.+)/, "$2 $1"))
            .join(", ")) || 'Лидеров нет';
    };

    static getMembersInGroups = (participantListName: 'members' | 'mentors', contextParticipants: HumanImportable[], wids: number[], groups: LeaderGroupImportable[] | und): { member: HumanImportable, group: LeaderGroupImportable }[] => {
        return groups?.map(
            (group) =>
                group[participantListName]
                    .map((memberw) => {
                        const member = contextParticipants.find(({ w }) => w === memberw);
                        return !member?.isInactive && wids.includes(member?.w || -1) ? { member, group } : null
                    })
                    .filter(this.truthableFilter) as never)
            .flat() || [];
    };

    static getContextFieldValues = (context: LeaderContextImportable | und, groupFields: Record<string, string> | und): Record<string, string> => {
        const values: Record<string, any> = {};
        const fields = groupFields || {};

        context?.blanks?.forEach(({ key, def, value }) => {
            if (value) values[key] = value;
            else if (def && !fields[key]) values[key] ||= def;
        });

        return {
            ...groupFields,
            ...values,
        };
    };

    //// execs


    static addContextHuman = (contextw: number, humanw: number, listn: 'mentors' | 'members') => {
        return leaderExer.send({
            action: 'addHumanToContext',
            args: {
                contextw,
                listn,
                humanw,
            }
        });
    };

    static removeContextHuman = (contextw: number, humanw: number, listn: 'mentors' | 'members') => {
        return leaderExer.send({
            action: 'removeHumanFromContext',
            args: {
                contextw,
                listn,
                humanw,
            }
        });
    };

    static publicateNewContext = (context: LeaderContextCreatable) => {
        return leaderExer.send({
            action: 'addContext',
            method: 'push',
            args: context,
        });
    };

    static removeGame = (gamew: number) => {
        return leaderExer.send({
            action: 'removeTeamGame',
            args: { gamew },
        });
    };

    static publicateGameTimerFields = (gamew: number, value: GameTimerConfigurable) => {
        return leaderExer.send({
            action: 'updateGameTimerFields',
            args: { ...value, gamew },
        });
    };

    static publicateTimerNameList = (gamew: number, list: string[]) => {
        return leaderExer.send({
            action: 'updateGameTimerNames',
            args: { gamew, list },
        });
    };

    static setGameDescription = (gamew: number, dsc: string) => {
        return leaderExer.send({
            action: 'setGameDescription',
            args: { gamew, dsc },
        });
    };

    static publicateTeams = (gamew: number, teams: GameTeamExportable[]) => {
        return leaderExer.send({
            action: 'updateGameTeamList',
            args: {
                gamew,
                list: teams
            },
        });
    };

    static changeFinishTime = (gamew: number, timerw: number, teamw: number, value: number) => {
        return leaderExer.send({
            action: 'changeFinishTime',
            value,
            args: {
                gamew,
                timerw,
                teamw,
                value,
            },
        });
    };

    static publicateTimer = (gamew: number, timer: GameTimerImportableWithStrongConfigurable) => {
        return leaderExer.send({
            action: 'addGameTimer',
            args: { ...timer, gamew },
        });
    };

    static setIsInactiveGameTimer = (gamew: number, timerw: number, value: boolean) => {
        return leaderExer.send({
            action: 'setIsInactiveGameTimer',
            args: { value, gamew, timerw },
        });
    };

    static setTimerResultsSortDirection = (gamew: number, timerw: number, value: GameTimerSortDirection) => {
        return leaderExer.send({
            action: 'setTimerResultsSortDirection',
            args: { value, gamew, timerw },
        });
    };

    static updateTimerTeamList = (gamew: number, timerw: number, value: number[]) => {
        return leaderExer.send({
            action: 'updateTimerTeamList',
            args: { value, gamew, timerw },
        });
    };

    static publicateNewLeaderGroup = (group: LeaderGroupCreatable) => {
        return leaderExer.send({
            action: 'addContextGroup',
            args: {
                ...group,
                ts: SourceBased.makeNewTs()
            } as LeaderGroupExportable
        });
    }

    static getChangesStack = (groupw: number, groupName: string, changes: LeaderGroupChangable) => {
        const stack: ClientExecutionDict<unknown>[] = [];
        const generals = {
            contextw: changes.contextw,
            groupw,
        };

        if (changes.name && changes.name !== groupName) {
            stack.push({
                action: 'setContextGroupName',
                method: 'set',
                args: {
                    ...generals,
                    value: changes.name,
                },
            });
        }

        if (changes.addMembers?.length) {
            stack.push(this.makeHumansToGroupExecDict(changes.addMembers, generals, 'members', 'add'));
        }

        if (changes.delMembers?.length) {
            stack.push(this.makeHumansToGroupExecDict(changes.delMembers, generals, 'members', 'del'));
        }

        if (changes.delMentors?.length) {
            stack.push(this.makeHumansToGroupExecDict(changes.delMentors, generals, 'mentors', 'del'));
        }

        if (changes.addMentors?.length) {
            stack.push(this.makeHumansToGroupExecDict(changes.addMentors, generals, 'mentors', 'add'));
        }

        return stack;
    }

    static makeHumansToGroupExecDict = (value: number[], generals: { contextw: number; groupw: number }, fieldn: 'mentors' | 'members', type: 'add' | 'del'): ClientExecutionDict => {
        return {
            action: `${type}ContextGroupHumans`,
            args: {
                ...generals,
                value,
                fieldn
            },
        }
    }

    static replaceMemberToGroup = (groupw: number, contextw: number, humanw: number, excludeGroups: LeaderGroupImportable[], participantListName: 'members' | 'mentors') => {
        leaderExer.clear();
        const stack: ClientExecutionDict<unknown>[] = [];

        stack.push(this.makeHumansToGroupExecDict([humanw], { contextw, groupw }, participantListName, 'add'));

        excludeGroups.forEach((group) => {
            stack.push(this.makeHumansToGroupExecDict([humanw], { contextw, groupw: group.w }, participantListName, 'del'));
        });

        return leaderExer.send(stack);
    }

    static sendGroupChanges = (groupw: number, groupName: string, changes: LeaderGroupChangable) => {
        leaderExer.clear();
        return leaderExer.send(this.getChangesStack(groupw, groupName, changes));
    }
}