import { useState } from "react";
import EvaButton from "./eva-icon/EvaButton";

export default function useIsRedactArea(
  redactable: boolean | nil,
  redact: boolean | nil,
  canRedact?: boolean | nil,
  isShowDoneButton?: boolean | nil,
  onEditStart?: ((isSelfRedact: boolean) => void) | nil,
) {
  const [isSelfRedact, setIsSelfRedact] = useState(false);
  const isCanRedact = !!(canRedact == null || canRedact);

  const ret = {
    isSelfRedact,
    isRedact:
      isCanRedact &&
      (redact ?? (redactable == null ? isSelfRedact : redactable && isSelfRedact)),
    setIsSelfRedact,
    editIcon: redactable && isCanRedact
      ? !(redact ?? isSelfRedact)
        ? <EvaButton
          name="edit-outline"
          className="edit-button"
          onClick={(event) => {
            event.stopPropagation();
            if (redact == null) setIsSelfRedact(true);
            onEditStart?.(true);
          }}
        />
        : isShowDoneButton && <EvaButton
          name="checkmark-circle-2-outline"
          className="edit-button color--ok"
          disabled={redact === true && !isSelfRedact}
          onClick={(event) => {
            event.stopPropagation();
            setIsSelfRedact(false);
            onEditStart?.(false);
          }}
        />
      : null,
  };

  return ret;
}
