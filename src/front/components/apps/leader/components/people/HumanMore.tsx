import { ReactNode } from "react";
import useAbsoluteBottomPopup from "../../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import useFullscreenContent from "../../../../../complect/fullscreen-content/useFullscreenContent";
import modalService from "../../../../../complect/modal/Modal.service";
import { LeaderCleans } from "../LeaderCleans";
import useLeaderContext from "../contexts/useContexts";
import HumanMaster from "./HumanMaster";
import { HumanImportable } from "./People.model";

export default function HumanMore({
  human,
  humanMoreAdditions,
}: {
  human: HumanImportable;
  humanMoreAdditions?: (human: HumanImportable) => ReactNode;
}) {
  const { openFullscreenContent } = useFullscreenContent();
  const { prepareAbsoluteBottomPopupContent, openAbsoluteBottomPopup } = useAbsoluteBottomPopup();
  const { ccontext, contextMembers, contextMentors, humans } = useLeaderContext();
  const isMentor = ccontext?.mentors.includes(human.w);
  const participantListName= isMentor ? 'mentors' : 'members';
  const wraps = isMentor
    ? LeaderCleans.getMembersInGroups(participantListName, contextMentors, [human.w], ccontext?.groups)
    : LeaderCleans.getMembersInGroups(participantListName, contextMembers, [human.w], ccontext?.groups) || [];

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
          const groupws = wraps.map(({ group: { w } }) => w);

          setTimeout(() => {
            openAbsoluteBottomPopup((close, prepare) =>
              prepare({
                items: groups.map((group) => {
                  return {
                    titleNode: <span>
                      {group.name}
                      <span className="color--7"> {LeaderCleans.takeGroupMentorNames(humans, group)}</span>
                    </span>,
                    icon: "people-outline",
                    className: !groupws.includes(group.w) ? "" : "disabled",
                    onClick: async () => {
                      if (
                        human &&
                        (await modalService.confirm(
                          title(` участника "${human.name}"`, `${group.name}?`)
                        ))
                      ) {
                        LeaderCleans.replaceMemberToGroup(
                          group.w,
                          ccontext.w,
                          human.w,
                          wraps.map(({ group }) => group),
                          participantListName
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
