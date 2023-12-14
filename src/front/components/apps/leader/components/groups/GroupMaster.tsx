import { useState } from "react";
import SendButton from "../../../../../complect/sends/send-button/SendButton";
import KeyboardInput from "../../../../../complect/keyboard/KeyboardInput";
import { LeaderCleans } from "../LeaderCleans";
import { useLeaderCcontext } from "../contexts/useContexts";
import SelectHumans from "../people/SelectHumans";
import { LeaderGroupImportable } from "./Groups.model";

export default function LeaderGroupMaster({
  group,
  close,
}: {
  group?: LeaderGroupImportable;
  close: () => void;
}) {
  const [name, setName] = useState<string>(group?.name || "");

  const [addMentors, updateAddMentors] = useState<number[]>([]);
  const [delMentors, updateDelMentors] = useState<number[]>([]);
  const [addMembers, updateAddMembers] = useState<number[]>([]);
  const [delMembers, updateDelMembers] = useState<number[]>([]);

  const ccontext = useLeaderCcontext();

  if (!ccontext) return null;

  return (
    <div className="full-container flex column padding-giant-gap">
      <div className="flex flex-gap full-width">
        <div>Название:</div>
        <KeyboardInput
          value={group?.name}
          preferLanguage="ru"
          onInput={(value) => setName(value)}
        />
      </div>
      <SelectHumans
        chooseTitle={`Выбор из участников ${ccontext?.name || "контекста"}`}
        chosenPlaceholder="Участникам группы"
        chosenTitle="Список участников группы"
        excludedTitle="Лидер"
        redact
        fixedList={group?.members}
        wholeList={ccontext?.members}
        excludes={ccontext?.mentors}
        onListsUpdate={(addList, delList) => {
          updateAddMembers(addList);
          updateDelMembers(delList);
        }}
      />
      <SelectHumans
        chooseTitle={`Выбор из участников ${ccontext?.name || "контекста"}`}
        chosenPlaceholder="Поиск по лидерам группы"
        chosenTitle="Список лидеров группы"
        excludedTitle="Участник"
        redact
        fixedList={group?.mentors}
        wholeList={ccontext?.mentors}
        excludes={ccontext?.members}
        onListsUpdate={(addList, delList) => {
          updateAddMentors(addList);
          updateDelMentors(delList);
        }}
      />
      {(!group ||
        !!LeaderCleans.getChangesStack(group.w, group.name, {
          name,
          contextw: 0,
          addMembers,
          addMentors,
          delMembers,
          delMentors,
        }).length) && (
          <SendButton
            title={`Опубликовать ${group ? "изменения" : "группу"}`}
            confirm
            onSuccess={() => close()}
            onSend={() => {
              if (!ccontext) return;

              if (group) {
                return LeaderCleans.sendGroupChanges(group.w, group.name, {
                  addMembers,
                  addMentors,
                  contextw: ccontext.w,
                  delMembers,
                  delMentors,
                  name,
                });
              } else {
                return LeaderCleans.publicateNewLeaderGroup({
                  name,
                  members: addMembers,
                  mentors: addMentors,
                  contextw: ccontext.w,
                });
              }
            }}
          />
        )}
    </div>
  );
}
