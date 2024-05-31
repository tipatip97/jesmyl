import { BottomPopupContenter } from '../../../../../complect/absolute-popup/bottom-popup/model';
import { useCheckIsAccessed } from '../../../../../complect/exer/hooks/check-is-accessed';
import useFullContent from '../../../../../complect/fullscreen-content/useFullContent';
import IconButton from '../../../../../complect/the-icon/IconButton';
import { IconFolderAddStrokeRounded } from '@icons/folder-add';
import { IconPlusSignCircleStrokeRounded } from '@icons/plus-sign-circle';
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
          <IconButton
            Icon={IconPlusSignCircleStrokeRounded}
            postfix="Создать событие"
            onClick={() => {
              closePopup();
              createMeeting();
            }}
          />
          {checkIsAccessed(50) && (
            <IconButton
              Icon={IconFolderAddStrokeRounded}
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
