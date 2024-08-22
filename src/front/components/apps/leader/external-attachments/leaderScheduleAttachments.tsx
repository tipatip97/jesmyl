import { ScheduleWidgetAppAtts } from '../../../../complect/schedule-widget/ScheduleWidget.model';
import { ScheduleWidgetUserRoleRight, scheduleWidgetUserRights } from '../../../../models';
import LeaderTeamGameAttach from './LeaderTeamGameAttach';

export interface LeaderResultBoardAttachValues {
  gamew?: number;
}

export const leaderOwnGameResultBoardAppAtt: ScheduleWidgetAppAtts<'leader', LeaderResultBoardAttachValues> = {
  '[leader]:game': {
    icon: 'BasketballHoop',
    title: 'Игра',
    description: 'Результаты командной игры контекста',
    initVal: {},
    R: scheduleWidgetUserRights.includeRights(ScheduleWidgetUserRoleRight.Redact),
    U: scheduleWidgetUserRights.includeRights(ScheduleWidgetUserRoleRight.Redact),
    result: (value, scope, isRedact, switchIsRedact) => (
      <LeaderTeamGameAttach
        switchIsRedact={switchIsRedact}
        isRedact={isRedact}
        scope={scope}
        value={value}
      />
    ),
  },
};

export const leaderOwnAppAtts: ScheduleWidgetAppAtts<'leader'> = {
  ...leaderOwnGameResultBoardAppAtt,
};
