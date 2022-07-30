import { useMemo, useState } from "react";
import EvaIcon from "../../../../../complect/eva-icon/EvaIcon";
import useKeyboard from "../../../../../complect/keyboard/useKeyboard";
import modalService from "../../../../../complect/modal/Modal.service";
import Human from "../people/Human";
import HumanList from "../people/HumanList";
import useLeaderContexts from "./useContexts";

const getHumanList = (
  members: Human[],
  isWholeList: boolean,
  list: Human[],
  updater: React.Dispatch<React.SetStateAction<Human[]>>
) => {
  return (
    <div className="height-30vh over-auto">
      <HumanList
        uniq={`${isWholeList} context-master ${list === members ? "#" : "*"}`}
        searcherClass="sticky"
        list={() => isWholeList ? undefined : list}
        asHumanMore={(human) => {
          return list.indexOf(human) < 0 ? (
            <EvaIcon
              name="plus-circle-outline"
              onClick={(event) => {
                event.stopPropagation();
                updater([...list, human]);
              }}
            />
          ) : (
            <EvaIcon
              name="minus-circle-outline"
              onClick={(event) => {
                event.stopPropagation();
                updater(list.filter((member) => member !== human));
              }}
            />
          );
        }}
      />
    </div>
  );
};

export default function NewLeaderContextMaster({
  close,
}: {
  close: () => void;
}) {
  const nameInput = useKeyboard()("new leader context", {});
  const [members, updateMembers] = useState<Human[]>([]);
  const [mentors, updateMentors] = useState<Human[]>([]);
  const { publicateNewContext } = useLeaderContexts();

  const chooseMembersNode = useMemo(
    () => getHumanList(members, true, members, updateMembers),
    [members]
  );
  const membersNode = useMemo(
    () => getHumanList(members, false, members, updateMembers),
    [members]
  );

  const chooseMentorsNode = useMemo(
    () => getHumanList(members, true, mentors, updateMentors),
    [mentors, members]
  );
  const mentorsNode = useMemo(
    () => getHumanList(members, false, mentors, updateMentors),
    [mentors, members]
  );

  return (
    <div className="full-container padding-giant-gap">
      <div className="flex flex-gap">Название: {nameInput.node}</div>
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
            if (!(await modalService.confirm("Опубликовать контекст?"))) return;
            publicateNewContext({
              name: nameInput.value(),
              mentors: mentors
                .map((leader) => leader.wid)
                .sort((a, b) => a - b),
              members: members
                .map((member) => member.wid)
                .sort((a, b) => a - b),
            });
            close();
          }}
        >
          Опубликовать контекст
        </div>
      </div>
    </div>
  );
}
