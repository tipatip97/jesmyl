import { Exer } from "./Exer";
import { ExerStorage } from "./Exer.model";
import useExer from "./useExer";

export default function ExecList<Storage extends ExerStorage>({
  exer,
}: {
  exer: Exer<Storage>;
}) {
  const { execs } = useExer(exer);

  return (
    <div className="full-container flex center">
      {execs.map((exec) => {
        return <div key={exec.scope}>{exec.title}</div>;
      })}
    </div>
  );
}
