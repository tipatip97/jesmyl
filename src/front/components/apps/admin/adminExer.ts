import { atom } from '../../../complect/atoms';
import { Exer } from '../../../complect/exer/Exer';
import { ExecRule } from '../../../complect/exer/Exer.model';

const adminExerAtom = atom<ExecRule[]>([], 'admin', 'rules');

export const adminExer = new Exer('admin', adminExerAtom);
