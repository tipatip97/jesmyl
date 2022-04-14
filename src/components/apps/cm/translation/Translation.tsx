import { useEffect, useState } from "react";
import EvaIcon from "../../../../complect/eva-icon/EvaIcon";
import PhaseContainer from "../base/phase-container/PhaseContainer";
import useNav from "../base/useNav";
import ComFace from "../col/com/face/ComFace";
import { useMarks } from "../marks/useMarks";
import "./Translation.scss";
import TranslationScreen from "./TranslationScreen";
import useTranslation from "./useTranslation";

export default function Translations() {
  const {
    isShowFullscreen,
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
    closeTranslation,
    showMarks,
    isShowMarks,
  } = useTranslation();

  const [isShowCloseButton, setIsShowCloseButton] = useState(false);
  const { setPhase, isFullScreen } = useNav();
  const { markedComs } = useMarks();

  useEffect(() => {
    if (isShowFullscreen) {
      const gotoCom = () => setPhase("com");
      window.addEventListener("beforeunload", gotoCom);

      return () => window.removeEventListener("beforeunload", gotoCom);
    }
  }, []);

  if (isFullScreen)
    return (
      <div className="translation-container">
        {
          <div className="fullscreen-translation">
            <TranslationScreen
              fontSizeContainId="translation-native-window"
              position={position}
              updater={(update) =>
                window.addEventListener("resize", () => update())
              }
            />
            <div className="triple-area left" onClick={() => prevBlock()} />
            <div
              className="triple-area center"
              onClick={() => showMarks(!isShowMarks)}
              onDoubleClick={() => {
                setIsShowCloseButton(true);
                setTimeout(() => setIsShowCloseButton(false), 2000);
              }}
            >
              <div
                className={`close-translation-button ${
                  isShowCloseButton ? "show" : ""
                }`}
                onClick={(event) => {
                  event.stopPropagation();
                  closeTranslation();
                }}
              >
                <EvaIcon name="close-circle-outline" />
              </div>
            </div>
            <div className="triple-area right" onClick={() => nextBlock()} />
          </div>
        }
      </div>
    );

  return (
    <PhaseContainer
      topClass="translation-container"
      head="Трансляция"
      content={
        <>
          <div className="flex">
            <div
              className="translation-screen-wrapper"
              onClick={() => switchVisible()}
            >
              <div className="translation-screen-wrapper-inner">
                <TranslationScreen
                  fontSizeContainId="translation-native-window"
                  position={position}
                  updater={(update) =>
                    window.addEventListener("resize", () => update())
                  }
                />
              </div>
            </div>
            <div>
              {markedComs.map((com) => {
                return (
                  <ComFace key={`mark-to-translation_${com.wid}`} com={com} />
                );
              })}
            </div>
          </div>

          {blocks && (
            <div className="translations-line no-scrollbar">
              {blocks.map((block, blocki) => {
                return (
                  <div
                    key={`translations-line-item_${blocki}`}
                    id={`translation-window-line-${blocki}`}
                    className="translations-line-item"
                  >
                    <div>{blocki + 1}</div>
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
          <div className="control-panel flex between">
            <div className="button" onClick={() => prevBlock()}>
              <EvaIcon name="chevron-left-outline" />
            </div>
            <div className="button" onClick={() => nextBlock()}>
              <EvaIcon name="chevron-right-outline" />
            </div>
            <div
              className="start-translation button flex center"
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
                <EvaIcon name="play-outline" />
              )}
            </div>
            <div
              className={`button ${position === "center" ? "inactive" : ""}`}
              onClick={() => switchPosition()}
            >
              <EvaIcon name="upload-outline" />
            </div>
            <div className="button" onClick={() => switchVisible()}>
              <EvaIcon name="square-outline" />
            </div>
          </div>
        </>
      }
    />
  );
}
