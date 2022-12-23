import EvaIcon from "../../../../../complect/eva-icon/EvaIcon";
import modalService from "../../../../../complect/modal/Modal.service";
import { liderExer } from "../../Lider.store";
import useLiderNav from "../../useLiderNav";
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
  const { goBack } = useLiderNav();

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
      {liderExer.actionAccessedOrNull("removeTeamGame") && (
        <div
          className="abs-item pointer error-message"
          onClick={async () => {
            if (
              game &&
              (await modalService.confirm(
                `Удалить игру "${game.name}" окончательно?`
              ))
            )
              game.remove().then(() => goBack());
          }}
        >
          <EvaIcon name="trash-outline" className="abs-icon" />
          <div>Удалить игру</div>
          <div className="abs-action"></div>
        </div>
      )}
    </>
  );
}
