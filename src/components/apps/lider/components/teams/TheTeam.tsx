import { ReactNode, useState } from "react";
import useAbsoluteBottomPopup from "../../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import EvaIcon, { EvaIconName } from "../../../../../complect/eva-icon/EvaIcon";
import { liderExer } from "../../Lider.store";
import { TeamInGameCommentSend } from "../comments/LeaderComment.model";
import LeaderCommentBlock from "../comments/LeaderCommentBlock";
import HumanFace from "../people/HumanFace";
import RandomTwiceName from "../RandomTwiseName";
import Team from "./Team";
import "./Team.scss";
import TeamMemberMore from "./TeamMemberMore";

export default function TheTeam({
  team,
  redactable,
}: {
  team: Team;
  redactable?: boolean;
}) {
  let redactBlock = null;
  const [pronoun, noun] = team.name?.split(" ") || [];
  const [isHumansShow, setIsHumansShow] = useState(!(redactable ?? false));
  const { openAbsoluteBottomPopup } = useAbsoluteBottomPopup();

  if (redactable) {
    redactBlock = (
      <>
        <div
          className="margin-gap pointer"
          onClick={() => setIsHumansShow(!isHumansShow)}
        >
          {isHumansShow ? "Скрыть" : "Показать"} участников
        </div>

        <LeaderCommentBlock
          inputId={`commentInput ${team.wid} ${team.game?.wid || "##"}`}
          placeholder={`Комментарий о "${team.upperName}"`}
          comments={team.comments}
          onSend={(comment) => {
            return new Promise((resolve, reject) => {
              if (team.game)
                liderExer.send({
                  action: "addCommentToGameTeam",
                  method: "push",
                  args: {
                    wid: Date.now() + Math.random(),
                    comment,
                    teamw: team.wid,
                    gamew: team.game.wid,
                  } as TeamInGameCommentSend,
                }, () => resolve(), () => reject());
            });
          }}
        />
      </>
    );
  }

  return (
    <div className="the-team-card padding-giant-gap">
      <RandomTwiceName
        pronoun={pronoun}
        noun={noun}
        canChange={!redactable}
        className="inline-block margin-gap-v text-bold"
        onNameChange={(name) => (team.name = name)}
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
                    <TeamMemberMore human={human} team={team} />
                  );
                })
              }
            />
          );
        })}
      {redactBlock}
    </div>
  );
}
