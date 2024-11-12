import { mylib } from 'front/utils';
import { useMemo, useState } from 'react';
import { IScheduleWidgetTeamCriteria, IScheduleWidgetUser } from 'shared/api';
import TheButton from '../../../../Button';
import DebouncedSearchInput from '../../../../DebouncedSearchInput';
import { ExpandableContent } from '../../../../expand/ExpandableContent';
import useFullContent from '../../../../fullscreen-content/useFullContent';
import { StrongComponentProps } from '../../../../strong-control/Strong.model';
import StrongEditableField from '../../../../strong-control/field/StrongEditableField';
import IconButton from '../../../../the-icon/IconButton';
import { IconPencilEdit01StrokeRounded } from '../../../../the-icon/icons/pencil-edit-01';
import { IconSortingAZ01StrokeRounded } from '../../../../the-icon/icons/sorting-a-z-01';
import { useScheduleWidgetRightsContext } from '../../../useScheduleWidget';
import ScheduleWidgetRemovableUserFace from '../RemovableUserFace';
import { checkIsUserPhotoable } from '../utils';
import ScheduleWidgetTeamsCriteriaSorterScreen from './sort/SorterScreen';

interface Props {
  criteria: IScheduleWidgetTeamCriteria;
}

const itemIt = <Item,>({ item }: { item: Item }) => item;

export default function ScheduleWidgetSortCriteria({ scope, criteria }: StrongComponentProps & Props) {
  const rights = useScheduleWidgetRightsContext();
  const [isRenaming, setIsRenaming] = useState(false);

  const [usersForSort, uncriteriedUsers, sortedUsers] = useMemo(() => {
    const uncriteriedUsers: IScheduleWidgetUser[] = [];
    const sortedUsers: IScheduleWidgetUser[] = [];
    const usersForSort: IScheduleWidgetUser[] = [];

    rights.schedule.ctrl.users.forEach(user => {
      if (!checkIsUserPhotoable(user)) return;

      usersForSort.push(user);

      if (criteria.sorts[user.mi] === undefined) {
        uncriteriedUsers.push(user);
        return;
      }

      sortedUsers.push(user);
    });

    return [usersForSort, uncriteriedUsers, sortedUsers.sort((a, b) => criteria.sorts[a.mi] - criteria.sorts[b.mi])];
  }, [criteria.sorts, rights.schedule.ctrl.users]);

  const [term, setTerm] = useState('');
  const filteredUsers: IScheduleWidgetUser[] = useMemo(
    () => (!term ? sortedUsers : mylib.searchRate(sortedUsers, term, ['fio']).map(itemIt)),
    [sortedUsers, term],
  );
  const filteredUncriteriedUsers: IScheduleWidgetUser[] = useMemo(
    () => (!term ? uncriteriedUsers : mylib.searchRate(uncriteriedUsers, term, ['fio']).map(itemIt)),
    [uncriteriedUsers, term],
  );

  const [sorterScreenNode, openSorterScreen] = useFullContent<IScheduleWidgetUser>((close, insertUser) => {
    return (
      <ScheduleWidgetTeamsCriteriaSorterScreen
        scope={scope}
        criteria={criteria}
        uncriteriedUsers={uncriteriedUsers}
        usersForSort={usersForSort}
        close={close}
        singleInsertUser={insertUser}
      />
    );
  });

  return (
    <>
      {sorterScreenNode}

      <ExpandableContent
        title={
          <div className="flex flex-gap">
            <StrongEditableField
              scope={scope}
              fieldName="title"
              value={criteria.title}
              placeholder="Новый критерий"
              isRedact={isRenaming}
            />
            <IconPencilEdit01StrokeRounded onClick={() => setIsRenaming(is => !is)} />
          </div>
        }
      >
        <DebouncedSearchInput
          className="debounced-searcher round-styled"
          placeholder="Фильтр по имени"
          debounce={300}
          onDebounced={setTerm}
        />
        {!sortedUsers.length || (
          <>
            <h5>Отсортированные участники ({sortedUsers.length} чел)</h5>

            {filteredUsers.map(user => {
              return (
                <ScheduleWidgetRemovableUserFace
                  key={user.mi}
                  user={user}
                  buttons={
                    <IconButton
                      Icon={IconSortingAZ01StrokeRounded}
                      onClick={() => openSorterScreen(false, user)}
                    />
                  }
                />
              );
            })}
          </>
        )}
        {!uncriteriedUsers.length || (
          <>
            <h5>Неопределённые участники ({uncriteriedUsers.length} чел)</h5>
            {filteredUncriteriedUsers.map(user => (
              <ScheduleWidgetRemovableUserFace
                key={user.mi}
                user={user}
              />
            ))}
            <TheButton onClick={() => openSorterScreen()}>Распределить</TheButton>
          </>
        )}
      </ExpandableContent>
    </>
  );
}
