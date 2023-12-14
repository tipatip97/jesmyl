import EvaSendButton from "../../../../../complect/eva-icon/send-button/EvaSendButton";
import useIsExpand from "../../../../../complect/expand/useIsExpand";
import { useSpyToggleLocation } from "./hooks/actions";
import { useSpyCleanLocations, useSpyLocations } from "./hooks/locations";
import { useSpyRoomStateNaked } from "./hooks/state";


export default function SpyRoomLocationsInGame() {
  const [title, isExpand] = useIsExpand(false, <h2>Локации</h2>);

  const onToggleLocation = useSpyToggleLocation();
  const state = useSpyRoomStateNaked();
  const locations = useSpyLocations();
  const cleanLocations = useSpyCleanLocations(state);

  return !locations?.length
    ? <div className='margin-big-gap text-center'>Локаций нет</div>
    : <>
      {title}
      {isExpand &&
        locations.map((location) => {
          const [strikedLoc, secretLoc] = cleanLocations?.find(([loc]) => loc === location) ?? [];

          return <EvaSendButton
            key={location}
            name={strikedLoc
              ? 'close-circle-outline'
              : 'checkmark-circle-2-outline'}
            className={'margin-gap-t '
              + (strikedLoc ? ' text-strike ' : '')
              + (strikedLoc ? ' color--ko ' : '')}
            postfix={location}
            onSend={() => onToggleLocation(secretLoc ?? location)}
          />;
        })}
    </>;
}
