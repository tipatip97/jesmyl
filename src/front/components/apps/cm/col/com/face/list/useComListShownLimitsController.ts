import { useEffect, useMemo, useRef, useState } from 'react';
import { CmComWid } from '../../../../../../../../back/apps/cm/Cm.enums';
import { isIPhone } from '../../../../../../../complect/device-differences';
import { addEventListenerPipe, hookEffectPipe } from '../../../../../../../complect/hookEffectPipe';
import mylib from '../../../../../../../complect/my-lib/MyLib';
import { ComFaceListProps } from './_ComList';

const initComsBefore = 10;
const initComsAfter = 18;
const loadComsOnScroll = 15;

const inkNumFunc = (n: number) => n + 1;
const isRejectScrollDivision = isIPhone;

export const useComListShownLimitsController = (listRef: React.RefObject<HTMLDivElement>, props: ComFaceListProps) => {
  const [, forceUpdate] = useState(0);

  const indexsHashMap = useMemo(() => {
    const indexs = {} as Record<CmComWid, number>;

    props.list.forEach((com, comi) => (indexs[com.wid] = comi));

    return indexs;
  }, [props.list]);

  const ccomi = mylib.isNum(props.ccomw) ? indexsHashMap[props.ccomw] || 0 : 0;
  const limitsRef = useRef(
    props.titles
      ? { start: 0, finish: props.list.length }
      : { start: isRejectScrollDivision ? 0 : ccomi - initComsBefore, finish: ccomi + initComsAfter },
  );

  useEffect(() => {
    if (props.titles) return;

    limitsRef.current.finish = ccomi + initComsAfter;
    forceUpdate(inkNumFunc);

    if (isRejectScrollDivision) return;

    limitsRef.current.start = ccomi - initComsBefore;
  }, [ccomi, props.list, props.titles]);

  useEffect(() => {
    if (listRef.current === null || props.titles) return;

    let onUnmount = () => {};

    setTimeout(() => {
      let scrollElement = listRef.current as HTMLElement | null;

      while (scrollElement) {
        const overflowY = getComputedStyle(scrollElement).overflowY;
        if (overflowY === 'scroll' || overflowY === 'auto') break;
        scrollElement = scrollElement.parentElement;
      }

      let prevScrollTop: number | null = null;
      let isIgnoreScroll = false;
      const resetIgnoreScroll = () => (isIgnoreScroll = false);

      onUnmount = hookEffectPipe()
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
                limitsRef.current.start >= 0
              ) {
                limitsRef.current.start -= loadComsOnScroll;
                forceUpdate(inkNumFunc);
                isIgnoreScroll = true;
                setTimeout(resetIgnoreScroll, 50);
              } else if (
                prevScrollTop < scrollElement.scrollTop &&
                scrollElement.scrollTop > scrollElement.scrollHeight - scrollElement.clientHeight * 2 &&
                limitsRef.current.finish < props.list.length
              ) {
                limitsRef.current.finish += loadComsOnScroll;
                forceUpdate(inkNumFunc);
                isIgnoreScroll = true;
                setTimeout(resetIgnoreScroll, 50);
              }

              prevScrollTop = scrollElement.scrollTop;
            }),
        )
        .effect();
    }, 500);

    return onUnmount;
  }, [props.list.length, listRef, props.titles]);

  return limitsRef.current;
};
