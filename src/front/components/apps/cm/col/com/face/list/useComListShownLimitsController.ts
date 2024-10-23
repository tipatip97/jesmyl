import { useEffect, useMemo, useState } from 'react';
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

  const limits = useMemo(() => {
    const ccomi = mylib.isNum(props.ccomw) ? indexsHashMap[props.ccomw] || 0 : 0;

    let initialLimits;

    if (props.titles) {
      initialLimits = { start: 0, finish: props.list.length, initStart: 0, initFinish: props.list.length };
    } else {
      const startLimitPlus = initComsAfter - (props.list.length - ccomi);
      const finishLimitPlus = initComsBefore - ccomi;

      const initialStartLimit = ccomi - initComsBefore - (startLimitPlus > 0 ? startLimitPlus : 0);
      const initialFinishLimit = ccomi + initComsAfter + (finishLimitPlus > 0 ? finishLimitPlus : 0);

      const initStart = isRejectScrollDivision ? 0 : initialStartLimit < 0 ? 0 : initialStartLimit;
      const initFinish = initialFinishLimit > props.list.length - 1 ? props.list.length - 1 : initialFinishLimit;

      initialLimits = {
        start: initStart,
        finish: initFinish,
        initStart,
        initFinish,
      };
    }

    return initialLimits;
  }, [indexsHashMap, props.ccomw, props.list.length, props.titles]);

  useEffect(() => {
    if (props.titles) return;

    limits.finish = limits.initFinish;
    forceUpdate(inkNumFunc);

    if (isRejectScrollDivision) return;

    limits.start = limits.initStart;
  }, [limits, props.list, props.titles]);

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
                limits.start >= 0
              ) {
                limits.start -= loadComsOnScroll;
                forceUpdate(inkNumFunc);
                isIgnoreScroll = true;
                setTimeout(resetIgnoreScroll, 50);
              } else if (
                prevScrollTop < scrollElement.scrollTop &&
                scrollElement.scrollTop > scrollElement.scrollHeight - scrollElement.clientHeight * 2 &&
                limits.finish < props.list.length
              ) {
                limits.finish += loadComsOnScroll;
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
  }, [props.list.length, listRef, props.titles, limits]);

  return limits;
};
