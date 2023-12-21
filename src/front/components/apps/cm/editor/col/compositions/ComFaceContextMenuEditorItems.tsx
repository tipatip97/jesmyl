import { bottomPopupContentPreparer } from '../../../../../../complect/absolute-popup/bottom-popup/item-preparer';
import useExer from '../../../../../../complect/exer/useExer';
import useFullscreenContent from '../../../../../../complect/fullscreen-content/useFullscreenContent';
import useSelectedComs from '../../../base/useSelectedComs';
import { cmExer } from '../../../Cm.store';
import MeetingsInner from '../../../lists/meetings/MeetingsInner';
import { useEditableMeetings } from '../../meetings/useEditableMeetings';

export default function ComFaceContextMenuEditorItems() {
  const { openFullscreenContent, closeFullscreenContent } = useFullscreenContent();
  const { meetings, goToEvent } = useEditableMeetings();
  const { exec } = useExer(cmExer);
  const { selectedComws } = useSelectedComs();

  return bottomPopupContentPreparer({
    items: [
      selectedComws.length
        ? {
            title: 'Выбранные в событие',
            icon: 'calendar-outline',
            onClick: () =>
              meetings &&
              openFullscreenContent(
                <div className="full-container padding-big-gap">
                  <MeetingsInner
                    meetings={meetings}
                    onEventClick={event => {
                      exec(event.mergeStack(selectedComws));
                      goToEvent(event.wid);
                      closeFullscreenContent();
                    }}
                  />
                </div>,
              ),
          }
        : null,
    ],
  });
}
