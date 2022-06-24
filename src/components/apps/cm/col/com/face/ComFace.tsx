import useAbsoluteFloatPopup from "../../../../../../complect/absolute-popup/useAbsoluteFloatPopup";
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
    isRejectScrollToView,
  } = props;
  const [ccom, setCcom] = useCcom();
  const { jumpTo } = useCmNav();
  const { openAbsoluteFloatPopup, closeAbsoluteFloatPopup } =
    useAbsoluteFloatPopup();
  const { selectedComPosition, toggleSelectedCom } = useSelectedComs();

  return com == null ? null : (
    <>
      <div
        className={`com-face flex between ${
          ccom?.wid === com.wid ? "current" : ""
        } ${groupClass || ""} wid_${com.wid}`}
        onClick={
          importantOnClick ||
          (() => {
            setCcom(com);
            jumpTo(comNavPhasePoint);
          })
        }
        ref={
          isRejectScrollToView || ccom?.wid !== com.wid
            ? undefined
            : (element) => element?.scrollIntoView()
        }
        onContextMenu={(event) => {
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
        }}
      >
        <div
          className="number"
          selected-position={selectedComPosition(com) || undefined}
          onClick={(event) => {
            event.stopPropagation();
            selectable !== false && toggleSelectedCom(com);
          }}
        >
          <span>{`${com.index == null ? "?" : com.index - -1}`}</span>
        </div>
        <span className="title ellipsis">{com.name}</span>
        {props.description}
      </div>
    </>
  );
}
