import usePeople from "../people/usePeople";
import AdaptationPage from "./AdaptationPage";

export default function AdaptationPageList() {
  const { people } = usePeople();
  return (
    <>
      {people?.activeHumans?.map((human) => (
        <AdaptationPage human={human} />
      ))}
    </>
  );
}
