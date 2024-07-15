import { Molecule, useAtomValue } from '../../../../../complect/atoms';
import { AliasWordsPack } from './Alias.model';

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
