import { IconArrowRight01StrokeRounded } from '../../../complect/the-icon/icons/arrow-right-01';
import { IconLeftToRightListBulletStrokeRounded } from '../../../complect/the-icon/icons/left-to-right-list-bullet';
import { IconPlusSignStrokeRounded } from '../../../complect/the-icon/icons/plus-sign';
import useIsExpand from '../../expand/useIsExpand';
import useFullContent from '../../fullscreen-content/useFullContent';
import { StrongComponentProps } from '../../strong-control/Strong.model';
import StrongEvaButton from '../../strong-control/StrongEvaButton';
import IconButton from '../../the-icon/IconButton';
import ScheduleWidgetTeamGames from '../control/games/games/Games';
import ScheduleWidgetRoleList from '../control/roles/RoleList';
import { useScheduleWidgetRightsContext } from '../useScheduleWidget';
import { ScheduleWidgetListCategory } from './Category';

export default function ScheduleWidgetLists({
  scope,
  scheduleScope,
}: StrongComponentProps & { scheduleScope: string }) {
  const rights = useScheduleWidgetRightsContext();
  const listsScope = scope + ' lists';
  const [listsTitle, isExpand] = useIsExpand(
    true,
    'Списки',
    isExpand =>
      isExpand &&
      rights.isCanTotalRedact && (
        <StrongEvaButton
          scope={listsScope}
          fieldName="cats"
          Icon={IconPlusSignStrokeRounded}
          prefix="список"
          confirm="Создать новый список?"
        />
      ),
  );

  const [modalNode, screen] = useFullContent(() => {
    return (
      <>
        <h3 className="flex flex-gap">{listsTitle}</h3>
        {isExpand &&
          rights.schedule.lists.cats.map((cat, cati) => {
            return (
              <ScheduleWidgetListCategory
                key={cati}
                scope={listsScope}
                scheduleScope={scope}
                cat={cat}
                cati={cati}
              />
            );
          })}
        {rights.isCanRedact && <ScheduleWidgetRoleList scope={scheduleScope} />}
        {rights.isCanRedact && <ScheduleWidgetTeamGames scope={scheduleScope} />}
      </>
    );
  });

  return (
    <>
      {modalNode}
      <IconButton
        Icon={IconLeftToRightListBulletStrokeRounded}
        postfix={
          <>
            Списки <IconArrowRight01StrokeRounded />
          </>
        }
        onClick={() => screen()}
        className="margin-gap-v flex-max"
      />
    </>
  );
}

// import { useEffect, useState } from 'react';
// import { IScheduleWidgetExportableTeam, IScheduleWidgetTeamGame } from '../../../../../../models';
// import Dropdown from '../../../../../dropdown/Dropdown';
// import KeyboardInput from '../../../../../keyboard/KeyboardInput';
// import mylib from '../../../../../my-lib/MyLib';
// import { StrongComponentProps } from '../../../../../strong-control/Strong.model';
// import StrongButton from '../../../../../strong-control/StrongButton';
// import { useScheduleWidgetRightsContext } from '../../../../useScheduleWidget';

// interface Props {
//   game: IScheduleWidgetTeamGame;
// }

// const findClosest = (arr: number[], num: number) => {
//   return arr.reduce((closest, n) => (Math.abs(n - num) > Math.abs(closest - num) ? closest : n));
// };

// export default function ScheduleWidgetTeamGameSetTeamsScreen({ scope, game }: StrongComponentProps & Props) {
//   const rights = useScheduleWidgetRightsContext();
//   const criterias = rights.schedule.ctrl.games.criterias;
//   const schUsers = rights.schedule.ctrl.users;
//   const [teamsCountStr, setTeamsCount] = useState('3');
//   const [criteriai, setCriteriai] = useState(0);
//   const [teams, setTeams] = useState<IScheduleWidgetExportableTeam[]>([]);

//   useEffect(() => {
//     const teamsCount = +teamsCountStr;
//     const criteria = criterias[criteriai].sorts;
//     const sortedUsers = rights.schedule.ctrl.users
//       .filter(user => criteria[user.mi] !== undefined)
//       .sort((a, b) => criteria[a.mi] - criteria[a.mi]);

//     if (teamsCount > sortedUsers.length - 1) return;

//     const teamsNumbers: number[][] = Array.from({ length: teamsCount }, () => []);
//     const mapToPower = (team: number[]) => team.reduce((sum, userMi) => sum + criteria[userMi] + 1, 0);

