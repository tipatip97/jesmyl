import ComFace from '../../col/com/face/ComFace';
import { useCols } from '../../cols/useCols';
import { useEditableMeetings } from './useEditableMeetings';

export default function MeetingsEventHistory() {
  const { currentEvent } = useEditableMeetings();
  const cols = useCols();

  return (
    <div className="full-height">
      <div className="margin-gap flex center color--3">История события "{currentEvent?.name}"</div>
      <div className="flex column center">
        {currentEvent?.history?.map(({ w, s }) => {
          return (
            <div
              key={w}
              className="margin-big-gap-v"
            >
              <div>{new Date(w).toLocaleString()}</div>
              {s?.map(comw => {
                const com = cols?.coms.find(com => com.wid === comw);
                return (
                  <div key={'' + comw}>
                    {com ? <ComFace com={com} /> : <span className="error-message">Неизвестная песня</span>}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
