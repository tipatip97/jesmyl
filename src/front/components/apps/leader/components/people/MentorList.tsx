import useAbsoluteBottomPopup from "../../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import useFullscreenContent from "../../../../../complect/fullscreen-content/useFullscreenContent";
import useLeaderContexts from "../contexts/useContexts";
import AddHumansToContext from "./AddHumansToContext";
import HumanList from "./HumanList";
import { HumanListComponentProps } from "./People.model";

export default function MentorList(props: HumanListComponentProps) {
  const { ccontext } = useLeaderContexts();
  const { openFullscreenContent } = useFullscreenContent();
  const { prepareAbsoluteBottomPopupContent } = useAbsoluteBottomPopup();
  const placeholder = `Поиск по лидерам ${ccontext?.name || ""}`;

  return (
    <>
      <HumanList
        {...props}
        list={() => ccontext?.mentors.map((human) => human.wid) ?? []}
        placeholder={placeholder}
        moreNode={
          () => prepareAbsoluteBottomPopupContent({
            items: [{
              title: 'Редактировать список лидеров',
              icon: "person-add-outline",
              onClick: () =>
                openFullscreenContent((close) => (
                  <AddHumansToContext
                    chosenPlaceholder={placeholder}
                    chooseTitle="Выбери лидеров:"
                    chosenTitle="Выбранные лидеры:"
                    uniq="mentors"
                    redactable
                    redact
                    excludedTitle="Участник"
                    fixedList={ccontext?.mentors.map((human) => human.wid)}
                    excludes={ccontext?.members.map((human) => human.wid)}
                    onSend={(addList, delList) => {
                      ccontext?.add_removeHumans(addList, delList, "mentors");
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