//     let isCanReverse = true;
//     let randomTeams = [...teamsNumbers];

//     while (true) {
//       // if (sortedUsers.length < teamsCount * 2) {
//       //   if (isCanReverse) {
//       //     sortedUsers.reverse();
//       //     isCanReverse = false;
//       //   }
//       // }

//       const users = mylib.toRandomSorted(sortedUsers.splice(0, teamsCount));
//       // console.log([...sortedUsers]);
//       if (!users.length) break;

//       for (let i = users.length - 1; i > -1; i--) {
//         if (users[i] === undefined) break;

//         let teami: number;

//         if (sortedUsers.length < teamsCount * 2) {
//           const powers = randomTeams.map(mapToPower);
//           console.log(powers);
//           const rest = Math.min(...powers);
//           const randomRestTeam = mylib.randomItem(
//             // eslint-disable-next-line no-loop-func
//             powers.map((power, poweri) => (power === rest ? randomTeams[poweri] : null)).filter(it => it !== null),
//           );

//           if (randomRestTeam === null) break;

//           teami = randomTeams.indexOf(randomRestTeam);
//         } else teami = mylib.randomIndex(randomTeams);

//         randomTeams[teami].push(users[i].mi);
//         randomTeams.splice(teami, 1);
//         // console.log(mylib.clone(randomTeams.map(team => team.map(userMi => criteria[userMi] + 1))));
//       }

//       // starti += teamsCount;
//       // endi += teamsCount;
//       randomTeams = [...teamsNumbers];
//     }

//     const powers = teamsNumbers.map(mapToPower);
//     const max = Math.max(...powers);
//     const min = Math.min(...powers);
//     const difference = max - min;
//     const maxs: number[][] = [];
//     const mins: number[][] = [];

//     teamsNumbers.forEach((numTeam, numTeami) => {
//       if (powers[numTeami] === max) maxs.push(numTeam);
//       if (powers[numTeami] === min) mins.push(numTeam);
//     });

//     while (true) {
//       if (!mins.length || !maxs.length) break;
//       const randMaxsi = mylib.randomIndex(maxs);
//       const randMinsi = mylib.randomIndex(mins);

//       const minTeam = mins.splice(randMinsi, 1)[0];
//       const maxTeam = maxs.splice(randMaxsi, 1)[0];

//       const maxPowers = maxTeam.map(userMi => criteria[userMi] + 1);
//       const closest = findClosest(maxPowers, difference / 2);

//       minTeam.push(maxTeam.splice(maxPowers.indexOf(closest))[0]);
//     }

//     console.log(powers, teamsNumbers.map(mapToPower), difference);

//     const teams: IScheduleWidgetExportableTeam[] = teamsNumbers.map(team => ({
//       users: team.map(mi => ({ mi })),
//     }));

//     setTeams(teams);
//   }, [criteriai, criterias, rights.schedule.ctrl.users, teamsCountStr]);

//   return (
//     <>
//       <h3>
//         Составляем новые команды для игры <span className="color--7">{game.title}</span>
//       </h3>
//       <div className="margin-gap-v margin-giant-gap-b">
//         Критерий сортировки
//         <Dropdown
//           id={criteriai}
//           items={criterias.map(({ title }, id) => ({ id, title }))}
//           onSelectId={setCriteriai}
//         />
//       </div>
//       <div className="margin-giant-gap-b">
//         Количество команд
//         <KeyboardInput
//           value={teamsCountStr}
//           type="number"
//           onChange={setTeamsCount}
//         />
//       </div>
//       <StrongButton
//         scope={scope}
//         title="Сформировать команды"
//         disabled={!criterias.length || !teams.length}
//         confirm="Сформировать команды?"
//         fieldName="teams"
//         fieldValue={teams}
//       />
//       <h3>Команды</h3>
//       {teams.map((team, teami) => {
//         return (
//           <div
//             key={teami}
//             className="margin-giant-gap-v"
//           >
//             {team.users.map(({ mi }) => {
//               const user = schUsers.find(user => user.mi === mi);
//               if (user === undefined) return null;
//               return (
//                 <div key={user.mi}>
//                   {criterias[criteriai].sorts[user.mi] + 1} {user.fio}
//                 </div>
//               );
//             })}
//           </div>
//         );
//       })}
//     </>
//   );
// }
