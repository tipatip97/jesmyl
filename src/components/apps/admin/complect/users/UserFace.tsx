import EvaIcon from "../../../../../complect/eva-icon/EvaIcon";
import { User } from "./User";
import "./User.scss";
import useUsers from "./useUsers";

export default function UserFace({
  user,
  uses,
}: {
  user: User;
  uses: ReturnType<typeof useUsers>;
}) {
  return (
    <div
      className="user-face flex between full-width"
      onClick={() => uses.navToUser(user)}
      onContextMenu={(event) => event.preventDefault()}
    >
      <div className="logo">
        <EvaIcon name="person-outline" />
      </div>
      <span className="title ellipsis flex between full-width">
        <span>{user.name}</span>
        <span>{uses.visit(user)}</span>
      </span>
    </div>
  );
}
