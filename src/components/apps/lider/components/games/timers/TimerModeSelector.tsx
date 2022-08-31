import Dropdown from "../../../../../../complect/dropdown/Dropdown";
import useGames from "../useGames";
import {
  GameTimerMode,
  timerModeAliases,
  timerModeAliasList,
} from "./GameTimer.model";

export default function TimerModeSelector({
  mode,
  onSelect,
  isRedact = true,
  addItems,
  hideable,
}: {
  mode: GameTimerMode;
  onSelect: (item: { id: GameTimerMode; title: string }) => void;
  isRedact?: boolean;
  hideable?: boolean;
  addItems?: { id: GameTimerMode; title: string }[];
}) {
  // const { cgame } = useGames();
  // // if (hideable && cgame?.timerFields?.mode) return null;

  return (
    <>
      <div className="dropdown-ancestor margin-big-gap-v flex flex-gap full-width">
        <span className="nowrap">Тип таймера</span>
        {isRedact ? (
          <Dropdown
            id={mode}
            items={timerModeAliasList.concat(addItems || [])}
            onSelect={onSelect}
            placeholder="Тип не выбран"
          />
        ) : (
          <div className="color--3">{timerModeAliases[mode] || " - "}</div>
        )}
      </div>
    </>
  );
}
