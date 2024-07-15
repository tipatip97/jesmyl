import { atom } from '../../../complect/atoms';
import { Exer } from '../../../complect/exer/Exer';
import { ExecRule } from '../../../complect/exer/Exer.model';

const gamerExerAtom = atom<ExecRule[]>([], 'gamer', 'rules');

export const gamerExer = new Exer('gamer', gamerExerAtom);
