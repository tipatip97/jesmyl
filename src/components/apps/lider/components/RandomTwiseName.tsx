import { HTMLAttributes, useState } from "react";
import modalService from "../../../../complect/modal/Modal.service";
import { getRandomTwiceName } from "../resources/getRandomTwiceName";

export default function RandomTwiceName({
  onNameChange,
  ...props
}: {
  noun?: string;
  pronoun?: string;
  onNameChange?: (name: string) => void;
} & HTMLAttributes<HTMLDivElement>) {
  const getTwiceName = (pronoun?: string | null, noun?: string) =>
    getRandomTwiceName(pronoun, noun).join(" ").toUpperCase();
  const [twiceName, setTwiceName] = useState(
    getTwiceName(props.pronoun, props.noun)
  );

  return (
    <span
      {...props}
      onClick={(event) => {
        event.stopPropagation();
        const name = getTwiceName();
        setTwiceName(name);
        onNameChange?.(name);
      }}
      onContextMenu={(event) => {
        event.stopPropagation();
        event.preventDefault();

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
      }}
    >
      {twiceName}
    </span>
  );
}
