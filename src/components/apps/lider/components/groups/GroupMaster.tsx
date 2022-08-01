import { useState } from "react";
import useKeyboard from "../../../../../complect/keyboard/useKeyboard";
import modalService from "../../../../../complect/modal/Modal.service";
import SendButton from "../../complect/SendButton";
import { liderExer } from "../../Lider.store";
import useLeaderContexts from "../contexts/useContexts";
import Human from "../people/Human";
import SelectHumans from "../people/SelectHumans";
import LeaderGroup from "./Group";

export default function LeaderGroupMaster({
  group,
  close,
}: {
  group?: LeaderGroup;
  close: () => void;
}) {
  const [name, setName] = useState<string>(group?.name || "");

  const [addMentors, updateAddMentors] = useState<number[]>([]);
  const [delMentors, updateDelMentors] = useState<number[]>([]);
  const [addMembers, updateAddMembers] = useState<number[]>([]);
  const [delMembers, updateDelMembers] = useState<number[]>([]);

  const { ccontext } = useLeaderContexts();

  const uniq = `group master ${group?.ts}`;

  const nameInput = useKeyboard()(uniq, {
    initialValue: group?.name,
    preferLanguage: "ru",
    onInput: (value) => setName(value),
  });

  return (
    <div className="full-container flex column padding-giant-gap">
      <div className="flex flex-gap full-width">
        <div>Название:</div>
        {nameInput.node}
      </div>
      <SelectHumans
        uniq={uniq + "members"}
        chooseTitle={`Выбор из участников ${ccontext?.name || "контекста"}`}
        chosenPlaceholder="Поиск по участникам группы"
        chosenTitle="Список участников группы"
        excludedTitle="Лидер"
        isRedactable
        fixedList={group?.members.map((human) => human.wid)}
        excludes={ccontext?.mentors.map((human) => human.wid)}
        onListsUpdate={(addList, delList) => {
          updateAddMembers(addList);
          updateDelMembers(delList);
        }}
      />

      <SelectHumans
        uniq={uniq + "mentors"}
        chooseTitle={`Выбор из участников ${ccontext?.name || "контекста"}`}
        chosenPlaceholder="Поиск по лидерам группы"
        chosenTitle="Список лидеров группы"
        excludedTitle="Участник"
        isRedactable
        fixedList={group?.mentors.map((human) => human.wid)}
        excludes={ccontext?.members.map((human) => human.wid)}
        onListsUpdate={(addList, delList) => {
          updateAddMentors(addList);
          updateDelMentors(delList);
        }}
      />
      {(!group ||
        !!group.getChangesStack({
          name,
          contextw: 0,
          addMembers,
          addMentors,
          delMembers,
          delMentors,
        }).length) && (
        <SendButton
          title={`Опубликовать ${group ? "изменения" : "группу"}`}
          onSuccess={() => close()}
          onSend={async () => {
            if (!ccontext) return;

            if (group) {
              if (
                await modalService.confirm(
                  `Опубликовать изменения группы ${
                    group.name || "без названия"
                  }?`
                )
              ) {
                return group.sendChanges({
                  addMembers,
                  addMentors,
                  contextw: ccontext.wid,
                  delMembers,
                  delMentors,
                  name,
                });
              }
            } else {
              if (
                await modalService.confirm(
                  `Опубликовать группу ${name || "без названия"}?`
                )
              ) {
                return LeaderGroup.publicateNew({
                  name,
                  members: addMembers,
                  mentors: addMentors,
                  contextw: ccontext.wid,
                });
              }
            }
          }}
        />
      )}
    </div>
  );
}
