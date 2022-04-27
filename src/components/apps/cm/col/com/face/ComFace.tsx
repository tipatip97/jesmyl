import useAbsoluteFloatPopup from "../../../../../../complect/absolute-popup/useAbsoluteFloatPopup";
import useCmNav from "../../../base/useCmNav";
import { useCcom } from "../useCcom";
import { ComFaceProps } from "./ComFace.model";
import ComFaceContextMenu from "./ComFaceContextMenu";

export default function ComFace(props: ComFaceProps) {
  const { com, specialPhase = null, importantOnClick, groupClass } = props;
  const [ccom, setCcom] = useCcom();
  const { setPhase } = useCmNav();
  const { openAbsoluteFloatPopup, closeAbsoluteFloatPopup } =
    useAbsoluteFloatPopup();

  return com == null ? null : (
    <>
      <div
        className={`com-face${ccom?.wid === com.wid ? " current" : ""} ${
          groupClass || ""
        } wid_${com.wid}`}
        onClick={() => {
          if (importantOnClick) {
            importantOnClick();
            return;
          }
          setCcom(com);
          setPhase(["com", specialPhase]);
        }}
        onContextMenu={(event) => {
          event.preventDefault();
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
        <div className="number">
          <span>{`${com.index == null ? "?" : com.index - -1}`}</span>
        </div>
        <span className="title ellipsis">{com.name}</span>
      </div>
    </>
  );
}
