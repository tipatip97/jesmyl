import { AliasWordsPack } from 'shared/api';
import { Molecule, useAtomValue } from '../../../../../complect/atoms';

interface State {
  aliasWordPacks: AliasWordsPack[];
}

export const gamerAliasMolecule = new Molecule<State>(
  {
    aliasWordPacks: [],
  },
  'gamer',
);

export const useAliasPacks = () => useAtomValue(gamerAliasMolecule.take('aliasWordPacks'));
