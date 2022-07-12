import { AppName } from "../app/App.model";
import useNavConfigurer from "../complect/nav-configurer/useNavConfigurer";
import { useAdminNavConfigurer } from "../components/apps/admin/useAdminNav";
import { useCmNavConfigurer } from "../components/apps/cm/base/useCmNav";
import { usePrinterNavConfigurer } from "../components/apps/printer/usePrinterNav";
import { useTunerNavConfigurer } from "../components/apps/tuner/useTunerNav";
import { useIndexNavConfigurer } from "../components/index/complect/useIndexNav";

const navConfigurers: Record<AppName, () => ReturnType<typeof useNavConfigurer>> = {
    cm: useCmNavConfigurer as never,
    index: useIndexNavConfigurer as never,
    tuner: useTunerNavConfigurer as never,
    admin: useAdminNavConfigurer as never,
    printer: usePrinterNavConfigurer as never,
};
export default navConfigurers;