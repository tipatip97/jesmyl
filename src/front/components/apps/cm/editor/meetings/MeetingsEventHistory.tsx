import { useMemo } from 'react';
import { CmComWid } from '../../../../../../shared/api/complect/apps/cm/complect/enums';
import { ComFaceList } from '../../col/com/face/list/ComFaceList';
import { useEditableMeetings } from './useEditableMeetings';

export default function MeetingsEventHistory() {
  const { currentEvent } = useEditableMeetings();

  const history = useMemo(() => {
    if (currentEvent?.history == null) return {};
    const list: CmComWid[] = [];
    const titles: Record<number, string> = {};

    for (let itemi = currentEvent.history.length - 1; itemi >= 0; itemi--) {
      const item = currentEvent.history[itemi];

      if (!item.s || !item.w) continue;

      titles[list.length] = new Date(item.w).toLocaleString();
      list.push(...item.s);
    }

    return { list, titles };
  }, [currentEvent?.history]);

  return (
    <div className="full-height">
      <div className="margin-gap flex center color--3">История события "{currentEvent?.name}"</div>
      <div className="flex column-reverse padding-big-gap-v center pointers-none">
        <ComFaceList
          list={history.list}
          titles={history.titles}
        />
      </div>
    </div>
  );
}
