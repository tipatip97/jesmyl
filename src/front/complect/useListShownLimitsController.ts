import { useCallback, useEffect, useMemo, useReducer } from 'react';
import { isIPhone } from './device-differences';
import { addEventListenerPipe, hookEffectPipe } from './hookEffectPipe';
import { useActualRef } from './useActualRef';

const inkNumFunc = (n: number) => n + 1;
const isRejectScrollDivision = isIPhone;

export type ListSlicerLimits = {
  start: number;
  finish: number;
  initStart: number;
  initFinish: number;
};

export type ListSlicerLimitsControls = {
  limits: ListSlicerLimits;
  setLimits: (start: number | nil, finish: number | nil) => void;
};

export const useListShownLimitsController = <Item>(
  listRef: React.RefObject<HTMLDivElement>,
  list: Item[],
  findCurrentIndex: (item: Item, index: number, items: Item[]) => boolean,
  isSetWholeListLimits: boolean,
  initItemsBefore = 10,
  initItemsAfter = 18,
  loadItemsOnScroll = 15,
): ListSlicerLimitsControls => {
  const [, forceUpdate] = useReducer(inkNumFunc, 0);
  const findCurrentIndexRef = useActualRef(findCurrentIndex);

  const limits = useMemo(() => {
    const limits: ListSlicerLimits = {
      start: 0,
      finish: list.length,
      initStart: 0,
      initFinish: list.length,
    };

    if (!isSetWholeListLimits) {
      let itemi = list.findIndex(findCurrentIndexRef.current);
      itemi = itemi < 0 ? 0 : itemi;

      const startLimitPlus = initItemsAfter - (list.length - itemi);
      const finishLimitPlus = initItemsBefore - itemi;

      const initialStartLimit = itemi - initItemsBefore - (startLimitPlus > 0 ? startLimitPlus : 0);
      const initialFinishLimit = itemi + initItemsAfter + (finishLimitPlus > 0 ? finishLimitPlus : 0);

      limits.initStart = limits.start = isRejectScrollDivision ? 0 : initialStartLimit < 0 ? 0 : initialStartLimit;
      limits.initFinish = limits.finish =
        (initialFinishLimit > list.length - 1 ? list.length - 1 : initialFinishLimit) + 1;
    }

    return limits;
  }, [findCurrentIndexRef, initItemsAfter, initItemsBefore, isSetWholeListLimits, list]);

  useEffect(() => {
    if (isSetWholeListLimits) return;

    limits.finish = limits.initFinish;
    forceUpdate();

    if (isRejectScrollDivision) return;

    limits.start = limits.initStart;
  }, [isSetWholeListLimits, limits, list]);

  useEffect(() => {
    if (listRef.current === null || isSetWholeListLimits) return;

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
              const currentScrollTop = Math.abs(scrollElement.scrollTop);

              if (prevScrollTop === null) {
                prevScrollTop = currentScrollTop;
                return;
              }

              if (isIgnoreScroll) return;

              if (
                prevScrollTop > currentScrollTop &&
                currentScrollTop < scrollElement.clientHeight * 2 &&
                limits.start >= 0
              ) {
                const start = limits.start;

                limits.start -= loadItemsOnScroll;
                if (limits.start < 0) limits.start = 0;

                isIgnoreScroll = true;
                setTimeout(resetIgnoreScroll, 50);

                if (start !== limits.start) forceUpdate();
              } else if (
                prevScrollTop < currentScrollTop &&
                currentScrollTop > scrollElement.scrollHeight - scrollElement.clientHeight * 2 &&
                limits.finish < list.length
              ) {
                const finish = limits.finish;

                limits.finish += loadItemsOnScroll;
                isIgnoreScroll = true;
                setTimeout(resetIgnoreScroll, 50);

                if (finish !== limits.finish) forceUpdate();
              }

              prevScrollTop = currentScrollTop;
            }),
        )
        .effect();
    }, 500);

    return onUnmount;
  }, [list.length, listRef, isSetWholeListLimits, limits, loadItemsOnScroll]);

  return {
    limits,
    setLimits: useCallback(
      (start: number | nil, finish: number | nil) => {
        if (start == null && finish == null) return;

        if (start != null) {
          if (start < 0) start = 0;
          limits.start = start;
        }

        if (finish != null) {
          if (finish > list.length) finish = list.length;
          limits.finish = finish;
        }

        forceUpdate();
      },
      [limits, list.length],
    ),
  };
};
