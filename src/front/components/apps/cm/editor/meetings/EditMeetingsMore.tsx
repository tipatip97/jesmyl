import { bottomPopupContentPreparer } from '../../../../../complect/absolute-popup/bottom-popup/item-preparer';
import useFullscreenContent from '../../../../../complect/fullscreen-content/useFullscreenContent';
import useAuth from '../../../../index/useAuth';
import { cmExer } from '../../Cm.store';
import AddContext from './AddContext';
import MeetingsCreator from './MeetingsCreator';

export default function EditMeetingsMore({ currPath }: { currPath: number[] }) {
  const { openFullscreenContent } = useFullscreenContent();
  const auth = useAuth();

  return bottomPopupContentPreparer({
    items: [
      {
        icon: 'plus-circle-outline',
        title: 'Создать событие',
        onClick: () => openFullscreenContent(close => <MeetingsCreator close={close} />),
      },
      cmExer.actionAccessedOrNull('addMeetingsContext', auth) && {
        title: 'Создать контекст',
        icon: 'folder-add-outline',
        onClick: () => {
          openFullscreenContent(close => (
            <AddContext
              close={close}
              currPath={currPath}
            />
          ));
        },
      },
    ],
  });
}
