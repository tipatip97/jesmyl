import useAbsoluteBottomPopup from "../../../../../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import EvaIcon from "../../../../../../../../complect/eva-icon/EvaIcon";
import useExer from "../../../../../../../../complect/exer/useExer";
import { ChordVisibleVariant } from "../../../../../Cm.model";
import { cmExer } from "../../../../../Cm.store";
import TheOrder from "../../../../../col/com/order/TheOrder";
import { useEditableCcom } from "../../useEditableCcom";
import OrdersRedactorAdditions from "./OrdersRedactorAdditions";
import OrdersRedactorOrderTools from "./OrdersRedactorOrderTools";

export default function OrdersRedactor() {
  const ccom = useEditableCcom();
  const { openAbsoluteBottomPopup } = useAbsoluteBottomPopup();
  const { exec } = useExer(cmExer);

  if (!ccom) return null;

  return (
    <div className="orders-redactor">
      {ccom.orders?.map((ord, ordi, orda) => {
        const editNode = !ord.top.isAnchorInherit && (
          <EvaIcon
            name="edit-outline"
            className="margin-gap-h pointer vertical-middle"
            onClick={() => {
              openAbsoluteBottomPopup(
                <OrdersRedactorOrderTools ccom={ccom} ord={ord} ordi={ordi} />
              );
            }}
          />
        );
        const isWithHead = ord.isWithHead();

        return (
          <div
            key={`order-${ordi}`}
            className={ord.top.isAnchorInherit ? "inherit-block" : ""}
          >
            <div className="margin-big-gap-h">
              {isWithHead ? null : editNode}
            </div>
            <TheOrder
              orderUnit={ord}
              orderUniti={ordi}
              com={ccom}
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
            {ccom.isImpossibleToMigrateOrder(ord, ordi, orda) ? null : (
              <EvaIcon
                name="swap-outline"
                className={`pointer ${
                  ccom.isCantMigrateOrder(ord, ordi) ? "disabled" : ""
                }`}
                style={{ transform: "rotate(90deg)" }}
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
          onClick={() => {
            openAbsoluteBottomPopup(<OrdersRedactorAdditions ccom={ccom} />);
          }}
        />
      </div>
    </div>
  );
}
