import EvaIcon from "../../../../../complect/eva-icon/EvaIcon";
import useFullscreenContent from "../../../../../complect/fullscreen-content/useFullscreenContent";
import useLeaderContexts from "../contexts/useContexts";
import AddHumansToContext from "./AddHumansToContext";
import HumanList from "./HumanList";
import { HumanListComponentProps } from "./People.model";

export default function MentorList(props: HumanListComponentProps) {
  const { ccontext } = useLeaderContexts();
  const { openFullscreenContent } = useFullscreenContent();
  const placeholder = `Поиск по лидерам ${ccontext?.name || ""}`;

  return (
    <>
      <HumanList
        {...props}
        list={() => ccontext?.mentors.map((human) => human.wid) ?? []}
        placeholder={placeholder}
        moreNode={
          <div
            className="abs-item pointer"
            onClick={() =>
              openFullscreenContent((close) => (
                <AddHumansToContext
                  chosenPlaceholder={placeholder}
                  chooseTitle="Выбери лидеров:"
                  chosenTitle="Выбранные лидеры:"
                  uniq="mentors"
                  isRedactable
                  isRedact
                  excludedTitle="Участник"
                  fixedList={ccontext?.mentors.map((human) => human.wid)}
                  excludes={ccontext?.members.map((human) => human.wid)}
                  onSend={(addList, delList) => {
                    ccontext?.add_removeHumans(addList, delList, "mentors");
                    close();
                  }}
                />
              ))
            }
          >
            <EvaIcon name="person-add-outline" className="abs-icon" />
            <div>Редактировать список лидеров</div>
            <div className="abs-action abs-full" />
          </div>
        }
      />
    </>
  );
}
