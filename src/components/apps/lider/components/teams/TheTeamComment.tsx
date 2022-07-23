import { HTMLAttributes, useState } from "react";
import mylib from "../../../../../complect/my-lib/MyLib";
import { HumanTeamComment } from "../../Lider.model";

const templaterBag = {
  commentTime: (wid: number) => {
    const date = new Date(Math.trunc(wid));
    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  },
};

export default function TheTeamComment({
  comment,
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  comment: HumanTeamComment;
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
          {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}
        </div>
      </div>
      <div className="text-bold margin-gap-v">
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
