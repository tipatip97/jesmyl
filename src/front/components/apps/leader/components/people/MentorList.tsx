import { LeaderCleans } from "../LeaderCleans";
import { useLeaderCcontext } from "../contexts/useContexts";
import HumanList from "./HumanList";
import { HumanListComponentProps } from "./People.model";

export default function MentorList(props: HumanListComponentProps) {
  const ccontext = useLeaderCcontext();
  const placeholder = `Поиск по лидерам ${ccontext?.name || ""}`;

  if (!ccontext) return null;

  return (
    <>
      <HumanList
        {...props}
        list={ccontext.mentors ?? []}
        placeholder={placeholder}
        excludedHumans={ccontext.members}
        excludedLabel="участник"
        onAddHuman={(human) => {
          return LeaderCleans.addContextHuman(ccontext.w, human.w, 'mentors');
        }}
        onRemoveHuman={(human) => {
          return LeaderCleans.removeContextHuman(ccontext.w, human.w, 'mentors');
        }}
      />
    </>
  );
}
