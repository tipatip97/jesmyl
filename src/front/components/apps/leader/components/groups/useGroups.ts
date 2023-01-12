import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../shared/store";
import { setCurrentGroupw } from "../../Leader.store";
import useLeaderNav from "../../useLeaderNav";
import useLeaderContexts from "../contexts/useContexts";
import LeaderGroup from "./Group";

let localCurrentGroup: LeaderGroup | nil;

const cgroupwSelector = (state: RootState) => state.leader.cgroupw;

export default function useLeaderGroups() {
    const dispatch = useDispatch();
    const cgroupw = useSelector(cgroupwSelector);
    const { ccontext } = useLeaderContexts();
    const { goTo } = useLeaderNav();

    if (!localCurrentGroup && ccontext?.groups && cgroupw) {
        localCurrentGroup = ccontext.groups.find(({ wid }) => wid === cgroupw);
    }

    const ret = {
        cgroup: localCurrentGroup,
        goToGroup: (group: LeaderGroup) => {
            goTo('group');
            ret.updateCurrentGroup(group);
        },
        resetCurrentGroup: () => localCurrentGroup = null,
        updateCurrentGroup: (group: LeaderGroup) => {
            ret.resetCurrentGroup();
            dispatch(setCurrentGroupw(group.wid));
        },
    };
    return ret;
}