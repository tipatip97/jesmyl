import { ReactNode } from "react";
import modalService from "../../../complect/modal/Modal.service";
import { cmStorage, indexStorage } from "../../../store/jstorages";
import { BoardApplication } from "../../board/Board.model";
import { TheCats } from "./cats/Cats";
import { CmAction, CmAppVariables, CmPhase } from "./Cm.model";
import { Cat } from "./col/cat/Cat";
import { Com } from "./col/com/Com";
import { Nav } from "./complect/Nav";

const localAuth = indexStorage.getOr('auth', { level: 0 });
const app: BoardApplication<CmAppVariables> = indexStorage.get('apps')?.find((app) => app.name === 'cm') as BoardApplication<CmAppVariables>;
const actions = cmStorage.get('actions')?.concat(Object.entries(app?.variables || {}).map(([action, level]) => ({ action, level }))) ?? [];

export const isAccessed = (action: string): true | null => {
    const level = localAuth.level;
    const right = actions.find(right => right.action === action) as CmAction;
    if (!right) modalService.alert(`Зарегистрировано правило на неизвестное действие ${action}`);
    return right ? right.level <= level ? true : null : true;
};

export const isCanRedact = isAccessed('canRedact');
export const isCanAddCol = isAccessed('addCom');

export const Comps: Record<CmPhase, ReactNode> = {
    cats: () => <TheCats />,
    cat: (ccat: Cat) => <TheCat ccat={ccat}/>,
    com: <Com />,
    editor: <Editor />,
};

