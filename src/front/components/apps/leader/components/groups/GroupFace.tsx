import { FaceItem } from '../../../../../complect/FaceItem';
import { IconMoreVerticalCircle01StrokeRounded } from '../../../../../complect/the-icon/icons/more-vertical-circle-01';
import { IconUserStrokeRounded } from '../../../../../complect/the-icon/icons/user';
import { LeaderCleans } from '../LeaderCleans';
import { LeaderGroupImportable } from './Groups.model';
import useLeaderGroups from './useGroups';

export default function GroupFace({ group, onMoreClick }: { group: LeaderGroupImportable; onMoreClick?: () => void }) {
  const { goToGroup, humans } = useLeaderGroups();

  return (
    <FaceItem
      className="flex between"
      onClick={event => {
        event.stopPropagation();
        goToGroup(group.w);
      }}
    >
      <div className="face-wrapper">
        <span className="face-logo">
          <IconUserStrokeRounded />
        </span>
        <span className={`face-title ${group.isInactive ? 'text-strike' : ''}`}>
          {group.name}
          {' - '}
          <span className="color--3">{LeaderCleans.takeGroupMentorNames(humans, group)}</span>
        </span>
      </div>
      {onMoreClick && (
        <IconMoreVerticalCircle01StrokeRounded
          onClick={event => {
            event.stopPropagation();
            onMoreClick();
          }}
        />
      )}
    </FaceItem>
  );
}
