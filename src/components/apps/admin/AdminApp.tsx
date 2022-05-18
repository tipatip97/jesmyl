import { ReactNode } from "react";
import { adminStorage } from "../../../shared/jstorages";
import useUsers from "./complect/users/useUsers";

export default function AdminApp({ content }: { content: ReactNode }) {
  const { updateVisits, updateUserList } = useUsers();

  adminStorage.listen("userVisits", "AdminApp", (val) => updateVisits(val));
  adminStorage.listen("userList", "AdminApp", (val) => updateUserList(val));

  return <>{content}</>;
}
