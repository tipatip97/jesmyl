import { useState } from "react";
import useAbsoluteBottomPopup from "../../../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import { liderExer } from "../../../Lider.store";
import LeaderCommentBlock from "../../comments/LeaderCommentBlock";
import HumanFace from "../../people/HumanFace";
import RandomTwiceName from "../../RandomTwiseName";
import GameTeam from "./GameTeam";
import GameTeamMemberMore from "./GameTeamMemberMore";

export default function TheGameTeam({
  team,
  redactable,
}: {
  team: GameTeam;
  redactable?: boolean;
}) {
  const [pronoun, noun] = team.name?.split(" ") || [];
  const [isHumansShow, setIsHumansShow] = useState(!(redactable ?? false));
  const { openAbsoluteBottomPopup } = useAbsoluteBottomPopup();
  const [updates, riseUpUpdates] = useState(0);
  const [, setName] = useState("");
  const forceUpdate = () => riseUpUpdates(updates + 1);

  return (
    <div className="the-team-card padding-giant-gap">
      <RandomTwiceName
        pronoun={pronoun}
        noun={noun}
        canChange={!redactable}
        className="user-select inline-block margin-gap-v text-bold"
        onNameChange={(name) => setName((team.name = name))}
      />
      {" (сила - " +
        team.humans.reduce((acc, { ufp }) => acc + ufp, 0).toFixed(1) +
        ") "}
      {isHumansShow &&
        team.humans.map((human, humani) => {
          return (
            <HumanFace
              key={`human ${humani}`}
              human={human}
              onMoreClick={
                liderExer.actionAccessedOrUnd("removeMemberFromTeam") &&
                (() => {
                  openAbsoluteBottomPopup(
                    <GameTeamMemberMore human={human} team={team} />
                  );
                })
              }
            />
          );
        })}
      <div
        className="margin-gap pointer"
        onClick={() => setIsHumansShow(!isHumansShow)}
      >
        {isHumansShow ? "Скрыть" : "Показать"} участников
      </div>

      <LeaderCommentBlock
        inputId={`commentInput ${team.wid || team.ts} ${
          team.game?.wid || "##"
        }`}
        placeholder={`Комментарий о "${team.upperName}"`}
        comments={team.comments}
        arean="gameTeams"
        areaw={team.game?.wid}
        listw={team.wid}
        action="addCommentToGameTeam"
        {...(!redactable && {
          isWaitedToSend: true,
          importantActionOnClick: (comment) => {
            team.includeNewComment(comment);
            forceUpdate();
          },
          onRejectSend: (comment) => team.removeComment(comment),
        })}
      />
    </div>
  );
}
