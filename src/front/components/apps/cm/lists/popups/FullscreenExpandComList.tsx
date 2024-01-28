import { useSelector } from 'react-redux';
import { RootState } from '../../../../../shared/store';
import RollControled from '../../base/RolledContent';
import { Com } from '../../col/com/Com';
import ComOrders from '../../col/com/orders/ComOrders';
import styled from 'styled-components';

const comFontSizeSelector = (state: RootState) => state.cm.comFontSize;

export default function FullscreenExpandComList({ coms }: { coms: Com[] }) {
  const fontSize = useSelector(comFontSizeSelector);

  return (
    <ExpandContent className="com-expand-content full-height">
      <RollControled>
        <div className="inner-content">
          {coms?.map(com => (
            <div key={`expand-com-number-${com.wid}`}>
              <div className="com-number">#{com.number}</div>
              <ComOrders
                com={com}
                fontSize={fontSize}
                chordVisibleVariant={2}
                isMiniAnchor={false}
              />
            </div>
          ))}
        </div>
      </RollControled>
    </ExpandContent>
  );
}

const ExpandContent = styled.div`
  overflow: auto;

  .inner-content {
    padding-top: 50vh;
  }

  .com-number {
    text-align: center;
  }

  .com-ord-list {
    width: 100%;
  }

  :not(:last-child) .com-ord-list {
    border-bottom: 2px var(--text-color) dashed;
  }
`;
