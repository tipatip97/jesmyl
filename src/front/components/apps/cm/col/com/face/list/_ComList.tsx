import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { CmComWid } from '../../../../../../../../back/apps/cm/Cm.enums';
import { FloatPopup, useFloatPopupCoords } from '../../../../../../../complect/absolute-popup/float-popup/FloatPopup';
import propsOfClicker from '../../../../../../../complect/clicker/propsOfClicker';
import { isIPhone } from '../../../../../../../complect/device-differences';
import { FaceItem } from '../../../../../../../complect/FaceItem';
import { addEventListenerPipe, hookEffectPipe, setTimeoutPipe } from '../../../../../../../complect/hookEffectPipe';
import mylib from '../../../../../../../complect/my-lib/MyLib';
import useSelectedComs from '../../../../base/useSelectedComs';
import { Com } from '../../Com';
import { ListComFaceProps } from '../ComFace.model';
import ComFaceContextMenu from '../ComFaceContextMenu';
import { IComFaceList } from './model';

interface Props extends IComFaceList, ListComFaceProps {
  list: Com[];
  titles?: Record<number, string>;
  className?: string;
}

const initComsBefore = 10;
const initComsAfter = 18;
const loadComsOnScroll = 15;

const currentComwIdPrefix = 'com_face_wid_';

const inkNumFunc = (n: number) => n + 1;
const isRejectScrollDivision = isIPhone;

