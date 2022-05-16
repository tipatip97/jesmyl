import EvaIcon from "../../../../../complect/eva-icon/EvaIcon";
import useExer from "../../../../../complect/exer/useExer";
import { cmExer } from "../../Cm.store";
import ComFace from "../../col/com/face/ComFace";
import EditContainerCorrectsInformer from "../edit-container-corrects-informer/EditContainerCorrectsInformer";
import PhaseCmEditorContainer from "../phase-editor-container/PhaseCmEditorContainer";
import { useEditableMeetings } from "./useEditableMeetings";

export default function EditMeetingsEvent() {
  const { currentMeeting } = useEditableMeetings();
  const { exec } = useExer(cmExer);

  if (!currentMeeting) return null;

  return (
    <PhaseCmEditorContainer
      topClass="edit-meeitngs"
      headClass="flex between"
      headTitle={`Событие - ${currentMeeting.name}`}
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

          {currentMeeting.coms?.map((com, comi) => (
            <ComFace
              key={`event-${com.wid}`}
              com={com}
              description={
                <EvaIcon
                  name={comi ? "arrow-upward" : "arrow-downward"}
                  onClick={() => exec(currentMeeting.moveCom(comi))}
                />
              }
              importantOnClick={() => {}}
            />
          ))}
        </>
      }
    />
  );
}
