import { ReactNode } from 'react';
import useFullContent from '../../../../../../complect/fullscreen-content/useFullContent';
import { IconClock01StrokeRounded } from '../../../../../../complect/the-icon/icons/clock-01';
import { IconMessage01StrokeRounded } from '../../../../../../complect/the-icon/icons/message-01';
import { TeamGameImportable } from '../../../Leader.model';
import { LeaderCleans } from '../../LeaderCleans';
import { GameTimerMode } from './GameTimer.model';
import LeaderGameTimerMaster from './GameTimerMaster';
import useGameTimer from './useGameTimer';
import { FaceItem } from '../../../../../../complect/FaceItem';

export default function LeaderGameTimerFace({
  timerw,
  onSelect,
  selectedPosition,
  namePostfix,
  game,
}: {
  timerw: number;
  onSelect?: () => void;
  selectedPosition?: number;
  namePostfix?: ReactNode;
  game: TeamGameImportable;
}) {
  const { timer } = useGameTimer(game, timerw);

  const [timerNode, openTimer] = useFullContent(close => {
    if (timer == null) return null;
    return (
      <LeaderGameTimerMaster
        game={game}
        close={close}
        timer={timer}
      />
    );
  });

  if (!timer) return null;

  return (
    <>
      {timerNode}
      <FaceItem onClick={() => openTimer()}>
        <span
          className={`face-logo ${selectedPosition ? 'selected' : ''}`}
          selected-position={selectedPosition || null}
          onClick={event => {
            event.stopPropagation();
            onSelect?.();
          }}
        >
          {LeaderCleans.getTimerConfigurableField('mode', timer, game) === GameTimerMode.Messager ? (
            <IconMessage01StrokeRounded />
          ) : (
            <IconClock01StrokeRounded />
          )}
        </span>
        <span className="face-title flex between full-width">
          <span className="flex flex-gap">
            {!timer.w ? (
              <span className="color--7">Новый таймер{timer.name ? ` - ${timer.name}` : ''}</span>
            ) : (
              <span className={`${timer.isInactive ? 'text-strike' : ''}`}>
                {timer.name}
                {timer.fio ? ` (${timer.fio})` : ''}
              </span>
            )}
            {namePostfix}
          </span>
          {!!timer.comments?.length && (
            <div>
              <IconMessage01StrokeRounded />
              <sub>{timer.comments.length}</sub>
            </div>
          )}
        </span>
      </FaceItem>
    </>
  );
}
