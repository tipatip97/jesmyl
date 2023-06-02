import { ScheduleWidgetAppAtts } from "../../../../complect/schedule-widget/ScheduleWidget.model";
import CmExternalComListAtt from "./complect/CmExternalComListAtt";

export interface CmComBindAttach {
    eventw?: number,
}

export const cmOwnAppAtts: ScheduleWidgetAppAtts<'cm', CmComBindAttach> = {
    '[cm]:coms': {
        icon: 'music-outline',
        title: 'Песни',
        description: 'Список известных песен',
        initialAttValue: {},
        result: (value, attItem) => <CmExternalComListAtt attItem={attItem} value={value} />
    }
};
