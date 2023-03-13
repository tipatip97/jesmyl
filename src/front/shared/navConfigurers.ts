import { AppName } from "../app/App.model";
import useNavConfigurer from "../complect/nav-configurer/useNavConfigurer";
import useAdminNav from "../components/apps/admin/useAdminNav";
import useCmNav from "../components/apps/cm/base/useCmNav";
import useGamerNav from "../components/apps/gamer/useGamerNav";
import useLeaderNav from "../components/apps/leader/useLeaderNav";
import useTunerNav from "../components/apps/tuner/useTunerNav";
import useIndexNav from "../components/index/complect/useIndexNav";

const navConfigurers: Record<AppName, () => ReturnType<typeof useNavConfigurer>> = {
    cm: useCmNav as never,
    index: useIndexNav as never,
    tuner: useTunerNav as never,
    admin: useAdminNav as never,
    gamer: useGamerNav as never,
    leader: useLeaderNav as never,
};
export default navConfigurers;