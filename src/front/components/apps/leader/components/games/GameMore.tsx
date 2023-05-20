import useAbsoluteBottomPopup from "../../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import { leaderExer } from "../../Leader.store";
import PrintableBottomItem from "../PrintableBottomItem";
import GameTeamLists from "./templates/GameTeamLists";
import GameTeamPassportNames from "./templates/GameTeamPassportNames";
import GameTeamPassports from "./templates/GameTeamPassports";

export default function GameMore({
  selectedTimers,
  close,
  onGameRemove,
}: {
  selectedTimers?: number[];
  close: () => void;
  onGameRemove: () => void,
}) {
  const { prepareAbsoluteBottomPopupContent } = useAbsoluteBottomPopup();

  return (
    <>
      <PrintableBottomItem
        node={<GameTeamPassports selectedTimers={selectedTimers} />}
        title="Игровые паспорта"
        close={close}
      />
      <PrintableBottomItem
        node={<GameTeamPassportNames selectedTimers={selectedTimers} />}
        title="Игровые названия паспортов"
        close={close}
      />
      <PrintableBottomItem
        node={<GameTeamLists />}
        title="Списки команд"
        close={close}
      />
      {
        prepareAbsoluteBottomPopupContent({
          items: [
            leaderExer.actionAccessedOrNull("removeTeamGame") &&
            {
              title: 'Удалить игру',
              icon: "trash-outline",
              isError: true,
              onClick: onGameRemove,
            }]
        })}
    </>
  );
}
