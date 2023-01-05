import EvaIcon from "../../../../../../complect/eva-icon/EvaIcon";
import modalService from "../../../../../../complect/modal/Modal.service";
import { leaderExer } from "../../../Leader.store";
import Human from "../../people/Human";
import GameTeam from "./GameTeam";

export default function GameTeamMemberMore({
  human,
  team,
}: {
  human: Human;
  team: GameTeam;
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
        }}
      >
        <EvaIcon name="person-delete-outline" className="abs-icon" />
        <div>Исключить личность</div>
        <div className="abs-action" />
      </div>
    </>
  );
}
