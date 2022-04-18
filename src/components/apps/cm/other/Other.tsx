import JImage from "../../../../complect/Image";
import PhaseCmContainer from "../complect/phase-container/PhaseCmContainer";

export default function Other() {
  return (
    <PhaseCmContainer
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
