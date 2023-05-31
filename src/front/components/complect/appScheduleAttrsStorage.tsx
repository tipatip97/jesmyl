import { ScheduleWidgetAppAtts } from "../../complect/schedule-widget/ScheduleWidget.model";
import { leaderOwnGameResultBoardAppAtt } from "../apps/leader/external-attach-board/leaderExternalGameResultsAttBoard";


export const leaderOwnAppAtts: ScheduleWidgetAppAtts<'leader'> = {
    ...leaderOwnGameResultBoardAppAtt,
};


export const cmOwnAppAtts: ScheduleWidgetAppAtts<'cm'> = {
    '[cm]:coms': {
        icon: 'music-outline',
        title: 'Песни',
        description: 'Список известных песен',
        result: () => <></>
    }
};



export const leaderAppAtts = {
    ...leaderOwnAppAtts,
    ...cmOwnAppAtts,
};