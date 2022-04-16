import { HTMLAttributes } from "react";

export default function LoadIndicatedContentSpinner(
  props: HTMLAttributes<HTMLDivElement>
) {
  return (
    <>
      <div
        onAnimationIteration={props.onAnimationIteration}
        className="load-indicated-content-spinner"
      >
        <div className="load-indicated-content-spinner-part dot-part reye-part"></div>
        <div className="load-indicated-content-spinner-part dot-part leye-part"></div>
        <div className="load-indicated-content-spinner-part dot-part point-part"></div>
        <div className="load-indicated-content-spinner-part dot-part top-part"></div>
        <div className="load-indicated-content-spinner-part dot-part bot-part"></div>
        <div className="load-indicated-content-spinner-part lip-part"></div>
        <div className="load-indicated-content-spinner-part lip-part second"></div>
      </div>
    </>
  );
}
