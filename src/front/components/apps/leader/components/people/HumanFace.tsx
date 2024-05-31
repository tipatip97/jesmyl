import { ReactNode } from 'react';
import { useBottomPopup } from '../../../../../complect/absolute-popup/bottom-popup/useBottomPopup';
import { IconAlien02StrokeRounded } from '@icons/alien-02';
import { IconFlowerPotStrokeRounded } from '@icons/flower-pot';
import { IconMoreVerticalCircle01StrokeRounded } from '@icons/more-vertical-circle-01';
import { useLeaderCcontext } from '../contexts/useContexts';
import { HumanMoreContenter } from './HumanMore';
import { HumanImportable } from './People.model';

export default function HumanFace({
  human,
  onMoreClick,
  asMore,
  humanMoreAdditions,
}: {
  human: HumanImportable;
  onMoreClick?: () => void;
  asMore?: (human: HumanImportable) => ReactNode;
  humanMoreAdditions?: (human: HumanImportable) => ReactNode;
}) {
  const [humanMoreNode, openHumanMore] = useBottomPopup((isOpen, close, prepare) =>
    HumanMoreContenter(isOpen, close, prepare, { human, humanMoreAdditions }),
  );
  const ccontext = useLeaderCcontext();
  const groups = ccontext?.groups?.filter(
    group => group.members.some(memberw => memberw === human.w) || group.mentors.some(memberw => memberw === human.w),
  );
  const groupTitles = groups?.length ? `; ${groups.map(group => group.name).join(', ')}` : '';

  return (
    <>
      {humanMoreNode}
      <div
        className="face-item flex between"
        onClick={event => {
          event.stopPropagation();
          openHumanMore();
        }}
      >
        <div className="face-wrapper">
          <span className="face-logo">
            {human.isMan ? <IconAlien02StrokeRounded /> : <IconFlowerPotStrokeRounded />}
          </span>
          <span className={`face-title ${human.isInactive ? 'text-strike' : ''}`}>
            <span className="color--3">{human.name}</span>
            {`${groupTitles}${human.ufp1 + human.ufp2 ? `; ${(human.ufp1 + human.ufp2) / 2}` : ''}`}
          </span>
        </div>
        {asMore?.(human) ||
          (onMoreClick && (
            <IconMoreVerticalCircle01StrokeRounded
              onClick={event => {
                event.stopPropagation();
                onMoreClick();
              }}
            />
          ))}
      </div>
    </>
  );
}
