import { ScheduleWidgetUserRoleRight, scheduleWidgetUserRights } from '../../../../../models';
import { ScheduleWidgetAppAtts } from '../../../ScheduleWidget.model';
import ScheduleCheckListAtt from './TheCheckListAtt';

export interface ScheduleChListAtt {
  list: [num, string][];
}

export const checkListAtt: ScheduleWidgetAppAtts<'SCH', ScheduleChListAtt> = {
  '[SCH]:chlist': {
    title: 'Выполнить',
    description: 'Пункты с галочками',
    icon: 'IconCheckListStrokeRounded',
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
