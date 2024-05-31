import { AreaHTMLAttributes, ReactNode } from 'react';
import { TheIconType } from '../../the-icon/model';

export type AbsoluteBottomPopupItem = {
  className?: string;
  Icon: TheIconType;
  titleNode?: ReactNode;
  title?: string;
  rightNode?: ReactNode;
  isError?: boolean;
  iconWrapperClassName?: string;
  anchorNode?: ReactNode;
} & AreaHTMLAttributes<HTMLDivElement>;

export type BottomPopupSkeletIcon = AbsoluteBottomPopupItem | nil | false | BottomPopupSkeletIcon[];

export type BottomPopupContenterPreparer = (props: BottomPopupContentProps) => JSX.Element;
export type BottomPopupContenter<Props = {}> = (
  isOpen: boolean,
  close: () => void,
  prepare: BottomPopupContenterPreparer,
  props: Props,
) =>
  | [
      ReactNode /* permanent rendered node */,
      ReactNode /* popup content node */,
      ReactNode? /* permanent after open popup node */,
    ]
  | false
  | JSX.Element
  | nil;

export interface BottomPopupContentProps {
  items: BottomPopupSkeletIcon[];
  footer?: ReactNode;
}
