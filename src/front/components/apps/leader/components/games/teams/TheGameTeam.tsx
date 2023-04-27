import { useState } from "react";
import useAbsoluteBottomPopup from "../../../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import { leaderExer } from "../../../Leader.store";
import LeaderCommentBlock from "../../comments/LeaderCommentBlock";
import HumanFace from "../../people/HumanFace";
import RandomTwiceName from "../../RandomTwiseName";
import GameTeam from "./GameTeam";
import GameTeamMemberMore from "./GameTeamMemberMore";

export default function TheGameTeam({
  team,
  redactable,
  noComments,
}: {
  team: GameTeam;
  redactable?: boolean;
  noComments?: boolean;
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
        team.members.reduce((acc, { ufp }) => acc + ufp, 0).toFixed(1) +
        ") "}
      {isHumansShow &&
        team.members.map((human, humani) => {
          return (
            <HumanFace
              key={`human ${humani}`}
              human={human}
              onMoreClick={
                leaderExer.actionAccessedOrUnd("removeMemberFromTeam") &&
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
        <strong> {team.memberIds.length}</strong>
      </div>

      {noComments || (
        <LeaderCommentBlock
          placeholder={`Комментарий о "${team.upperName}"`}
          action="addCommentToGameTeam"
          arean="gameTeams"
          gamew={team.game?.wid}
          listw={team.wid}
          listwNameMask="teamw"
          comments={team.comments}
          {...(!redactable && {
            isWaitedToSend: true,
            importantActionOnClick: (comment) => {
              team.includeNewComment(comment);
              forceUpdate();
            },
            onRejectSend: (comment) => team.removeComment(comment),
          })}
        />
      )}
    </div>
  );
}
