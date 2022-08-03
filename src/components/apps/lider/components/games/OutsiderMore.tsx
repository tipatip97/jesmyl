import EvaIcon from "../../../../../complect/eva-icon/EvaIcon";
import modalService from "../../../../../complect/modal/Modal.service";
import { liderExer } from "../../Lider.store";
import Human from "../people/Human";
import GameTeam from "./teams/GameTeam";
import Game from "./Game";

export default function OutsiderMore({
  human,
  game,
}: {
  human: Human;
  game: Game;
}) {
  return (
    <>
      <div
        className="abs-item"
        onClick={() => {
          let targetTeam: GameTeam;

          modalService.open({
            description: `В какую команду определить участни${
              human.isMan ? "ка" : "цу"
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
                  liderExer.send({
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
        }}
      >
        <EvaIcon name="person-add-outline" className="abs-icon" />
        <div>Определить в команду</div>
        <div className="abs-action" />
      </div>
    </>
  );
}
