import LoadIndicatedContentSpinner from "./LoadIndicatedContentSpinner";
import "./LoadIndicatedContent.scss";
import { PropsWithChildren, useEffect, useState } from "react";

export default function LoadIndicatedContent(
  props: PropsWithChildren<{ isLoading: boolean }>
) {
  const [isLoading, setIsLoading] = useState(true);
  const [isReady, setIsReady] = useState(true);
  useEffect(() => {
    if (!props.isLoading) {
      setIsReady(true);
      setTimeout(() => setIsLoading(false), 1100);
    }
  }, [props.isLoading]);

  return (
    <div
      className={`load-indicated-content-container ${
        isLoading ? "loading-process" : ""
      }${isReady ? " content-is-ready" : ""}`}
    >
      <div className="load-indicated-content-spinner-container">
        <LoadIndicatedContentSpinner />
      </div>
      {isLoading ? null : props.children}
    </div>
  );
}
