import { PropsWithChildren, useEffect, useMemo, useState } from "react";
import "./LoadIndicatedContent.scss";

const enum State {
  Initial = "initial-state",
  Loading = "loading-process",
  Loaded = "content-loaded",
  Ending = "ending-process",
  Ready = "content-is-ready",
}

export default function LoadIndicatedContent(
  props: PropsWithChildren<{ isLoading: boolean; onLoad?: () => void }>
) {
  const [state, setState] = useState(State.Initial);
  const initTime = useMemo(() => Date.now(), []);

  const onEnd = () => {
    setState(State.Loaded);
    props.onLoad && props.onLoad();
  };

  useEffect(() => {
    if (props.isLoading) setState(State.Loading);
    else {
      if (Date.now() - initTime < 200) onEnd();
      else setState(State.Ready);
    }
  }, [props.isLoading]);

  return (
    <div className={`load-indicated-content-container ${state}`}>
      <div
        className="load-indicated-content-spinner-container"
        onAnimationEnd={() => state === State.Ending && onEnd()}
      >
        <div
          onAnimationIteration={() =>
            state === State.Ready && setState(State.Ending)
          }
          className="load-indicated-content-spinner"
        >
          <svg
            x="0px"
            y="0px"
            viewBox="0 0 306 386.64"
            className="smile-container"
          >
            <path
              className="smile-dot"
              d="M82.54,2.24c13.69,5.94,19.98,21.85,14.05,35.55S74.74,57.77,61.04,51.83C47.35,45.9,41.06,29.98,47,16.29
        C52.93,2.59,68.84-3.7,82.54,2.24z"
            />
            <path
              className="smile-line"
              d="M160.32,30.33c68.8,21.21,118.35,85.23,118.35,160.92c0,93-75.47,168.39-168.57,168.39
	c-30.08,0-58.32-7.87-82.76-21.66"
            />
          </svg>
        </div>
      </div>
      {state === State.Loaded ? props.children : null}
    </div>
  );
}
