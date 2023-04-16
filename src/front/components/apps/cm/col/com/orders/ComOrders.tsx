import { useState } from "react";
import EvaButton from "../../../../../../complect/eva-icon/EvaButton";
import TheOrder from "../order/TheOrder";
import { IComOrdersProps } from "./ComOrders.model";

export default function ComOrders(props: IComOrdersProps) {
  const { com, fontSize } = props;
  const [exMods, updateExMods] = useState<number[]>(com.excludedModulations);

  return (
    <div
      className="com-ord-list"
      style={{
        fontSize: `${fontSize}px`,
      }}
    >
      {com.orders?.map((orderUnit, orderUniti) => {
        const isExcludedModulation = exMods.includes(orderUnit.wid);

        return <TheOrder
          key={`order.${orderUniti}`}
          {...props}
          orderUnit={orderUnit}
          orderUniti={orderUniti}
          asHeaderComponent={({ headerNode }) => {
            return orderUnit.top.style?.isModulation
              ? <span
                className={'pointer flex '
                  + (isExcludedModulation ? 'color--ko' : 'color--7')}
                onClick={(event) => {
                  event.stopPropagation();
                  updateExMods(com.toggleModulationInclusion(orderUnit));
                }}>
                <EvaButton name={isExcludedModulation ? 'eye-outline' : 'eye-off-outline'} />
                {headerNode}
              </span>
              : headerNode;
          }}
        />;
      })}
    </div>
  );
}
