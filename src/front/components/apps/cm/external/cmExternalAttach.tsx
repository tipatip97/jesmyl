import { ScheduleWidgetAppAtts } from '../../../../complect/schedule-widget/ScheduleWidget.model';
import { CmComBindAttach, scheduleWidgetUserRights, ScheduleWidgetUserRoleRight } from '../../../../models';
import CmExternalComListAtt from './complect/CmExternalComListAtt';

export const cmOwnAppAtts: ScheduleWidgetAppAtts<'cm', CmComBindAttach> = {
  '[cm]:coms': {
    icon: 'IconPlaylist02StrokeRounded',
    title: 'Песни',
    description: 'Список известных песен',
    initVal: {},
    R: ScheduleWidgetUserRoleRight.Free,
    U: scheduleWidgetUserRights.includeRights(ScheduleWidgetUserRoleRight.Redact),
    result: (value, scope, isRedact, switchIsRedact) => {
      return (
        <CmExternalComListAtt
          switchIsRedact={switchIsRedact}
          isRedact={isRedact}
          scope={scope}
          value={value}
        />
      );
    },
  },
};
