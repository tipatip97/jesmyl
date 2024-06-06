import { useSelector } from 'react-redux';
import mylib from '../../../../complect/my-lib/MyLib';
import { RootState } from '../../../../shared/store';
import { Cols } from './Cols';
import { IExportableCols } from './Cols.model';

const colsSelector = (state: RootState) => state.cm.cols;
let localCols: Cols | und;
let localICols: IExportableCols | und;

export function useCols(): Cols | und {
  const cols = useSelector(colsSelector);

  if (!cols) return;
  if (localCols && localICols === cols) return localCols;

  localCols = cols && new Cols(mylib.clone(cols), localCols?.coms);
  localICols = cols;
  return localCols;
}