export const ComFaceListComList = (props: Props) => {
  const navigate = useNavigate();
  const listRef = useRef<HTMLDivElement>(null);
  const [floatMenuCoords, setFloatMenuCoords] = useFloatPopupCoords<{ comw: CmComWid }>();
  const { toggleSelectedCom, selectedComws } = useSelectedComs();

  const indexsHashMap = useMemo(() => {
    const indexs = {} as Record<CmComWid, number>;

    props.list.forEach((com, comi) => (indexs[com.wid] = comi));

    return indexs;
  }, [props.list]);

  const ccomi = mylib.isNum(props.ccomw) ? indexsHashMap[props.ccomw] || 0 : 0;

  const [, forceUpdate] = useState(0);
  const limits = useRef({ start: isRejectScrollDivision ? 0 : ccomi - initComsBefore, finish: ccomi + initComsAfter });

  useEffect(() => {
    limits.current.finish = ccomi + initComsAfter;
    forceUpdate(inkNumFunc);

    if (isRejectScrollDivision) return;

    limits.current.start = ccomi - initComsBefore;
  }, [ccomi, props.list]);

  useEffect(() => {
    if (listRef.current === null || props.ccomw === undefined || props.isPutCcomFaceOff) return;

    const node = listRef.current.querySelector(`#${currentComwIdPrefix}${props.ccomw}`);

    if (node === null) return;

    return hookEffectPipe()
      .pipe(
        setTimeoutPipe(() => {
          const parent = (function get(node: HTMLElement | null): HTMLElement | null {
            return node && (node.scrollHeight > node.clientHeight ? node : get(node.parentElement));
          })(node as never);

          if (parent == null) {
            node.scrollIntoView({ block: 'center' });
            return;
          }

          mylib.scrollToView(node, 'top', {
            parent,
            top: 36,
          });
        }),
      )
      .effect();
  }, [props.ccomw, props.isPutCcomFaceOff]);

  useEffect(() => {
    if (listRef.current === null) return;

    let scrollElement = listRef.current as HTMLElement | null;

    while (scrollElement) {
      const overflowY = getComputedStyle(scrollElement).overflowY;
      if (overflowY === 'scroll' || overflowY === 'auto') break;
      scrollElement = scrollElement.parentElement;
    }

    let prevScrollTop: number | null = null;
    let isIgnoreScroll = false;
    const resetIgnoreScroll = () => (isIgnoreScroll = false);

    return hookEffectPipe()
      .pipe(
        scrollElement &&
          addEventListenerPipe(scrollElement, 'scroll', () => {
            if (prevScrollTop === null) {
              prevScrollTop = scrollElement.scrollTop;
              return;
            }

            if (isIgnoreScroll) return;

            if (
              prevScrollTop > scrollElement.scrollTop &&
              scrollElement.scrollTop < scrollElement.clientHeight * 2 &&
              limits.current.start >= 0
            ) {
              limits.current.start -= loadComsOnScroll;
              forceUpdate(inkNumFunc);
              isIgnoreScroll = true;
              setTimeout(resetIgnoreScroll, 50);
            } else if (
              prevScrollTop < scrollElement.scrollTop &&
              scrollElement.scrollTop > scrollElement.scrollHeight - scrollElement.clientHeight * 2 &&
              limits.current.finish < props.list.length
            ) {
              limits.current.finish += loadComsOnScroll;
              forceUpdate(inkNumFunc);
              isIgnoreScroll = true;
              setTimeout(resetIgnoreScroll, 50);
            }

            prevScrollTop = scrollElement.scrollTop;
          }),
        addEventListenerPipe(listRef.current, 'click', event => {
          let elem = event.target as HTMLElement | null;
          let isFaceLogo = false;

          while (elem) {
            if (elem.classList.contains('face-logo')) {
              isFaceLogo = true;
            }

            if (elem.classList.contains('face-item')) {
              break;
            }

            elem = elem.parentElement;
          }

          if (!elem?.id.startsWith(currentComwIdPrefix)) return;

          const comw = +elem.id.slice(currentComwIdPrefix.length);

          if (mylib.isNaN(comw)) return;

          if (isFaceLogo) {
            event.stopPropagation();
            event.preventDefault();
            toggleSelectedCom(comw);
            return;
          }

          if (props.importantOnClick) {
            const comi = Array.from(elem.classList.values()).find(className => className.endsWith('-comi'));
            if (!comi) return;
            const com = props.list.find(com => com.wid === comw);
            if (!com) return;
            props.importantOnClick(com, parseInt(comi), event);
          } else navigate(`./${comw}`);
        }),
      )
      .effect();
  }, [props, props.list, navigate, toggleSelectedCom]);

  const clickerProps = useMemo(
    () =>
      propsOfClicker({
        onCtxMenu: event => {
          event.preventDefault();

          if (props.selectable === false) return;
          let elem = event.nativeEvent.target as HTMLElement | null;

          while (elem) {
            if (elem.classList.contains('face-item')) break;
            elem = elem.parentElement;
          }

          if (!elem?.id.startsWith(currentComwIdPrefix)) return;

          const comw = +elem.id.slice(currentComwIdPrefix.length);

          if (mylib.isNaN(comw)) return;

          setFloatMenuCoords({
            x: event.clientX,
            y: event.clientY,
            comw,
          });
        },
      }),
    [props.selectable, setFloatMenuCoords],
  );

  return (
    <StyledContainer
      $ccomw={props.ccomw}
      $accentComw={floatMenuCoords?.comw}
      $selectedComws={selectedComws}
      $isPutCcomFaceOff={props.isPutCcomFaceOff}
      className={props.className}
      ref={listRef}
      {...clickerProps}
    >
      {props.list.map((com, comi) => {
        if (limits.current.start > comi || limits.current.finish < comi) return null;

        return (
          <React.Fragment key={com.wid}>
            {props.titles?.[comi] != null && (
              <div className="flex center margin-gap-v color--7">{props.titles[comi]}</div>
            )}
            <FaceItem
              id={`${currentComwIdPrefix}${com.wid}`}
              className={`flex between pointer ${comi}-comi ` + (props.groupClass || '')}
            >
              <div className="face-logo">
                <span>{com.number}</span>
              </div>
              <span className="face-title ellipsis">{com.name}</span>
              {props.comDescription?.(com, comi)}
            </FaceItem>
          </React.Fragment>
        );
      })}
      {floatMenuCoords && (
        <FloatPopup
          onClose={setFloatMenuCoords}
          coords={floatMenuCoords}
        >
          <ComFaceContextMenu
            onClick={setFloatMenuCoords}
            comWid={floatMenuCoords.comw}
          />
        </FloatPopup>
      )}
    </StyledContainer>
  );
};

const StyledContainer = styled.div<{
  $ccomw: CmComWid | NaN | nil;
  $accentComw: number | nil;
  $selectedComws: CmComWid[];
  $isPutCcomFaceOff: boolean | nil;
}>`
  * {
    transition: opacity 0.4s;
  }

  ${props =>
    !props.$isPutCcomFaceOff &&
    css`
      #${currentComwIdPrefix}${props.$ccomw} {
        font-weight: bold;
      }
    `}

  ${props => {
    return css`
      ${props.$accentComw
        ? css`
            > :not(#${currentComwIdPrefix}${props.$accentComw}) {
              opacity: 0.4;
            }
          `
        : ''}

      ${props.$selectedComws.map(selectedComwMapper).join(' ')}
    `;
  }}
`;

const selectedComwMapper = (comw: CmComWid, comwi: number) => {
  return Array.from(css`
    #${currentComwIdPrefix}${comw} .face-logo {
      border-color: var(--color--3);

      &::after {
        content: '${comwi + 1}';
      }
    }
  `).join('');
};
