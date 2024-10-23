export * from './AnAtom';
export * from './Atom';
export * from './Molecule';

export interface MoleculeOptions<T> {
  serverStored?: (keyof T)[];
}
