import { useEffect, useState } from "react";
import Dropdown from "../../../../../complect/dropdown/Dropdown";
import EvaIcon from "../../../../../complect/eva-icon/EvaIcon";
import useExer from "../../../../../complect/exer/useExer";
import useKeyboard from "../../../../../complect/keyboard/useKeyboard";
import { liderExer } from "../../Lider.store";
import Human from "./Human";
import { HumanExportable } from "./Human.model";

const idMaker = (name: string[]) =>
  name
    .map((part) => part.toLowerCase())
    .sort()
    .join("_");

const ufpLabels = "1".repeat(10).split("");

export default function HumanMaster({
  human,
  close,
}: {
  human?: Human;
  close: () => void;
}) {
  const { exec } = useExer(liderExer);
  const [humanHeap, setHumanHeap] = useState("");
  const [ufp1, setUfp1] = useState<number | nil>(human?.ufp1);
  const [ufp2, setUfp2] = useState<number | nil>(human?.ufp2);
  const [isHumanHeap, setIsHumanHeap] = useState(false);
  const [isInactive, setIsInactive] = useState(human?.isInactive);
  const [isMan, setIsMan] = useState(human?.isMan ?? true);

  const nameInput = useKeyboard()("human-name", {
    placeholder: "Фамилия, Имя",
    initialValue: human?.name,
    setIsUnknownSymbols: (char) => !!/[^а-яё ]/i.exec(char),
    preferLanguage: "ru",
    onInput: !human
      ? undefined
      : (value, prev) => {
          liderExer.setIfCan({
            action: "setHumanName",
            scope: `setHumanName-${human.id}`,
            method: "set",
            prev,
            value,
            args: {
              id: human.id,
              value,
            },
          });
          exec();
        },
  });

  const notesInput = useKeyboard()("human-notes", {
    placeholder: "Заметки",
    initialValue: human?.notes,
    preferLanguage: "ru",
    onInput: !human
      ? undefined
      : (value, prev) => {
          liderExer.setIfCan({
            action: "setHumanNotes",
            scope: `setHumanNotes-${human.id}`,
            method: "set",
            prev,
            value,
            args: {
              id: human.id,
              value,
              humann: human.name,
            },
          });
          exec();
        },
  });

  const heapInput = useKeyboard()(`heap-human-input`, {
    className: "input",
    multiline: true,
    placeholder: "Массив участников",
    onChange: (value) => setHumanHeap(value),
    initialValue: "",
  });

  useEffect(() => {
    return () => {
      notesInput.remove();
      nameInput.remove();
    };
  }, []);

  return (
    <div className="full-container flex column padding-giant-gap">
      {human ? null : (
        <Dropdown
          id={isHumanHeap}
          className="margin-big-gap"
          items={[
            {
              id: true,
              title: "Добавить несколько участников",
            },
            {
              id: false,
              title: "Добавление участника",
            },
          ]}
          onSelect={({ id }) => setIsHumanHeap(id)}
        />
      )}
      {isHumanHeap ? (
        <>
          <div className="full-width">{heapInput.node}</div>
          {heapInput.value() ? (
            <div
              className="pointer"
              onClick={() => {
                const humans: HumanExportable[] = [];

                humanHeap.split("\n").forEach((line) => {
                  const [notes, ...name] = line.trim().split(/ +/).reverse();

                  humans.push({
                    notes: notes.replace(/[мm]/i, "м").replace(/[дd]/i, "д"),
                    name: name.reverse().join(" "),
                    isMan: !!/[мm]/i.exec(notes),
                    id: idMaker(name),
                    ufp1: 0,
                    ufp2: 0,
                  });
                });

                liderExer.setIfCan({
                  action: "addManyHumans",
                  method: "concat",
                  args: {
                    value: humans,
                  },
                });
                exec();
                close();
              }}
            >
              Разобрать
            </div>
          ) : null}
        </>
      ) : (
        <>
          <div className="full-width margin-big-gap-v">{nameInput.node}</div>
          <div className="full-width margin-big-gap-v">
            <Dropdown
              id={isMan}
              placeholder="Пол не указан"
              items={[
                {
                  id: true,
                  title: "Мужской",
                },
                {
                  id: false,
                  title: "Женский",
                },
              ]}
              onSelect={({ id }) => {
                setIsMan(id);
                if (human)
                  liderExer.setIfCan({
                    action: "setHumanIsMan",
                    scope: `setHumanIsMan-${human.id}`,
                    method: "set",
                    prev: human.isMan,
                    value: !isMan,
                    args: {
                      id: human.id,
                      value: !isMan,
                      humann: human.name,
                    },
                  });
                exec();
              }}
            />
          </div>
          {(
            [
              ["УФП1", "ufp1", "setHumanUfp1"],
              ["УФП2", "ufp2", "setHumanUfp2"],
            ] as [string, keyof Human, string][]
          ).map(([label, fieldn, action], placei) => {
            return (
              <div
                key={action}
                className="full-width margin-big-gap-v flex between"
              >
                {label + " "}
                {ufpLabels.map((_, ufpi) => {
                  return (
                    <EvaIcon
                      key={`${fieldn}${ufpi}`}
                      className="pointer"
                      name={`radio-button-${
                        ((placei ? ufp2 : ufp1) || 0) - 1 === ufpi
                          ? "on"
                          : "off"
                      }`}
                      onClick={() => {
                        const value = ufpi + 1;
                        placei ? setUfp2(value) : setUfp1(value);

                        if (human) {
                          liderExer.setIfCan({
                            action,
                            scope: `${action}-${human.id}`,
                            method: "set",
                            prev: human[fieldn],
                            value,
                            args: {
                              id: human.id,
                              value,
                              humann: human.name,
                            },
                          });
                          exec();
                        }
                      }}
                    />
                  );
                })}
              </div>
            );
          })}
          <div className="full-width margin-big-gap-v">{notesInput.node}</div>
          <div
            style={{
              color: isInactive ? "green" : "red",
            }}
            onClick={() => {
              setIsInactive(!isInactive);
              if (human)
                liderExer.setIfCan({
                  action: "setHumanInactive",
                  scope: `setHumanInactive-${human.id}`,
                  method: "set",
                  prev: !!human.isInactive,
                  value: !isInactive,
                  args: {
                    id: human.id,
                    value: !isInactive,
                    humann: human.name,
                  },
                });
              exec();
            }}
          >
            {isInactive ? "Включить участника" : "Исключить участника"}
          </div>
          {notesInput.value() && nameInput.value() ? (
            <div
              className="full-width margin-big-gap-v text-center pointer"
              onClick={() => {
                if (human) {
                  liderExer.load(() => close());
                } else {
                  const name = nameInput.value();

                  liderExer.send({
                    action: "addHuman",
                    method: "push",
                    args: {
                      name,
                      isMan,
                      notes: notesInput.value(),
                      ufp1,
                      id: idMaker(name.trim().split(/ +/)),
                      isInactive,
                    } as HumanExportable,
                  });
                  close();
                }

                notesInput.remove();
                nameInput.remove();
              }}
            >
              {human ? "Сохранить" : "Добавить"}
            </div>
          ) : null}
        </>
      )}
    </div>
  );
}
