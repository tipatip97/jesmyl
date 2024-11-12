import { mylib } from 'front/utils';
import { IExportableCols } from 'shared/api';
import { useAtomValue } from '../../../../complect/atoms';
import { cmMolecule } from '../molecules';
import { Cols } from './Cols';

let localCols: Cols | und;
let localICols: IExportableCols | und;

const colsAtom = cmMolecule.select(s => s.cols);

export function useCols(): Cols | und {
  const cols = useAtomValue(colsAtom);

  if (cols == null) return;
  if (localCols && localICols === cols) return localCols;

  localCols = cols && new Cols(mylib.clone(cols), localCols?.coms);
  localICols = cols;
  return localCols;
}
