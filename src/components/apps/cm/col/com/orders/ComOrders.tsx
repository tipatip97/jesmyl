import mylib from "../../../../../../complect/my-lib/MyLib";
import { TheComOrder } from "../order/ComOrder";
import { ITheOrderProps } from "../order/Order.model";
import { IComOrdersProps } from "./ComOrders.model";

export function TheComOrders(props: IComOrdersProps) {
  const { style, onClick, ref, asOrdComponent, setClassName, ccom, fontSize } =
    props || {};

  let currTransPosition = ccom.transPosition;

  return (
    <div
      className={["com-ord-list", mylib.func(setClassName).call()].join(" ")}
      {...{ onClick, ref }}
      style={mylib.overlap({}, style, {
        fontSize: `${fontSize || 100}%`,
      })}
    >
      {ccom.orders.map((orderUnit, orderUniti) => {
        let trPos = currTransPosition;
        if (orderUnit.top.style?.isModulation) {
          trPos = 0;
          currTransPosition =
            ccom.transPosition || 0 + (orderUnit.fieldValues.md || 0);
        }
        const ordProps: ITheOrderProps = mylib.overlap({}, props, {
          orderUnit,
          orderUniti,
          currTransPosition: trPos,
        });
        return mylib
          .func(asOrdComponent, () => {
            return <TheComOrder key={`com-${ccom.wid}-order.${orderUnit.wid}`} {...ordProps} />;
          })
          .call(ordProps);
      })}
    </div>
  );
}
