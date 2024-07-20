import { IExportableCat, IExportableCom } from '../../../../models';
import { Cat } from '../col/cat/Cat';
import { Com } from '../col/com/Com';
import { EditableCat } from '../editor/col/categories/EditableCat';
import { EditableCom } from '../editor/col/compositions/EditableCom';

export interface ICols {
  coms: Com[];
  cats: Cat[];
}

export interface ICol {
  com: Com;
  cat: Cat;
}

export interface IExportableCol {
  com: IExportableCom;
  cat: IExportableCat;
}

export interface IEditableCol {
  com: EditableCom;
  cat: EditableCat;
}
