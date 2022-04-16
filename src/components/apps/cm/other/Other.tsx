import JImage from "../../../../complect/Image";
import PhaseContainer from "../../../../complect/phase-container";

export default function Other() {
  return (
    <PhaseContainer
      topClass="other-container"
      head="Другое"
      contentClass="flex column center"
      content={
        <>
          <JImage src="CuteCat.png" style={{ width: "50vmin" }} />
          Раздел в разработке :)
        </>
      }
    />
  );
}
