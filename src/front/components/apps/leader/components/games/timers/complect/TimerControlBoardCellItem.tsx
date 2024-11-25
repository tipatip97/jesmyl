import { useEffect, useState } from 'react';
import StrongControlDateTimeExtracter from '../../../../../../../complect/strong-control/StrongDateTimeExtracter';
import IconButton from '../../../../../../../complect/the-icon/IconButton';
import { IconCheckmarkCircle02StrokeRounded } from '../../../../../../../complect/the-icon/icons/checkmark-circle-02';
import { IconEdit01StrokeRounded } from '../../../../../../../complect/the-icon/icons/edit-01';
import { TeamGameImportable } from '../../../../Leader.model';
import { LeaderCleans } from '../../../LeaderCleans';
import { GameTeamImportable } from '../../teams/GameTeams.model';
import { GameTimerImportable } from '../GameTimer.model';
import TimerControlBoardCellItemStopButton from './TimerControlBoardCellItemStopButton';
import TimerScreen from './TimerScreen';

export default function TimerControlBoardCellItem(props: {
  isTeamCantMove: boolean;
  isNewTimer: boolean;
  rowi: number;
  isHiddenTimers: boolean;
  isCanPauseForRow: boolean;
  selectedTeamw: number | null;
  timer: GameTimerImportable;
  team: GameTeamImportable;
  game: TeamGameImportable;
  teams?: GameTeamImportable[];
  onTeamsUpdate: (teams: GameTeamImportable[], teamws: number[]) => void;
  onTeamwSelect: (teamw: number | null) => void;
  onPauseForRow: (teamw: number, value?: number) => void;
  onFinishTimeChange: (newFinish: number) => Promise<unknown> | nil | void;
}) {
  const [isTimeRedact, setIsTimeRedact] = useState(false);
  const start = LeaderCleans.getTimerStartTs(props.timer, props.game, props.rowi);
  const pause = props.timer.finishes?.[props.team.w];

  const getInputValue = (pause: number | und, start: number) => {
    return pause ? LeaderCleans.getTimePeriodAsString(start, pause) : '';
  };

  const [inputValue, setInputValue] = useState(() => getInputValue(pause, start));
  const [timeDelta, setTimeDelta] = useState(0);

  useEffect(() => {
    setInputValue(getInputValue(pause, start));
  }, [pause, start]);

  return (
    <div
      className={
        'TimerControlBoardCellItem flex full-width' +
        (props.isTeamCantMove ? '' : ' pointer ') +
        (props.selectedTeamw ? (props.isTeamCantMove ? ' color--2 ' : ' color--7 ') : '  ') +
        (props.selectedTeamw === props.team.w ? ' selected-team ' : '')
      }
    >
      {!props.isNewTimer || (start && pause) ? (
        <IconButton
          Icon={isTimeRedact ? IconCheckmarkCircle02StrokeRounded : IconEdit01StrokeRounded}
          onClick={() => setIsTimeRedact(is => !is)}
        />
      ) : null}
      <div className="flex column full-width over-hidden">
        <div
          className="team-box full-max-width ellipsis"
          onClick={() => {
            if (props.team.w === props.selectedTeamw) {
              props.onTeamwSelect(null);
              return;
            }
            if (props.isTeamCantMove) return;
            if (!props.selectedTeamw) {
              props.onTeamwSelect(props.team.w);
              return;
            }

            const newTeams = [...(props.teams?.map(({ w }) => w) || [])];
            const selectedi = newTeams.indexOf(props.selectedTeamw);
            const teami = newTeams.indexOf(props.team.w);
            [newTeams[selectedi], newTeams[teami]] = [newTeams[teami], newTeams[selectedi]];
            props.onTeamsUpdate(
              newTeams
                .map(wid => props.teams?.find(team => team.w === wid))
                .filter(team => team) as GameTeamImportable[],
              newTeams,
            );
            props.onTeamwSelect(null);
          }}
        >
          {props.team.name}
        </div>

        {isTimeRedact ? (
          <>
            <StrongControlDateTimeExtracter
              scope=""
              fieldName=""
              value={inputValue}
              takeDate="NO"
              takeTime="hour-ms"
              onComponentsChange={setTimeDelta}
              onSend={() => props.onFinishTimeChange(timeDelta ? start + timeDelta : 0)}
            />
          </>
        ) : (!props.isHiddenTimers || pause) && (props.isNewTimer || pause) ? (
          <TimerScreen
            className="color--3"
            start={start}
            pause={pause}
          />
        ) : null}
      </div>

      {props.isNewTimer && props.isCanPauseForRow && (
        <div className="control-button  center pointer padding-gap">
          <TimerControlBoardCellItemStopButton
            onPauseForRow={props.onPauseForRow}
            onTeamwSelect={props.onTeamwSelect}
            rowi={props.rowi}
            team={props.team}
            timer={props.timer}
            game={props.game}
          />
        </div>
      )}
    </div>
  );
}
