import { useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { makeRegExp } from '../../../../../../../back/complect/makeRegExp';
import RollControled from '../../../base/RolledContent';
import { useChordVisibleVariant } from '../../../base/useChordVisibleVariant';
import { Com } from '../../../col/com/Com';
import ComLine from '../../../col/com/line/ComLine';
import ComOrders from '../../../col/com/orders/ComOrders';
import { CmTranslationScreenConfig } from '../controlled/model';

interface Props {
  texti: number;
  com: Com;
  config: CmTranslationScreenConfig;
}

const _lineNamePrefix = 'live-translation-line';

export const CmLiveTranslationList = (props: Props) => {
  const [chordVisibleVariant] = useChordVisibleVariant();
  const lineVolumes = useMemo(() => {
    const sum: number[] = [0];
    const counts = [] as number[];
    let lastSum = 0;

    props.com.orders?.forEach(unit => {
      if (unit.texti === null) {
        sum.push(lastSum);
        return;
      }
      const count = unit.text.split(makeRegExp('/\\n/')).length;
      counts.push(count);
      sum.push((lastSum += count));
    });

    return { sum, counts };
  }, [props.com]);

  const querySelector = useMemo(() => {
    let count = 0;
    const mapLine = props.com.translationMap(props.config.pushKind);

    for (let i = 0; i < mapLine.length; i++) {
      if (i >= props.texti) {
        let queries = [];
        for (let j = 0; j < mapLine[i]; j++) {
          queries.push(`#${_lineNamePrefix}${count + j}`);
        }

        return queries.join(', ');
      }
      count += mapLine[i];
    }

    return `#${_lineNamePrefix}0`;
  }, [props.com, props.texti]);

  useEffect(() => {
    const element = document.querySelector(querySelector);

    if (element === null) return;

    element.scrollIntoView({ block: 'center' });

    element.classList.add('current');
    return () => element.classList.remove('current');
  }, [querySelector]);

  return (
    <RollControled>
      <List
        className="flex"
        $querySelector={querySelector}
      >
        <ComOrders
          chordVisibleVariant={chordVisibleVariant}
          com={props.com}
          asLineComponent={props => {
            return (
              <div
                className={_lineNamePrefix}
                id={`${_lineNamePrefix}${lineVolumes.sum[props.orderUniti] + props.textLinei}`}
              >
                <ComLine {...props} />
              </div>
            );
          }}
        />
      </List>
    </RollControled>
  );
};

const List = styled.div<{ $querySelector: string }>`
  .com-ord-list {
    margin: auto;
  }

  ${props => props.$querySelector} {
    background-color: var(--color--2);
  }

  .${_lineNamePrefix} {
    transition: background-color 0.3s;
  }

  .composition-block {
    &.current {
      background-color: var(--color--2);
      padding: 16px;
      border-radius: 7px;
    }
  }
`;
