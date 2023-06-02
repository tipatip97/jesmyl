import { ScheduleWidgetAppAtts } from "../../../../complect/schedule-widget/ScheduleWidget.model";

export const cmOwnAppAtts: ScheduleWidgetAppAtts<'cm'> = {
    '[cm]:coms': {
        icon: 'music-outline',
        title: 'Песни',
        description: 'Список известных песен',
        result: () => <></>
    }
};
