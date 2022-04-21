import useNavConfigurer, { SetPhasePayload, UseNavAction } from "../../../../complect/nav-configurer/useNavConfigurer.model";
import { cmFooterItems } from "../Cm.complect";
import { CmPhase, CmSpecialPhase } from "../Cm.model";
import { setCmPhase } from "../Cm.store";

const getNewPhase = (
    phase: CmPhase,
    specialPhase: CmSpecialPhase,
    prevPhase: CmPhase | nil
): SetPhasePayload<CmPhase, CmSpecialPhase> => {
    const newPhase = phase === "com"
        ? specialPhase === "marked"
            ? "marks"
            : specialPhase === "thematic"
                ? "cat"
                : specialPhase === "meeting"
                    ? "meeting"
                    : "all"
        : phase === "translation"
            ? prevPhase
            : phase === "cat"
                ? "lists"
                : phase === "lists"
                    ? "all"
                    : phase === "meeting"
                        ? "meetings"
                        : phase === "meetings" || phase === "marks"
                            ? "lists"
                            : prevPhase ?? 'all';

    return newPhase === 'all' ? [newPhase, null] : newPhase;
};

const firstPhase: CmPhase = 'all';
const actions: UseNavAction[] = [];

export default function useCmNav() {
    return useCmNavConfigurer();
}

const useCmNavConfigurer = () => useNavConfigurer('cm', firstPhase, actions, setCmPhase, getNewPhase, cmFooterItems);
export { useCmNavConfigurer };
