import { ReactNode, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./Leader.scss";
import di from "./Leader.store";
import useLeaderComments from "./components/comments/useLeaderComments";
import useCgame from "./components/games/useGames";
import leaderStorage from "./leaderStorage";

export default function LeaderApplication({ content }: { content: ReactNode }) {
  const dispatch = useDispatch();
  const { games } = useCgame();
  const { sendAllComments, sendingComments } = useLeaderComments();

  useEffect(() => {
    if (sendingComments && games)
      sendAllComments(sendingComments, games);
  }, [games, sendAllComments, sendingComments]);

  leaderStorage.dispatch(dispatch)
    .it("games", di.updateGamesStore)
    .it("people", di.updateLeaderPeople)
    .it("contexts", di.updateLeaderContexts)
    .it("gameTimers", di.updateGamesTimers);

  return <>{content}</>;
}
