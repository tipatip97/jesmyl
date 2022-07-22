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
}: {
  comment: HumanTeamComment;
}) {
  const date = new Date(comment.w);

  return (
    <div className="margin-gap comment">
      <div className="flex between">
        <div>{comment.fio}</div>
        <div>
          {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}
        </div>
      </div>
      <div className="text-bold margin-gap-v">
        {mylib.stringTemplater(comment.comment, {
          ...templaterBag,
          ...comment,
        })}
      </div>
    </div>
  );
}
