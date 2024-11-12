import { ScheduleWidgetAppAtts } from 'front/complect/schedule-widget/ScheduleWidget.model';
import ScheduleCheckListAtt from './TheCheckListAtt';
import { scheduleWidgetUserRights, ScheduleWidgetUserRoleRight } from 'shared/api';

export interface ScheduleChListAtt {
  list: [num, string][];
}

export const checkListAtt: ScheduleWidgetAppAtts<'SCH', ScheduleChListAtt> = {
  '[SCH]:chlist': {
    title: 'Выполнить',
    description: 'Пункты с галочками',
    icon: 'CheckList',
    initVal: { list: [] },
    result: (value, scope, isRedact) => (
      <ScheduleCheckListAtt
        isRedact={isRedact}
        value={value}
        scope={scope}
      />
    ),
    R: scheduleWidgetUserRights.includeRights(ScheduleWidgetUserRoleRight.Redact),
    U: scheduleWidgetUserRights.includeRights(ScheduleWidgetUserRoleRight.Redact),
  },
};
