import { AppName } from "../app/App.model";
import useNavConfigurer from '../complect/nav-configurer/useNavConfigurer.model';
import { useCmNavConfigurer } from "../components/apps/cm/base/useCmNav";
import { useIndexmNavConfigurer } from "../components/board/complect/useIndexNav";

const navConfigurers: Record<AppName, () => ReturnType<typeof useNavConfigurer>> = {
    cm: useCmNavConfigurer,
    index: useIndexmNavConfigurer,
};
export default navConfigurers;