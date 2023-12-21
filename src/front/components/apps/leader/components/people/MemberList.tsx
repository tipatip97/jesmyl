import { useCallback, useEffect } from 'react';
import { renderComponentInNewWindow } from '../../../../../..';
import { LeaderCleans } from '../LeaderCleans';
import useLeaderContext from '../contexts/useContexts';
import { LeaderGroupImportable } from '../groups/Groups.model';
import WelcomePageList from '../templates/WelcomePageList';
import HumanList from './HumanList';
import { HumanImportable, HumanListComponentProps } from './People.model';

export default function MemberList({ ...props }: {} & HumanListComponentProps) {
  const { ccontext, contextMembers } = useLeaderContext();
  const placeholder = `${ccontext?.name || ''}. Участники`;
  const humansRef = { current: [] };

  const getWelcomePages = useCallback((list: { group: LeaderGroupImportable; member: HumanImportable }[]) => {
    return (
      ccontext && (
        <WelcomePageList
          list={list.map(({ group, member }) => ({
            ...LeaderCleans.getContextFieldValues(ccontext, group.fields),
            ...member,
          }))}
        />
      )
    );
  }, []);

  useEffect(() => {
    if (!ccontext) return;
    const onPrint = (event: KeyboardEvent) => {
      if (event.code === 'BracketRight' && event.ctrlKey) {
        event.preventDefault();
        renderComponentInNewWindow(
          <>
            {getWelcomePages(
              LeaderCleans.getMembersInGroups(
                'members',
                contextMembers,
                humansRef.current.map(({ wid }) => wid),
                ccontext.groups,
              ) || [],
            )}
          </>,
        );
      }
    };
    window.addEventListener('keyup', onPrint);
    return () => {
      window.removeEventListener('keyup', onPrint);
    };
  }, [ccontext, contextMembers, getWelcomePages]);

  if (!ccontext) return null;

  return (
    <>
      <HumanList
        {...props}
        list={contextMembers.map(human => human.w) ?? []}
        placeholder={placeholder}
        humansRef={humansRef}
        excludedHumans={ccontext.mentors}
        excludedLabel="лидер"
        fieldLabel="members"
        onAddHuman={human => {
          return LeaderCleans.addContextHuman(ccontext.w, human.w, 'members');
        }}
        onRemoveHuman={human => {
          return LeaderCleans.removeContextHuman(ccontext.w, human.w, 'members');
        }}
        asHumanMore={({ w }) => {
          const list = LeaderCleans.getMembersInGroups('members', contextMembers, [w], ccontext.groups);

          if (!list?.length) return <div className="error-message nowrap">Вне групп</div>;
          else if (list.length > 1) return <div className="error-message">В нескольких группах!</div>;
        }}
      />
    </>
  );
}
