import { useState } from 'react';
import KeyboardInput from '../../../../../complect/keyboard/KeyboardInput';
import SendButton from '../../../../../complect/sends/send-button/SendButton';
import { TeamGameExportable } from '../../Leader.model';
import { leaderExer } from '../../leaderExer';
import { useLeaderCcontext } from '../contexts/useContexts';
import GameTeamListComputer from './GameTeamListComputer';
import { GameTeamImportable } from './teams/GameTeams.model';
import { GameTimerConfigurable } from './timers/GameTimer.model';
import TimerFieldsConfigurer from './timers/complect/TimerFieldsConfigurer';
import TimerNameListConfigurer from './timers/complect/TimerNameListConfigurer';
import useGames from './useGames';

export default function LeaderGameMaster({ close }: { close: () => void }) {
  const [isComputeTeamsLater, setIsComputeTeamsLater] = useState(true);
  const [teams, updateTeams] = useState<GameTeamImportable[] | und>();
  const [timerNames, updateTimerNames] = useState<string[] | und>();
  const [timerFields, updateTimerFields] = useState<GameTimerConfigurable | und>();
  const [name, setName] = useState('');
  const ccontext = useLeaderCcontext();
  const { cgame } = useGames();

  return (
    <div className="team-maker padding-giant-gap">
      <div className="flex full-width margin-big-gap-v">
        <div className="nowrap">Название игры</div>
        <div className="full-width margin-gap-h">
          <KeyboardInput onChange={setName} />
        </div>
      </div>
      <TimerNameListConfigurer
        redact
        onUpdate={updateTimerNames}
      />
      <TimerFieldsConfigurer
        redactable
        onUpdate={updateTimerFields}
      />
      <div
        className="flex flex-gap margin-gap-v pointer"
        onClick={() => setIsComputeTeamsLater(!isComputeTeamsLater)}
      >
        <input
          type="checkbox"
          checked={isComputeTeamsLater}
          onChange={() => {}}
        />
        Разбить на команды позже
      </div>
      {isComputeTeamsLater ||
        (cgame && (
          <GameTeamListComputer
            onUpdate={updateTeams}
            game={cgame}
            noComments
          />
        ))}
      <div className="flex center">
        {name && (isComputeTeamsLater || teams) ? (
          <SendButton
            title="Опубликовать игру"
            onSuccess={() => close()}
            confirm
            onSend={() => {
              if (!ccontext) return;

              return leaderExer.send({
                action: 'addTeamGame',
                method: 'push',
                args: {
                  ts: Date.now() + Math.random(),
                  name,
                  contextw: ccontext.w,
                  timerNames,
                  timerFields,
                  teams,
                } as TeamGameExportable,
              });
            }}
          />
        ) : null}
      </div>
    </div>
  );
}
