import useAbsoluteBottomPopup from "../../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import modalService from "../../../../../complect/modal/Modal.service";
import { TeamGameImportable } from "../../Leader.model";
import { leaderExer } from "../../Leader.store";
import { HumanImportable } from "../people/People.model";
import { GameTeamImportable } from "./teams/GameTeams.model";

export default function OutsiderMore({
  human,
  game,
}: {
  human: HumanImportable;
  game: TeamGameImportable;
}) {
  const { prepareAbsoluteBottomPopupContent } = useAbsoluteBottomPopup();
  return prepareAbsoluteBottomPopupContent({
    items: [{
      title: 'Определить в команду',
      icon: "person-add-outline",
      onClick: () => {
        let targetTeam: GameTeamImportable;

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
                    humanw: human.w,
                    teamw: targetTeam.w,
                    gamew: game.w,
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
