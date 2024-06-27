import TheButton from '../../../../../Button';
import useFullContent from '../../../../../fullscreen-content/useFullContent';
import { useScheduleWidgetRightsContext } from '../../../../useScheduleWidget';
import ScheduleWidgetTeamGameSetTeamsScreen from './SetTeamsScreen';

export default function ScheduleWidgetTeamGameSetTeamsButton() {
  const rights = useScheduleWidgetRightsContext();
  const criterias = rights.schedule.games?.criterias;

  const [fullNode, openFull] = useFullContent(() => <ScheduleWidgetTeamGameSetTeamsScreen />);

  return (
    <>
      {fullNode}
      <TheButton
        disabled={!criterias?.length}
        onClick={() => openFull()}
      >
        Сформировать команды
      </TheButton>
    </>
  );
}
