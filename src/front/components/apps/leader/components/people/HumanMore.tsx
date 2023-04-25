import { ReactNode } from "react";
import useAbsoluteBottomPopup from "../../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import useFullscreenContent from "../../../../../complect/fullscreen-content/useFullscreenContent";
import useLeaderContexts from "../contexts/useContexts";
import Human from "./Human";
import HumanMaster from "./HumanMaster";
import modalService from "../../../../../complect/modal/Modal.service";

export default function HumanMore({
  human,
  humanMoreAdditions,
}: {
  human: Human;
  humanMoreAdditions?: (human: Human) => ReactNode;
}) {
  const { openFullscreenContent } = useFullscreenContent();
  const { prepareAbsoluteBottomPopupContent, openAbsoluteBottomPopup } = useAbsoluteBottomPopup();
  const { ccontext } = useLeaderContexts();
  const wraps = ccontext?.getMembersInGroups([human.wid]) || [];

  const title = (txt = "", txt2 = "") =>
    `${wraps.length ? "Переопределить" : "Определить"
    }${txt} в группу ${txt2}`;

  return <>{prepareAbsoluteBottomPopupContent({
    items: [
      {
        title: 'Редактировать',
        icon: "edit-outline",
        onClick: () =>
          openFullscreenContent((close) => (
            <HumanMaster close={close} human={human} />
          )),
      },
      {
        title: title(),
        icon: 'people-outline',
        onClick: () => {
          const groups = ccontext?.groups;
          if (!groups) return;
          const groupws = wraps.map(({ group: { wid } }) => wid);

          setTimeout(() => {
            openAbsoluteBottomPopup((close, prepare) =>
              prepare({
                items: groups.map((group) => {
                  return {
                    title: group.name,
                    icon: "people-outline",
                    className: !groupws.includes(group.wid) ? "" : "disabled",
                    onClick: async () => {
                      if (
                        human &&
                        (await modalService.confirm(
                          title(` участника "${human.name}"`, `${group.name}?`)
                        ))
                      ) {
                        group
                          .replaceMemberToGroup(
                            ccontext.wid,
                            human.wid,
                            wraps.map(({ group }) => group)
                          )
                          .then(() => close());
                      }
                    },
                  };
                }),
              }));
          });
        },
      },
    ]
  })}
    {typeof humanMoreAdditions === "function"
      ? humanMoreAdditions(human)
      : humanMoreAdditions}
  </>;
}
