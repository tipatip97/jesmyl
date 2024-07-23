import React, { Suspense } from 'react';
import { NavigationConfig } from '../../../complect/nav-configurer/Navigation';
import { UseNavAction } from '../../../complect/nav-configurer/Navigation.model';
import useNavConfigurer from '../../../complect/nav-configurer/useNavConfigurer';
import { iconPackOfCalendar03 } from '../../../complect/the-icon/icons/calendar-03';
import { iconPackOfTeacher } from '../../../complect/the-icon/icons/teacher';
import { scheduleWidgetUserRights, ScheduleWidgetUserRoleRight } from '../../../models';
import { useAuth, useIndexSchedules } from '../../index/molecules';
import { RoutePhasePoint } from '../../router/Router.model';
import { LeaderNavData, LeaderStoraged } from './Leader.model';
import { leaderExer } from './leaderExer';
import { useLeaderContexts } from './molecules';

const LazyGameList = React.lazy(() => import('./components/games/GameList'));
const LazyTheGame = React.lazy(() => import('./components/games/TheGame'));
const LazyGroupList = React.lazy(() => import('./components/groups/GroupList'));
const LazyTheLeaderGroup = React.lazy(() => import('./components/groups/TheGroup'));
const LazyHumanList = React.lazy(() => import('./components/people/HumanList'));
const LazyMemberList = React.lazy(() => import('./components/people/MemberList'));
const LazyMentorList = React.lazy(() => import('./components/people/MentorList'));
const LazyLeaderGeneralPage = React.lazy(() => import('./GeneralPage'));
const LazyLeaderApplication = React.lazy(() => import('./Leader'));
const LazyLeaderSchedule = React.lazy(() => import('./LeaderSchedule'));

export const leaderNavGamePhase: RoutePhasePoint = ['game'];

const navigation: NavigationConfig<LeaderStoraged, LeaderNavData> = new NavigationConfig('leader', {
  title: 'Лидер',
  root: content => (
    <Suspense>
      <LazyLeaderApplication content={content} />
    </Suspense>
  ),
  rootPhase: 'all',
  exer: leaderExer,
  jumpByLink: {
    gamew: ({ value: gamew, jump }) => jump({ path: ['all', 'games', 'game'], data: { gamew } }),
  },
  useIsCanRead: (topContextw: number) => {
    const schedules = useIndexSchedules();
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
      iconSelfPack: iconPackOfTeacher,
      phase: ['all'],
      title: 'Лидер',
      node: (
        <Suspense>
          <LazyLeaderGeneralPage />
        </Suspense>
      ),
      next: [
        {
          phase: ['humanList'],
          node: (
            <Suspense>
              <LazyHumanList isAsPage />
            </Suspense>
          ),
        },
        {
          phase: ['leaderList'],
          node: (
            <Suspense>
              <LazyMentorList isAsPage />
            </Suspense>
          ),
        },
        {
          phase: ['memberList'],
          node: (
            <Suspense>
              <LazyMemberList isAsPage />
            </Suspense>
          ),
        },
        {
          phase: ['groupList'],
          node: (
            <Suspense>
              <LazyGroupList />
            </Suspense>
          ),
          next: [
            {
              phase: ['group'],
              node: (
                <Suspense>
                  <LazyTheLeaderGroup />
                </Suspense>
              ),
            },
          ],
        },
        {
          phase: ['games'],
          node: (
            <Suspense>
              <LazyGameList />
            </Suspense>
          ),
          next: [
            {
              phase: leaderNavGamePhase,
              node: (
                <Suspense>
                  <LazyTheGame />
                </Suspense>
              ),
            },
          ],
        },
      ],
    },
    {
      iconSelfPack: iconPackOfCalendar03,
      phase: ['schedule'],
      title: 'Мероприятие',
      node: (
        <Suspense>
          <LazyLeaderSchedule />
        </Suspense>
      ),
    },
  ],
  lazies: [
    <LazyLeaderApplication content />,
    <LazyHumanList isAsPage />,
    <LazyMentorList isAsPage />,
    <LazyMemberList isAsPage />,
    <LazyGroupList />,
    <LazyTheLeaderGroup />,
    <LazyGameList />,
    <LazyTheGame />,
    <LazyLeaderSchedule />,
  ],
});

const actions: UseNavAction[] = [];

export default function useLeaderNav() {
  return useNavConfigurer<LeaderStoraged, LeaderNavData>('leader', actions, navigation);
}
