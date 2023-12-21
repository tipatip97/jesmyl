import { useMemo } from 'react';
import useLeaderNav from '../../useLeaderNav';
import { LeaderCleans } from '../LeaderCleans';
import useLeaderContext from '../contexts/useContexts';

export default function useLeaderGroups() {
  const { ccontext, humans } = useLeaderContext();
  const {
    goTo,
    appRouteData: { groupw },
  } = useLeaderNav();

  const cgroup = ccontext?.groups?.find(({ w }) => w === groupw);

  const cgroupMembers = useMemo(() => {
    return (humans && cgroup?.members && LeaderCleans.extractWidables(humans, cgroup.members)) || [];
  }, [cgroup?.members, humans]);

  const cgroupMentors = useMemo(() => {
    return (humans && cgroup?.mentors && LeaderCleans.extractWidables(humans, cgroup.mentors)) || [];
  }, [cgroup?.mentors, humans]);

  const ret = {
    cgroup,
    humans,
    cgroupMembers,
    cgroupMentors,
    goToGroup: (groupw: number) => {
      goTo({ place: 'group', data: { groupw } });
    },
  };
  return ret;
}
