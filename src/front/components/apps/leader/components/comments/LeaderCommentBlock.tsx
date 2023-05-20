import { ReactNode, useMemo, useState } from "react";
import EvaButton from "../../../../../complect/eva-icon/EvaButton";
import EvaIcon, { EvaIconName } from "../../../../../complect/eva-icon/EvaIcon";
import KeyboardInput from "../../../../../complect/keyboard/KeyboardInput";
import mylib from "../../../../../complect/my-lib/MyLib";
import LeaderComment from "./LeaderComment";
import {
  LeaderCommentImportable,
  SendingCommentsAreaName
} from "./LeaderComment.model";
import "./LeaderComment.scss";
import useLeaderComments from "./useLeaderComments";

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
  placeholder,
  action,
  arean,
  gamew,
  listw,
  listwNameMask,
  isWaitedToSend,
  importantActionOnClick,
  onRejectSend,
  newCommentTextChange,
}: {
  comments?: LeaderCommentImportable[];
  placeholder: string;
  arean: SendingCommentsAreaName;
  gamew?: number;
  listw: number;
  listwNameMask: string,
  action: string;
  isWaitedToSend?: boolean;
  importantActionOnClick?: (comment: string) => void;
  newCommentTextChange?: (comment: string) => void;
  onRejectSend?: (comment: LeaderCommentImportable) => void;
}) {
  const [isCommentsShow, setIsCommentsShow] = useState(false);
  const [commentText, setCommentText] = useState('');
  const { sendingComments, sendComment, errorSentComments, rejectSending } =
    useLeaderComments();

  const allComments = useMemo(
    () =>
      mylib.unique(
        (comments || []).concat(
          gamew
            ? sendingComments[arean]?.[gamew]?.[listw]
              ?.map(({ comment }) => comment)
              .filter((comment) => comment) || []
            : []
        ),
        (comment) => comment.ts ?? NaN
      ),
    [arean, gamew, comments, listw, sendingComments]
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
              key={commenti}
              className={`${commenti === 0 ? "first" : ""} ${commenti === commenta.length - 1 ? "last" : ""}`}
              comment={comment}
              isError={errorSentComments.indexOf(comment.ts) > -1}
              isWaitedToSend={isWaitedToSend}
              onRejectSend={() =>
                onRejectSend
                  ? onRejectSend(comment)
                  : gamew && rejectSending(arean, gamew, listw, comment.ts)
              }
            />
          );
        }
      )}
      {
        <div className="flex column full-width">
          <KeyboardInput
            className="margin-gap"
            multiline
            value={commentText}
            placeholder={placeholder}
            onChange={(value) => {
              newCommentTextChange?.(value);
              setCommentText(value);
            }}
          />
          <div className="flex full-width between margin-gap pointer-children">
            <EvaButton
              name="paper-plane-outline"
              disabled={!commentText}
              onClick={() => {
                const comment = textAdditions.reduce(
                  (text, { char, inText }) =>
                    (char &&
                      inText &&
                      text.replace(RegExp(char, "g"), inText)) ||
                    text,
                  commentText
                );
                setCommentText('');
                newCommentTextChange?.('');

                if (importantActionOnClick) {
                  importantActionOnClick(comment);
                  return;
                }

                if (gamew) {
                  const ts = Date.now() + Math.random();

                  sendComment(arean, gamew, listw, {
                    ts,
                    exec: {
                      action,
                      method: "push",
                      args: {
                        ts,
                        gamew,
                        comment,
                        [listwNameMask]: listw,
                      },
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
              }}
            />
          </div>
        </div>
      }
    </div>
  );
}
