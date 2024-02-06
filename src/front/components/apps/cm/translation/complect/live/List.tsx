import { useEffect } from 'react';
import styled from 'styled-components';
import RollControled from '../../../base/RolledContent';
import { useChordVisibleVariant } from '../../../base/useChordVisibleVariant';
import { Com } from '../../../col/com/Com';
import ComOrders from '../../../col/com/orders/ComOrders';

interface Props {
  texti: number;
  com: Com;
}

export const CmLiveTranslationList = (props: Props) => {
  const [chordVisibleVariant] = useChordVisibleVariant();

  useEffect(() => {
    const element = document.querySelector(`.com-texted-block-${props.texti}`);

    if (element === null) return;

    element.scrollIntoView({ block: 'nearest' });

    element.classList.add('current');
    return () => element.classList.remove('current');
  }, [props.texti]);

  return (
    <RollControled>
      <List className="flex">
        <ComOrders
          chordVisibleVariant={chordVisibleVariant}
          com={props.com}
        />
      </List>
    </RollControled>
  );
};

const List = styled.div`
  .com-ord-list {
    margin: auto;
  }

  .composition-block {
    &.current {
      background-color: var(--color--2);
      padding: 16px;
      border-radius: 7px;
    }
  }
`;
