import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../shared/store';
import useLeaderNav from '../../useLeaderNav';
import { LeaderCleans } from '../LeaderCleans';

const contextsSelector = (state: RootState) => state.leader.contexts;
const humansSelector = (state: RootState) => state.leader.people?.humans;

export const useLeaderContexts = () => useSelector(contextsSelector);
export const useLeaderCcontext = () => {
  const contexts = useLeaderContexts();
  const {
    appRouteData: { contextw },
  } = useLeaderNav();

  return contexts?.list?.find(({ w }) => w === contextw);
};

export default function useLeaderContext() {
  const contexts = useLeaderContexts();
  const humans = useSelector(humansSelector);
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
