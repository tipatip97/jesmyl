import useAbsoluteBottomPopup from "../../../complect/absolute-popup/useAbsoluteBottomPopup";
import BrutalItem from "../../../complect/brutal-item/BrutalItem";
import GeneralMore from "./GeneralMore";
import "./Lider.scss";
import PhaseLiderContainer from "./phase-container/PhaseLiderContainer";
import useLiderNav from "./useLiderNav";

export default function GeneralPage() {
  const { goTo } = useLiderNav();
  const { openAbsoluteBottomPopup } = useAbsoluteBottomPopup();

  return (
    <PhaseLiderContainer
      topClass="template-page-content"
      withoutBackButton
      headTitle="Лидер"
      onMoreClick={() => openAbsoluteBottomPopup(<GeneralMore />)}
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
