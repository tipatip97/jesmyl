import useIsExpand from '../../../../../complect/expand/useIsExpand';
import EvaSendButton from '../../../../../complect/sends/eva-send-button/EvaSendButton';
import { IconCancelCircleStrokeRounded } from '../../../../../complect/the-icon/icons/cancel-circle';
import { IconCheckmarkCircle02StrokeRounded } from '../../../../../complect/the-icon/icons/checkmark-circle-02';
import { useSpyToggleLocation } from './hooks/actions';
import { useSpyCleanLocations, useSpyLocations } from './hooks/locations';
import { useSpyRoomStateNaked } from './hooks/state';

export default function SpyRoomLocationsInGame({ amIManager }: { amIManager?: boolean }) {
  const [title, isExpand] = useIsExpand(false, <h2>Локации</h2>);

  const onToggleLocation = useSpyToggleLocation();
  const state = useSpyRoomStateNaked();
  const locations = useSpyLocations();
  const cleanLocations = useSpyCleanLocations(state);

  return !locations?.length ? (
    <div className="margin-big-gap text-center">Локаций нет</div>
  ) : (
    <>
      {title}
      {isExpand &&
        locations.map(location => {
          const [strikedLoc, secretLoc] = cleanLocations?.find(([loc]) => loc === location) ?? [];

          return (
            <EvaSendButton
              key={location}
              Icon={strikedLoc ? IconCancelCircleStrokeRounded : IconCheckmarkCircle02StrokeRounded}
              className={'margin-gap-t ' + (strikedLoc ? ' text-strike ' : '') + (strikedLoc ? ' color--ko ' : '')}
              postfix={location}
              onSend={amIManager ? () => onToggleLocation(secretLoc ?? location) : undefined}
            />
          );
        })}
    </>
  );
}
