import { useEffect, useState } from "react";
import { renderComponentInNewWindow } from "../../../../..";
import useAbsoluteBottomPopup from "../../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import EvaIcon from "../../../../../complect/eva-icon/EvaIcon";
import useFullscreenContent from "../../../../../complect/fullscreen-content/useFullscreenContent";
import useLeaderContexts from "../contexts/useContexts";
import LeaderGroup from "../groups/Group";
import PrintableBottomItem from "../PrintableBottomItem";
import WelcomePageList from "../templates/WelcomePageList";
import AddHumansToContext from "./AddHumansToContext";
import Human from "./Human";
import HumanList from "./HumanList";
import { HumanListComponentProps } from "./People.model";

export default function MemberList({ ...props }: {} & HumanListComponentProps) {
  const { ccontext } = useLeaderContexts();
  const { openFullscreenContent } = useFullscreenContent();
  const { closeAbsoluteBottomPopup } = useAbsoluteBottomPopup();
  const placeholder = `Поиск по участникам ${ccontext?.name || ""}`;
  const humansRef = { current: [] };

  const getWelcomePages = (list: { group: LeaderGroup; member: Human }[]) => {
    return (
      <WelcomePageList
        list={list.map(({ group, member }) => ({
          ...group.getFieldValues(),
          ...member.toDict(),
        }))}
      />
    );
  };

  useEffect(() => {
    const onPrint = (event: KeyboardEvent) => {
      if (event.code === "BracketRight" && event.ctrlKey) {
        event.preventDefault();
        renderComponentInNewWindow(
          <>
            {getWelcomePages(
              ccontext?.getMembersInGroups(
                humansRef.current.map(({ wid }) => wid)
              ) || []
            )}
          </>
        );
      }
    };
    window.addEventListener("keyup", onPrint);
    return () => {
      window.removeEventListener("keyup", onPrint);
    };
  }, []);

  return (
    <>
      <HumanList
        {...props}
        list={() => ccontext?.members.map((human) => human.wid) ?? []}
        placeholder={placeholder}
        humansRef={humansRef}
        humanMoreAdditions={({ wid }) => {
          const list = ccontext?.getMembersInGroups([wid]);

          if (list?.length)
            return (
              <PrintableBottomItem
                title="Распечатать Допуск"
                node={getWelcomePages(list)}
                close={() => closeAbsoluteBottomPopup()}
              />
            );
        }}
        asHumanMore={({ wid }) => {
          const list = ccontext?.getMembersInGroups([wid]);

          if (!list?.length)
            return <div className="error-message nowrap">Вне групп</div>;
          else if (list.length > 1)
            return <div className="error-message">В нескольких группах!</div>;
        }}
        moreNode={
          <div
            className="abs-item pointer"
            onClick={() =>
              openFullscreenContent((close) => (
                <AddHumansToContext
                  chosenPlaceholder={placeholder}
                  chooseTitle="Выбери участников:"
                  chosenTitle="Выбранные участники:"
                  uniq="members"
                  excludedTitle="Лидер"
                  redact
                  fixedList={ccontext?.members.map((human) => human.wid)}
                  excludes={ccontext?.mentors.map((human) => human.wid)}
                  onSend={(addList, delList) => {
                    ccontext?.add_removeHumans(addList, delList, "members");
                    close();
                  }}
                />
              ))
            }
          >
            <EvaIcon name="person-add-outline" className="abs-icon" />
            <div>Редактировать список участников</div>
            <div className="abs-action abs-full" />
          </div>
        }
      />
    </>
  );
}
