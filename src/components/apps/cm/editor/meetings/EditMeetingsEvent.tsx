import BrutalItem from "../../../../../complect/brutal-item/BrutalItem";
import useExer from "../../../../../complect/exer/useExer";
import useCmNav from "../../base/useCmNav";
import { cmExer } from "../../Cm.store";
import { useMeetings } from "../../lists/meetings/useMeetings";
import EditContainerCorrectsInformer from "../edit-container-corrects-informer/EditContainerCorrectsInformer";
import PhaseCmEditorContainer from "../phase-editor-container/PhaseCmEditorContainer";
import { useEditableMeetings } from "./useEditableMeetings";

export default function EditMeetingsEvent() {
  const { goTo } = useCmNav();
  const { currentMeeting } = useEditableMeetings();
  const { exec } = useExer(cmExer);

  if (!currentMeeting) return null;

  return (
    <PhaseCmEditorContainer
      topClass="edit-meeitngs"
      headClass="flex between"
      headTitle={`Событие - ${currentMeeting.initialName}`}
      content={
        <>
          <EditContainerCorrectsInformer>
            Название{" "}
            <input
              value={currentMeeting.name}
              onChange={(event) =>
                exec(currentMeeting.rename(event.target.value))
              }
            />
          </EditContainerCorrectsInformer>
          {/* Регулярное событие{" "}
          <input
            type="checkbox"
            checked={!!currentMeeting.isRegular}
            onChange={() => exec(currentMeeting.switchRegular())}
          /> */}
        </>
      }
    />
  );
}
