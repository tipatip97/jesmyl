import { ReactNode } from 'react';
import { IExportableOrder, IExportableOrderFieldValues, OrderRepeats } from '../../../../../../models';
import { ChordVisibleVariant } from '../../../Cm.model';
import { StyleBlock } from '../block-styles/StyleBlock';
import { Com } from '../Com';
import { Order } from './Order';

export type INewExportableOrder = Omit<IExportableOrder, 'w' | 'originWid'>;

export type EditableOrderRegion<Ord extends Order> = {
  count: number;

  key: string;
  startKey: string;
  endKey: string;

  startLinei: number | null;
  startWordi: number | null;

  endLinei: number | null;
  endWordi: number | null;
  isEndWordiLast: boolean;

  startOrd: Ord | null;
  endOrd: Ord | null;
  others: number[] | null;
};

export interface IExportableOrderTop extends IExportableOrder {
  source?: IExportableOrderTop;
  init?: IExportableOrderTop;
  targetOrd?: Order | nil;
  leadOrd?: Order;
  watchOrd?: Order | nil;
  ord?: Order;
  sourceOrd?: Order | nil;
  prev?: Order | null;
  next?: Order | null;
  prevOrd?: Order | null;
  nextOrd?: Order | null;
  isAnchor?: boolean;
  isTarget?: boolean;
  isInherit?: boolean;
  isAnchorInherit?: boolean;
  isAnchorInheritPlus?: boolean;
  text?: string;
  chords?: string;
  chordLabels?: string[][];
  positions?: number[][];
  repeats?: OrderRepeats | null; // Повторения
  isNextInherit?: boolean;
  isNextAnchorOrd?: boolean;
  isPrevTargetOrd?: boolean;
  anchorInheritIndex?: number;
  sourceIndex?: number;
  viewIndex?: number;
  header?: (bag?: OrderTopHeaderBag, isRequired?: boolean) => ReactNode;
  style?: StyleBlock;
}

export interface OrderTopHeaderBag {
  isEdit?: boolean;
  isTexted?: boolean;
  repeats?: string;
}
export interface OrderExecArgs<Value> {
  wid?: number | null;
  value?: Value;
  fieldn?: keyof IExportableOrderFieldValues;
  linei?: number;
  line?: number[];
  lineTitle?: string;
}

export interface OrderField {
  name: keyof IExportableOrder;
  title: string;
  isExt?: boolean;
  extIf?: (poss?: [] | null) => boolean;
  type: string | string[];
}

export interface ITheOrderProps {
  asLineComponent?: (props: IComLineProps) => ReactNode;
  asHeaderComponent?: (props: IComOrdHeaderProps) => ReactNode;
  isMiniAnchor?: boolean;
  orderUnit: Order;
  orderUniti: number;
  com: Com;
  chordVisibleVariant: ChordVisibleVariant;
  showInvisibles?: boolean;
  specialClassId?: string;
}

export interface IComOrdHeaderProps extends IComOrdProps {
  headerNode: ReactNode;
}

export interface IComOrdProps {
  chordedOrd: boolean;
  orderUnit: Order;
  orderUniti: number;
  isJoinLetters: boolean;
  com: Com;
}

export interface IComLineProps extends IComOrdProps {
  textLine: string;
  textLinei: number;
  textLines: number;
  wordCount: number;
  words: string[];
  prevLinesCount?: number;
  onClick?: React.MouseEventHandler<HTMLSpanElement>;
  setWordClass?: (props: IComLineProps, wordi: number) => string;
}

export interface IComLinePropsBag {
  ord: Order;
  linei: number;
  wordi: number;
  word: string;
  words: number;
  lines: number;
}
