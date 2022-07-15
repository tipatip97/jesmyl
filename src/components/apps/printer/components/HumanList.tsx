import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useAbsoluteBottomPopup from "../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import DebouncedInput from "../../../../complect/DebouncedInput";
import EvaIcon from "../../../../complect/eva-icon/EvaIcon";
import useExer from "../../../../complect/exer/useExer";
import useFullscreenContent from "../../../../complect/fullscreen-content/useFullscreenContent";
import { printerStorage } from "../../../../shared/jstorages";
import { RootState } from "../../../../shared/store";
import PhasePrinterContainer from "../phase-container/PhasePrinterContainer";
import { printerExer, updateTemplates } from "../Printer.store";
import { getRandomTwiceName } from "../resources/getRandomTwiceName";
import GeneralMore from "./GeneralMore";
import HumanMore from "./HumanMore";
import HumanMaster from "./RedactHuman";
import "./Styles.scss";
import AdaptationPage from "./templates/AdaptationPage";

export default function HumanList() {
  const dispatch = useDispatch();
  const templates = useSelector((state: RootState) => state.printer.templates);
  const [term, setTerm] = useState("");
  const { lookIcon } = useExer(printerExer);
  const { openFullscreenContent } = useFullscreenContent();
  const { openAbsoluteBottomPopup } = useAbsoluteBottomPopup();

  printerStorage.listen("templates", "HumanList", (templates) => {
    if (templates) dispatch(updateTemplates(templates));
  });

  const humanList = useMemo(
    () =>
      templates?.humans?.filter(({ name }) =>
        name.toLowerCase().includes(term)
      ),
    [templates, term]
  );

  return (
    <PhasePrinterContainer
      topClass="template-page-content"
      withoutBackButton
      head={
        <>
          <DebouncedInput
            uniq={`search by human`}
            icon="search-outline"
            placeholder="Поиск по участникам"
            className="debounced-searcher round-styled"
            initialTerm={term}
            debounce={500}
            onTermChange={(term) => setTerm(term.toLowerCase())}
          />
          {lookIcon}
          <EvaIcon
            className="margin-gap"
            name="more-vertical"
            onClick={() => openAbsoluteBottomPopup(<GeneralMore />)}
          />
        </>
      }
      content={
        <>
          {humanList?.map((human, humani) => {
            return (
              <div
                key={`human ${humani}`}
                className="face-item"
                onClick={(event) => {
                  event.stopPropagation();
                  openAbsoluteBottomPopup(<HumanMore human={human} />);
                }}
              >
                <span className="face-logo">
                  <EvaIcon name="people" />
                </span>
                <span
                  className={`face-title ${
                    human.isInactive ? "text-strike" : ""
                  }`}
                >
                  {human.name}
                </span>
              </div>
            );
          })}
        </>
      }
    />
  );
}

getRandomTwiceName();
