import { AppName } from "../../../app/App.model";
import useNavConfigurer, { SetPhasePayload, UseNavAction } from "../../../complect/nav-configurer/useNavConfigurer.model";
import { IndexPhase, IndexSpecialPhase } from "../Index.model";
import { setIndexPhase } from "../Index.store";

const getIndexNewPhase = (phase: IndexPhase, _specialPhase: IndexSpecialPhase, _prevPhase?: IndexPhase): SetPhasePayload<IndexPhase, AppName> => {
    return phase === 'settings' ? 'main' : 'main';
};

const firstPhase: IndexPhase = 'main';
const actions: UseNavAction[] = [];

export default function useIndexNav() {
    return useIndexNavConfigurer();
}

const useIndexNavConfigurer = () => useNavConfigurer('index', firstPhase, actions, setIndexPhase, getIndexNewPhase, []);
export { useIndexNavConfigurer };
