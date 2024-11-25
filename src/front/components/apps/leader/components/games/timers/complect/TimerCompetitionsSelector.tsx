import { mylib } from 'front/utils';
import Dropdown from '../../../../../../../complect/dropdown/Dropdown';
import { GameTeamImportable } from '../../teams/GameTeams.model';

const dropdownTeamList = [
  {
    id: 1,
    title: 'все против всех',
  },
].concat(
  Array(10)
    .fill('')
    .map((_, numi) => {
      const num = numi + 2;
      return {
        id: num,
        title: `по ${num} ${mylib.declension(num, 'команде', 'команды', 'команд')}`,
      };
    }),
);

export default function TimerCompetitionsSelector({
  joins,
  teams,
  onSelect,
  isRedact,
  addItems,
}: {
  joins: number;
  teams?: GameTeamImportable[];
  onSelect?: (item: { id: number; title: string }) => void;
  isRedact?: boolean;
  addItems?: { id: number; title: string }[];
}) {
  if (!teams || teams.length < 3) return null;

  return (
    <>
      <div className="TimerCompetitionsSelector dropdown-ancestor margin-big-gap-v flex flex-gap full-width">
        Соревнуются
        {isRedact || isRedact == null ? (
          <Dropdown
            id={joins}
            items={dropdownTeamList.slice(0, teams.length - 1).concat(addItems || [])}
            onSelect={onSelect}
          />
        ) : (
          <div className="color--3">
            {joins < 2 ? dropdownTeamList[0].title : dropdownTeamList.find(item => item.id === joins)?.title || ' - '}
          </div>
        )}
      </div>
    </>
  );
}
