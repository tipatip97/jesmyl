import { useState } from 'react';
import EvaButton from '../../../../../../complect/eva-icon/EvaButton';
import TheOrder from '../order/TheOrder';
import { IComOrdersProps } from './ComOrders.model';
import styled from 'styled-components';

export default function ComOrders(props: IComOrdersProps) {
  const { com, fontSize } = props;
  const [exMods, updateExMods] = useState<number[]>(com.excludedModulations);

  return (
    <OrdList
      className="com-ord-list"
      style={{
        fontSize: `${fontSize}px`,
      }}
    >
      {com.orders?.map((orderUnit, orderUniti) => {
        const isExcludedModulation = exMods.includes(orderUnit.wid);

        return (
          <TheOrder
            key={`order.${orderUniti}`}
            {...props}
            orderUnit={orderUnit}
            orderUniti={orderUniti}
            asHeaderComponent={({ headerNode }) => {
              return orderUnit.top.style?.isModulation ? (
                <span
                  className={'pointer flex ' + (isExcludedModulation ? 'color--ko' : 'color--7')}
                  onClick={(event) => {
                    event.stopPropagation();
                    updateExMods(com.toggleModulationInclusion(orderUnit));
                  }}
                >
                  <EvaButton name={isExcludedModulation ? 'eye-outline' : 'eye-off-outline'} />
                  {headerNode}
                </span>
              ) : (
                headerNode
              );
            }}
          />
        );
      })}
    </OrdList>
  );
}

const OrdList = styled.div`
  display: inline-block;
  color: var(--color-far);
  padding-top: 0.06em;
  transition: padding 0.2s;
  padding-bottom: 100px;
  min-height: 100%;
`;
