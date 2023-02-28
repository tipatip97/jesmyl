import { AppName } from "../app/App.model";
import useNavConfigurer from "../complect/nav-configurer/useNavConfigurer";
import { useAdminNavConfigurer } from "../components/apps/admin/useAdminNav";
import { useCmNavConfigurer } from "../components/apps/cm/base/useCmNav";
import { useLeaderNavConfigurer } from "../components/apps/leader/useLeaderNav";
import { useGamerNavConfigurer } from "../components/apps/gamer/useGamerNav";
import { useTunerNavConfigurer } from "../components/apps/tuner/useTunerNav";
import { useIndexNavConfigurer } from "../components/index/complect/useIndexNav";

const navConfigurers: Record<AppName, () => ReturnType<typeof useNavConfigurer>> = {
    cm: useCmNavConfigurer as never,
    index: useIndexNavConfigurer as never,
    tuner: useTunerNavConfigurer as never,
    admin: useAdminNavConfigurer as never,
    gamer: useGamerNavConfigurer as never,
    leader: useLeaderNavConfigurer as never,
};
export default navConfigurers;