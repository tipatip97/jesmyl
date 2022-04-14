import { ComplectStorage } from "../complect/Complect.model";
import { JStorage } from "../complect/JStorage";
import { CmStorage } from "../components/apps/cm/Cm.model";
import { IndexStorage } from "../components/board/Board.model";
import { AppName } from "./Storage.model";


export const indexStorage = new JStorage<IndexStorage>('index');
export const complectStorage = new JStorage<ComplectStorage>('complect');
export const cmStorage = new JStorage<CmStorage>('cm');

export const appStorage: Record<AppName, JStorage> = {
    index: indexStorage,
    cm: cmStorage
};

