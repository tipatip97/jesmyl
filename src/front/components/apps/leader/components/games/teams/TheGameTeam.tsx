import { useState } from "react";
import useAbsoluteBottomPopup from "../../../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import { TeamGameImportable } from "../../../Leader.model";
import { leaderExer } from "../../../Leader.store";
import LeaderCommentBlock from "../../comments/LeaderCommentBlock";
import useLeaderContexts from "../../contexts/useContexts";
import HumanFace from "../../people/HumanFace";
import GameTeamMemberMore from "./GameTeamMemberMore";
import { GameTeamImportable } from "./GameTeams.model";
import { LeaderCleans } from "../../LeaderCleans";

export default function TheGameTeam({
  team,
  redactable,
  noComments,
  game,
  onTeamRename,
}: {
  team: GameTeamImportable,
  game: TeamGameImportable,
  redactable?: boolean,
  noComments?: boolean,
  onTeamRename?: () => void,
}) {
  const [isHumansShow, setIsHumansShow] = useState(!(redactable ?? false));
  const { openAbsoluteBottomPopup } = useAbsoluteBottomPopup();
  const { contextMembers } = useLeaderContexts();
  const teamMembers = LeaderCleans.extractWidables(contextMembers, team.members);

  return (
    <div className="the-team-card padding-big-gap">
      <span
        className={'text-bold user-select' + (onTeamRename ? ' pointer ' : '')}
        onClick={onTeamRename}
      >{team.name}</span>
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
          gamew={game.w}
          listw={team.w}
          listwNameMask="teamw"
          comments={team.comments}
          isWaitedToSend={!redactable}
        />
      )}
    </div>
  );
}
