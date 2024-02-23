import { scheduleWidgetUserRights, ScheduleWidgetUserRoleRight } from '../../../models';
import { NavigationConfig } from '../../../complect/nav-configurer/Navigation';
import { UseNavAction } from '../../../complect/nav-configurer/Navigation.model';
import useNavConfigurer from '../../../complect/nav-configurer/useNavConfigurer';
import { useSchedules } from '../../../complect/schedule-widget/useScheduleWidget';
import useAuth from '../../index/useAuth';
import { RoutePhasePoint } from '../../router/Router.model';
import { useLeaderContexts } from './components/contexts/useContexts';
import GameList from './components/games/GameList';
import TheGame from './components/games/TheGame';
import GroupList from './components/groups/GroupList';
import TheLeaderGroup from './components/groups/TheGroup';
import HumanList from './components/people/HumanList';
import MemberList from './components/people/MemberList';
import MentorList from './components/people/MentorList';
import LeaderGeneralPage from './GeneralPage';
import LeaderApplication from './Leader';
import { LeaderNavData, LeaderStoraged } from './Leader.model';
import { leaderExer } from './Leader.store';
import LeaderSchedule from './LeaderSchedule';

export const leaderNavGamePhase: RoutePhasePoint = ['game'];

const navigation: NavigationConfig<LeaderStoraged, LeaderNavData> = new NavigationConfig('leader', {
  title: 'Лидер',
  root: content => <LeaderApplication content={content} />,
  rootPhase: 'all',
  logo: 'navigation-2',
  exer: leaderExer,
  jumpByLink: {
    gamew: gamew => ({ path: ['all', 'games', 'game'], data: { gamew } }),
  },
  useIsCanRead: (topContextw: number) => {
    const schedules = useSchedules();
    const contexts = useLeaderContexts();
    const auth = useAuth();

    if (schedules === undefined) return false;
    if (contexts === undefined) return auth?.level > 2;

    const check = (contextw: number) => {
      const schedule = schedules.list.find(schedule => schedule.w === contextw);
      if (schedule === undefined) return topContextw !== undefined && auth.level > 10;
      const myUser = schedule.ctrl.users.find(user => user.login === auth.login);
      if (myUser === undefined) return false;
      return scheduleWidgetUserRights.checkIsHasRights(
        myUser.R ?? schedule.ctrl.defu,
        ScheduleWidgetUserRoleRight.Redact,
      );
    };

    return topContextw === undefined ? !!contexts.list?.some(ctx => check(ctx.w)) : check(topContextw);
  },
  routes: [
    {
      icon: 'navigation-2',
      phase: ['all'],
      title: 'Лидер',
      node: <LeaderGeneralPage />,
      next: [
        {
          phase: ['humanList'],
          node: <HumanList isAsPage />,
        },
        {
          phase: ['leaderList'],
          node: <MentorList isAsPage />,
        },
        {
          phase: ['memberList'],
          node: <MemberList isAsPage />,
        },
        {
          phase: ['groupList'],
          node: <GroupList />,
          next: [
            {
              phase: ['group'],
              node: <TheLeaderGroup />,
            },
          ],
        },
        {
          phase: ['games'],
          node: <GameList />,
          next: [
            {
              phase: leaderNavGamePhase,
              node: <TheGame />,
            },
          ],
        },
      ],
    },
    {
      icon: 'calendar',
      phase: ['schedule'],
      title: 'Мероприятие',
      node: <LeaderSchedule />,
    },
  ],
});

const actions: UseNavAction[] = [];

export default function useLeaderNav() {
  return useNavConfigurer<LeaderStoraged, LeaderNavData>('leader', actions, navigation);
}
