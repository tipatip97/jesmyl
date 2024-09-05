import { Exer } from '../../../complect/exer/Exer';
import { wedMolecule } from './molecules';

export const wedExer = new Exer(
  'wed',
  wedMolecule.select(s => s.rules),
);
