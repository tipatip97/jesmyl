import { Molecule, useAtomValue } from '../../../../../complect/atoms';

interface Model {
  locations?: string[];
}

export const gamerSpyMolecule = new Molecule<Model>(
  {
    locations: [],
  },
  'gamer',
);

export const useSpyLocations = () => useAtomValue(gamerSpyMolecule.take('locations'));
