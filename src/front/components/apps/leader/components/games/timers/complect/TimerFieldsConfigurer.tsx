import { useMemo, useState } from 'react';
import { MyLib, mylib } from 'front/utils';
import SendButton from '../../../../../../../complect/sends/send-button/SendButton';
import IconButton from '../../../../../../../complect/the-icon/IconButton';
import { IconArrowDown02StrokeRounded } from '../../../../../../../complect/the-icon/icons/arrow-down-02';
import { IconArrowUp02StrokeRounded } from '../../../../../../../complect/the-icon/icons/arrow-up-02';
import { IconCancel01StrokeRounded } from '../../../../../../../complect/the-icon/icons/cancel-01';
import useIsRedactArea from '../../../../../../../complect/useIsRedactArea';
import { TeamGameImportable } from '../../../../Leader.model';
import { LeaderCleans } from '../../../LeaderCleans';
import { GameTimerConfigurable, GameTimerMode, GameTimerSortDirection } from '../GameTimer.model';
import TimerCompetitionsSelector from './TimerCompetitionsSelector';
import TimerModeSelector from './TimerModeSelector';
import TimerSortRatingVariantSelector from './TimerSortRatingVariantSelector';

export default function TimerFieldsConfigurer({
  redact,
  redactable,
  onSend,
  onUpdate,
  game,
}: {
  timerFields?: GameTimerConfigurable;
  redact?: boolean;
  redactable?: boolean;
  game?: TeamGameImportable;
  onUpdate?: (fields: GameTimerConfigurable) => void;
  onSend?: (fields: GameTimerConfigurable) => Promise<unknown> | und;
}) {
  const [isSending, setIsSending] = useState(false);
  const { editIcon, isRedact, setIsSelfRedact } = useIsRedactArea(redactable, redact);

  const [state, setState] = useState<GameTimerConfigurable>(game?.timerFields || {});
  const updateState = <Key extends keyof GameTimerConfigurable>(key: Key, val: GameTimerConfigurable[Key]) => {
    const newState = {
      ...state,
      [key]: val,
    };
    onUpdate?.(newState);
    setState(newState);
  };

  const teams = useMemo(() => {
    const teams = game?.teams ? [...game.teams] : [];
    const stateTeams = state.teams;
    if (stateTeams) teams?.sort((a, b) => stateTeams.indexOf(a.w) - stateTeams.indexOf(b.w));

    return teams;
  }, [state.teams, game?.teams]);

  if (!game) return null;

  return (
    <div className="margin-gap">
      <h2 className="flex flex-gap">Значения полей в таймерах{editIcon}</h2>
      <div className={isSending ? 'disabled' : ''}>
        <TimerModeSelector
          mode={state.mode ?? GameTimerMode.None}
          isRedact={isRedact}
          onSelect={({ id }) => updateState('mode', id)}
        />
        <TimerCompetitionsSelector
          joins={state.joins ?? 1}
          teams={teams}
          isRedact={isRedact}
          onSelect={({ id }) => updateState('joins', id)}
        />
        <TimerSortRatingVariantSelector
          sort={state.sort ?? GameTimerSortDirection.Desc}
          isRedact={isRedact}
          onSelect={({ id }) => updateState('sort', id)}
        />
        <div>
          <div className="flex flex-gap">
            Последовательность команд
            {isRedact ? (
              <IconButton
                Icon={IconCancel01StrokeRounded}
                disabled={!state.teams}
                onClick={() => updateState('teams', undefined)}
              />
            ) : (
              <div className="color--3">{state.teams ? 'Специальная сортировка' : 'По умолчанию'}</div>
            )}
          </div>
          {isRedact &&
            teams?.map((team, teami) => {
              const Icon = teami ? IconArrowUp02StrokeRounded : IconArrowDown02StrokeRounded;

              return (
                <div
                  key={teami}
                  className={'flex flex-gap' + (state.joins && !((teami + 1) % state.joins) ? ' margin-big-gap-b' : '')}
                >
                  <Icon
                    className="as-button-circle"
                    onClick={() => {
                      const gameTeamws = game.teams?.map(team => team.w);
                      const newTeams = state.teams ? [...state.teams] : [...(gameTeamws || [])];

                      if (teami) [newTeams[teami - 1], newTeams[teami]] = [newTeams[teami], newTeams[teami - 1]];
                      else [newTeams[teami + 1], newTeams[teami]] = [newTeams[teami], newTeams[teami + 1]];

                      updateState('teams', mylib.isEq(newTeams, gameTeamws) ? undefined : newTeams);
                    }}
                  />
                  {team.name}
                </div>
              );
            })}
        </div>
      </div>
      {isRedact && onSend && !mylib.isEq(game?.timerFields, state) && (
        <div>
          <SendButton
            title="Отправить значения"
            confirm
            onFailure={() => setIsSending(false)}
            onSuccess={() => {
              setIsSending(false);
              setIsSelfRedact(false);
            }}
            onSend={() => {
              setIsSending(true);
              return LeaderCleans.publicateGameTimerFields(game.w, state);
            }}
          />
        </div>
      )}
    </div>
  );
}
