import useNavConfigurer, { FooterItem, SetPhasePayload, UseNavAction } from "../../../complect/nav-configurer/useNavConfigurer.model";
import { TunerPhase, TunerSpecialPhase } from "./Tuner.model";
import { setTunerPhase } from "./Tuner.store";

const getTunerNewPhase = (): SetPhasePayload<TunerPhase, TunerSpecialPhase> => {
    return 'tuner';
};

const tunerFooterItems: FooterItem<TunerPhase>[] = [
    {
        icon: "music",
        title: "Тюнер",
        phases: ['tuner'],
    },
];

const firstPhase: TunerPhase = 'tuner';
const actions: UseNavAction[] = [];

export default function useTunerNav() {
    return useTunerNavConfigurer();
}

const useTunerNavConfigurer = () => useNavConfigurer('tuner', firstPhase, actions, setTunerPhase, getTunerNewPhase, tunerFooterItems);
export { useTunerNavConfigurer };

