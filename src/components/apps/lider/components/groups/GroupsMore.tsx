import EvaIcon from "../../../../../complect/eva-icon/EvaIcon";
import useFullscreenContent from "../../../../../complect/fullscreen-content/useFullscreenContent";
import useLeaderContexts from "../contexts/useContexts";
import PrintableBottomItem from "../PrintableBottomItem";
import QRQuest from "../templates/QRQuest";
import WelcomePageList from "../templates/WelcomePageList";
import LeaderGroupMaster from "./GroupMaster";

export default function LeaderGroupsMore({ close }: { close: () => void }) {
  const { openFullscreenContent } = useFullscreenContent();
  const { ccontext } = useLeaderContexts();

  const bags =
    ccontext?.groups
      ?.map((group) =>
        group.members.map((human) => {
          return { group, human };
        })
      )
      .flat()
      .sort(({ human: { name: a } }, { human: { name: b } }) =>
        a > b ? 1 : b < a ? -1 : 0
      )
      .map(({ group, human }) => ({
        ...group.getFieldValues(),
        ...human.toDict(),
      })) || [];

  return (
    <>
      <div
        className="abs-item pointer"
        onClick={() =>
          openFullscreenContent((close) => <LeaderGroupMaster close={close} />)
        }
      >
        <EvaIcon name="plus-circle-outline" className="abs-icon" />
        <div>Новая группа</div>
        <div className="abs-action" />
      </div>
      <PrintableBottomItem
        title="QR квест точки"
        node={<QRQuest />}
        close={close}
      />
      <PrintableBottomItem
        title="AdA"
        node={<WelcomePageList list={bags} />}
        close={close}
      />
    </>
  );
}
