import useAbsoluteBottomPopup from "../../../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import modalService from "../../../../../../complect/modal/Modal.service";
import { leaderExer } from "../../../Leader.store";
import Human from "../../people/Human";
import GameTeam from "./GameTeam";

export default function GameTeamMemberMore({
  human,
  team,
}: {
  human: Human,
  team: GameTeam,
}) {
  const { prepareAbsoluteBottomPopupContent } = useAbsoluteBottomPopup();
  return prepareAbsoluteBottomPopupContent({
    items: [{
      title: 'Исключить личность',
      icon: "person-delete-outline",
      onClick: async () => {
        if (team.game) {
          const isDel = await modalService.confirm(
            `Исключить участни${human.isMan ? "ка" : "цу"} ${human.name
            } из команды "${team.upperName}"?`,
            "Исключить"
          );

          if (isDel) {
            leaderExer.send({
              action: "removeMemberFromTeam",
              method: "remove",
              args: {
                humanw: human.wid,
                teamw: team.wid,
                gamew: team.game.wid,
              },
            });
          }
        }
      },
    }]
  });
}
