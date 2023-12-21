import { ScheduleWidgetUserRoleRight, scheduleWidgetUserRights } from '../../../../models';
import { ScheduleWidgetAppAtts } from '../../../../complect/schedule-widget/ScheduleWidget.model';
import LeaderTeamGameAttach from './LeaderTeamGameAttach';

export interface LeaderResultBoardAttachValues {
  gamew?: number;
}

export const leaderOwnGameResultBoardAppAtt: ScheduleWidgetAppAtts<'leader', LeaderResultBoardAttachValues> = {
  '[leader]:game': {
    icon: 'navigation-2-outline',
    title: 'Игра',
    description: 'Результаты командной игры контекста',
    initVal: {},
    R: scheduleWidgetUserRights.includeRightsUpTo(ScheduleWidgetUserRoleRight.Redact),
    U: scheduleWidgetUserRights.includeRightsUpTo(ScheduleWidgetUserRoleRight.Redact),
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
