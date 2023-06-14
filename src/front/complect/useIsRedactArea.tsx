import { useState } from "react";
import EvaButton from "./eva-icon/EvaButton";

type booleanOrNil = boolean | nil;
type OnEditStart = ((isSelfRedact: boolean) => void) | nil;

export default function useIsRedactArea(
  redactable?: booleanOrNil,
  redact?: booleanOrNil,
  canRedact?: booleanOrNil,
  isShowDoneButton?: booleanOrNil,
  onEditStart?: OnEditStart,
) {
  return useIsRedactAreaWithInit(false,
    redactable,
    redact,
    canRedact,
    isShowDoneButton,
    onEditStart
  );
}

export function useIsRedactAreaWithInit(
  init: boolean,
  redactable?: booleanOrNil,
  redact?: booleanOrNil,
  canRedact?: booleanOrNil,
  isShowDoneButton?: booleanOrNil,
  onEditStart?: OnEditStart,
) {
  const [isSelfRedact, setIsSelfRedact] = useState(init);
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
