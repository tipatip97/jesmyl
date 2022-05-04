import mylib from "../../../../../../complect/my-lib/MyLib";
import { ITheOrderProps } from "../order/Order.model";
import TheOrder from "../order/TheOrder";
import { IComOrdersProps } from "./ComOrders.model";

export default function ComOrders(props: IComOrdersProps) {
  const { asOrdComponent, com, fontSize, chordVisibleVariant } = props || {};

  let currTransPosition = com.transPosition;

  return (
    <div
      className="com-ord-list"
      style={{
        fontSize: `${fontSize}px`,
      }}
    >
      {com.orders?.map((orderUnit, orderUniti) => {
        let trPos = currTransPosition;
        if (orderUnit.top.style?.isModulation) {
          trPos = 0;
          currTransPosition =
            (com.transPosition || 0) + (orderUnit.fieldValues?.md || 0);
        }
        const ordProps: ITheOrderProps = mylib.overlap({}, props, {
          orderUnit,
          orderUniti,
          chordVisibleVariant,
          currTransPosition: trPos,
        });
        return mylib
          .func(asOrdComponent, () => {
            return (
              <TheOrder
                key={`com-${com.wid}-order.${orderUniti}`}
                {...ordProps}
              />
            );
          })
          .call(ordProps);
      })}
    </div>
  );
}
