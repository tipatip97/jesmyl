import { ScheduleWidgetUserRoleRight, scheduleWidgetUserRights } from "../../../../../back/apps/index/rights";
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
        initVal: {},
        R: ScheduleWidgetUserRoleRight.Free,
        U: scheduleWidgetUserRights.includeRightsUpTo(ScheduleWidgetUserRoleRight.Redact),
        result: (value, scope, isRedact, switchIsRedact) => {
            return <CmExternalComListAtt
                switchIsRedact={switchIsRedact}
                isRedact={isRedact}
                scope={scope}
                value={value}
            />
        },
    }
};
