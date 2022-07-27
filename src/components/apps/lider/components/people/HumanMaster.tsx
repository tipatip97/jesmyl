import { useEffect, useState } from "react";
import Dropdown from "../../../../../complect/dropdown/Dropdown";
import EvaIcon from "../../../../../complect/eva-icon/EvaIcon";
import useKeyboard from "../../../../../complect/keyboard/useKeyboard";
import { liderExer } from "../../Lider.store";
import Human from "./Human";
import { HumanExportable } from "./People.model";

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
  const [viewHumanList, updateViewHumanList] = useState<
    HumanExportable[] | null
  >(null);
  const [name, setName] = useState<string | nil>(human?.name);
  const [ufp1, setUfp1] = useState<number | nil>(human?.ufp1);
  const [ufp2, setUfp2] = useState<number | nil>(human?.ufp2);
  const [bDay, setBDay] = useState<number | nil>(human?.bDay);
  const [group, setGroup] = useState<number | nil>(human?.group || 0);
  const [isHumanHeap, setIsHumanHeap] = useState(false);
  const [isInactive, setIsInactive] = useState(human?.isInactive);
  const [isMan, setIsMan] = useState(human?.isMan ?? true);
  const inputGenerator = useKeyboard();

  const takeName = (value: string) => {
    if (value.match(/^[А-ЯЁ][а-яё]+ [А-ЯЁ][а-яё]+$/)) {
      setName(value);
      return value;
    }
    setName(null);
    return null;
  };

  const nameInput = inputGenerator("human-name", {
    initialValue: human?.name,
    setIsUnknownSymbols: (char) => !!/[^а-яё ]/i.exec(char),
    preferLanguage: "ru",
    onInput: !human
      ? (value) => takeName(value)
      : (value, prev) => {
          const name = takeName(value);
          if (name) {
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
          }
        },
  });

  const notesInput = inputGenerator("human-notes", {
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
        },
  });

  const takeTime = (value: string) => {
    const [day, month, year] = value?.split(/\./) || [];
    let time: number | null = new Date(+year, +month - 1, +day).getTime();

    if (time < 0 || !time) time = null;

    setBDay(time);

    return time;
  };

  const bDayInput = inputGenerator("human-bday", {
    initialValue: human?.bDay ? new Date(human.bDay).toLocaleDateString() : "",
    preferLanguage: "ru",
    onInput: !human
      ? (value) => takeTime(value)
      : (value) => {
          const time = takeTime(value);
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
          }
        },
  });

  const groupInput = inputGenerator("human-group", {
    type: "number",
    initialValue: "" + (human?.group || 0),
    onInput: !human
      ? (value) => setGroup(+value)
      : (value) => {
          setGroup(+value);
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
      liderExer.clear();
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
                close();
              }}
            >
              Разобрать
            </div>
          ) : null}
        </>
      ) : (
        <>
          <div className="full-width margin-big-gap-v">
            Фамилия, Имя {nameInput.node}
          </div>
          {name == null && (
            <div className="error-message">Нужно два слова с больших букв</div>
          )}
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
                        }
                      }}
                    />
                  );
                })}
              </div>
            );
          })}
          <div className="full-width margin-big-gap-v">
            Группа ({isMan ? "у мальчиков" : "у девочек"}) {groupInput.node}
          </div>
          <div className="full-width margin-big-gap-v">
            Дата рождения {bDayInput.node}
          </div>
          {bDay == null && (
            <div className="error-message">Некорректная дата</div>
          )}
          <div className="full-width margin-big-gap-v">
            Заметки {notesInput.node}
          </div>
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
                      ufp2,
                      group,
                      bDay,
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
