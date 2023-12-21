import { BaseNamedExportables } from '../../base/BaseNamed';
import { Com } from '../com/Com';
import { Cat } from './Cat';

export interface ICat {
  coms: Com[];
  topComs: Com[];
}

export interface IExportableCat extends BaseNamedExportables {
  s?: number[];
  t?: string[] | null;
  k: string;
}

export interface ComWrap<C = Com> {
  com: C;
  deep?: number;
  field?: string;
  rate?: number;
}

export type CatKind = string;

export interface CatTracker {
  title: string;
  id: CatKind;
  select: (com: Com, cat: Cat) => boolean;
}
