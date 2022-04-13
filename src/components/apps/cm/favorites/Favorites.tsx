import PhaseContainer from "../base/phase-container/PhaseContainer";
import ComFace from "../col/com/face/ComFace";
import { useMarks } from "../marks/useMarks";

export default function Favorites() {
  const { markedComs } = useMarks();
  return (
    <PhaseContainer
      topClass="favorites-container"
      head={"Избранное"}
      content={markedComs.map((com) => (
        <ComFace key={`favorite-com-${com.wid}`} com={com} forPhase="favorite_com" />
      ))}
    />
  );
}
