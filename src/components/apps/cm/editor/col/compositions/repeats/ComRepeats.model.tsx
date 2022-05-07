import { EditableOrder } from "../orders/EditableOrder";

export interface IEditableComLineProps {
  textLine: string;
  textLinei: number;
  textLines: number;
  wordCount: number;
  words: string[];
  onClick?: React.MouseEventHandler<HTMLSpanElement>;
  wordi: number;
  orderUnit: EditableOrder;
}
