import useAbsoluteFloatPopup from "../../../../../../complect/absolute-popup/useAbsoluteFloatPopup";
import propsOfClicker from "../../../../../../complect/clicker/propsOfClicker";
import useCmNav, { comNavPhasePoint } from "../../../base/useCmNav";
import useSelectedComs from "../../../base/useSelectedComs";
import { useCcom } from "../useCcom";
import { ComFaceProps } from "./ComFace.model";
import "./ComFace.scss";
import ComFaceContextMenu from "./ComFaceContextMenu";

export default function ComFace(props: ComFaceProps) {
  const {
    com,
    importantOnClick,
    groupClass,
    selectable,
    rejectScrollToView,
  } = props;
  const ccom = useCcom();
  const { jumpTo } = useCmNav();
  const { openAbsoluteFloatPopup, closeAbsoluteFloatPopup } =
    useAbsoluteFloatPopup();
  const { selectedComPosition, toggleSelectedCom } = useSelectedComs();

  return com == null ? null : (
    <>
      <div
        className={
          'face-item flex between '
          + (ccom?.wid === com.wid ? " current " : "")
          + (groupClass || "")
          + ` wid_${com.wid} `
        }
        onClick={
          importantOnClick ||
          (() => jumpTo({ phase: comNavPhasePoint, data: { ccomw: com.wid } }))
        }
        ref={
          rejectScrollToView || ccom?.wid !== com.wid
            ? undefined
            : (element) => element?.scrollIntoView()
        }
        {...propsOfClicker({
          onCtxMenu: (event) => {
            event.preventDefault();
            selectable !== false &&
              openAbsoluteFloatPopup(
                <ComFaceContextMenu
                  onClick={() => closeAbsoluteFloatPopup()}
                  com={com}
                />,
                event.clientX,
                event.clientY
              );
          }
        })}
      >
        <div
          className="face-logo"
          selected-position={selectedComPosition(com) || undefined}
          onClick={(event) => {
            event.stopPropagation();
            selectable !== false && toggleSelectedCom(com);
          }}
        >
          <span>{`${com.number}`}</span>
        </div>
        <span className="face-title ellipsis">{com.name}</span>
        {props.description}
      </div>
    </>
  );
}
