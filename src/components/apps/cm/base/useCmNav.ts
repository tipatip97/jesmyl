import useNavConfigurer, { UseNavAction } from "../../../../complect/nav-configurer/useNavConfigurer.model";
import { cmFooterItems, getNewPhase } from "../Cm.complect";
import { CmPhase } from "../Cm.model";
import { setCmPhase } from "../Cm.store";

const firstPhase: CmPhase = 'all';
const actions: UseNavAction[] = [];

export default function useCmNav() {
    return useCmNavConfigurer();
}

const useCmNavConfigurer = () => useNavConfigurer('cm', firstPhase, actions, setCmPhase, getNewPhase, cmFooterItems);
export { useCmNavConfigurer };
