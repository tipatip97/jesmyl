import { HTMLAttributes, useState } from "react";
import useAbsoluteFloatPopup from "../../../../../complect/absolute-popup/useAbsoluteFloatPopup";
import EvaIcon from "../../../../../complect/eva-icon/EvaIcon";
import mylib from "../../../../../complect/my-lib/MyLib";
import { LeaderCommentImportable } from "./LeaderComment.model";

const templaterBag = {
  commentTime: (wid: number) => {
    const date = new Date(Math.trunc(wid));
    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  },
};

const months = [
  "янв",
  "фев",
  "март",
  "апр",
  "май",
  "июн",
  "июл",
  "авг",
  "сент",
  "окт",
  "нояб",
  "дек",
];

export default function LeaderComment({
  comment,
  isError,
  onRejectSend,
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  comment: LeaderCommentImportable;
  isError: boolean;
  onRejectSend?: () => void;
}) {
  const date = comment.w && new Date(comment.w);
  const isNeedCut = comment.comment.split(/\n/).length > 5;
  const [isHiddenPart, setIsHiddenPart] = useState(isNeedCut);
  const commentText = isHiddenPart
    ? comment.comment.split(/\n/).slice(0, 4).join("\n") + " ..."
    : comment.comment;
  const { openAbsoluteFloatPopup } = useAbsoluteFloatPopup();

  return (
    <div
      {...props}
      className={`${props.className || ""} margin-gap comment`}
      onContextMenu={
        isError
          ? (event) => {
              event.preventDefault();
              openAbsoluteFloatPopup(
                <div className="pointer" onClick={() => onRejectSend?.()}>
                  Отменить отправку
                </div>,
                event.clientX,
                event.clientY
              );
            }
          : undefined
      }
    >
      <div className="flex between color--1 relative text-height-block">
        {date === 0 ? (
          <>
            <div />
            {isError ? (
              <EvaIcon
                className="absolute pos-right error-message"
                name="alert-circle-outline"
              />
            ) : (
              <EvaIcon
                className="rotate absolute pos-right"
                name="loader-outline"
              />
            )}
          </>
        ) : (
          <>
            <div>{comment.fio}</div>
            <div>
              {date.getDate()} {months[date.getMonth()]}, {date.getHours()}:
              {date.getMinutes()}:{date.getSeconds()}
            </div>
          </>
        )}
      </div>
      <div className="text-bold user-select margin-gap-v">
        {mylib.stringTemplater(commentText, {
          ...templaterBag,
          ...comment,
        })}
      </div>
      {isNeedCut && (
        <div className="flex flex-end">
          <span
            className="pointer"
            onClick={() => setIsHiddenPart(!isHiddenPart)}
          >
            {isHiddenPart ? "Показать полностью" : "Скрыть часть текста"}
          </span>
        </div>
      )}
    </div>
  );
}
