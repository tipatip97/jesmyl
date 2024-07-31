import { Exer } from '../../complect/exer/Exer';
import { indexMolecule } from './molecules';

export const indexExer = new Exer(
  'index',
  indexMolecule.select(s => s.rules),
);
