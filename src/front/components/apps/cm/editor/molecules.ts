import { Molecule } from '../../../../complect/atoms';
import { CmEditorStoraged } from './CmEditor.model';

export const cmEditorMolecule = new Molecule<CmEditorStoraged>(
  {
    mp3Rules: [],
    rules: [],
  },
  'cm',
);
