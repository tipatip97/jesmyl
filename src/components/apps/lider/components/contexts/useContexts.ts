import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../shared/store";
import { liderExer, riseUpNumUpdatesContexts, setCurrentContextw, updateLeaderContexts } from "../../Lider.store";
import { HumanImportable } from "../people/People.model";
import LeaderContext from "./Context";
import LeaderContexts from "./Contexts";
import { LeaderContextCreatable, LeaderContextsImportable } from "./Contexts.model";

let localContexts: LeaderContexts | und;
let localCurrentContext: LeaderContext | und;

export default function useLeaderContexts() {
    const dispatch = useDispatch();
    useSelector((state: RootState) => state.lider.numUpdatesContexts);
    const contextsImportable = useSelector((state: RootState) => state.lider.contexts);
    const currentContextw = useSelector((state: RootState) => state.lider.currentContextw);

    if (!localCurrentContext && currentContextw && localContexts) {
        localCurrentContext = localContexts.list?.find(({ wid }) => wid === currentContextw);
    }

    const ret = {
        ccontext: localCurrentContext,
        contexts: localContexts,
        contextsImportable,
        updateContexts: (contexts: LeaderContextsImportable, humans: HumanImportable[]) => {
            localContexts = new LeaderContexts(contexts, humans);
            ret.setCurrentContext(currentContextw);
            dispatch(riseUpNumUpdatesContexts());
            return localContexts;
        },
        updateContextsImportable: (contexts: LeaderContextsImportable) => dispatch(updateLeaderContexts(contexts)),
        publicateNewContext: (context: LeaderContextCreatable) => {
            liderExer.send({
                action: 'addContext',
                method: 'push',
                args: context,
            });
        },
        setCurrentContext: (contextw: number) => {
            if (localContexts)
                localCurrentContext = localContexts.list?.find(({ wid }) => wid === contextw);
            dispatch(setCurrentContextw(contextw));
        },
    };

    return ret;
}