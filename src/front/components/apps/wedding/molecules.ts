import { WedStorage } from '../../../../shared/api/complect/apps/wed/complect/model';
import { Molecule } from '../../../complect/atoms';

export const wedMolecule = new Molecule<WedStorage>(
  {
    guests: [],
    rules: [],
  },
  'wed',
);
