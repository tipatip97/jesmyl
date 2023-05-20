import { useEffect } from "react";
import { renderComponentInNewWindow } from "../../../../../..";
import useAbsoluteBottomPopup from "../../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import useFullscreenContent from "../../../../../complect/fullscreen-content/useFullscreenContent";
import PrintableBottomItem from "../PrintableBottomItem";
import useLeaderContexts from "../contexts/useContexts";
import { LeaderGroupImportable } from "../groups/Groups.model";
import useLeaderGroups from "../groups/useGroups";
import WelcomePageList from "../templates/WelcomePageList";
import AddHumansToContext from "./AddHumansToContext";
import HumanList from "./HumanList";
import { HumanImportable, HumanListComponentProps } from "./People.model";

export default function MemberList({ ...props }: {} & HumanListComponentProps) {
  const { ccontext, add_removeHumans, getMembersInGroups, contextMembers } = useLeaderContexts();
  const { getFieldValues } = useLeaderGroups();
  const { openFullscreenContent } = useFullscreenContent();
  const { closeAbsoluteBottomPopup, prepareAbsoluteBottomPopupContent } = useAbsoluteBottomPopup();
  const placeholder = `${ccontext?.name || ""}. Участники`;
  const humansRef = { current: [] };

  const getWelcomePages = (list: { group: LeaderGroupImportable; member: HumanImportable }[]) => {
    return ccontext && (
      <WelcomePageList
        list={list.map(({ group, member }) => ({
          ...getFieldValues(ccontext, group.fields),
          ...member,
        }))}
      />
    );
  };

  useEffect(() => {
    if (!ccontext) return;
    const onPrint = (event: KeyboardEvent) => {
      if (event.code === "BracketRight" && event.ctrlKey) {
        event.preventDefault();
        renderComponentInNewWindow(
          <>
            {getWelcomePages(
              getMembersInGroups(
                contextMembers,
                humansRef.current.map(({ wid }) => wid),
                ccontext.groups,
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
  }, [ccontext, contextMembers]);

  if (!ccontext) return null;

  return (
    <>
      <HumanList
        {...props}
        list={() => contextMembers.map((human) => human.w) ?? []}
        placeholder={placeholder}
        humansRef={humansRef}
        humanMoreAdditions={({ w }) => {
          const list = getMembersInGroups(contextMembers, [w], ccontext.groups);

          if (list?.length)
            return (
              <PrintableBottomItem
                title="Распечатать Допуск"
                node={getWelcomePages(list)}
                close={() => closeAbsoluteBottomPopup()}
              />
            );
        }}
        asHumanMore={({ w }) => {
          const list = getMembersInGroups(contextMembers, [w], ccontext.groups);

          if (!list?.length)
            return <div className="error-message nowrap">Вне групп</div>;
          else if (list.length > 1)
            return <div className="error-message">В нескольких группах!</div>;
        }}
        moreNode={
          () => prepareAbsoluteBottomPopupContent({
            items: [{
              title: 'Редактировать список участников',
              icon: "person-add-outline",
              onClick: () =>
                openFullscreenContent((close) => (
                  <AddHumansToContext
                    chosenPlaceholder={placeholder}
                    chooseTitle="Выбери участников:"
                    chosenTitle="Выбранные участники:"
                    excludedTitle="Лидер"
                    redact
                    fixedList={ccontext.members}
                    excludes={ccontext.mentors}
                    onSend={(addList, delList) => {
                      add_removeHumans(ccontext.w, addList, delList, "members");
                      close();
                    }}
                  />
                )),
            }]
          })
        }
      />
    </>
  );
}
