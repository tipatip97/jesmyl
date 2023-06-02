import { ScheduleWidgetAppAtts } from "../../../ScheduleWidget.model";
import ScheduleCheckListAtt from "./ScheduleCheckListAtt";

export interface ScheduleChListAtt {
    list: [num, string][];
}

export const checkListAtt: ScheduleWidgetAppAtts<'SCH', ScheduleChListAtt> = {
    '[SCH]:chlist': {
        title: 'Выполнить',
        description: 'Пункты с галочками',
        icon: 'list',
        initialAttValue: { list: [] },
        result: (value, attItem, scope) => <ScheduleCheckListAtt attItem={attItem} value={value} scope={scope}/>,
    }
};
