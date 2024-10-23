import { Exer } from '../../../complect/exer/Exer';
import { cmMolecule } from './molecules';

export const cmExer = new Exer(
  'cm',
  cmMolecule.select(s => s.rules),
);
