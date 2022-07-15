import { useEffect, useState } from "react";
import Dropdown from "../../../../complect/dropdown/Dropdown";
import useExer from "../../../../complect/exer/useExer";
import useKeyboard from "../../../../complect/keyboard/useKeyboard";
import { Human } from "../Printer.model";
import { printerExer } from "../Printer.store";

const idMaker = (name: string[]) =>
  name
    .map((part) => part.toLowerCase())
    .sort()
    .join("_");

export default function HumanMaster({
  human,
  close,
}: {
  human?: Human;
  close: () => void;
}) {
  const { exec } = useExer(printerExer);
  const [isMan, setIsMan] = useState(true);
  const [humanHeap, setHumanHeap] = useState("");
  const [isHumanHeap, setIsHumanHeap] = useState(false);
  const [isInactive, setIsInactive] = useState(human?.isInactive);
  const nameInput = useKeyboard()("human-name", {
    placeholder: "Фамилия, Имя",
    initialValue: human?.name,
    setIsUnknownSymbols: (char) => !!/[^а-я ]/i.exec(char),
    preferLanguage: "ru",
    onInput: !human
      ? undefined
      : (value, prev) => {
          printerExer.setIfCan({
            action: "setHumanName",
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

  const ufpInput = useKeyboard()("human-ufp", {
    placeholder: "Уровень физ. подготовки",
    type: "number",
    initialValue: `${human?.ufp || ""}`,
    onInput: !human
      ? undefined
      : (value, prev) => {
          printerExer.setIfCan({
            action: "setHumanUfp",
            method: "set",
            prev,
            value,
            args: {
              id: human.id,
              value: +value,
              humann: human.name,
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
          printerExer.setIfCan({
            action: "setHumanNotes",
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
      if (human) {
        notesInput.remove();
        ufpInput.remove();
        nameInput.remove();
      }
    };
  }, []);

  return (
    <div className="full-container flex column padding-big-gap margin-big-gap-v">
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
                const humans: Human[] = [];

                humanHeap.split("\n").forEach((line) => {
                  const [notes, ...name] = line.trim().split(/ +/).reverse();

                  humans.push({
                    notes: notes.replace(/[мm]/i, "м").replace(/[дd]/i, "д"),
                    name: name.reverse().join(" "),
                    isMan: !!/[мm]/i.exec(notes),
                    id: idMaker(name),
                  });
                });

                printerExer.setIfCan({
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
          <div className="full-width margin-big-gap-v">{ufpInput.node}</div>
          <div className="full-width margin-big-gap-v">{notesInput.node}</div>
          <div className="full-width margin-big-gap-v">
            <Dropdown
              id={isMan}
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
              onSelect={({ id }) => setIsMan(id)}
            />
          </div>
          <div
            style={{
              color: isInactive ? "green" : "red",
            }}
            onClick={() => {
              setIsInactive(!isInactive);
              if (human)
                printerExer.setIfCan({
                  action: "setHumanInactive",
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
                  printerExer.load();
                } else {
                  const name = nameInput.value();

                  printerExer.send({
                    action: "addHuman",
                    method: "push",
                    args: {
                      name,
                      isMan,
                      notes: notesInput.value(),
                      ufp: +ufpInput.value(),
                      id: idMaker(name.trim().split(/ +/)),
                      isInactive,
                    } as Human,
                  });
                  close();
                }

                notesInput.remove();
                ufpInput.remove();
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
