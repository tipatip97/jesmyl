import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../shared/store";
import { leaderExer, riseUpNumUpdatesContexts, setCurrentContextw, updateLeaderContexts } from "../../Leader.store";
import Human from "../people/Human";
import LeaderContext from "./Context";
import LeaderContexts from "./Contexts";
import { LeaderContextCreatable, LeaderContextsImportable } from "./Contexts.model";

let localContexts: LeaderContexts | und;
let localCurrentContext: LeaderContext | und;

export default function useLeaderContexts() {
    const dispatch = useDispatch();
    useSelector((state: RootState) => state.leader.numUpdatesContexts);
    const contextsImportable = useSelector((state: RootState) => state.leader.contexts);
    const ccontextw = useSelector((state: RootState) => state.leader.ccontextw);

    if (!localCurrentContext && ccontextw && localContexts) {
        localCurrentContext = localContexts.list?.find(({ wid }) => wid === ccontextw);
    }

    const ret = {
        ccontext: localCurrentContext,
        contexts: localContexts,
        contextsImportable,
        updateContexts: (contexts: LeaderContextsImportable, humans: Human[]) => {
            localContexts = new LeaderContexts(contexts, humans);
            ret.setCurrentContext(ccontextw);
            dispatch(riseUpNumUpdatesContexts());
            return localContexts;
        },
        updateContextsImportable: (contexts: LeaderContextsImportable) => dispatch(updateLeaderContexts(contexts)),
        publicateNewContext: (context: LeaderContextCreatable) => {
            leaderExer.send({
                action: 'addContext',
                method: 'push',
                args: context,
            });
        },
        setCurrentContext: (contextw?: number) => {
            if (localContexts)
                localCurrentContext = localContexts.list?.find(({ wid }) => wid === contextw);
            dispatch(setCurrentContextw(contextw));
        },
    };

    return ret;
}