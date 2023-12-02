import useAbsoluteBottomPopup from "../../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import useFullscreenContent from "../../../../../complect/fullscreen-content/useFullscreenContent";
import PhaseCmContainer from "../../complect/phase-container/PhaseCmContainer";
import MeetingEventExpandList from "./MeetingEventExpandList";
import MeetingsInner from "./MeetingsInner";
import { useMeetings } from "./useMeetings";

export default function TheMeetings() {
  const { meetings, goToEvent } = useMeetings();
  const { openAbsoluteBottomPopup, prepareAbsoluteBottomPopupContent } = useAbsoluteBottomPopup();
  const { openFullscreenContent } = useFullscreenContent();

  if (!meetings) return null;

  return (
    <PhaseCmContainer
      className="meetings-container"
      headTitle="События"
      onMoreClick={() => {
        openAbsoluteBottomPopup(prepareAbsoluteBottomPopupContent({
          items: [
            {
              icon: 'list',
              title: 'Посмотреть заголовки',
              onClick: () => {
                openFullscreenContent(<MeetingEventExpandList />);
              }
            }
          ]
        }));
      }}
      content={
        <MeetingsInner
          meetings={meetings}
          onEventClick={(event) => goToEvent(event.wid)}
        />
      }
    />
  );
}
