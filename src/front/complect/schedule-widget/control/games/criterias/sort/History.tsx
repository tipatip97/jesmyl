import { useState } from 'react';
import styled, { css } from 'styled-components';
import { IconLinkBackwardStrokeRounded } from '../../../../../the-icon/icons/link-backward';
import { IconLinkForwardStrokeRounded } from '../../../../../the-icon/icons/link-forward';
import { IScheduleWidgetUser } from '../../../../ScheduleWidget.model';
import { HistoryAdder } from './model';

interface Props {
  start: number;
  end: number;
  addInHistoryRef: { current: HistoryAdder };
  setStart: (start: number) => void;
  setEnd: (end: number) => void;
  setCorrect: (correct: 'left' | 'right' | nil) => void;
  setSortedUsers: (users: IScheduleWidgetUser[]) => void;
  sortedUsers: IScheduleWidgetUser[];
}

interface HistoryItem {
  start: number;
  end: number;
  users: IScheduleWidgetUser[];
  correct?: 'left' | 'right';
}

const emptyArr: [] = [];

export default function ScheduleWidgetTeamsCriteriaSorterScreenHistory({
  addInHistoryRef,
  setEnd,
  setSortedUsers,
  setStart,
  setCorrect,
  end,
  start,
  sortedUsers,
}: Props) {
  const [history, setHistory] = useState<HistoryItem[]>(emptyArr);
  const [point, setPoint] = useState<number | null>(null);

  addInHistoryRef.current = (start, end, users, correct) => {
    if (point !== null) {
      setPoint(null);

      if (point < history.length) {
        const item = history[point];

        if (item.correct === correct && item.start === start && item.end === end) {
          const nextPoint = point + 1;

          if (history[nextPoint] != null) {
            const { end, start, users, correct } = history[nextPoint];

            setStart(start);
            setEnd(end);
            setSortedUsers(users);
            setCorrect(correct);
          }

          setPoint(nextPoint);
          return;
        }
      }
    }

    setCorrect(null);

    setHistory([...(point === null ? history : history.slice(0, point)), { end, start, users, correct }]);
  };

  const setItem = (point: number) => {
    if (history[point] == null) return;

    const { end, start, users, correct } = history[point];

    setStart(start);
    setEnd(end);
    setSortedUsers(users);
    setCorrect(correct);
  };

  return (
    <StyledHistory
      className="flex flex-gap between half-width"
      $historyLength={history.length}
      $point={point}
    >
      <StyledUndo
        onClick={() => {
          const newPoint = point === null ? history.length - 1 : point - 1;
          setPoint(newPoint);
          setItem(newPoint);

          if (point !== null) return;
          setHistory([...history, { start, end, users: sortedUsers }]);
        }}
      />
      <StyledRedo
        onClick={() => {
          const newPoint = point === null ? history.length - 1 : point + 1;
          setPoint(newPoint);
          setItem(newPoint);
        }}
      />
    </StyledHistory>
  );
}

const navCss = css`
  scale: 2;
  cursor: pointer;
`;

const StyledUndo = styled(IconLinkBackwardStrokeRounded)`
  ${navCss}
`;

const StyledRedo = styled(IconLinkForwardStrokeRounded)`
  ${navCss}
`;

const disabledButtonCss = css`
  opacity: 0.4;
  pointer-events: none;
`;

const StyledHistory = styled.div<{ $historyLength: number; $point: number | null }>`
  ${props => {
    return !props.$historyLength
      ? css`
          ${StyledUndo}, ${StyledRedo} {
            ${disabledButtonCss}
          }
        `
      : props.$point === null || props.$historyLength - 1 <= props.$point
        ? css`
            ${StyledRedo} {
              ${disabledButtonCss}
            }
          `
        : props.$point === 0
          ? css`
              ${StyledUndo} {
                ${disabledButtonCss}
              }
            `
          : css``;
  }}
`;
