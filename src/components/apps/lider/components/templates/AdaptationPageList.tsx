import useLeaderContexts from "../contexts/useContexts";
import AdaptationPage from "./AdaptationPage";

export default function AdaptationPageList() {
  const { ccontext } = useLeaderContexts();
  return (
    <>
      {ccontext?.membersReadyToPlay()?.map((human) => (
        <AdaptationPage human={human} />
      ))}
    </>
  );
}
