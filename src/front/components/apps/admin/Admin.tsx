import "./Admin.scss";
import { useAdminContext } from "./adminStorage";
import UserFace from "./complect/users/UserFace";
import PhaseAdminEditorContainer from "./phase-editor-container/PhaseAdminEditorContainer";

export default function Admin() {
  const { users } = useAdminContext();

  return (
    <PhaseAdminEditorContainer
      topClass="admin-application"
      withoutBackButton
      headTitle="Админ"
      content={
        <>
          {users.map((user) => (
            <UserFace key={`user-${user.login}`} user={user} />
          ))}
        </>
      }
    />
  );
}
