import { ComFaceList } from '../../col/com/face/list/ComFaceList';
import { useEditableMeetings } from './useEditableMeetings';

export default function MeetingsEventHistory() {
  const { currentEvent } = useEditableMeetings();

  return (
    <div className="full-height">
      <div className="margin-gap flex center color--3">История события "{currentEvent?.name}"</div>
      <div className="flex column-reverse center pointers-none">
        {currentEvent?.history?.map(({ w, s }) => {
          return (
            <div
              key={w}
              className="margin-big-gap-v"
            >
              <div>{new Date(w).toLocaleString()}</div>
              <ComFaceList list={s} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
