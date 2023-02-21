import { ReactNode } from "react";
import { useDispatch } from "react-redux";
import adminStorage from "./adminStorage";
import useUsers from "./complect/users/useUsers";

export default function AdminApp({ content }: { content: ReactNode }) {
  const dispatch = useDispatch();
  const { updateVisits, updateUserList } = useUsers();

  adminStorage.dispatch(dispatch)
    .it("userVisits", updateVisits)
    .it("userList", updateUserList);

  return <>{content}</>;
}
