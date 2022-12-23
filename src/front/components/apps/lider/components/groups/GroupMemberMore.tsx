import Human from "../people/Human";
import PrintableBottomItem from "../PrintableBottomItem";
import WelcomePage from "../templates/WelcomePage";
import LeaderGroup from "./Group";

export default function GroupMemberMore({
  group,
  member,
  close,
}: {
  group: LeaderGroup;
  member: Human;
  close: () => void;
}) {
  return (
    <>
      <PrintableBottomItem
        title="Распечатать Допуск"
        node={
          <WelcomePage
            bag={{ ...group.getFieldValues(), ...member.toDict() }}
          />
        }
        close={close}
      />
    </>
  );
}
