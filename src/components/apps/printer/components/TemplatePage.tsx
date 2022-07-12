import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import DebouncedInput from "../../../../complect/DebouncedInput";
import EvaIcon from "../../../../complect/eva-icon/EvaIcon";
import useExer from "../../../../complect/exer/useExer";
import useFullscreenContent from "../../../../complect/fullscreen-content/useFullscreenContent";
import useKeyboard from "../../../../complect/keyboard/useKeyboard";
import modalService from "../../../../complect/modal/Modal.service";
import { RootState } from "../../../../shared/store";
import PhasePrinterContainer from "../phase-container/PhasePrinterContainer";
import { printerExer } from "../Printer.store";
import "./Styles.scss";
import AdaptationPage from "./templates/AdaptationPage";

export default function TemplatePage() {
  const templates = useSelector((state: RootState) => state.printer.templates);
  const [term, setTerm] = useState("");
  const [text, setText] = useState(templates.text || "");
  const { lookIcon, exec } = useExer(printerExer);
  const { openFullscreenContent } = useFullscreenContent();

  const humanList = useMemo(
    () =>
      templates.humans?.filter(({ name }) => name.toLowerCase().includes(term)),
    [templates, term]
  );

  const [input] = useKeyboard()(`text-input`, {
    className: "input",
    multiline: true,
    placeholder: "Шаблон текста",
    onChange: (value) => {
      setText(value);
      printerExer.setIfCan({
        action: "setTemplateText",
        method: "set",
        prev: text,
        value,
        args: {
          value,
        },
      });
      exec();
    },
    initialValue: text,
  });

  return (
    <PhasePrinterContainer
      topClass="template-page-content"
      withoutBackButton
      head={
        <>
          <DebouncedInput
            uniq={`search`}
            icon="search-outline"
            placeholder="Поиск участника"
            className="debounced-searcher round-styled"
            initialTerm={term}
            debounce={500}
            onTermChange={(term) => setTerm(term.toLowerCase())}
          />
          {lookIcon}
        </>
      }
      content={
        <>
          {/* <div>{input}</div> */}
          <div className="flex around margin-gap">
            <div
              className="pointer"
              onClick={() => {
                let isMan = 1;
                let name = "";
                let notes = "";

                modalService.open({
                  title: "Новый участник",
                  inputs: [
                    {
                      title: "Фамилия, Имя",
                      closable: false,
                      onInput: ({ value }) => {
                        name = value;
                      },
                    },
                    {
                      title: "Мужск.",
                      closable: false,
                      type: "checkbox",
                      checked: () => !!isMan,
                      onClick: () => (isMan = +!isMan),
                    },
                    {
                      title: "Заметки",
                      closable: false,
                      onInput: ({ value }) => {
                        notes = value;
                      },
                    },
                  ],
                  buttons: [
                    {
                      title: "Добавить",
                      onClick: () => {
                        printerExer.setIfCan({
                          action: "addHuman",
                          method: "push",
                          args: {
                            name,
                            isMan,
                            notes,
                          },
                        });
                        exec();
                      },
                    },
                  ],
                });
              }}
            >
              Новый участник
            </div>
          </div>
          {humanList?.map((human, humani) => {
            return (
              <div
                key={`human ${humani}`}
                className="face-item"
                onClick={() => {
                  openFullscreenContent(<AdaptationPage bag={human} />, true);
                }}
              >
                <span className="face-logo">
                  <EvaIcon name="people" />
                </span>
                <span className="face-title">{human.name}</span>
              </div>
            );
          })}
        </>
      }
    />
  );
}
