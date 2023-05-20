import { useState } from "react";
import useAbsoluteBottomPopup from "../../../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import { TeamGameImportable } from "../../../Leader.model";
import { leaderExer } from "../../../Leader.store";
import RandomTwiceName from "../../RandomTwiseName";
import LeaderCommentBlock from "../../comments/LeaderCommentBlock";
import useLeaderContexts from "../../contexts/useContexts";
import HumanFace from "../../people/HumanFace";
import GameTeamMemberMore from "./GameTeamMemberMore";
import { GameTeamImportable } from "./GameTeams.model";

export default function TheGameTeam({
  team,
  redactable,
  noComments,
  game,
}: {
  team: GameTeamImportable;
  game: TeamGameImportable,
  redactable?: boolean;
  noComments?: boolean;
}) {
  const [isHumansShow, setIsHumansShow] = useState(!(redactable ?? false));
  const { openAbsoluteBottomPopup } = useAbsoluteBottomPopup();
  const [, setName] = useState("");
  const { extractWidable, contextMembers } = useLeaderContexts();
  const teamMembers = extractWidable(contextMembers, team.members);

  return (
    <div className="the-team-card padding-giant-gap">
      <RandomTwiceName
        name={team.name}
        canChange={!redactable}
        className="user-select inline-block margin-gap-v text-bold"
        onNameChange={(name) => setName(name)}
      />
      {" (сила - " +
        teamMembers.reduce((acc, { ufp1, ufp2 }) => acc + (ufp1 + ufp2) / 2, 0).toFixed(1) +
        ") "}
      {isHumansShow &&
        teamMembers.map((member, humani) => {
          return (
            <HumanFace
              key={humani}
              human={member}
              onMoreClick={
                leaderExer.actionAccessedOrUnd("removeMemberFromTeam") &&
                (() => {
                  openAbsoluteBottomPopup(
                    <GameTeamMemberMore human={member} team={team} game={game} />
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
        <strong> {team.members.length}</strong>
      </div>

      {noComments || (
        <LeaderCommentBlock
          placeholder={`Комментарий о "${team.name}"`}
          action="addCommentToGameTeam"
          arean="gameTeams"
          gamew={game.w}
          listw={team.w}
          listwNameMask="teamw"
          comments={team.comments}
          {...(!redactable && {
            isWaitedToSend: true,
            importantActionOnClick: (comment) => {
              includeNewComment(comment);
            },
            onRejectSend: (comment) => removeComment(comment.ts),
          })}
        />
      )}
    </div>
  );
}

const removeComment = (commentw: number) => {};
const includeNewComment = (comment: string) => {
  // if (this.comments == null) this.comments = [];
  // this.comments = [...this.comments, {
  //     comment,
  //     fio: '',
  //     owner: '',
  //     ts: SourceBased.makeNewTs(),
  //     w: 0,
  // }];
};
