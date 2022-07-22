import { useEffect, useState } from "react";
import Dropdown from "../../../../../complect/dropdown/Dropdown";
import EvaIcon from "../../../../../complect/eva-icon/EvaIcon";
import useExer from "../../../../../complect/exer/useExer";
import useKeyboard from "../../../../../complect/keyboard/useKeyboard";
import { liderExer } from "../../Lider.store";
import Human from "./Human";
import { HumanExportable } from "./Human.model";

const idMaker = (name: string) => name.toLowerCase().replace(/\s+/g, "_");
const ufpLabels = "1".repeat(10).split("");

const lineAsHuman = (line: string): HumanExportable => {
  const [first, last, bDay, ...allNotes] = line
    .trim()
    .replace(/([а-я])([А-Я])/, "$1 $2")
    .replace(/([а-я])([\d])/, "$1 $2")
    .split(/\s+/);
  const notes = allNotes.join(" ");

  const name = `${first} ${last}`;
  const [day, month, year] = bDay?.split(/\./) || [];
  const group = +(notes?.match(/\d/)?.[0] || 0);

  return {
    notes: notes?.replace(/[мm]/i, "м").replace(/[дd]/i, "д"),
    name,
    bDay: new Date(+year, +month - 1, +day).getTime(),
    isMan: !!/[мm]/i.exec(notes),
    id: idMaker(name),
    group,
    ufp1: 0,
    ufp2: 0,
  };
};

export default function HumanMaster({
  human,
  close,
}: {
  human?: Human;
  close: () => void;
}) {
  const { exec } = useExer(liderExer);
  const [viewHumanList, updateViewHumanList] = useState<
    HumanExportable[] | null
  >(null);
  const [ufp1, setUfp1] = useState<number | nil>(human?.ufp1);
  const [ufp2, setUfp2] = useState<number | nil>(human?.ufp2);
  const [bDay, setBDay] = useState<number | nil>(human?.bDay);
  const [isHumanHeap, setIsHumanHeap] = useState(false);
  const [isInactive, setIsInactive] = useState(human?.isInactive);
  const [isMan, setIsMan] = useState(human?.isMan ?? true);
  const inputGenerator = useKeyboard();

  const nameInput = inputGenerator("human-name", {
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

  const notesInput = inputGenerator("human-notes", {
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

  const bDayInput = inputGenerator("human-bday", {
    placeholder: "Дата рождения",
    initialValue: human?.bDay ? new Date(human.bDay).toLocaleDateString() : "",
    preferLanguage: "ru",
    onInput: !human
      ? undefined
      : (value, prev) => {
          const [day, month, year] = value?.split(/\./) || [];
          const time = new Date(+year, +month - 1, +day).getTime();
          setBDay(time);

          if (time) {
            liderExer.setIfCan({
              action: "setHumanBDay",
              scope: `setHumanBDay-${human.id}`,
              method: "set",
              prev: human.bDay,
              value: time,
              args: {
                id: human.id,
                value: time,
                humann: human.name,
              },
            });
            exec();
          }
        },
  });

  const groupInput = inputGenerator("human-group", {
    placeholder: "Группа",
    type: "number",
    initialValue: "" + (human?.group || 0),
    onInput: !human
      ? undefined
      : (value) => {
          liderExer.setIfCan({
            action: "setHumanGroup",
            scope: `setHumanGroup-${human.id}`,
            method: "set",
            prev: human.group,
            value: +value,
            args: {
              id: human.id,
              value: +value,
              humann: human.name,
            },
          });
          exec();
        },
  });

  const heapInput = inputGenerator(`heap-human-input`, {
    className: "input",
    multiline: true,
    placeholder: "Массив участников",
    onChange: (value) => {
      updateViewHumanList(value.split(/\n+/).map((line) => lineAsHuman(line)));
    },
    initialValue: "",
  });

  useEffect(() => {
    return () => {
      nameInput.remove();
      notesInput.remove();
      bDayInput.remove();
      groupInput.remove();
    };
  }, []);

  return (
    <div className="full-container flex column padding-giant-gap">
      {human ? null : (
        <Dropdown
          id={isHumanHeap}
          className="margin-big-gap-v"
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
          {viewHumanList?.map((human, humani) => {
            const bDay = new Date(human.bDay);
            const nameInput = inputGenerator(`viewHumanList-name-${human.id}`, {
              initialValue: human.name,
              onChange: (value) => {
                human.name = value;
              },
            });
            const groupInput = inputGenerator(
              `viewHumanList-group-${human.id}`,
              {
                initialValue: "" + human.group,
                type: "number",
                onChange: (value) => {
                  human.group = +value;
                },
              }
            );
            const notesInput = inputGenerator(
              `viewHumanList-notes-${human.id}`,
              {
                initialValue: human.notes,
                onChange: (value) => {
                  human.notes = value;
                },
              }
            );
            const bDayInput = inputGenerator(`viewHumanList-bday-${human.id}`, {
              initialValue: (bDay.getTime()
                ? bDay
                : null
              )?.toLocaleDateString(),
              onChange: (value) => {
                const [day, month, year] = value?.split(/\./) || [];
                human.bDay = new Date(+year, +month - 1, +day).getTime();
              },
            });

            return (
              <div key={`humani-${humani}`} className="margin-big-gap-v">
                <div>Имя: {nameInput.node}</div>
                <div>
                  Пол:{" "}
                  <Dropdown
                    id={human.isMan}
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
                    onSelect={({ id }) => (human.isMan = id)}
                  />
                </div>
                <div>Группа: {groupInput.node}</div>
                <div className={bDay.getTime() ? "" : "error-message"}>
                  Дата рождения: {bDayInput.node}
                </div>
                <div>Заметка: {notesInput.node}</div>
              </div>
            );
          })}
          {heapInput.value() ? (
            <div
              className="pointer"
              onClick={() => {
                liderExer.setIfCan({
                  action: "addManyHumans",
                  method: "concat",
                  args: {
                    value: viewHumanList,
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
          <div className="full-width margin-big-gap-v">{groupInput.node}</div>
          <div className="full-width margin-big-gap-v">{bDayInput.node}</div>
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
          {bDay && bDayInput.value() && nameInput.value() ? (
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
                      id: idMaker(name.trim()),
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
