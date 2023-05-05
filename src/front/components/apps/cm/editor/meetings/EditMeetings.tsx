import { useState } from "react";
import useAbsoluteBottomPopup from "../../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import useExer from "../../../../../complect/exer/useExer";
import { cmExer } from "../../Cm.store";
import MeetingsInner from "../../lists/meetings/MeetingsInner";
import PhaseCmEditorContainer from "../phase-editor-container/PhaseCmEditorContainer";
import EditMeetingsMore from "./EditMeetingsMore";
import "./Meetings.scss";
import { useEditableMeetings } from "./useEditableMeetings";

export default function EditMeetings() {
  const { meetings, goToEvent } = useEditableMeetings();
  const { openAbsoluteBottomPopup } = useAbsoluteBottomPopup();
  useExer(cmExer);
  const [currPath, setCurrPath] = useState<number[]>([]);

  if (!meetings) return null;

  return (
    <PhaseCmEditorContainer
      topClass="edit-meeitngs"
      headTitle="События"
      onMoreClick={() =>
        openAbsoluteBottomPopup(<EditMeetingsMore currPath={currPath} />)
      }
      content={
        <MeetingsInner
          meetings={meetings}
          onEventClick={(event) => goToEvent(event.wid)}
          onContextNavigate={(context) => setCurrPath(context)}
        />
      }
    />
  );
}
