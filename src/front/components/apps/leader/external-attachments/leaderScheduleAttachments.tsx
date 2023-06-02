import { ScheduleWidgetAppAtts } from "../../../../complect/schedule-widget/ScheduleWidget.model";
import LeaderTeamGameAttach from "./LeaderTeamGameAttach";

export interface LeaderResultBoardAttachValues {
    gamew?: number,
}

export const leaderOwnGameResultBoardAppAtt: ScheduleWidgetAppAtts<'leader', LeaderResultBoardAttachValues> = {
    '[leader]:game': {
        icon: 'navigation-2-outline',
        title: 'Игра',
        description: 'Результаты командной игры контекста',
        initialAttValue: {},
        result: (value, attItem) => <LeaderTeamGameAttach attItem={attItem} value={value} />,
    }
};

export const leaderOwnAppAtts: ScheduleWidgetAppAtts<'leader'> = {
    ...leaderOwnGameResultBoardAppAtt,
};
