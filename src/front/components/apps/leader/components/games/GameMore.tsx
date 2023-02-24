import useAbsoluteBottomPopup from "../../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import modalService from "../../../../../complect/modal/Modal.service";
import { leaderExer } from "../../Leader.store";
import useLeaderNav from "../../useLeaderNav";
import PrintableBottomItem from "../PrintableBottomItem";
import Game from "./Game";
import GameTeamLists from "./templates/GameTeamLists";
import GameTeamPassportNames from "./templates/GameTeamPassportNames";
import GameTeamPassports from "./templates/GameTeamPassports";

export default function GameMore({
  selectedTimers,
  close,
  game,
}: {
  selectedTimers?: number[];
  close: () => void;
  game?: Game;
}) {
  const { goBack } = useLeaderNav();
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
              onClick: async () => {
                if (
                  game
                  && (await modalService.confirm(`Удалить игру "${game.name}" окончательно?`))
                )
                  game.remove().then(() => goBack());
              },
            }]
        })}
    </>
  );
}
