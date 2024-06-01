import { useBottomPopup } from '../../../../../../../../complect/absolute-popup/bottom-popup/useBottomPopup';
import { useExerExec } from '../../../../../../../../complect/exer/hooks/useExer';
import { IconArrowDataTransferVerticalStrokeRounded } from '../../../../../../../../complect/the-icon/icons/arrow-data-transfer-vertical';
import { IconEdit02StrokeRounded } from '../../../../../../../../complect/the-icon/icons/edit-02';
import { IconPlusSignCircleStrokeRounded } from '../../../../../../../../complect/the-icon/icons/plus-sign-circle';
import { IconViewStrokeRounded } from '../../../../../../../../complect/the-icon/icons/view';
import { IconViewOffSlashStrokeRounded } from '../../../../../../../../complect/the-icon/icons/view-off-slash';
import { ChordVisibleVariant } from '../../../../../Cm.model';
import TheOrder from '../../../../../col/com/order/TheOrder';
import { EditableCom } from '../../EditableCom';
import { useEditableCcom } from '../../useEditableCcom';
import { OrdersRedactorOrderTools } from './OrdersRedactorOrderTools';
import { OrdersRedactorAdditions } from './additions/Additions';

export default function OrdersRedactor() {
  const ccom = useEditableCcom();
  const [popupToolsNode, , openToolsPopup] = useBottomPopup(OrdersRedactorOrderTools);
  const [popupAddsNode, , openAddsPopup] = useBottomPopup<EditableCom | und>(OrdersRedactorAdditions, ccom);
  const exec = useExerExec();

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
          <IconEdit02StrokeRounded
            className="margin-gap-h pointer vertical-middle"
            onClick={() => openToolsPopup({ blockHeader, ccom, ord, ordi })}
          />
        );
        const isWithHead = ord.isWithHead();
        const Icon = ord.isVisible ? IconViewStrokeRounded : IconViewOffSlashStrokeRounded;

        return (
          <div
            key={ordi}
            className={ord.top.isAnchorInherit ? 'inherit-block' : ''}
          >
            <div className="margin-big-gap-h">
              {isWithHead ? null : ord.top.isAnchorInherit ? (
                <Icon
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
              <IconArrowDataTransferVerticalStrokeRounded
                className={`pointer ${ccom.isCantMigrateOrder(ord, ordi) ? 'disabled' : ''}`}
                onClick={() => exec(ccom.migrateOrder(ord))}
              />
            )}
          </div>
        );
      })}
      <div className="flex">
        <IconPlusSignCircleStrokeRounded
          className="pointer margin-gap-h"
          onClick={() => openAddsPopup(ccom)}
        />
      </div>
    </div>
  );
}
