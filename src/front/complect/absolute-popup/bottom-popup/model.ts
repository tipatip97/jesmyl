import { AreaHTMLAttributes, ReactNode } from 'react';
import { EvaIconName } from '../../eva-icon/EvaIcon';

export type AbsoluteBottomPopupItem = {
  className?: string;
  icon: EvaIconName;
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
  close: () => void,
  prepare: BottomPopupContenterPreparer,
  props: Props,
) =>
  | [
      ReactNode /* permanent rendered node */,
      ReactNode /* popup content node */,
      ReactNode? /* permanent after open popup node */,
    ]
  | JSX.Element
  | nil;

export interface BottomPopupContentProps {
  items: BottomPopupSkeletIcon[];
  footer?: ReactNode;
}
