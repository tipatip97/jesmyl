import { useMemo, useState } from 'react';
import styled, { css } from 'styled-components';
import { IScheduleWidgetTeamCriteria, IScheduleWidgetUserMi } from '../../../../../../models';
import TheButton from '../../../../../Button';
import { StrongComponentProps } from '../../../../../strong-control/Strong.model';
import StrongButton from '../../../../../strong-control/StrongButton';
import IconButton from '../../../../../the-icon/IconButton';
import { IconCheckmarkBadge01StrokeRounded } from '../../../../../the-icon/icons/checkmark-badge-01';
import { IconUserQuestion01StrokeRounded } from '../../../../../the-icon/icons/user-question-01';
import { useActualRef } from '../../../../../useActualRef';
import { IScheduleWidgetUser } from '../../../../ScheduleWidget.model';
import ScheduleWidgetTeamsCriteriaSorterScreenHistory from './History';
import { HistoryAdder } from './model';
import ScheduleWidgetUserPhoto from '../../../users/UserPhoto';

interface Props {
  criteria: IScheduleWidgetTeamCriteria;
  uncriteriedUsers: IScheduleWidgetUser[];
  usersForSort: IScheduleWidgetUser[];
  close: () => void;
  insertUser?: IScheduleWidgetUser;
}

const func = () => {};

