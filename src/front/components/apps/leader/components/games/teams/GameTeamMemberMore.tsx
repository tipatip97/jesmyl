import useAbsoluteBottomPopup from "../../../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import modalService from "../../../../../../complect/modal/Modal.service";
import { TeamGameImportable } from "../../../Leader.model";
import { leaderExer } from "../../../Leader.store";
import { HumanImportable } from "../../people/People.model";
import { GameTeamImportable } from "./GameTeams.model";

export default function GameTeamMemberMore({
  human,
  team,
  game,
}: {
  human: HumanImportable,
  team: GameTeamImportable,
  game: TeamGameImportable, 
}) {
  const { prepareAbsoluteBottomPopupContent } = useAbsoluteBottomPopup();
  return prepareAbsoluteBottomPopupContent({
    items: [{
      title: 'Исключить личность',
      icon: "person-delete-outline",
      onClick: async () => {
        if (game) {
          const isDel = await modalService.confirm(
            `Исключить участни${human.isMan ? "ка" : "цу"} ${human.name
            } из команды "${team.name}"?`,
            "Исключить"
          );

          if (isDel) {
            leaderExer.send({
              action: "removeMemberFromTeam",
              method: "remove",
              args: {
                humanw: human.w,
                teamw: team.w,
                gamew: game.w,
              },
            });
          }
        }
      },
    }]
  });
}
