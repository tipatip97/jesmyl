import { AppName } from "../app/App.model";
import useNavConfigurer from "../complect/nav-configurer/useNavConfigurer";
import { useCmNavConfigurer } from "../components/apps/cm/base/useCmNav";
import { useTunerNavConfigurer } from "../components/apps/tuner/useTunerNav";
import { useIndexNavConfigurer } from "../components/index/complect/useIndexNav";

const navConfigurers: Record<AppName, () => ReturnType<typeof useNavConfigurer>> = {
    cm: useCmNavConfigurer as never,
    index: useIndexNavConfigurer as never,
    tuner: useTunerNavConfigurer as never,
};
export default navConfigurers;