export default function ScheduleWidgetTeamsCriteriaSorterScreen({
  scope,
  criteria,
  uncriteriedUsers,
  usersForSort,
  close,
  insertUser: topInsertUser,
}: StrongComponentProps & Props) {
  const [unknownUsers, setUnknownUsers] = useState<IScheduleWidgetUserMi[]>([]);
  const [sortedUsers, setSortedUsers] = useState(() => {
    const users = [...usersForSort]
      .filter(
        user => criteria.sorts[user.mi] !== undefined && (topInsertUser === undefined || topInsertUser.mi !== user.mi),
      )
      .sort((a, b) => criteria.sorts[a.mi] - criteria.sorts[b.mi]);

    if (users.length) return users;

    return [usersForSort[0]];
  });

  const [stop, setStop] = useState(false);

  const stopOnSingleInsert = () => {
    if (topInsertUser === undefined) return;
    setStop(true);
  };

  const insertUser = useMemo<IScheduleWidgetUser | und>(() => {
    return (
      topInsertUser ??
      uncriteriedUsers.find(user => !unknownUsers.includes(user.mi) && !sortedUsers.some(({ mi }) => mi === user.mi))
    );
  }, [sortedUsers, topInsertUser, uncriteriedUsers, unknownUsers]);

  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(sortedUsers.length - 1);
  const [correct, setCorrect] = useState<'left' | 'right' | null>(null);

  const middle = Math.floor((start + end) / 2);
  const currUser: IScheduleWidgetUser | und = sortedUsers[middle];
  const addInHistoryRef = useActualRef<HistoryAdder>(func);

  return (
    <div className="flex between column full-height">
      {topInsertUser ? (
        <h3>Переопределение участника ({criteria.title})</h3>
      ) : (
        <h3>
          Распределение участноков ({criteria.title}) {sortedUsers.length}/{usersForSort.length}
        </h3>
      )}
      {stop ? (
        <span>Участник определён</span>
      ) : (
        <>
          <ScheduleWidgetTeamsCriteriaSorterScreenHistory
            addInHistoryRef={addInHistoryRef}
            setEnd={setEnd}
            setSortedUsers={setSortedUsers}
            setStart={setStart}
            setCorrect={setCorrect}
          />
          <div>
            <StyledSortBoxes
              $correct={correct}
              $isHideLeftUnknownUser={sortedUsers.length > 1}
              className="flex center full-width"
            >
              {currUser && insertUser && (
                <StyledLeftBox className="relative flex center column flex-big-gap half-width">
                  <StyledCorrectMark />
                  <ScheduleWidgetUserPhoto user={currUser} />
                  <StyledUnknownUserButton
                    Icon={IconUserQuestion01StrokeRounded}
                    onClick={() => {
                      const nextUser = usersForSort[usersForSort.findIndex(user => user.mi === currUser.mi) + 1];

                      setSortedUsers(nextUser ? [nextUser] : []);
                    }}
                    confirm={`${currUser.fio} - неизвестный участник?`}
                  />
                  <TheButton
                    onClick={() => {
                      addInHistoryRef.current(start, end, sortedUsers, 'left');

                      if (start > end) {
                        const users = [...sortedUsers];
                        users.splice(end, 0, insertUser);

                        setStart(0);
                        setEnd(users.length - 1);
                        setSortedUsers(users);
                        stopOnSingleInsert();

                        return;
                      }

                      if (middle === 0 || start === end) {
                        const users = [...sortedUsers];
                        users.splice(start, 0, insertUser);

                        setStart(0);
                        setEnd(users.length - 1);
                        setSortedUsers(users);
                        stopOnSingleInsert();

                        return;
                      }

                      setEnd(middle - 1);
                    }}
                  >
                    {currUser.fio}
                  </TheButton>
                </StyledLeftBox>
              )}
              {insertUser && (
                <StyledRightBox className="relative flex center column flex-big-gap half-width half-height">
                  <StyledCorrectMark />
                  <ScheduleWidgetUserPhoto user={insertUser} />
                  <StyledUnknownUserButton
                    Icon={IconUserQuestion01StrokeRounded}
                    onClick={() => setUnknownUsers([...unknownUsers, insertUser.mi])}
                    confirm={`${insertUser.fio} - неизвестный участник?`}
                  />
                  <TheButton
                    onClick={() => {
                      addInHistoryRef.current(start, end, sortedUsers, 'right');

                      if (start > end) {
                        console.error(start, end);
                        const users = [...sortedUsers];
                        users.splice(start, 0, insertUser);

                        setStart(0);
                        setEnd(users.length - 1);
                        setSortedUsers(users);
                        stopOnSingleInsert();

                        return;
                      }

                      if (start === end) {
                        const users = [...sortedUsers];
                        users.splice(start + 1, 0, insertUser);

                        setStart(0);
                        setEnd(users.length - 1);
                        setSortedUsers(users);
                        stopOnSingleInsert();

                        return;
                      }

                      if (middle + 1 === start) setSortedUsers([...sortedUsers]);

                      setStart(middle + 1);
                    }}
                  >
                    {insertUser.fio}
                  </TheButton>
                </StyledRightBox>
              )}
            </StyledSortBoxes>
            <div className="full-width flex center">Выбери кто сильней</div>
          </div>
        </>
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

const StyledCorrectMark = styled(IconCheckmarkBadge01StrokeRounded)`
  --icon-color: var(--color--ok);
  position: absolute;
  bottom: -20px;
`;

const StyledUnknownUserButton = styled(IconButton)``;
const StyledLeftBox = styled.div``;
const StyledRightBox = styled.div``;

const hiddenCss = css`
  opacity: 0;
  pointer-events: none;
`;

const hideIconCss = css`
  ${StyledCorrectMark} {
    ${hiddenCss}
  }
`;

const StyledSortBoxes = styled.div<{ $correct: 'left' | 'right' | null; $isHideLeftUnknownUser: boolean }>`
  ${props =>
    props.$isHideLeftUnknownUser &&
    css`
      ${StyledLeftBox} {
        ${StyledUnknownUserButton} {
          ${hiddenCss}
        }
      }
    `}

  ${props => {
    if (props.$correct === 'left')
      return css`
        ${StyledRightBox} {
          ${hideIconCss}
        }
      `;

    if (props.$correct === 'right')
      return css`
        ${StyledLeftBox} {
          ${hideIconCss}
        }
      `;

    return css`
      ${StyledRightBox}, ${StyledLeftBox} {
        ${hideIconCss}
      }
    `;
  }}
`;
