import { Molecule } from '../../../complect/atoms';
import { WedStorage } from '../../../../back/apps/wed/model';

export const wedMolecule = new Molecule<WedStorage>(
  {
    guests: [],
    rules: [],
  },
  'wed',
);
