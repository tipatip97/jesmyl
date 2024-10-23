import { ReactNode } from 'react';
import { EditableCom } from '../../com/EditableCom';
import { EditableOrder } from './EditableOrder';
import { OrdersRedactorOrderToolsAnchor } from './tools/Anchor';
import { OrdersRedactorOrderToolsAnchorDelete } from './tools/AnchorDelete';
import { OrdersRedactorOrderToolsBlockType } from './tools/BlockType';
import { OrdersRedactorOrderToolsChangeText } from './tools/ChangeText';
import { OrdersRedactorOrderToolsChordBind } from './tools/ChordBind';
import { OrdersRedactorOrderToolsEmptyHeader } from './tools/EmptyHeader';
import { OrdersRedactorOrderToolsHiddenOnMin } from './tools/HiddenOnMin';
import { OrdersRedactorOrderToolsModulation } from './tools/Modulation';
import { OrdersRedactorOrderToolsVisibility } from './tools/Visibility';

export interface OrdersRedactorOrderToolsProps {
  ccom: EditableCom;
  ord: EditableOrder;
  ordi: number;
  blockHeader: ReactNode;
  onClose: (isOpen: false) => void;
}

export const OrdersRedactorOrderTools = (props: OrdersRedactorOrderToolsProps) => {
  return (
    <>
      <OrdersRedactorOrderToolsBlockType {...props} />
      <OrdersRedactorOrderToolsChordBind {...props} />
      <OrdersRedactorOrderToolsVisibility {...props} />
      {props.ord.isAnchor || props.ord.me.isInherit || <OrdersRedactorOrderToolsAnchor {...props} />}
      {props.ord.me.style?.isModulation && <OrdersRedactorOrderToolsModulation {...props} />}
      {props.ord.isAnchor ? (
        <OrdersRedactorOrderToolsHiddenOnMin {...props} />
      ) : (
        <OrdersRedactorOrderToolsChangeText {...props} />
      )}
      <OrdersRedactorOrderToolsEmptyHeader {...props} />
      <OrdersRedactorOrderToolsAnchorDelete {...props} />
    </>
  );
};
