import { isTouchDevice } from '../../../../complect/device-differences';
import { ScheduleWidgetAppAtts } from '../../../../complect/schedule-widget/ScheduleWidget.model';
import { ScheduleWidgetUserRoleRight, scheduleWidgetUserRights } from '../../../../models';
import CmExternalComListAtt from './complect/CmExternalComListAtt';
import { CmAttComStartLiveTranslationButton } from './complect/StartLiveTranslationButton';

export interface CmComBindAttach {
  comws?: number[];
}

export const cmOwnAppAtts: ScheduleWidgetAppAtts<'cm', CmComBindAttach> = {
  '[cm]:coms': {
    icon: 'music-outline',
    title: 'Песни',
    description: 'Список известных песен',
    initVal: {},
    R: ScheduleWidgetUserRoleRight.Free,
    U: scheduleWidgetUserRights.includeRightsUpTo(ScheduleWidgetUserRoleRight.Redact),
    result: (value, scope, isRedact, switchIsRedact, schedule) => {
      return (
        <>
          {isTouchDevice || !value.comws?.length || (
            <CmAttComStartLiveTranslationButton
              value={value}
              schedule={schedule}
            />
          )}
          <CmExternalComListAtt
            switchIsRedact={switchIsRedact}
            isRedact={isRedact}
            scope={scope}
            value={value}
          />
        </>
      );
    },
  },
};
