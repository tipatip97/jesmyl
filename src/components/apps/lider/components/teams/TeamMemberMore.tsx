import EvaIcon from "../../../../../complect/eva-icon/EvaIcon";
import modalService from "../../../../../complect/modal/Modal.service";
import { liderExer } from "../../Lider.store";
import Human from "../people/Human";
import Team from "./Team";

export default function TeamMemberMore({
  human,
  team,
}: {
  human: Human;
  team: Team;
}) {
  return (
    <>
      <div
        className="abs-item"
        onClick={async () => {
          if (team.game) {
            const isDel = await modalService.confirm(
              `Исключить участни${human.isMan ? "ка" : "цу"} ${
                human.name
              } из команды "${team.upperName}"?`,
              "Исключить"
            );

            if (isDel) {
              liderExer.send({
                action: "removeMemberFromTeam",
                method: "remove",
                args: {
                  humanId: human.id,
                  teamw: team.wid,
                  gamew: team.game.wid,
                },
              });
            }
          }
        }}
      >
        <EvaIcon name="person-delete-outline" className="abs-icon" />
        <div>Исключить участника</div>
        <div className="abs-action" />
      </div>
    </>
  );
}
