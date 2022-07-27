import { HTMLAttributes, useState } from "react";
import mylib from "../../../../../complect/my-lib/MyLib";
import { TeamInGameCommentExportable } from "./LeaderComment.model";

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
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  comment: TeamInGameCommentExportable;
}) {
  const date = new Date(comment.w);
  const isNeedCut = comment.comment.split(/\n/).length > 5;
  const [isHiddenPart, setIsHiddenPart] = useState(isNeedCut);
  const commentText = isHiddenPart
    ? comment.comment.split(/\n/).slice(0, 4).join("\n") + " ..."
    : comment.comment;

  return (
    <div {...props} className={`${props.className || ""} margin-gap comment`}>
      <div className="flex between">
        <div>{comment.fio}</div>
        <div>
          {date.getDate()} {months[date.getMonth()]}, {date.getHours()}:
          {date.getMinutes()}:{date.getSeconds()}
        </div>
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
