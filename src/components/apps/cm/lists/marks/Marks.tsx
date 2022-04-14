import PhaseContainer from "../../base/phase-container/PhaseContainer";
import ComFace from "../../col/com/face/ComFace";
import { useMarks } from "./useMarks";

export default function Marks() {
  const { markedComs } = useMarks();
  return (
    <PhaseContainer
      topClass="favorites-container"
      head={"Избранное"}
      content={markedComs.map((com) => (
        <ComFace
          key={`marked-com-${com.wid}`}
          com={com}
          specialPhase="marked"
        />
      ))}
    />
  );
}
