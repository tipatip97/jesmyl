import { ReactNode, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./Leader.scss";
import di from "./Leader.store";
import useLeaderComments from "./components/comments/useLeaderComments";
import leaderStorage from "./leaderStorage";

let prevSentTs: number = 0;

export default function LeaderApplication({ content }: { content: ReactNode }) {
  const dispatch = useDispatch();
  const { sendAllComments, sendingComments } = useLeaderComments();

  useEffect(() => {
    const now = Date.now();
    if (now - prevSentTs < 500) return;
    prevSentTs = now;
    sendAllComments();
  }, [sendingComments]);

  leaderStorage.dispatch(dispatch)
    .it("games", di.updateGamesStore)
    .it("people", di.updateLeaderPeople)
    .it("contexts", di.updateLeaderContexts)
    .it("gameTimers", di.updateGamesTimers);

  return <>{content}</>;
}
