import { ReactNode, useEffect, useState } from "react";
import useAbsoluteBottomPopup from "../../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import EvaIcon, { EvaIconName } from "../../../../../complect/eva-icon/EvaIcon";
import useKeyboard from "../../../../../complect/keyboard/useKeyboard";
import { HumanTeamCommentSend } from "../../Lider.model";
import { liderExer } from "../../Lider.store";
import HumanFace from "../people/HumanFace";
import RandomTwiceName from "../RandomTwiseName";
import Team from "./Team";
import "./Team.scss";
import TeamMemberMore from "./TeamMemberMore";
import TheTeamComment from "./TheTeamComment";

interface Addition {
  icon: EvaIconName;
  char?: string;
  inText?: string;
  node: ReactNode;
  insert?: () => string;
}

const textAdditions = (
  [
    {
      icon: "clock-outline",
      insert: () => {
        const date = new Date();
        return ` ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}.${date.getMilliseconds()} `;
      },
    },
  ] as Addition[]
).map((item) => {
  return {
    ...item,
    node: <EvaIcon name={item.icon} />,
  };
});

const textAdditionsMap: Record<string, Addition> = {};
textAdditions.forEach(
  (adds) => adds.char && (textAdditionsMap[adds.char] = adds)
);

export default function TheTeam({
  team,
  redactable,
}: {
  team: Team;
  redactable?: boolean;
}) {
  let redactBlock = null;
  const [pronoun, noun] = team.name.split(" ");
  const [isHumansShow, setIsHumansShow] = useState(!(redactable ?? false));
  const [isCommentsShow, setIsCommentsShow] = useState(!(redactable ?? false));
  const [isCommentSending, setIsCommentSending] = useState(false);
  let commentInput: ReturnType<ReturnType<typeof useKeyboard>> | und;
  const inputGenerator = useKeyboard();
  const { openAbsoluteBottomPopup } = useAbsoluteBottomPopup();

  useEffect(() => {
    return () => {
      commentInput?.remove();
    };
  }, []);

  if (redactable) {
    commentInput = inputGenerator(
      `commentInput ${team.wid} ${team.game?.wid || "##"}`,
      {
        className: `margin-gap ${isCommentSending ? "pointers-none" : ""}`,
        multiline: true,
        placeholder: `Комментарий о "${team.upperName}"`,
        mapChar: (char) => textAdditionsMap[char]?.node || char,
      }
    );
    const allComments = team.comments || [];
    const partOfComments = allComments.slice(-4);

    redactBlock = (
      <>
        <div
          className="margin-gap pointer"
          onClick={() => setIsHumansShow(!isHumansShow)}
        >
          {isHumansShow ? "Скрыть" : "Показать"} участников
        </div>
        {partOfComments.length !== allComments.length && (
          <div
            className="margin-gap pointer"
            onClick={() => setIsCommentsShow(!isCommentsShow)}
          >
            {isCommentsShow
              ? "Скрыть часть комментариев"
              : "Показать все комментарии"}
          </div>
        )}

        {(isCommentsShow ? allComments : partOfComments).map(
          (comment, commenti, commenta) => {
            return (
              <TheTeamComment
                key={`commenti-${commenti}`}
                className={`${commenti === 0 ? "first" : ""} ${
                  commenti === commenta.length - 1 ? "last" : ""
                }`}
                comment={comment}
              />
            );
          }
        )}
        {commentInput && (
          <div className="flex column full-width">
            <div className="flex full-width">
              {textAdditions.map(({ icon, char, insert }, buttoni) => {
                return (
                  <EvaIcon
                    key={`buttoni-${buttoni}`}
                    name={icon}
                    onClick={() => {
                      if (commentInput) {
                        commentInput.write(char ?? (insert?.() || ""));
                        commentInput.focus();
                      }
                    }}
                  />
                );
              })}
            </div>
            {commentInput.node}
            {isCommentSending ? (
              <EvaIcon className="margin-gap rotate" name="loader-outline" />
            ) : (
              !!commentInput.value() && (
                <EvaIcon
                  name="paper-plane-outline"
                  className="pointer margin-gap"
                  onClick={() => {
                    if (team.game && commentInput) {
                      const comment = textAdditions.reduce(
                        (text, { char, inText }) =>
                          (char &&
                            inText &&
                            text.replace(RegExp(char, "g"), inText)) ||
                          text,
                        commentInput.value()
                      );
                      setIsCommentSending(true);
                      liderExer.send(
                        {
                          action: "addCommentToGameTeam",
                          method: "push",
                          args: {
                            wid: Date.now() + Math.random(),
                            comment: comment.trim(),
                            teamw: team.wid,
                            gamew: team.game.wid,
                          } as HumanTeamCommentSend,
                        },
                        () => {
                          setIsCommentSending(false);
                          commentInput?.value("");
                        }
                      );
                    }
                  }}
                />
              )
            )}
          </div>
        )}
      </>
    );
  }

  return (
    <div className="the-team-card padding-giant-gap">
      <RandomTwiceName
        pronoun={pronoun}
        noun={noun}
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
              onMoreClick={() => {
                openAbsoluteBottomPopup(
                  <TeamMemberMore human={human} team={team} />
                );
              }}
            />
          );
        })}
      {redactBlock}
    </div>
  );
}
