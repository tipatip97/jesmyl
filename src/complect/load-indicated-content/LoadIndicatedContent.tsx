import { PropsWithChildren, useEffect, useMemo, useRef, useState } from "react";
import "./LoadIndicatedContent.scss";
import LoadIndicatedContentSpinner from "./LoadIndicatedContentSpinner";

const loadingClassName = "loading-process";
const endingClassName = "ending-process";
const contentReadyClassName = "content-is-ready";

export default function LoadIndicatedContent(
  props: PropsWithChildren<{ isLoading: boolean; onLoad?: () => void }>
) {
  const [isLoading, setIsLoading] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [isEnding, setIsEnding] = useState(false);
  const initTime = useMemo(() => Date.now(), []);
  const container = useRef<HTMLDivElement>(null);

  const onEnd = () => {
    if (container.current) {
      container.current.classList.remove(endingClassName, loadingClassName);
      container.current.classList.add(contentReadyClassName);
    }
    setTimeout(() => {
      setIsEnding(false);
      setIsLoading(false);
      setIsReady(true);
      props.onLoad && props.onLoad();
    });
  };

  useEffect(() => {
      console.log(props.isLoading);
    if (props.isLoading) setIsLoading(true);
    else {
      if (Date.now() - initTime < 30) onEnd();
      else {
        setIsReady(true);
        setTimeout(() => setIsLoading(false), 1100);
      }
    }
  }, [props.isLoading]);

  console.log(
    isLoading && !isEnding
      ? loadingClassName
      : isEnding
      ? endingClassName
      : isReady
      ? contentReadyClassName
      : "");

  return (
    <div
      className={`load-indicated-content-container ${
        isLoading && !isEnding
          ? loadingClassName
          : isEnding
          ? endingClassName
          : isReady
          ? contentReadyClassName
          : ""
      }`}
      onClick={() => setIsReady(true)}
      ref={container}
    >
      <div
        className="load-indicated-content-spinner-container"
        onAnimationEnd={() => isEnding && onEnd()}
      >
        <LoadIndicatedContentSpinner
          onAnimationIteration={() => isReady && setIsEnding(true)}
        />
      </div>
      {isLoading ? null : props.children}
    </div>
  );
}
