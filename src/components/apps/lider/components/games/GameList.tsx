import { useDispatch, useSelector } from "react-redux";
import useAbsoluteBottomPopup from "../../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import EvaIcon from "../../../../../complect/eva-icon/EvaIcon";
import useExer from "../../../../../complect/exer/useExer";
import { liderStorage } from "../../../../../shared/jstorages";
import { RootState } from "../../../../../shared/store";
import { liderExer, updatePeople } from "../../Lider.store";
import PhaseLiderContainer from "../../phase-container/PhaseLiderContainer";
import { getRandomTwiceName } from "../../resources/getRandomTwiceName";
import TeamGameFace from "./GameFace";
import GamesMore from "./GamesMore";

export default function GameList() {
  const dispatch = useDispatch();
  const games = useSelector((state: RootState) => state.lider.games);
  const { lookIcon } = useExer(liderExer);
  const { openAbsoluteBottomPopup } = useAbsoluteBottomPopup();

  liderStorage.listen("people", "HumanList", (people) => {
    if (people) dispatch(updatePeople(people));
  });

  return (
    <PhaseLiderContainer
      topClass="template-page-content"
      head={
        <div className="flex between full-width">
          <div>Командные игры</div>
          {lookIcon}
          <EvaIcon
            className="margin-gap pointer"
            name="more-vertical"
            onClick={() => {
              openAbsoluteBottomPopup(<GamesMore />);
            }}
          />
        </div>
      }
      content={
        <>
          {games?.teamGames.map((game, gamei) => (
            <TeamGameFace key={`gamei-${gamei}`} game={game} />
          ))}
        </>
      }
    />
  );
}

getRandomTwiceName();
