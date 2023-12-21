import EvaIcon from '../../../../../complect/eva-icon/EvaIcon';
import { LeaderCleans } from '../LeaderCleans';
import { LeaderGroupImportable } from './Groups.model';
import useLeaderGroups from './useGroups';

export default function GroupFace({ group, onMoreClick }: { group: LeaderGroupImportable; onMoreClick?: () => void }) {
  const { goToGroup, humans } = useLeaderGroups();

  return (
    <div
      className="face-item flex between"
      onClick={(event) => {
        event.stopPropagation();
        goToGroup(group.w);
      }}
    >
      <div className="face-wrapper">
        <span className="face-logo">
          <EvaIcon name="people-outline" />
        </span>
        <span className={`face-title ${group.isInactive ? 'text-strike' : ''}`}>
          {group.name}
          {' - '}
          <span className="color--3">{LeaderCleans.takeGroupMentorNames(humans, group)}</span>
        </span>
      </div>
      {onMoreClick && (
        <EvaIcon
          name="more-vertical"
          onClick={(event) => {
            event.stopPropagation();
            onMoreClick();
          }}
        />
      )}
    </div>
  );
}
