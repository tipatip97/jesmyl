import { useState } from "react";
import Dropdown from "../../../../../complect/dropdown/Dropdown";
import { DropdownItemList } from "../../../../../complect/dropdown/Dropdown.model";
import useExer from "../../../../../complect/exer/useExer";
import { cmExer } from "../../Cm.store";
import { MeetingSection } from "./EditMeetings.model";
import { useEditableMeetings } from "./useEditableMeetings";

export default function MeetingsCreator({ close }: { close: () => void }) {
  const [section, setSection] = useState<MeetingSection>("event");
  const [name, setName] = useState("");
  const { meetings } = useEditableMeetings();
  const { exec } = useExer(cmExer);

  return (
    <div className="full-container flex column full-height padding-big-gap center">
      <Dropdown
        id={section}
        onSelect={({ id }) => setSection(id)}
        items={DropdownItemList<MeetingSection>([
          {
            title: "Контекст",
            id: "context",
          },
          {
            title: "Группа",
            id: "group",
          },
          {
            title: "Событие",
            id: "event",
          },
        ])}
      />
      {section === "group" ? null : (
        <div className="full-width margin-gap-v flex">
          <div className="margin-gap-h">Название</div>
          <input
            className="full-width"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
      )}
      <button
        className=""
        onClick={() => {
            exec(meetings?.create(section, name));
            close();
        }}
      >
        Создать
      </button>
    </div>
  );
}
