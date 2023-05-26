import { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../shared/store";
import useLeaderNav from "../../useLeaderNav";
import { LeaderCleans } from "../LeaderCleans";

const contextsSelector = (state: RootState) => state.leader.contexts;
const humansSelector = (state: RootState) => state.leader.people?.humans;

export default function useLeaderContexts() {
    const contexts = useSelector(contextsSelector);
    const { appRouteData: { contextw } } = useLeaderNav();
    const humans = useSelector(humansSelector);

    const ccontext = contexts?.list?.find(({ w }) => w === contextw);

    const contextMembers = useMemo(() => {
        return (humans && ccontext?.members && LeaderCleans.extractWidables(humans, ccontext.members)) || [];
    }, [ccontext?.members, humans]);

    const ret = {
        ccontext,
        contexts,
        contextMembers,
        humans,
    };

    return ret;
}
