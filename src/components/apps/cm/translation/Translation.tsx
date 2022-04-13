import { useEffect, useState } from "react";
import EvaIcon from "../../../../complect/eva-icon/EvaIcon";
import PhaseContainer from "../base/phase-container/PhaseContainer";
import useNav from "../base/useNav";
import "./Translation.scss";
import TranslationScreen from "./TranslationScreen";
import useTranslation from "./useTranslation";

export default function Translations() {
  const {
    isTouchDevice,
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
  const { setPhase, isFullScreen, goBack } = useNav();

  useEffect(() => {
    if (isTouchDevice) {
      const gotoCom = () => setPhase("com");
      window.addEventListener("unload", gotoCom);

      return () => window.removeEventListener("unload", gotoCom);
    }
  });

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
      headClass="flex between"
      head={
        <>
          <div className="flex pointer">
            <div className="action-button" onClick={() => prevBlock()}>
              <EvaIcon name="arrow-left-outline" />
            </div>
            <div className="action-button" onClick={() => nextBlock()}>
              <EvaIcon name="arrow-right-outline" />
            </div>
            <div
              className={`action-button ${
                position === "center" ? "inactive" : ""
              }`}
              onClick={() => switchPosition()}
            >
              <EvaIcon name="upload-outline" />
            </div>
          </div>
          <div
            className="action-button"
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
        </>
      }
      content={
        <>
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

          {blocks && (
            <div className="translations-line">
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
        </>
      }
    />
  );
}
