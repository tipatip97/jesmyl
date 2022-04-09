import EvaIcon from "../../../../complect/eva-icon/EvaIcon";
import "./Translation.scss";
import TranslationScreen from "./TranslationScreen";
import useTranslation from "./useTranslation";

export default function Translations() {
  const {
    currWin,
    newTranslation,
    prevBlock,
    nextBlock,
    blocks,
    currBlocki,
    setBlocki,
    position,
    switchPosition,
    switchVisible,
  } = useTranslation();

  return (
    <div>
      <div>
        <div
          className={`mbtn msm ${currWin ? "m-no" : "m-ko"}`}
          onClick={(event) => {
            newTranslation(
              (event.view as any).screenLeft + event.clientX - 70,
              (event.view as any).screenTop + event.clientY + 70
            );
          }}
        >
          {currWin ? (
            <EvaIcon name="monitor-outline" />
          ) : (
            <EvaIcon name="play-circle-outline" />
          )}
        </div>
      </div>
      <div
        className="translation-screen-wrapper"
        onClick={() => switchVisible()}
      >
        <TranslationScreen
          fontSizeContainId="translation-native-window"
          position={position}
          updater={(update) =>
            window.addEventListener("resize", () => update())
          }
        />
      </div>
      <div>
        <div className="mbtn m-no msm" onClick={() => prevBlock()}>
          <EvaIcon name="arrow-left-outline" />
        </div>
        <div className="mbtn m-no msm" onClick={() => nextBlock()}>
          <EvaIcon name="arrow-right-outline" />
        </div>
        <div
          className={`mbtn msm m-no ${position === "center" ? "" : "mactive"}`}
          onClick={() => switchPosition()}
        >
          <EvaIcon name="upload-outline" />
        </div>
      </div>
      {blocks && (
        <div className="translations-line">
          {blocks.map((block, blocki) => {
            return (
              <div
                key={`translations-line-item_${blocki}`}
                id={`translation-window-line-${blocki}`}
                className="translations-line-item"
              >
                <div
                  className={`translations-line-item-inner ${
                    currBlocki === blocki ? "active" : ""
                  }`}
                  onClick={() => setBlocki(blocki)}
                  dangerouslySetInnerHTML={{ __html: block }}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
