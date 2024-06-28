import { useCallback, useState } from 'react';
import { IScheduleWidgetTeamCriteria } from '../../../../../../models';
import { StrongComponentProps } from '../../../../../strong-control/Strong.model';
import StrongButton from '../../../../../strong-control/StrongButton';
import { IScheduleWidgetUser } from '../../../../ScheduleWidget.model';
import ScheduleWidgetTeamsCriteriaSorterScreenSortBoxes from './SortBoxes';

interface Props {
  criteria: IScheduleWidgetTeamCriteria;
  uncriteriedUsers: IScheduleWidgetUser[];
  usersForSort: IScheduleWidgetUser[];
  close: () => void;
  singleInsertUser?: IScheduleWidgetUser;
}

export default function ScheduleWidgetTeamsCriteriaSorterScreen({
  scope,
  criteria,
  uncriteriedUsers,
  usersForSort,
  close,
  singleInsertUser,
}: StrongComponentProps & Props) {
  const [sortedUsers, setSortedUsers] = useState(() => {
    const users = [...usersForSort]
      .filter(
        user =>
          criteria.sorts[user.mi] !== undefined && (singleInsertUser === undefined || singleInsertUser.mi !== user.mi),
      )
      .sort((a, b) => criteria.sorts[a.mi] - criteria.sorts[b.mi]);

    if (users.length) return users;

    return [usersForSort[0]];
  });

  const [isStop, setIsStop] = useState(false);

  const stopOnSingleInsert = useCallback(() => {
    if (singleInsertUser === undefined) return;
    setIsStop(true);
  }, [singleInsertUser]);

  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(sortedUsers.length - 1);

  return (
    <div className="flex between column full-height">
      {singleInsertUser ? (
        <h3>Переопределение участника ({criteria.title})</h3>
      ) : (
        <h3>
          Распределение участноков ({criteria.title}) {sortedUsers.length}/{usersForSort.length}
        </h3>
      )}
      {isStop ? (
        <span>Участник определён</span>
      ) : (
        <ScheduleWidgetTeamsCriteriaSorterScreenSortBoxes
          singleInsertUser={singleInsertUser}
          uncriteriedUsers={uncriteriedUsers}
          usersForSort={usersForSort}
          sortedUsers={sortedUsers}
          setSortedUsers={setSortedUsers}
          setEnd={setEnd}
          setStart={setStart}
          end={end}
          start={start}
          stopOnSingleInsert={stopOnSingleInsert}
        />
      )}
      <div className="full-width flex center">
        <StrongButton
          scope={scope}
          fieldName="sorts"
          cud="U"
          title="Отправить"
          onSuccess={close}
          mapExecArgs={args => {
            const value: Record<number, number> = {};

            sortedUsers.forEach((user, useri) => {
              if (criteria.sorts[user.mi] === useri) return;
              value[user.mi] = useri;
            });

            return { ...args, value };
          }}
        />
      </div>
    </div>
  );
}
