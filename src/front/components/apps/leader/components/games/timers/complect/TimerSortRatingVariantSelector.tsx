import Dropdown from "../../../../../../../complect/dropdown/Dropdown";
import { GameTeamImportable } from "../../teams/GameTeams.model";
import { GameTimerSortDirection } from "../GameTimer.model";

const sortVariantList = [
  {
    id: GameTimerSortDirection.Asc,
    title: '"Кто дольше"',
  },
  {
    id: GameTimerSortDirection.Desc,
    title: '"Кто быстрее"',
  },
]; 

export default function TimerSortRatingVariantSelector({
  sort,
  onSelect,
  isRedact,
}: {
  sort: number;
  onSelect?: (item: { id: number; title: string }) => void;
  isRedact?: boolean;
}) {
  return <>
    <div className='TimerCompetitionsSelector dropdown-ancestor margin-big-gap-v flex flex-gap full-width'>
      Принцип рейтинга
      {isRedact || isRedact == null
        ? <Dropdown
          id={sort}
          items={sortVariantList}
          onSelect={onSelect}
        />
        : <div className='color--3'>{sortVariantList.find(item => item.id === sort)?.title || ' - '}</div>}
    </div>
  </>;
}
