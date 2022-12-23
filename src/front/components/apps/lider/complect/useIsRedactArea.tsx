import { useState } from "react";
import EvaIcon from "../../../../complect/eva-icon/EvaIcon";

export default function useIsRedactArea(
  redactable: boolean | nil,
  redact: boolean | nil,
  canRedact?: boolean | nil,
  onEditStart?: () => void
) {
  const [isRedact, setIsRedact] = useState(false);
  const isCanRedact = canRedact === undefined || canRedact;

  const ret = {
    isRedact:
      !!isCanRedact &&
      (redact ?? (redactable == null ? isRedact : redactable && isRedact)),
    setIsRedact,
    editIcon: !!isCanRedact && redactable && !(redact ?? isRedact) && (
      <EvaIcon
        name="edit-outline"
        onClick={() => {
          if (redact == null) setIsRedact(true);
          onEditStart?.();
        }}
      />
    ),
  };

  return ret;
}
