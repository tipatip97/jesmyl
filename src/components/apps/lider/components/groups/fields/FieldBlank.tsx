import { useEffect, useMemo, useState } from "react";
import EvaIcon from "../../../../../../complect/eva-icon/EvaIcon";
import useKeyboard from "../../../../../../complect/keyboard/useKeyboard";
import modalService from "../../../../../../complect/modal/Modal.service";
import { useWid } from "../../../../../../complect/useWid";
import useLeaderContexts from "../../contexts/useContexts";
import {
  ContextFieldBlankExportable,
  contextFieldBlankTypeDictAliases,
} from "./Blanks.model";

export default function ContextFieldBlank({
  blank,
  redact,
  addition,
  onRedact,
  onDelete,
  importantOnRedactClick,
}: {
  blank: ContextFieldBlankExportable;
  redact?: boolean;
  addition?: boolean;
  onRedact?: (blank: ContextFieldBlankExportable) => void;
  onDelete?: () => void;
  importantOnRedactClick?: () => void;
}) {
  const [isInit, setIsInit] = useState(true);
  const [isInternalRedact, setIsRedact] = useState(redact ?? false);
  const inputGenerator = useKeyboard();
  const [key, setKey] = useState(blank.key);
  const [name, setName] = useState(blank.name);
  const [def, setDef] = useState(blank.def);
  const [value, setValue] = useState(blank.value);
  const [type, setType] = useState(blank.type);
  const { ccontext } = useLeaderContexts();
  const id = useWid();

  const isRedact = useMemo(
    () => isInternalRedact || redact,
    [isInternalRedact, redact]
  );

  let nameInput;
  let keyInput;
  let defInput;
  let valueInput;

  if (isRedact) {
    keyInput = inputGenerator(`${id}-field-back-key`, {
      preferLanguage: "en",
      onInput: (value) => {
        setKey(value);
      },
      initialValue: key,
      multiline: true,
    });
    nameInput = inputGenerator(`${id}-field-back-name`, {
      onInput: (value) => setName(value),
      initialValue: name,
      multiline: true,
    });
    defInput = inputGenerator(`${id}-field-back-def`, {
      onInput: (value) => setDef(value),
      initialValue: def,
      multiline: true,
    });
    valueInput = inputGenerator(`${id}-field-back-value`, {
      onInput: (value) => setValue(value),
      initialValue: value,
      multiline: true,
    });
  }

  useEffect(() => {
    if (isInit) {
      setIsInit(false);
      return;
    }
    onRedact?.({ name, def, type, value, key });
  }, [name, def, type, value, key]);

  return (
    <div className="margin-gap padding-gap border--3">
      <div className="flex flex-end full-width">
        {addition ? (
          <EvaIcon
            name="close"
            className="pointer"
            onClick={async () => {
              if (await modalService.confirm(`Удалить бланк ${name || key}?`))
                onDelete?.();
            }}
          />
        ) : isRedact ? null : (
          <EvaIcon
            name="edit-outline"
            className="pointer"
            onClick={importantOnRedactClick ?? (() => setIsRedact(true))}
          />
        )}
      </div>
      {!isRedact ? (
        <>
          <div>
            Ключ: <span className="color--3 user-select">{key}</span>
          </div>
          <div>
            Тип значения:{" "}
            <span className="color--3 user-select">
              {contextFieldBlankTypeDictAliases[type]}
            </span>
          </div>
          <div>
            Название: <span className="color--3 user-select">{name}</span>
          </div>
          <div>
            Тип значения:{" "}
            <span className="color--3 user-select">
              {contextFieldBlankTypeDictAliases[type]}
            </span>
          </div>
          <div>
            Значение по умолчанию:{" "}
            <span className="color--3 user-select">{def || "-"}</span>
          </div>
          <div>
            Конечное значение: <span className="color--3 user-select">{value || "-"}</span>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-gap margin-gap-v">
            Ключ {redact && addition ? keyInput?.node : blank.key}
          </div>
          <div>Тип значения {contextFieldBlankTypeDictAliases[blank.type]}</div>
          <div className="flex flex-gap margin-gap-v">
            Название {nameInput?.node}
          </div>
          <div className="flex flex-gap margin-gap-v">
            Значение по умолчанию {defInput?.node}
          </div>
          <div className="flex full-max-width flex-gap margin-gap-v">
            Конечное значение {valueInput?.node}
          </div>
        </>
      )}
    </div>
  );
}
