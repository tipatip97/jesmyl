import { BaseNamedExportables } from '../../base/BaseNamed';
import { Com } from '../com/Com';
import { ComWid } from '../com/Com.model';
import { Cat } from './Cat';

export type CatWid = number;

export interface ICat {
  coms: Com[];
  topComs: Com[];
}

export interface IExportableCat extends BaseNamedExportables {
  s?: ComWid[];
  d?: Record<ComWid, number>;
  t?: string[] | null;
  k: string;
  w: CatWid;
  n: string;
}

export interface ComWrap<C = Com> {
  item: C;
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
