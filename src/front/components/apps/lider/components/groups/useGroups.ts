import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../shared/store";
import { setCurrentGroupw } from "../../Lider.store";
import useLiderNav from "../../useLiderNav";
import useLeaderContexts from "../contexts/useContexts";
import LeaderGroup from "./Group";

let localCurrentGroup: LeaderGroup | nil;

export default function useLeaderGroups() {
    const dispatch = useDispatch();
    const cgroupw = useSelector((state: RootState) => state.lider.cgroupw);
    const { ccontext } = useLeaderContexts();
    const { goTo } = useLiderNav();

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