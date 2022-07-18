import BrutalItem from "../../../complect/brutal-item/BrutalItem";
import PhaseLiderContainer from "./phase-container/PhaseLiderContainer";
import "./Lider.scss";
import useLiderNav from "./useLiderNav";
import { liderExer } from "./Lider.store";
import useExer from "../../../complect/exer/useExer";
import useAbsoluteBottomPopup from "../../../complect/absolute-popup/useAbsoluteBottomPopup";
import GeneralMore from "./GeneralMore";
import EvaIcon from "../../../complect/eva-icon/EvaIcon";

export default function GeneralPage() {
  const { goTo } = useLiderNav();
  const { lookIcon } = useExer(liderExer);
  const { openAbsoluteBottomPopup } = useAbsoluteBottomPopup();

  return (
    <PhaseLiderContainer
      topClass="template-page-content"
      withoutBackButton
      head={
        <div className="flex between full-width padding-gap">
          <div>Лидер</div>
          <div>
            {lookIcon}
            <EvaIcon
              className="margin-gap pointer"
              name="more-vertical"
              onClick={() => openAbsoluteBottomPopup(<GeneralMore />)}
            />
          </div>
        </div>
      }
      content={
        <>
          <BrutalItem
            title="Участники"
            icon="people-outline"
            onClick={() => {
              goTo("humanList");
            }}
          />
          <BrutalItem
            title="Игры"
            icon="cube-outline"
            onClick={() => {
              goTo("games");
            }}
          />
        </>
      }
    />
  );
}
