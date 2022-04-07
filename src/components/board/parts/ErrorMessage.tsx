import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { BorderErrorScope } from "../Board.model";

export default function BoardErrorMessage({
  scope,
}: {
  scope: BorderErrorScope;
}) {
  const message = useSelector((state: RootState) => state.board.errorMessage);
  const errorScope = useSelector((state: RootState) => state.board.errorScope);

  if (!message || errorScope !== scope) return null;

  return <div style={{ color: "red" }}>{message}</div>;
}
