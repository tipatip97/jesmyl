import { ReactNode } from "react";
import EvaIcon from "../../../../../complect/eva-icon/EvaIcon";
import useFullscreenContent from "../../../../../complect/fullscreen-content/useFullscreenContent";
import PrintableBottomItem from "../PrintableBottomItem";
import WelcomePage from "../templates/WelcomePage";
import Human from "./Human";
import HumanMaster from "./HumanMaster";

export default function HumanMore({
  human,
  humanMoreAdditions,
}: {
  human: Human;
  humanMoreAdditions?: (human: Human) => ReactNode;
}) {
  const { openFullscreenContent } = useFullscreenContent();

  return (
    <>
      <div
        className="abs-item"
        onClick={() =>
          openFullscreenContent((close) => (
            <HumanMaster close={close} human={human} />
          ))
        }
      >
        <EvaIcon name="edit-outline" className="abs-icon" />
        <div>Редактировать</div>
        <div className="abs-action" />
      </div>
      {typeof humanMoreAdditions === "function"
        ? humanMoreAdditions(human)
        : humanMoreAdditions}
    </>
  );
}
