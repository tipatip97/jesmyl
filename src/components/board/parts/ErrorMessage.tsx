import { useSelector } from "react-redux";
import { RootState } from "../../../shared/store";
import { BorderErrorScope } from "../Board.model";

export default function BoardErrorMessage({
  scope,
}: {
  scope: BorderErrorScope;
}) {
  const message = useSelector((state: RootState) => state.index.errorMessage);
  const errorScope = useSelector((state: RootState) => state.index.errorScope);

  if (!message || errorScope !== scope) return null;

  return <div style={{ color: "red" }}>{message}</div>;
}
