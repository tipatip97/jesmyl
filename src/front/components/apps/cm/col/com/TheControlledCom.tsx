import { useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled, { css, RuleSet } from 'styled-components';
import { useAtomValue } from '../../../../../complect/atoms';
import { backSwipableContainerMaker } from '../../../../../complect/backSwipableContainerMaker';
import { ChordVisibleVariant } from '../../Cm.model';
import RollControled from '../../base/RolledContent';
import { cmComFontSizeAtom, cmMolecule } from '../../molecules';
import { Com } from './Com';
import './Com.scss';
import TheCom from './TheCom';
import { useComCommentBlock as useComBlockComment } from './complect/comment-parser/useComCommentBlock';
import { addEventListenerPipe, hookEffectPipe } from '../../../../../complect/hookEffectPipe';

let onPrevCom: () => void;
let onNextCom: () => void;
const swiper = backSwipableContainerMaker(
  () => onPrevCom(),
  () => onNextCom(),
);

const isMiniAnchorAtom = cmMolecule.select(s => s.isMiniAnchor);

export default function TheControlledCom({
  com,
  comList,
  chordVisibleVariant,
  onComSet,
}: {
  com: Com;
  comList?: Com[] | nil;
  chordVisibleVariant: ChordVisibleVariant;
  onComSet?: (com: Com) => void;
}) {
  const fontSize = useAtomValue(cmComFontSizeAtom);
  const isMiniAnchor = useAtomValue(isMiniAnchorAtom);
  const listRef = useRef<HTMLDivElement>(null);
  const [, setSearchParams] = useSearchParams();
  const { commentStyles, commentBlockNode } = useComBlockComment(com);

  onNextCom = () => {
    if (!comList?.length) return;
    const comi = comList.findIndex(({ wid }) => wid === com.wid);
    if (comi < comList.length - 1) {
      onComSet?.(comList[comi + 1]);
      setSearchParams({ comw: '' + comList[comi + 1].wid });
    } else {
      onComSet?.(comList[0]);
      setSearchParams({ comw: '' + comList[0].wid });
    }
  };

  onPrevCom = () => {
    if (!comList) return;
    const comi = comList.findIndex(({ wid }) => wid === com.wid);
    if (comi > 0) {
      onComSet?.(comList[comi - 1]);
      setSearchParams({ comw: '' + comList[comi - 1].wid });
    } else {
      onComSet?.(comList[comList.length - 1]);
      setSearchParams({ comw: '' + comList[comList.length - 1].wid });
    }
  };

  useEffect(() => {
    return hookEffectPipe()
      .pipe(
        addEventListenerPipe(window, 'keydown', event => {
          if (!event.ctrlKey) return;

          if (event.key === 'ArrowLeft') onPrevCom();
          if (event.key === 'ArrowRight') onNextCom();
        }),
      )
      .effect();
  }, []);

  return (
    <StyledRollControled
      $commentStyles={commentStyles}
      className="composition-content"
    >
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
        {commentBlockNode}
      </WithScrollProgress>
    </StyledRollControled>
  );
}

const StyledRollControled = styled(RollControled)<{ $commentStyles?: RuleSet<object> | string }>`
  ${props => props.$commentStyles}
`;

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
          pointer-events: none;

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
