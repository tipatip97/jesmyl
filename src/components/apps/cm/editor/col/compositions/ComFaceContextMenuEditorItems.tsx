import EvaIcon from "../../../../../../complect/eva-icon/EvaIcon";
import useExer from "../../../../../../complect/exer/useExer";
import useFullscreenContent from "../../../../../../complect/fullscreen-content/useFullscreenContent";
import useSelectedComs from "../../../base/useSelectedComs";
import { cmExer } from "../../../Cm.store";
import MeetingsInner from "../../../lists/meetings/MeetingsInner";
import { useEditableMeetings } from "../../meetings/useEditableMeetings";

export default function ComFaceContextMenuEditorItems() {
  const { openFullscreenContent, closeFullscreenContent } =
    useFullscreenContent();
  const { meetings, goToEvent } = useEditableMeetings();
  const { exec } = useExer(cmExer);
  const { selectedComs } = useSelectedComs();

  return (
    <>
      {selectedComs.length ? (
        <div
          className="abs-item flex"
          onClick={() =>
            meetings &&
            openFullscreenContent(
              <div className="full-container padding-big-gap">
                <MeetingsInner
                  meetings={meetings}
                  onEventClick={(event) => {
                    exec(event.setStack(selectedComs));
                    goToEvent(event.wid);
                    closeFullscreenContent();
                  }}
                />
              </div>
            )
          }
        >
          <EvaIcon name="calendar-outline" className="abs-icon" />
          <div>Выбранные в событие</div>
        </div>
      ) : null}
    </>
  );
}
