import { ReactNode } from 'react';
import EvaIcon from '../../../../../../complect/eva-icon/EvaIcon';
import useFullContent from '../../../../../../complect/fullscreen-content/useFullContent';
import { TeamGameImportable } from '../../../Leader.model';
import { LeaderCleans } from '../../LeaderCleans';
import { GameTimerMode } from './GameTimer.model';
import LeaderGameTimerMaster from './GameTimerMaster';
import useGameTimer from './useGameTimer';

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
      <div
        className="face-item"
        onClick={() => openTimer()}
      >
        <span
          className={`face-logo ${selectedPosition ? 'selected' : ''}`}
          selected-position={selectedPosition || null}
          onClick={event => {
            event.stopPropagation();
            onSelect?.();
          }}
        >
          <EvaIcon
            name={
              LeaderCleans.getTimerConfigurableField('mode', timer, game) === GameTimerMode.Messager
                ? 'message-circle-outline'
                : 'clock-outline'
            }
          />
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
              <EvaIcon name="message-square-outline" />
              <sub>{timer.comments.length}</sub>
            </div>
          )}
        </span>
      </div>
    </>
  );
}
