import { PropsWithChildren } from "react";
import { CorrectsBox } from "../corrects-box/CorrectsBox";

export default function PhaseCmEditorContainerItem(
  props: PropsWithChildren<{
    corrects?: CorrectsBox | nil;
    action: string;
  }>
) {
  const { action, corrects, children } = props;

  return (
    <div
      className={`editable-block ${
        corrects && corrects?.errors?.length
          ? "error"
          : corrects && corrects?.warnings?.length
          ? "warning"
          : ""
      }`}
    >
      {children}
      <div className="corrects-container">
        {corrects &&
          corrects?.errors?.map(({ message, onFix }, errori) => {
            return (
              <div
                key={`error-corrects-for "${action}" action : ${errori}`}
                className="error-box"
              >
                {message}
                {onFix && (
                  <p className="fix-button" onClick={() => onFix()}>
                    Исправить
                  </p>
                )}
              </div>
            );
          })}
        {corrects &&
          corrects?.warnings?.map(({ message }, warningi) => {
            return (
              <p
                key={`warning-corrects-for "${action}" action : ${warningi}`}
                className="warning-box"
              >
                {message}
              </p>
            );
          })}
      </div>
    </div>
  );
}
