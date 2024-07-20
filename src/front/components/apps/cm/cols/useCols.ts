import { useAtomValue } from '../../../../complect/atoms';
import mylib from '../../../../complect/my-lib/MyLib';
import { IExportableCols } from '../../../../models';
import { cmMolecule } from '../molecules';
import { Cols } from './Cols';

let localCols: Cols | und;
let localICols: IExportableCols | und;

export function useCols(): Cols | und {
  const cols = useAtomValue(cmMolecule.take('cols'));

  if (!cols) return;
  if (localCols && localICols === cols) return localCols;

  localCols = cols && new Cols(mylib.clone(cols), localCols?.coms);
  localICols = cols;
  return localCols;
}
