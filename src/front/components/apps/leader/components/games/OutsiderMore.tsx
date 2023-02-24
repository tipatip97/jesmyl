import useAbsoluteBottomPopup from "../../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import modalService from "../../../../../complect/modal/Modal.service";
import { leaderExer } from "../../Leader.store";
import Human from "../people/Human";
import Game from "./Game";
import GameTeam from "./teams/GameTeam";

export default function OutsiderMore({
  human,
  game,
}: {
  human: Human;
  game: Game;
}) {
  const { prepareAbsoluteBottomPopupContent } = useAbsoluteBottomPopup();
  return prepareAbsoluteBottomPopupContent({
    items: [{
      title: 'Определить в команду',
      icon: "person-add-outline",
      onClick: () => {
        let targetTeam: GameTeam;

        modalService.open({
          description: `В какую команду определить участни${human.isMan ? "ка" : "цу"
            } ${human.name}?`,
          inputs: game.teams?.map((team) => {
            return {
              value: team.name,
              type: "button",
              closable: false,
              onClick: () => (targetTeam = team),
            };
          }),
          buttons: [
            "Отмена",
            {
              title: () => `Добавить в ${targetTeam?.name}`,
              hidden: () => !targetTeam,
              onClick: () => {
                leaderExer.send({
                  action: "addMemberToTeam",
                  method: "push",
                  args: {
                    humanw: human.wid,
                    teamw: targetTeam.wid,
                    gamew: game.wid,
                  },
                });
              },
            },
          ],
        });
      },
    }]
  });
}
