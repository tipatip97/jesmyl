import { ReactNode } from 'react';
import { useBottomPopup } from '../../../../../../../../complect/absolute-popup/bottom-popup/useBottomPopup';
import EvaIcon from '../../../../../../../../complect/eva-icon/EvaIcon';
import useExer from '../../../../../../../../complect/exer/useExer';
import { ChordVisibleVariant } from '../../../../../Cm.model';
import { cmExer } from '../../../../../Cm.store';
import TheOrder from '../../../../../col/com/order/TheOrder';
import { EditableCom } from '../../EditableCom';
import { useEditableCcom } from '../../useEditableCcom';
import { EditableOrder } from './EditableOrder';
import OrdersRedactorAdditions from './OrdersRedactorAdditions';
import OrdersRedactorOrderTools from './OrdersRedactorOrderTools';

interface PopupProps {
  ccom: EditableCom;
  ord: EditableOrder;
  ordi: number;
  blockHeader: ReactNode;
}

export default function OrdersRedactor() {
  const ccom = useEditableCcom();
  const [popupToolsNode, , openToolsPopup] = useBottomPopup<PopupProps>((_close, _prepare, props) => (
    <OrdersRedactorOrderTools {...props} />
  ));
  const [popupAddsNode, , openAddsPopup] = useBottomPopup<{
    ccom: EditableCom;
  }>((_close, _prepare, props) => <OrdersRedactorAdditions ccom={props.ccom} />);
  const { exec } = useExer(cmExer);

  if (!ccom) return null;

  return (
    <div className="orders-redactor">
      {popupToolsNode}
      {popupAddsNode}
      {ccom.orders?.map((ord, ordi, orda) => {
        const leadHeader = ord.top.header?.(
          {
            isEdit: true,
            isTexted: ord.top.isInherit,
            repeats: ord.repeatsTitle,
          },
          true,
        );
        const blockHeader = ord.top.isInherit ? `${leadHeader} ${ord.type}` : leadHeader;

        const editNode = !ord.top.isAnchorInherit && (
          <EvaIcon
            name="edit-outline"
            className="margin-gap-h pointer vertical-middle"
            onClick={() => openToolsPopup({ blockHeader, ccom, ord, ordi })}
          />
        );
        const isWithHead = ord.isWithHead();

        return (
          <div
            key={`order-${ordi}`}
            className={ord.top.isAnchorInherit ? 'inherit-block' : ''}
          >
            <div className="margin-big-gap-h">
              {isWithHead ? null : ord.top.isAnchorInherit ? (
                <EvaIcon
                  name={ord.isVisible ? 'eye-outline' : 'eye-off-outline'}
                  onClick={() => {
                    exec(
                      ord.setField('v', ord.antiIsVisible, {
                        b: blockHeader,
                      }),
                    );
                  }}
                />
              ) : (
                editNode
              )}
            </div>
            <TheOrder
              orderUnit={ord}
              orderUniti={ordi}
              com={ccom}
              showInvisibles
              chordVisibleVariant={ChordVisibleVariant.Maximal}
              asHeaderComponent={({ headerNode }) => {
                return (
                  <>
                    {headerNode}
                    {isWithHead ? editNode : null}
                  </>
                );
              }}
            />
            {ccom.isImpossibleToMigrateOrder(ord, ordi, orda) || (
              <EvaIcon
                name="swap-outline"
                className={`pointer ${ccom.isCantMigrateOrder(ord, ordi) ? 'disabled' : ''}`}
                style={{ transform: 'rotate(90deg)' }}
                onClick={() => exec(ccom.migrateOrder(ord))}
              />
            )}
          </div>
        );
      })}
      <div className="flex">
        <EvaIcon
          name="plus-circle-outline"
          className="pointer margin-gap-h"
          onClick={() => openAddsPopup({ ccom })}
        />
      </div>
    </div>
  );
}
