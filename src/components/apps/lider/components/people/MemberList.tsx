import EvaIcon from "../../../../../complect/eva-icon/EvaIcon";
import useFullscreenContent from "../../../../../complect/fullscreen-content/useFullscreenContent";
import useLeaderContexts from "../contexts/useContexts";
import AddHumansToContext from "./AddHumansToContext";
import HumanList from "./HumanList";
import { HumanListComponentProps } from "./People.model";

export default function MemberList(props: HumanListComponentProps) {
  const { ccontext } = useLeaderContexts();
  const { openFullscreenContent } = useFullscreenContent();
  const placeholder = `Поиск по участникам ${ccontext?.name || ""}`;

  return (
    <>
      <HumanList
        {...props}
        list={() => ccontext?.members ?? []}
        placeholder={placeholder}
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
                  fixedList={ccontext?.members}
                  excludes={ccontext?.mentors}
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
