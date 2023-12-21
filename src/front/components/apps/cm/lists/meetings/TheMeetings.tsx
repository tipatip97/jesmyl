import { useBottomPopup } from '../../../../../complect/absolute-popup/bottom-popup/useBottomPopup';
import useFullscreenContent from '../../../../../complect/fullscreen-content/useFullscreenContent';
import PhaseCmContainer from '../../complect/phase-container/PhaseCmContainer';
import MeetingEventExpandList from './MeetingEventExpandList';
import MeetingsInner from './MeetingsInner';
import { useMeetings } from './useMeetings';

export default function TheMeetings() {
  const { meetings, goToEvent } = useMeetings();
  const [popupNode, openPopup] = useBottomPopup((_, prepare) =>
    prepare({
      items: [
        {
          icon: 'list',
          title: 'Посмотреть заголовки',
          onClick: () => {
            openFullscreenContent(<MeetingEventExpandList />);
          },
        },
      ],
    }),
  );
  const { openFullscreenContent } = useFullscreenContent();

  if (!meetings) return null;

  return (
    <PhaseCmContainer
      className="meetings-container"
      headTitle="События"
      onMoreClick={openPopup}
      content={
        <>
          {popupNode}
          <MeetingsInner
            meetings={meetings}
            onEventClick={event => goToEvent(event.wid)}
          />
        </>
      }
    />
  );
}
