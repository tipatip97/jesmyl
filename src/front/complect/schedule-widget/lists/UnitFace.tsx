import { ReactNode, useState } from 'react';
import TheIcon from '../../the-icon/TheIcon';
import { IScheduleWidgetListUnit } from 'shared/api';
import { useScheduleWidgetRightsContext } from '../useScheduleWidget';

export default function ScheduleWidgetListUnitFace({
  unitMi,
  unit: topUnit,
  postfix,
}: {
  unitMi?: number;
  unit?: IScheduleWidgetListUnit;
  postfix?: ReactNode;
}) {
  const rights = useScheduleWidgetRightsContext();
  const [isShowMentors, setIsShowMentors] = useState(false);

  const unit = topUnit ?? rights.schedule.lists?.units.find(unit => unit.mi === unitMi);
  if (unit === undefined) return null;
  const cat = rights.schedule.lists.cats[unit.cat];
  if (cat === undefined) return null;
  const mentors = rights.schedule.ctrl.users.filter(user => user.li?.[unit.cat] === -unit.mi);

  return (
    <div className="flex flex-gap margin-gap-v">
      <span
        className={'flex flex-gap pointer' + (rights.myUser?.li?.[unit.cat] === -unit.mi ? ' color--7' : ' color--3')}
        onClick={() => setIsShowMentors(!isShowMentors)}
      >
        <TheIcon name={cat?.icon} />
        {isShowMentors ? (
          mentors.length ? (
            mentors.map(user => user.fio || user.nick).join(', ')
          ) : (
            <span className="text-italic">{cat.titles[0]}</span>
          )
        ) : (
          <>
            {cat.title}
            <span>{unit.title}</span>
          </>
        )}
      </span>
      {postfix}
    </div>
  );
}
