import mylib from "../../../../../../complect/my-lib/MyLib";
import TheOrder from "../order/TheOrder";
import { ITheOrderProps } from "../order/Order.model";
import { IComOrdersProps } from "./ComOrders.model";

export default function ComOrders(props: IComOrdersProps) {
  const { style, onClick, ref, asOrdComponent, setClassName, ccom, fontSize } =
    props || {};

  let currTransPosition = ccom.transPosition;

  return (
    <div
      className={["com-ord-list", mylib.func(setClassName).call()].join(" ")}
      {...{ onClick, ref }}
      style={mylib.overlap({}, style, {
        fontSize: `${fontSize}px`,
      })}
    >
      {ccom.orders?.map((orderUnit, orderUniti) => {
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
            return (
              <TheOrder
                key={`com-${ccom.wid}-order.${orderUniti}`}
                {...ordProps}
              />
            );
          })
          .call(ordProps);
      })}
    </div>
  );
}
