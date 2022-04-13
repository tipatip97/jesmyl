import Image from "../../../../complect/Image";
import PhaseContainer from "../base/phase-container/PhaseContainer";

export default function Other() {
  return (
    <PhaseContainer
      topClass="other-container"
      head="Другое"
      contentClass="flex column center"
      content={
        <>
          <Image src="CuteCat.png" style={{ width: "50vmin" }} />
          Раздел в разработке :)
        </>
      }
    />
  );
}
