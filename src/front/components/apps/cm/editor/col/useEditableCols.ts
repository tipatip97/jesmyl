import { useAtomValue } from '../../../../../complect/atoms';
import mylib from '../../../../../complect/my-lib/MyLib';
import { IExportableCols } from '../../cols/Cols.model';
import { cmMolecule } from '../../molecules';
import { EditableCols } from './EditableCols';

let localCols: EditableCols | und;
let localICols: IExportableCols | und;

export function useEditableCols(): EditableCols | und {
  const cols = useAtomValue(cmMolecule.take('cols'));

  if (!cols) return;
  if (localCols && localICols === cols) return localCols;

  localCols = cols && new EditableCols(mylib.clone(cols));
  localICols = cols;
  return localCols;
}
