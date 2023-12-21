import Dropdown from '../../../../../../../complect/dropdown/Dropdown';
import { GameTimerMode, timerModeAliasList, timerModeAliases } from '../GameTimer.model';

export default function TimerModeSelector({
  mode,
  onSelect,
  isRedact = true,
}: {
  mode: GameTimerMode;
  onSelect?: (item: { id: GameTimerMode; title: string }) => void;
  isRedact?: boolean;
}) {
  return (
    <>
      <div className="dropdown-ancestor margin-big-gap-v flex flex-gap full-width">
        <span className="nowrap">Тип таймера</span>
        {isRedact ? (
          <Dropdown
            id={mode}
            items={timerModeAliasList}
            onSelect={onSelect}
            placeholder="Тип не выбран"
          />
        ) : (
          <div className="color--3">{timerModeAliases[mode] || ' - '}</div>
        )}
      </div>
    </>
  );
}
