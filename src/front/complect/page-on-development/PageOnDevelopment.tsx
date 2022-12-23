import JImage from "../Image";
import PhaseCmContainer from "../../components/apps/cm/complect/phase-container/PhaseCmContainer";
import { PhaseContainerProps } from "../phase-container/PhaseContainerConfigurer.model";

export default function PageOnDevelopment({
  head,
}: {
  head: PhaseContainerProps["head"];
}) {
  return (
    <PhaseCmContainer
      topClass="other-container"
      head={head}
      withoutBackButton
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
