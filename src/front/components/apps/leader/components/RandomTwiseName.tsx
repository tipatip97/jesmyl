import { HTMLAttributes, useEffect, useState } from "react";
import propsOfClicker from "../../../../complect/clicker/propsOfClicker";
import modalService from "../../../../complect/modal/Modal.service";
import { getRandomTwiceName } from "../resources/getRandomTwiceName";

export default function RandomTwiceName({
  onNameChange,
  canChange,
  name,
  className,
}: {
  name?: string,
  canChange?: boolean,
  onNameChange?: (name: string) => void,
  className?: string,
}) {
  const [pronoun, noun] = name?.split(" ") || [];
  const getTwiceName = (pronoun?: string | null, noun?: string) =>
    getRandomTwiceName(pronoun, noun).join(" ").toUpperCase();
  const [twiceName, setTwiceName] = useState(
    getTwiceName(pronoun, noun)
  );

  useEffect(() => onNameChange?.(twiceName), [twiceName, onNameChange]);

  return (
    <span
      className={className}
      onClick={(event) => {
        event.stopPropagation();
        if (!canChange) return;
        const name = getTwiceName();
        setTwiceName(name);
      }}
      {...propsOfClicker({
        onCtxMenu: (event) => {
          event.stopPropagation();
          event.preventDefault();
          if (!canChange) return;

          let pronoun: string;
          let noun: string;

          modalService.open({
            title: "Задать свои слова",
            inputs: [
              {
                title: "Прилагательное (муж. род)",
                closable: false,
                onInput: ({ value }) => (pronoun = value),
              },
              {
                title: "Существительное",
                closable: false,
                onInput: ({ value }) => (noun = value),
              },
            ],
            buttons: [
              "Отмена",
              {
                title: "Применить",
                onClick: () => {
                  const name = getTwiceName(pronoun, noun);
                  setTwiceName(name);
                },
              },
            ],
          });
        }
      })}
    >
      {twiceName}
    </span>
  );
}
