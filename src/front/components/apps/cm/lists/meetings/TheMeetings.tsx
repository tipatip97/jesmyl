import { Route, Routes } from 'react-router-dom';
import { useBottomPopup } from '../../../../../complect/absolute-popup/bottom-popup/useBottomPopup';
import useFullContent from '../../../../../complect/fullscreen-content/useFullContent';
import IconButton from '../../../../../complect/the-icon/IconButton';
import { IconLeftToRightListBulletStrokeRounded } from '../../../../../complect/the-icon/icons/left-to-right-list-bullet';
import PhaseCmContainer from '../../complect/phase-container/PhaseCmContainer';
import MeetingEventExpandList from './MeetingEventExpandList';
import MeetingsInner from './MeetingsInner';
import TheMeetingsEvent from './TheMeetingsEvent';
import { useMeetings } from './useMeetings';

export default function TheMeetings() {
  const { meetings } = useMeetings();
  const [fullNode, openFullContent] = useFullContent(() => <MeetingEventExpandList />);

  const [popupNode, openPopup] = useBottomPopup(
    (isOpen, close) =>
      isOpen && (
        <IconButton
          Icon={IconLeftToRightListBulletStrokeRounded}
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
    <Routes>
      <Route
        index
        element={
          <PhaseCmContainer
            className="meetings-container"
            headTitle="События"
            onMoreClick={openPopup}
            content={
              <>
                {popupNode}
                {fullNode}
                <MeetingsInner meetings={meetings} />
              </>
            }
          />
        }
      />

      <Route
        path=":eventw/*"
        element={<TheMeetingsEvent />}
      />
    </Routes>
  );
}
