import { atom, useAtom } from '../../../../complect/atoms';
import { Exec } from './CmEditor.model';

const execsAtom = atom<Exec[]>([]);
export const useCmEditorExecs = () => useAtom(execsAtom);
