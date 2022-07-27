import { ReactNode, useEffect, useState } from "react";
import EvaIcon, { EvaIconName } from "../../../../../complect/eva-icon/EvaIcon";
import useKeyboard from "../../../../../complect/keyboard/useKeyboard";
import LeaderComment from "./LeaderComment";
import { TeamInGameCommentExportable } from "./LeaderComment.model";

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

export default function LeaderCommentBlock({
  comments,
  inputId,
  placeholder,
  onSend,
}: {
  comments?: TeamInGameCommentExportable[];
  inputId: string;
  placeholder: string;
  onSend: (comment: string) => Promise<void>;
}) {
  const [isCommentsShow, setIsCommentsShow] = useState(!false);
  const [isCommentSending, setIsCommentSending] = useState(false);
  let commentInput: ReturnType<ReturnType<typeof useKeyboard>> | und;
  const inputGenerator = useKeyboard();

  useEffect(() => {
    return () => {
      commentInput?.remove();
    };
  }, []);

  commentInput = inputGenerator(inputId, {
    className: `margin-gap ${isCommentSending ? "pointers-none" : ""}`,
    multiline: true,
    placeholder,
    mapChar: (char) => textAdditionsMap[char]?.node || char,
  });

  const allComments = comments || [];
  const partOfComments = allComments.slice(-4);

  return (
    <>
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
            <LeaderComment
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
                  if (commentInput) {
                    const comment = textAdditions.reduce(
                      (text, { char, inText }) =>
                        (char &&
                          inText &&
                          text.replace(RegExp(char, "g"), inText)) ||
                        text,
                      commentInput.value()
                    );
                    setIsCommentSending(true);
                    onSend(comment.trim()).then(() => {
                      setIsCommentSending(false);
                      commentInput?.value("");
                    });
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
