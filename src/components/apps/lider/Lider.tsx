import { ReactNode, useEffect } from "react";
import modalService from "../../../complect/modal/Modal.service";
import { liderStorage } from "../../../shared/jstorages";
import useLeaderComments from "./components/comments/useLeaderComments";
import useLeaderContexts from "./components/contexts/useContexts";
import useCgame from "./components/games/useGames";
import usePeople from "./components/people/usePeople";
import "./Lider.scss";

export default function LiderApplication({ content }: { content: ReactNode }) {
  const { updatePeople, peopleImportable, updatePeopleImportable } =
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

  useEffect(() => {
    if (gamesImportable && ccontext) updateGames(gamesImportable, ccontext);
  }, [ccontext, gamesImportable]);

  useEffect(() => {
    if (sendingComments && gamesImportable)
      sendAllComments(sendingComments, gamesImportable);
  }, [gamesImportable, sendingComments]);

  useEffect(() => {
    if (contextsImportable && peopleImportable?.humans) {
      const contexts = updateContexts(
        contextsImportable,
        peopleImportable.humans
      );

      setTimeout(() => {
        if (!liderStorage.get("currentContextw")) {
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
  }, [
    contextsImportable,
    gamesImportable,
    peopleImportable?.humans,
    sendingComments,
  ]);

  useEffect(() => {
    if (peopleImportable) updatePeople(peopleImportable);
  }, [peopleImportable]);

  liderStorage.listen("games", "LiderApplication", (games) => {
    if (games) updateGamesImportable(games);
  });

  liderStorage.listen("people", "LiderApplication", (games) => {
    if (games) updatePeopleImportable(games);
  });
  liderStorage.listen("contexts", "LiderApplication", (games) => {
    if (games) updateContextsImportable(games);
  });

  return <>{content}</>;
}
