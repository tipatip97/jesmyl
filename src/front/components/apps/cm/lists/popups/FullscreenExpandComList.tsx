import styled from 'styled-components';
import { useAtomValue } from '../../../../../complect/atoms';
import RollControled from '../../base/RolledContent';
import { Com } from '../../col/com/Com';
import ComOrders from '../../col/com/orders/ComOrders';
import { cmComFontSizeAtom } from '../../molecules';

export default function FullscreenExpandComList({ coms }: { coms: Com[] }) {
  const fontSize = useAtomValue(cmComFontSizeAtom);

  return (
    <ExpandContent className="com-expand-content full-height">
      <RollControled>
        <div className="inner-content">
          {coms?.map(com => (
            <div key={com.wid}>
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
