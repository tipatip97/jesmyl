import { useState } from 'react';
import Dropdown from '../../../../../../../complect/dropdown/Dropdown';
import IconButton from '../../../../../../../complect/the-icon/IconButton';
import { IconLeftToRightListBulletStrokeRounded } from '../../../../../../../complect/the-icon/icons/left-to-right-list-bullet';
import KeyboardInput from '../../../../../../../complect/keyboard/KeyboardInput';
import { TeamGameImportable } from '../../../../Leader.model';
import { LeaderCleans } from '../../../LeaderCleans';
import { GameTimerImportable, GameTimerMode, GameTimerSortDirection } from '../GameTimer.model';
import TimerCompetitionsSelector from './TimerCompetitionsSelector';
import TimerModeSelector from './TimerModeSelector';
import TimerSortRatingVariantSelector from './TimerSortRatingVariantSelector';
import { IconEdit01StrokeRounded } from '../../../../../../../complect/the-icon/icons/edit-01';

export default function TimerInfoPanel({
  onNameChange,
  onMapTimer,
  timer,
  game,
  isNewTimer,
  mode,
  sort,
  joins,
}: {
  game?: TeamGameImportable;
  timer: GameTimerImportable;
  joins: number;
  isNewTimer: boolean;
  mode: GameTimerMode;
  sort: GameTimerSortDirection;
  onNameChange: (name: string) => void;
  onMapTimer: (map: (timer: GameTimerImportable) => GameTimerImportable, isRejectSave?: boolean) => void;
}) {
  const [isWriteName, setIsWriteName] = useState(false);
  const [name, setName] = useState(timer?.name);

  const changeName = (name: string) => {
    onMapTimer(timer => ({ ...timer, name: name }));
    onNameChange(name);
    setName(name);
  };

  const membersInGame = game?.teams && LeaderCleans.rateSortedTimerTeams(timer, game, true).length;

  return (
    <>
      {isNewTimer ? (
        <>
          <span>Название</span>
          {!isWriteName && game?.timerNames?.length && (!name || game.timerNames.includes(name)) ? (
            <>
              <Dropdown
                placeholder="Выбрать название"
                id={timer.name}
                items={game.timerNames.map(name => ({
                  id: name,
                  title: name,
                }))}
                onSelect={({ id }) => changeName(id)}
              />
              <IconButton
                Icon={IconEdit01StrokeRounded}
                onClick={() => setIsWriteName(true)}
              />
            </>
          ) : (
            <>
              <KeyboardInput
                preferLanguage="ru"
                value={name}
                onInput={value => changeName(value)}
              />
              {!game?.timerNames?.length || (
                <IconButton
                  Icon={IconLeftToRightListBulletStrokeRounded}
                  onClick={() => {
                    setIsWriteName(false);
                    changeName('');
                  }}
                />
              )}
            </>
          )}
        </>
      ) : (
        <div>
          <div className="text-bold color--7">{timer.name}</div>
          <TimerModeSelector
            mode={mode}
            isRedact={false}
          />
          <TimerCompetitionsSelector
            joins={joins}
            isRedact={false}
          />
          <TimerSortRatingVariantSelector
            isRedact={false}
            sort={sort}
          />
          {mode !== GameTimerMode.Messager && (
            <div>
              {'Команд участвовало: '}
              {game?.teams &&
                (game.teams.length === membersInGame ? game.teams.length : `${membersInGame} / ${game.teams.length}`)}
            </div>
          )}
        </div>
      )}
    </>
  );
}
