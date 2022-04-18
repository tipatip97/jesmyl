import EvaIcon from "../../../../../complect/eva-icon";
import useFullscreenContent from "../../../../../complect/fullscreen-content/useFullscreenContent";
import { Com } from "../../col/com/Com";
import FullscreenExpandComList from "./FullscreenExpandComList";

export default function LocalListToolsPopup({ coms }: { coms?: Com[] }) {
  const { openFullscreenContent } = useFullscreenContent();
  return (
    <>
      {coms ? (
        <div
          className="abs-item pointer"
          onClick={() =>
            openFullscreenContent(<FullscreenExpandComList coms={coms} />)
          }
        >
          <EvaIcon name="book-open-outline" className="abs-icon" />
          <div>Открыть песни списка</div>
          <div className="abs-action" />
        </div>
      ) : null}
    </>
  );
}
