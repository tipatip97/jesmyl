import useAbsoluteBottomPopup from "../../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import useFullscreenContent from "../../../../../complect/fullscreen-content/useFullscreenContent";
import useLeaderContexts from "../contexts/useContexts";
import AddHumansToContext from "./AddHumansToContext";
import HumanList from "./HumanList";
import { HumanListComponentProps } from "./People.model";

export default function MentorList(props: HumanListComponentProps) {
  const { ccontext, add_removeHumans } = useLeaderContexts();
  const { openFullscreenContent } = useFullscreenContent();
  const { prepareAbsoluteBottomPopupContent } = useAbsoluteBottomPopup();
  const placeholder = `Поиск по лидерам ${ccontext?.name || ""}`;

  if (!ccontext) return null;

  return (
    <>
      <HumanList
        {...props}
        list={() => ccontext.mentors ?? []}
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
                    redactable
                    redact
                    excludedTitle="Участник"
                    fixedList={ccontext.mentors}
                    excludes={ccontext.members}
                    onSend={(addList, delList) => {
                      add_removeHumans(ccontext?.w, addList, delList, "mentors");
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
