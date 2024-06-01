import { CSSProperties, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useExerExec } from '../../../../../../../complect/exer/hooks/useExer';
import { useConfirm } from '../../../../../../../complect/modal/confirm/useConfirm';
import { IconCancel01StrokeRounded } from '../../../../../../../complect/the-icon/icons/cancel-01';
import { IconFlag03StrokeRounded } from '../../../../../../../complect/the-icon/icons/flag-03';
import { IconLinkBackwardStrokeRounded } from '../../../../../../../complect/the-icon/icons/link-backward';
import { IconPinStrokeRounded } from '../../../../../../../complect/the-icon/icons/pin';
import { ChordVisibleVariant } from '../../../../Cm.model';
import ComLine from '../../../../col/com/line/ComLine';
import { OrderRepeats } from '../../../../col/com/order/Order.model';
import TheOrder from '../../../../col/com/order/TheOrder';
import { EditableOrder } from '../complect/orders/EditableOrder';
import { useEditableCcom } from '../useEditableCcom';
import { IEditableComLineProps } from './ComRepeats.model';
import { ComRepeatsRemoveButton } from './complect/RemoveButton';

const flashCounts = [2, 3, 4, 5];
const defaultPos = {
  '--x': 0,
  '--y': 0,
} as const;

export default function ComRepeats() {
  const exec = useExerExec();
  const [start, setStart] = useState<IEditableComLineProps | null>(null);
  const [pos, setPos] = useState(defaultPos);
  const [isChordBlock, setIsChordBlock] = useState(false);
  const [isReadySetChordBlock, setIsReadySetChordBlock] = useState(false);
  const [flashCount, setFlashCount] = useState(2);
  const [confirmNode, confirm] = useConfirm();

  const ccom = useEditableCcom();
  const coln = 'r';
  const { textLinei: startLinei, wordi: startWordi, orderUnit: startOrd } = start || {};
  let startedFlashes = 0;
  let beforeFlashes = 0;
  let isInRegion = false;
  let isRegionEnds = false;

  const setField = useCallback(
    (ord?: EditableOrder, repeateds?: OrderRepeats | nil, prevs?: OrderRepeats | nil) => {
      if (!ord) return;

      const reps = typeof prevs === 'number' ? { '.': prevs } : prevs || {};
      const repds = typeof repeateds === 'number' ? { '.': repeateds } : repeateds || {};
      const repeats = { ...reps, ...repds };
      const keys = Object.keys(repeats);
      if (repeats['.'] === 0) delete repeats['.'];

      exec(
        ord.setField(coln, (keys.length ? (keys.length === 1 && keys[0] === '.' ? repeats['.'] : repeats) : 0) ?? 0),
      );
    },
    [exec],
  );

  const reset = useCallback(() => {
    setStart(null);
    setFlashCount(2);
    setIsChordBlock(false);
  }, []);

  useEffect(() => {
    if (isReadySetChordBlock) {
      setField(startOrd, flashCount);
      reset();
      setIsReadySetChordBlock(false);
    }
  }, [flashCount, isReadySetChordBlock, reset, setField, startOrd]);

  return (
    <Content className={`com-repeats-editor ${start == null ? '' : 'active'}`}>
      {confirmNode}
      {ccom?.orders?.map((ord, ordi) => {
        if (!ord.isVisible) return null;

        return (
          <div
            key={ordi}
            className="region-editor-block relative"
            onClick={
              ord.text
                ? undefined
                : event => {
                    if (start == null || !isChordBlock) {
                      setStart({
                        orderUnit: ord,
                        textLine: '',
                        textLinei: 0,
                        textLines: 0,
                        wordCount: 0,
                        wordi: 0,
                        words: [],
                      });

                      setIsChordBlock(true);
                      setPos({
                        '--x': (event.target as any).offsetLeft,
                        '--y': (event.target as any).offsetTop,
                      });
                    } else {
                      setIsChordBlock(false);
                      setIsReadySetChordBlock(true);
                    }
                  }
            }
          >
            <TheOrder
              chordVisibleVariant={ChordVisibleVariant.None}
              com={ccom}
              orderUnit={ord}
              orderUniti={ordi}
              asHeaderComponent={props => {
                return (
                  <>
                    {props.headerNode}
                    {ord.top.watchOrd ? (
                      <>
                        <IconLinkBackwardStrokeRounded
                          className="vertical-middle pointer margin-gap-h"
                          onClick={() => {
                            ord.top.watchOrd?.element?.scrollIntoView();
                          }}
                        />
                        <IconPinStrokeRounded
                          className={`vertical-middle pointer ${ord.isInheritValue('r') ? 'disabled' : ''}`}
                          onClick={() => {
                            confirm('Очистить собственные правила повторения?').then(isClear => {
                              if (isClear) exec(ord.removeInheritance('r'));
                            });
                          }}
                        />
                      </>
                    ) : null}
                  </>
                );
              }}
              asLineComponent={props => {
                return (
                  <ComLine
                    {...props}
                    setWordClass={(props, wordi) => {
                      if (!start) return '';
                      const { wordCount, textLinei } = props;

                      const openers = ord.regions?.reduce(
                        (count: number, { startLinei, startWordi, startKey }) =>
                          count +
                          +(textLinei === startLinei && wordi === startWordi && !(startKey || '').startsWith('~')),
                        0,
                      );
                      if (openers) {
                        if (!isInRegion) beforeFlashes++;
                        startedFlashes += isInRegion ? openers : 1;
                      }

                      const prevStarteds = startedFlashes;
                      const prevEnds = isRegionEnds;

                      const closers = ord.regions?.reduce(
                        (count, { endLinei, endWordi = wordCount - 1 }) =>
                          count + +(textLinei === endLinei && wordi === endWordi),
                        0,
                      );

                      if (closers) {
                        if (isInRegion) {
                          if (startedFlashes && startedFlashes === beforeFlashes) isRegionEnds = true;
                        } else beforeFlashes--;
                        startedFlashes -= closers;
                      }

                      const isLastInRange =
                        ord === startOrd &&
                        textLinei === startLinei &&
                        wordi === startWordi &&
                        startedFlashes + 1 === prevStarteds;

                      if (isLastInRange) isRegionEnds = true;

                      if (!isInRegion && ord === startOrd && textLinei === startLinei && wordi === startWordi)
                        isInRegion = true;

                      return isLastInRange ||
                        (isInRegion && (isLastInRange ? prevStarteds : startedFlashes) <= beforeFlashes && !prevEnds)
                        ? ''
                        : 'inactive-word';
                    }}
                    onClick={event => {
                      const clicked = event.nativeEvent
                        .composedPath()
                        .find(span => (span as HTMLSpanElement)?.classList?.contains('com-word')) as HTMLSpanElement;

                      const [, wordi] =
                        (clicked &&
                          Array.from(clicked.classList)
                            .find(className => className.startsWith('wordi_'))
                            ?.split('_')) ||
                        [];

                      if (wordi == null) return;

                      const { textLinei: linei, textLines: lines, wordCount } = props;

                      if (start == null || isChordBlock) {
                        setStart({ ...props, orderUnit: ord, wordi: +wordi });
                        setPos({
                          '--x': (event.target as any).offsetLeft,
                          '--y': (event.target as any).offsetTop,
                        });
                        setIsChordBlock(false);
                      } else {
                        const nextLetter = ccom.getRegionNextLetter();
                        const [startDiap, finishDiap] =
                          startOrd === ord
                            ? startLinei === 0 && startWordi === 0 && linei === lines - 1 && +wordi === wordCount - 1
                              ? ['.']
                              : [
                                  `${startLinei}${startWordi ? `:${startWordi}` : ''}${
                                    startLinei === linei && !startWordi && wordCount - 1 === +wordi
                                      ? ''
                                      : `-${linei}${wordCount - 1 === +wordi ? '' : `:${wordi}`}`
                                  }`,
                                ]
                            : [`${nextLetter}${startLinei}:${startWordi}`, `${linei}:${wordi}${nextLetter}`];

                        setField(startOrd, { [startDiap]: flashCount }, startOrd?.repeats);

                        if (startOrd !== ord) {
                          setField(ord, { [finishDiap || '']: flashCount }, ord.repeats);
                          ord.resetRegions();
                        }

                        startOrd?.resetRegions();

                        reset();
                        exec();
                      }
                    }}
                  />
                );
              }}
            />

            {start &&
              start.orderUnit === ord &&
              (() => {
                const { orderUnit: startOrd, textLinei, wordi } = start;

                const flashes = (ord.regions || []).filter(
                  ({ startLinei, startWordi }) => startLinei === textLinei && startWordi === wordi,
                );

                return (
                  <div
                    className={`float-button-panel${start && ord === start.orderUnit ? '' : ' hidden'}`}
                    style={pos as CSSProperties}
                  >
                    <div
                      className="button close"
                      onClick={event => {
                        event.stopPropagation();
                        reset();
                      }}
                    >
                      <IconCancel01StrokeRounded />
                    </div>
                    {!flashes.length || (
                      <ComRepeatsRemoveButton
                        isChordBlock={isChordBlock}
                        ord={ord}
                        reset={reset}
                        setField={setField}
                        startOrd={startOrd}
                        textLinei={textLinei}
                        wordi={wordi}
                      />
                    )}
                    {flashCounts.map(currFlashCount => {
                      return (
                        <div
                          key={currFlashCount}
                          className={`button numeric${flashCount === currFlashCount ? ' active' : ''}`}
                          onClick={() => setFlashCount(currFlashCount)}
                        >
                          {currFlashCount}
                        </div>
                      );
                    })}
                    {isChordBlock || (
                      <div
                        className="button flag"
                        onClick={() => {
                          setField(
                            startOrd,
                            {
                              [`~${startLinei}:${startWordi}`]: flashCount - 1,
                            },
                            startOrd.repeats,
                          );
                          reset();
                        }}
                      >
                        <IconFlag03StrokeRounded />
                      </div>
                    )}
                  </div>
                );
              })()}
          </div>
        );
      })}
    </Content>
  );
}

const Content = styled.div`
  position: relative;

  .com-word {
    cursor: pointer;

    &.inactive-word {
      pointer-events: none;
      color: grey;
    }
  }

  .float-button-panel {
    --size: 1.2em;

    position: absolute;
    display: flex;
    top: calc(var(--y) * 1px - var(--size) * 1.2);
    left: calc(var(--x) * 1px);
    transition: 0.5s;

    &.hidden {
      opacity: 0;
      pointer-events: none;
    }

    .button {
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 1;
      cursor: pointer;
      margin-left: 0.2em;
      border-radius: 0.3em;

      width: var(--size);
      height: var(--size);

      &.close {
        --icon-color: var(--color--1);

        background: var(--color--6);
      }

      &.remove {
        --icon-color: white;

        background: var(--color--ko);
      }

      &.flag {
        --icon-color: var(--color--6);

        background: var(--color--2);
      }

      &.numeric {
        background: var(--color--3);
        color: var(--color--1);

        &.active {
          background: var(--color--7);
        }
      }
    }
  }
`;
