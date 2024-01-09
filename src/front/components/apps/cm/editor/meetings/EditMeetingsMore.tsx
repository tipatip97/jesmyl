import { BottomPopupContenter } from '../../../../../complect/absolute-popup/bottom-popup/model';
import EvaButton from '../../../../../complect/eva-icon/EvaButton';
import useFullContent from '../../../../../complect/fullscreen-content/useFullContent';
import useAuth from '../../../../index/useAuth';
import { cmExer } from '../../Cm.store';
import AddContext from './AddContext';
import MeetingsCreator from './MeetingsCreator';

export const EditMeetingsMore: BottomPopupContenter<number[] | und> = (isOpen, closePopup, prepare, currPath) => {
  const auth = useAuth();

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
          {cmExer.actionAccessedOrNull('addMeetingsContext', auth) && (
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
