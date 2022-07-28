import { ReactNode } from "react";
import { liderStorage } from "../../../shared/jstorages";
import { SendingComments } from "./components/comments/LeaderComment.model";
import useLeaderComments from "./components/comments/useLeaderComments";
import useCgame from "./components/games/useGames";
import usePeople from "./components/people/usePeople";
import { GamesStoreImportable } from "./Lider.model";
import "./Lider.scss";

export default function LiderApplication({ content }: { content: ReactNode }) {
  const { updatePeople } = usePeople();
  const { updateGames, games } = useCgame();
  const { sendAllComments } = useLeaderComments();

  let observableGames: GamesStoreImportable;
  let observableComments: SendingComments;
  const sendComments = () => {
    if (observableComments && (observableGames || games)) {
      sendAllComments(observableComments, observableGames ?? games?.toDict());
    }
  };

  liderStorage.listen("people", "LiderApplication", (people) => {
    if (people) updatePeople(people);
  });

  liderStorage.listen("games", "LiderApplication", (games) => {
    if (games) {
      updateGames(games);
      observableGames = games;
      sendComments();
    }
  });

  liderStorage.listen("sendingComments", "LiderApplication", (comments) => {
    observableComments = comments;
    sendComments();
  });

  return <>{content}</>;
}
