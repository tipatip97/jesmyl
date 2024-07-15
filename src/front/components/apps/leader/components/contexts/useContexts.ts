import { useMemo } from 'react';
import { useLeaderContexts, useLeaderHumans } from '../../molecules';
import useLeaderNav from '../../useLeaderNav';
import { LeaderCleans } from '../LeaderCleans';

export const useLeaderCcontext = () => {
  const contexts = useLeaderContexts();
  const {
    appRouteData: { contextw },
  } = useLeaderNav();

  return contexts?.list?.find(({ w }) => w === contextw);
};

export default function useLeaderContext() {
  const contexts = useLeaderContexts();
  const humans = useLeaderHumans();
  const ccontext = useLeaderCcontext();

  const contextMembers = useMemo(() => {
    return (humans && ccontext?.members && LeaderCleans.extractWidables(humans, ccontext.members)) || [];
  }, [ccontext?.members, humans]);

  const contextMentors = useMemo(() => {
    return (humans && ccontext?.mentors && LeaderCleans.extractWidables(humans, ccontext.mentors)) || [];
  }, [ccontext?.mentors, humans]);

  const ret = {
    ccontext,
    contexts,
    contextMembers,
    contextMentors,
    humans,
  };

  return ret;
}
