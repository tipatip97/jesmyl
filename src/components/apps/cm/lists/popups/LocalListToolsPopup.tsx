import EvaIcon from "../../../../../complect/eva-icon/EvaIcon";
import useFullscreenContent from "../../../../../complect/fullscreen-content/useFullscreenContent";
import { Com } from "../../col/com/Com";
import useTranslation from "../../translation/useTranslation";
import FullscreenExpandComList from "./FullscreenExpandComList";

export default function LocalListToolsPopup({ coms }: { coms?: Com[] }) {
  const { openFullscreenContent } = useFullscreenContent();
  const { openTranslations, isShowFullscreen } = useTranslation();

  return (
    <>
      {coms ? (
        <>
          <div
            className="abs-item pointer"
            onClick={() =>
              openFullscreenContent(<FullscreenExpandComList coms={coms} />)
            }
          >
            <EvaIcon name="book-open-outline" className="abs-icon" />
            <div>Раскрыть песни списка</div>
            <div className="abs-action" />
          </div>
          <div className="abs-item pointer" onClick={() => openTranslations(true)}>
            <EvaIcon
              name={isShowFullscreen ? "play-outline" : "monitor-outline"}
              className="abs-icon"
            />
            <div>Показывать слайды списка</div>
            <div className="abs-action" />
          </div>
        </>
      ) : null}
    </>
  );
}
