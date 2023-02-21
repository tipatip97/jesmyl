import { ReactNode, useEffect } from "react";
import { useDispatch } from "react-redux";
import modalService from "../../../complect/modal/Modal.service";
import useLeaderComments from "./components/comments/useLeaderComments";
import useLeaderContexts from "./components/contexts/useContexts";
import useCgame from "./components/games/useGames";
import useLeaderGroups from "./components/groups/useGroups";
import usePeople from "./components/people/usePeople";
import "./Leader.scss";
import { updateGamesStore, updateGamesTimers, updateLeaderContexts, updateLeaderPeople } from "./Leader.store";
import leaderStorage from "./leaderStorage";

export default function LeaderApplication({ content }: { content: ReactNode }) {
  const dispatch = useDispatch();
  const { updatePeople, peopleImportable, people } =
    usePeople();
  const { updateGames, gamesImportable } = useCgame();
  const { sendAllComments, sendingComments } = useLeaderComments();
  const {
    updateContexts,
    setCurrentContext,
    ccontext,
    contextsImportable,
  } = useLeaderContexts();
  const { resetCurrentGroup } = useLeaderGroups();

  useEffect(() => {
    if (gamesImportable && ccontext) updateGames(gamesImportable, ccontext);
  }, [ccontext, gamesImportable]);

  useEffect(() => {
    if (sendingComments && gamesImportable)
      sendAllComments(sendingComments, gamesImportable);
  }, [gamesImportable, sendingComments]);

  useEffect(() => {
    if (contextsImportable && people?.humans) {
      const contexts = updateContexts(contextsImportable, people.humans);
      resetCurrentGroup();

      setTimeout(() => {
        const ccontextw = leaderStorage.get("ccontextw");

        if (
          !ccontextw ||
          !contexts.list.some((context) => context.wid === ccontextw)
        ) {
          modalService.open({
            title: "Нужно быть в контексте)",
            withoutCloseButton: true,

            description:
              "На данный момент нет текущего контекста. Выбери, пожалуйста, нужный",
            inputs: contexts.list?.map((context) => {
              return {
                type: "button",
                value: context.name,
                onClick: () => setCurrentContext(context.wid),
              };
            }),
          });
        }
      });
    }
  }, [contextsImportable, gamesImportable, sendingComments, people?.humans]);

  useEffect(() => {
    if (peopleImportable) updatePeople(peopleImportable);
  }, [peopleImportable]);

  leaderStorage.dispatch(dispatch)
    .it("games", updateGamesStore)
    .it("people", updateLeaderPeople)
    .it("contexts", updateLeaderContexts)
    .it("gameTimers", updateGamesTimers);

  return <>{content}</>;
}
