import { useMemo, useState } from 'react';
import { useConfirm } from '../../../../../complect/modal/confirm/useConfirm';
import EvaIcon from '../../../../../complect/eva-icon/EvaIcon';
import KeyboardInput from '../../../../../complect/keyboard/KeyboardInput';
import { LeaderCleans } from '../LeaderCleans';
import HumanList from '../people/HumanList';

const getHumanList = (
  isWholeList: boolean,
  list: number[],
  updater: React.Dispatch<React.SetStateAction<number[]>>,
) => {
  return (
    <div className="height-30vh-strong over-auto">
      <HumanList
        searcherClass="sticky"
        list={isWholeList ? undefined : list}
        asHumanMore={human => {
          return list.indexOf(human.w) < 0 ? (
            <EvaIcon
              name="plus-circle-outline"
              onClick={event => {
                event.stopPropagation();
                updater([...list, human.w]);
              }}
            />
          ) : (
            <EvaIcon
              name="minus-circle-outline"
              onClick={event => {
                event.stopPropagation();
                updater(list.filter(wid => wid !== human.w));
              }}
            />
          );
        }}
      />
    </div>
  );
};

export default function NewLeaderContextMaster({ close }: { close: () => void }) {
  const [name, setName] = useState('');
  const [members, updateMembers] = useState<number[]>([]);
  const [mentors, updateMentors] = useState<number[]>([]);

  const chooseMembersNode = useMemo(() => getHumanList(true, members, updateMembers), [members]);
  const membersNode = useMemo(() => getHumanList(false, members, updateMembers), [members]);

  const chooseMentorsNode = useMemo(() => getHumanList(true, mentors, updateMentors), [mentors]);
  const mentorsNode = useMemo(() => getHumanList(false, mentors, updateMentors), [mentors]);

  const [confirmNode, confirm] = useConfirm();

  return (
    <>
      {confirmNode}
      <div className="full-container padding-giant-gap">
        <div className="flex flex-gap">
          Название:
          <KeyboardInput onChange={setName} />
        </div>
        <h2>Выбери участников:</h2>
        {chooseMembersNode}
        <h2>Выбери лидеров:</h2>
        {chooseMentorsNode}
        <h2>Участники контекста:</h2>
        {membersNode}
        <h2>Лидеры контекста:</h2>
        {mentorsNode}
        <div className="flex center">
          <div
            className="pointer padding-giant-gap"
            onClick={async () => {
              if (!(await confirm('Опубликовать контекст?'))) return;
              LeaderCleans.publicateNewContext({
                name,
                mentors: mentors.sort((a, b) => a - b),
                members: members.sort((a, b) => a - b),
              });
              close();
            }}
          >
            Опубликовать контекст
          </div>
        </div>
      </div>
    </>
  );
}
