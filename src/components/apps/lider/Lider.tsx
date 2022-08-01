import { ReactNode, useEffect } from "react";
import modalService from "../../../complect/modal/Modal.service";
import { liderStorage } from "../../../shared/jstorages";
import useLeaderComments from "./components/comments/useLeaderComments";
import useLeaderContexts from "./components/contexts/useContexts";
import useGameTimer from "./components/games/timers/useGameTimer";
import useCgame from "./components/games/useGames";
import useLeaderGroups from "./components/groups/useGroups";
import usePeople from "./components/people/usePeople";
import "./Lider.scss";

export default function LiderApplication({ content }: { content: ReactNode }) {
  const { updatePeople, peopleImportable, updatePeopleImportable, people } =
    usePeople();
  const { updateGames, gamesImportable, updateGamesImportable } = useCgame();
  const { sendAllComments, sendingComments } = useLeaderComments();
  const {
    updateContexts,
    setCurrentContext,
    ccontext,
    contextsImportable,
    updateContextsImportable,
  } = useLeaderContexts();
  const { updateGamesTimers } = useGameTimer();
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
        const ccontextw = liderStorage.get("ccontextw");

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

  liderStorage.listen("games", "LiderApplication", (games) => {
    if (games) updateGamesImportable(games);
  });

  liderStorage.listen("people", "LiderApplication", (people) => {
    if (people) updatePeopleImportable(people);
  });
  liderStorage.listen("contexts", "LiderApplication", (contexts) => {
    if (contexts) updateContextsImportable(contexts);
  });
  liderStorage.listen("gameTimers", "LiderApplication", (gameTimers) => {
    if (gameTimers) updateGamesTimers(gameTimers);
  });

  return <>{content}</>;
}
