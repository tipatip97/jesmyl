import useAbsoluteFloatPopup from '../../../../../../../complect/absolute-popup/useAbsoluteFloatPopup';
import propsOfClicker from '../../../../../../../complect/clicker/propsOfClicker';
import EvaButton from '../../../../../../../complect/eva-icon/EvaButton';
import { TeamGameImportable } from '../../../../Leader.model';
import { LeaderCleans } from '../../../LeaderCleans';
import { GameTimerImportable } from '../GameTimer.model';

export default function TimerControlBoardRowPlayButton({
  timer,
  game,
  onTeamwReset,
  rowi,
  onStartForRow,
}: {
  rowi: number;
  game: TeamGameImportable;
  timer: GameTimerImportable;
  onTeamwReset: () => void;
  onStartForRow: (rowi: number, value?: number) => void;
}) {
  const { openAbsoluteFloatPopup } = useAbsoluteFloatPopup();

  return (
    <>
      <EvaButton
        name="play-circle-outline"
        className="start-button"
        onClick={() => onStartForRow(rowi)}
        disabled={!!timer.starts?.[rowi]}
        {...propsOfClicker({
          onCtxMenu: (event) => {
            event.preventDefault();
            event.stopPropagation();
            if (!timer.starts?.[rowi] || LeaderCleans.isTimerRowFinished(timer, game, rowi, false)) return;
            openAbsoluteFloatPopup(
              <div
                className="nowrap"
                onClick={() => {
                  onTeamwReset();
                  if (LeaderCleans.getTimerStartTs(timer, game, rowi)) onStartForRow(rowi, 0);
                }}
              >
                Сбросить начало
              </div>,
              event.clientX,
              event.clientY,
            );
          },
        })}
      />
    </>
  );
}
