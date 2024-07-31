import { useAtomValue } from '../../../../../complect/atoms';
import mylib from '../../../../../complect/my-lib/MyLib';
import { IExportableCols } from '../../../../../models';
import { cmMolecule } from '../../molecules';
import { EditableCols } from './EditableCols';

let localCols: EditableCols | und;
let localICols: IExportableCols | und;

const colsAtom = cmMolecule.select(s => s.cols);

export function useEditableCols(): EditableCols | und {
  const cols = useAtomValue(colsAtom);

  if (cols == null) return;
  if (localCols && localICols === cols) return localCols;

  localCols = cols && new EditableCols(mylib.clone(cols));
  localICols = cols;
  return localCols;
}
