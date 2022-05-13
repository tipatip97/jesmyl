import useAbsoluteBottomPopup from "../../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import BrutalItem from "../../../../../complect/brutal-item/BrutalItem";
import useExer from "../../../../../complect/exer/useExer";
import useCmNav from "../../base/useCmNav";
import { cmExer } from "../../Cm.store";
import { useMeetings } from "../../lists/meetings/useMeetings";
import EditContainerCorrectsInformer from "../edit-container-corrects-informer/EditContainerCorrectsInformer";
import PhaseCmEditorContainer from "../phase-editor-container/PhaseCmEditorContainer";
import EditMeetingsMore from "./EditMeetingsMore";
import { useEditableMeetings } from "./useEditableMeetings";

export default function EditMeetings() {
  const { goTo } = useCmNav();
  const { events, goToMeeting } = useEditableMeetings();
  const { openAbsoluteBottomPopup } = useAbsoluteBottomPopup();
  useExer(cmExer);

  return (
    <PhaseCmEditorContainer
      topClass="edit-meeitngs"
      headClass="flex between"
      headTitle="События"
      onMoreClick={() => openAbsoluteBottomPopup(<EditMeetingsMore />)}
      content={
        <>
          {events?.map((meeting, meetingi) => {
            return (
              <EditContainerCorrectsInformer key={`coms-etitor_${meetingi}`}>
                <BrutalItem
                  key={`category-on-change_${meeting.wid}`}
                  icon="calendar-outline"
                  title={`${meeting.name || ""}${
                    meeting.name !== meeting.initialName
                      ? ` (${meeting.initialName})`
                      : ""
                  }`}
                  onClick={() => {
                    goToMeeting(meeting.wid);
                  }}
                />
              </EditContainerCorrectsInformer>
            );
          })}
        </>
      }
    />
  );
}
