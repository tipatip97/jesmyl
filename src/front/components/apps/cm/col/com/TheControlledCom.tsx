import { useRef } from 'react';
import styled, { css } from 'styled-components';
import { useAtom, useAtomValue } from '../../../../../complect/atoms';
import { backSwipableContainerMaker } from '../../../../../complect/backSwipableContainerMaker';
import { ChordVisibleVariant } from '../../Cm.model';
import RollControled from '../../base/RolledContent';
import { cmMolecule } from '../../molecules';
import { Com } from './Com';
import './Com.scss';
import TheCom from './TheCom';
import TheComComment from './TheComComment';

let onPrevCom: () => void;
let onNextCom: () => void;
const swiper = backSwipableContainerMaker(
  () => onPrevCom(),
  () => onNextCom(),
);

export default function TheControlledCom({
  com,
  comList,
  chordVisibleVariant,
  onComSet,
}: {
  com: Com;
  comList?: Com[] | nil;
  chordVisibleVariant: ChordVisibleVariant;
  onComSet: (com: Com) => void;
}) {
  const fontSize = useAtomValue(cmMolecule.take('comFontSize'));
  const [isMiniAnchor] = useAtom(cmMolecule.take('isMiniAnchor'));
  const listRef = useRef<HTMLDivElement>(null);

  onNextCom = () => {
    if (!comList) return;
    const comi = comList.findIndex(({ wid }) => wid === com.wid);
    if (comi < comList.length - 1) onComSet(comList[comi + 1]);
    else onComSet(comList[0]);
  };

  onPrevCom = () => {
    if (!comList) return;
    const comi = comList.findIndex(({ wid }) => wid === com.wid);
    if (comi > 0) onComSet(comList[comi - 1]);
    else onComSet(comList[comList.length - 1]);
  };

  return (
    <RollControled className="composition-content">
      <WithScrollProgress
        {...swiper}
        className="relative full-height"
        $listHeight={listRef.current?.clientHeight}
      >
        <TheCom
          com={com}
          fontSize={fontSize}
          chordVisibleVariant={chordVisibleVariant}
          isMiniAnchor={isMiniAnchor}
          listRef={listRef}
        />
        <TheComComment comw={com.wid} />
      </WithScrollProgress>
    </RollControled>
  );
}

const WithScrollProgress = styled.div<{ $listHeight: number | null | und }>`
  ${props => {
    if (props.$listHeight == null || window.innerHeight > props.$listHeight) return null;

    return css`
      @supports (animation-timeline: scroll()) {
        &:after {
          content: '';
          position: absolute;
          top: 0;
          left: -8px;
          height: ${props.$listHeight}px;
          background-color: var(--color--7);
          opacity: 0.02;

          animation: WithProgress linear;
          animation-timeline: scroll();
        }

        @keyframes WithProgress {
          from {
            width: 0;
          }
          to {
            width: 100vw;
          }
        }
      }
    `;
  }};
`;
