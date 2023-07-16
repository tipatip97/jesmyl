import { useState } from "react";
import { useBottomPopup } from "../../../../../../complect/absolute-popup/useBottomPopup";
import useAuth from "../../../../../index/useAuth";
import { TeamGameImportable } from "../../../Leader.model";
import { leaderExer } from "../../../Leader.store";
import { LeaderCleans } from "../../LeaderCleans";
import LeaderCommentBlock from "../../comments/LeaderCommentBlock";
import useLeaderContext from "../../contexts/useContexts";
import HumanFace from "../../people/HumanFace";
import GameTeamMemberMore from "./GameTeamMemberMore";
import { GameTeamImportable } from "./GameTeams.model";

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
  const [memberw, setMemberw] = useState(0);
  const auth = useAuth();
  const { contextMembers } = useLeaderContext();
  const teamMembers = LeaderCleans.extractWidables(contextMembers, team.members);
  const [memberMoreNode, openMemberMore] = useBottomPopup((_, prepare) => {
    const member = teamMembers.find(member => member.w === memberw);
    if (member === undefined) return null;

    return <GameTeamMemberMore human={member} team={team} game={game} prepare={prepare} />
  });

  return (
    <div className="the-team-card padding-big-gap">
      {memberMoreNode}
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
                leaderExer.actionAccessedOrUnd("removeMemberFromTeam", auth) &&
                (() => {
                  setMemberw(member.w);
                  openMemberMore();
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
