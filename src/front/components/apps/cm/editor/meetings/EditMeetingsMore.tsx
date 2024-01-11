import { BottomPopupContenter } from '../../../../../complect/absolute-popup/bottom-popup/model';
import EvaButton from '../../../../../complect/eva-icon/EvaButton';
import { useCheckIsAccessed } from '../../../../../complect/exer/hooks/check-is-accessed';
import useFullContent from '../../../../../complect/fullscreen-content/useFullContent';
import useAuth from '../../../../index/useAuth';
import AddContext from './AddContext';
import MeetingsCreator from './MeetingsCreator';

export const EditMeetingsMore: BottomPopupContenter<number[] | und> = (isOpen, closePopup, prepare, currPath) => {
  const auth = useAuth();
  const checkIsAccessed = useCheckIsAccessed(auth);

  const [createMeetingNode, createMeeting] = useFullContent(close => <MeetingsCreator close={close} />);
  const [addContextNode, addContext] = useFullContent(
    close =>
      isOpen &&
      currPath && (
        <AddContext
          close={close}
          currPath={currPath}
        />
      ),
  );

  return (
    <>
      {createMeetingNode}
      {addContextNode}
      {isOpen && (
        <>
          <EvaButton
            name="plus-circle-outline"
            postfix="Создать событие"
            onClick={() => {
              closePopup();
              createMeeting();
            }}
          />
          {checkIsAccessed(50) && (
            <EvaButton
              name="folder-add-outline"
              postfix="Создать контекст"
              onClick={() => {
                closePopup();
                addContext();
              }}
            />
          )}
        </>
      )}
    </>
  );
};
