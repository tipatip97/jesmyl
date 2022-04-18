import useNavConfigurer, { UseNavAction } from "../../../complect/nav-configurer/useNavConfigurer.model";
import { BoardPhase, BoardSpecialPhase } from "../Board.model";
import { setBoardPhase } from "../Board.store";

const getIndexNewPhase = (phase: BoardPhase, _specialPhase: BoardSpecialPhase, _prevPhase?: BoardPhase) => phase;

const firstPhase: BoardPhase = 'apps';
const actions: UseNavAction[] = [];

export default function useIndexNav() {
    return useIndexmNavConfigurer();
}

const useIndexmNavConfigurer = () => useNavConfigurer('index', firstPhase, actions, setBoardPhase, getIndexNewPhase, []);
export { useIndexmNavConfigurer };
