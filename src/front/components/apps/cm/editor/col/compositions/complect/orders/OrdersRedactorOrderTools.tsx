import { ReactNode } from 'react';
import { BottomPopupContenter } from '../../../../../../../../complect/absolute-popup/bottom-popup/model';
import { EditableCom } from '../../EditableCom';
import { EditableOrder } from './EditableOrder';
import { OrdersRedactorOrderToolsAnchor } from './tools/Anchor';
import { OrdersRedactorOrderToolsAnchorDelete } from './tools/AnchorDelete';
import { OrdersRedactorOrderToolsBlockType } from './tools/BlockType';
import { OrdersRedactorOrderToolsChangeText } from './tools/ChangeText';
import { OrdersRedactorOrderToolsChordBind } from './tools/ChordBind';
import { OrdersRedactorOrderToolsEmptyHeader } from './tools/EmptyHeader';
import { OrdersRedactorOrderToolsModulation } from './tools/Modulation';
import { OrdersRedactorOrderToolsVisibility } from './tools/Visibility';
import { OrdersRedactorOrderToolsHiddenOnMin } from './tools/HiddenOnMin';

export interface OrdersRedactorOrderToolsProps {
  ccom: EditableCom;
  ord: EditableOrder;
  ordi: number;
  blockHeader: ReactNode;
}

export const OrdersRedactorOrderTools: BottomPopupContenter<OrdersRedactorOrderToolsProps | und> = (
  isOpen,
  close,
  _prepare,
  props,
) => {
  if (props === undefined || !isOpen) return null;

  return (
    <>
      <OrdersRedactorOrderToolsBlockType
        props={props}
        closePopup={close}
      />
      <OrdersRedactorOrderToolsChordBind
        props={props}
        closePopup={close}
      />
      <OrdersRedactorOrderToolsVisibility
        props={props}
        closePopup={close}
      />
      {props.ord.isAnchor || props.ord.top.isInherit || (
        <OrdersRedactorOrderToolsAnchor
          props={props}
          closePopup={close}
        />
      )}
      {props.ord.top.style?.isModulation && (
        <OrdersRedactorOrderToolsModulation
          props={props}
          closePopup={close}
        />
      )}
      {props.ord.isAnchor ? (
        <OrdersRedactorOrderToolsHiddenOnMin
          props={props}
          closePopup={close}
        />
      ) : (
        <OrdersRedactorOrderToolsChangeText
          props={props}
          closePopup={close}
        />
      )}
      <OrdersRedactorOrderToolsEmptyHeader
        props={props}
        closePopup={close}
      />
      <OrdersRedactorOrderToolsAnchorDelete
        props={props}
        closePopup={close}
      />
    </>
  );
};
