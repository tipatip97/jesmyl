import { ReactNode, useEffect, useMemo, useState } from "react";
import EvaIcon, { EvaIconName } from "../../../../../complect/eva-icon/EvaIcon";
import useKeyboard from "../../../../../complect/keyboard/useKeyboard";
import mylib from "../../../../../complect/my-lib/MyLib";
import LeaderComment from "./LeaderComment";
import {
  LeaderCommentImportable,
  SendingCommentsAreaName,
} from "./LeaderComment.model";
import useLeaderComments from "./useLeaderComments";
import "./LeaderComment.scss";

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
  action,
  arean,
  areaw,
  listw,
  isWaitedToSend,
  importantActionOnClick,
  onRejectSend,
  newCommentTextChange,
}: {
  comments?: LeaderCommentImportable[];
  inputId: string;
  placeholder: string;
  arean: SendingCommentsAreaName;
  areaw?: number;
  listw: number;
  action: string;
  isWaitedToSend?: boolean;
  importantActionOnClick?: (comment: string) => void;
  newCommentTextChange?: (comment: string) => void;
  onRejectSend?: (comment: LeaderCommentImportable) => void;
}) {
  const [isCommentsShow, setIsCommentsShow] = useState(false);
  const commentInput = useKeyboard()(inputId, {
    className: `margin-gap`,
    multiline: true,
    placeholder,
    mapChar: (char) => textAdditionsMap[char]?.node || char,
    onChange: (value) => newCommentTextChange?.(value),
  });
  const { sendingComments, sendComment, errorSentComments, rejectSending } =
    useLeaderComments();

  useEffect(() => {
    return () => {
      commentInput.remove();
    };
  }, []);

  const allComments = useMemo(
    () =>
      mylib.unique(
        (comments || []).concat(
          areaw
            ? sendingComments[arean]?.[areaw]?.[listw]
                ?.map(({ comment }) => comment)
                .filter((comment) => comment) || []
            : []
        ),
        (comment) => comment.ts ?? NaN
      ),
    [arean, areaw, comments, listw, sendingComments]
  );
  const partOfComments = allComments.slice(-4);

  return (
    <div className="leader-comment-block full-width">
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
              isError={errorSentComments.indexOf(comment.ts) > -1}
              isWaitedToSend={isWaitedToSend}
              onRejectSend={() =>
                onRejectSend
                  ? onRejectSend(comment)
                  : areaw && rejectSending(arean, areaw, listw, comment.ts)
              }
            />
          );
        }
      )}
      {
        <div className="flex column full-width">
          {commentInput.node}
          <div className="flex full-width between margin-gap pointer-children">
            {textAdditions.map(({ icon, char, insert }, buttoni) => {
              return (
                <EvaIcon
                  key={`buttoni-${buttoni}`}
                  name={icon}
                  onClick={() => {
                    commentInput.write(char ?? (insert?.() || ""));
                    commentInput.focus();
                  }}
                />
              );
            })}
            <EvaIcon
              name="paper-plane-outline"
              className={commentInput.value() ? "" : "disabled"}
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
                  commentInput.value("");

                  if (importantActionOnClick) {
                    importantActionOnClick(comment);
                    return;
                  }

                  if (areaw) {
                    const ts = Date.now() + Math.random();
                    const args = { comment, areaw, listw, ts };

                    sendComment(arean, areaw, listw, {
                      ts,
                      exec: {
                        action,
                        method: "push",
                        args,
                      },
                      comment: {
                        w: 0,
                        comment,
                        fio: "",
                        owner: "",
                        ts,
                      },
                    });
                  }
                }
              }}
            />
          </div>
        </div>
      }
    </div>
  );
}
