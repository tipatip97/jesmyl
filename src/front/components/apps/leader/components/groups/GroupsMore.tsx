import useAbsoluteBottomPopup from "../../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import useFullscreenContent from "../../../../../complect/fullscreen-content/useFullscreenContent";
import mylib from "../../../../../complect/my-lib/MyLib";
import useLeaderContexts from "../contexts/useContexts";
import PrintableBottomItem from "../PrintableBottomItem";
import QRQuest from "../templates/QRQuest";
import WelcomePageList from "../templates/WelcomePageList";
import LeaderGroupMaster from "./GroupMaster";

export default function LeaderGroupsMore({ close }: { close: () => void }) {
  const { openFullscreenContent } = useFullscreenContent();
  const { ccontext } = useLeaderContexts();

  const bags =
    (ccontext?.groups &&
      mylib
        .unique(
          ccontext.groups
            ?.map((group) => group.members.map((human) => ({ group, human })))
            .flat()
            .sort(({ human: { name: a } }, { human: { name: b } }) =>
              a > b ? 1 : b < a ? -1 : 0
            ),
          ({ human }) => human.wid
        )
        .filter(({ human }) => !human.isInactive)
        .map(({ group, human }) => ({
          ...group.getFieldValues(),
          ...human.toDict(),
        }))) ||
    [];

  const { prepareAbsoluteBottomPopupContent } = useAbsoluteBottomPopup();

  return <>{
    prepareAbsoluteBottomPopupContent({
      items: [{
        title: 'Новая группа',
        icon: "plus-circle-outline",
        onClick: () =>
          openFullscreenContent((close) => <LeaderGroupMaster close={close} />),
      }]
    })}
    <PrintableBottomItem
      title="QR квест точки"
      node={<QRQuest />}
      close={close}
    />
    <PrintableBottomItem
      title="Допуск к путешествию"
      node={<WelcomePageList list={bags} />}
      close={close}
    />
  </>;
}
