import { ScheduleWidgetAppAtts } from "../../complect/schedule-widget/ScheduleWidget.model";


export const leaderOwnAppAtts: ScheduleWidgetAppAtts<'leader'> = {
    '[leader]:game': {
        icon: 'navigation-2-outline',
        title: 'Игра',
        description: 'Результаты командной игры контекста',
        result: () => <></>
    }
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