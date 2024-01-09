import { useBottomPopup } from '../../../../../complect/absolute-popup/bottom-popup/useBottomPopup';
import EvaButton from '../../../../../complect/eva-icon/EvaButton';
import useFullContent from '../../../../../complect/fullscreen-content/useFullContent';
import PhaseCmContainer from '../../complect/phase-container/PhaseCmContainer';
import MeetingEventExpandList from './MeetingEventExpandList';
import MeetingsInner from './MeetingsInner';
import { useMeetings } from './useMeetings';

export default function TheMeetings() {
  const { meetings, goToEvent } = useMeetings();
  const [fullNode, openFullContent] = useFullContent(() => <MeetingEventExpandList />);

  const [popupNode, openPopup] = useBottomPopup(
    (isOpen, close) =>
      isOpen && (
        <EvaButton
          name="list"
          postfix="Посмотреть заголовки"
          onClick={() => {
            openFullContent();
            close();
          }}
        />
      ),
  );

  if (!meetings) return null;

  return (
    <PhaseCmContainer
      className="meetings-container"
      headTitle="События"
      onMoreClick={openPopup}
      content={
        <>
          {popupNode}
          {fullNode}
          <MeetingsInner
            meetings={meetings}
            onEventClick={event => goToEvent(event.wid)}
          />
        </>
      }
    />
  );
}
