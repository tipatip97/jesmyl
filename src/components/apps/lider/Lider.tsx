import { ReactNode } from "react";
import { liderStorage } from "../../../shared/jstorages";
import useCgame from "./components/games/useGames";
import usePeople from "./components/people/usePeople";
import "./Lider.scss";

export default function LiderApplication({ content }: { content: ReactNode }) {
  const { updatePeople } = usePeople();
  const { updateGames } = useCgame();

  liderStorage.listen("people", "LiderApplication", (people) => {
    if (people) updatePeople(people);
  });

  liderStorage.listen("games", "LiderApplication", (games) => {
    if (games) updateGames(games);
  });

  return <>{content}</>;
}
