import { PropsWithChildren } from "react";
import { CorrectsBox } from "../corrects-box/CorrectsBox";
import { ICorrect } from "../corrects-box/CorrectsBox.model";
import "./EditContainerCorrectsInformer.scss";

export default function EditContainerCorrectsInformer(
  props: PropsWithChildren<{
    corrects?: CorrectsBox | nil;
    uniq: string;
  }>
) {
  const { uniq, corrects, children } = props;
  const errors = corrects?.errors || [];
  const warnings = corrects?.warnings || [];
  const unknowns = corrects?.unknowns || [];

  return (
    <div className="edit-container-corrects-informer">
      {children}
      <div className="corrects-container">
        {(
          [
            ["error", errors],
            ["warning", warnings],
            ["unknown", unknowns],
          ] as [string, ICorrect[]][]
        ).map(([correct, line]) => {
          return line?.map(({ message, onFix, fixLabel }, correcti) => {
            return (
              <div
                key={`${correct}-corrects-for "${uniq}" action : ${correcti}`}
                className={`${correct} correct-box`}
              >
                {message}
                {onFix && (
                  <div className="fix-button" onClick={() => onFix()}>
                    {fixLabel || "Исправить"}
                  </div>
                )}
              </div>
            );
          });
        })}
      </div>
    </div>
  );
}
