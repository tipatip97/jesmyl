import "./Admin.scss";
import UserFace from "./complect/users/UserFace";
import useUsers from "./complect/users/useUsers";
import PhaseAdminEditorContainer from "./phase-editor-container/PhaseAdminEditorContainer";

export default function Admin() {
  const { users } = useUsers();
  const usersUses = useUsers();

  return (
    <PhaseAdminEditorContainer
      topClass="admin-application"
      withoutBackButton
      headTitle="Админ"
      content={
        <>
          {users.map((user) => (
            <UserFace key={`user-${user.login}`} user={user} uses={usersUses} />
          ))}
        </>
      }
    />
  );
}
