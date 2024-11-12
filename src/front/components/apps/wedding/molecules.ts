import { Molecule } from '../../../complect/atoms';
import { WedStorage } from '../../../../shared/api/complect/apps/wed/complect/model';

export const wedMolecule = new Molecule<WedStorage>(
  {
    guests: [],
    rules: [],
  },
  'wed',
);
