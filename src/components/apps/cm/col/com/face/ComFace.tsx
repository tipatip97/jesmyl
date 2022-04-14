import useNav from "../../../base/useNav";
import useAbsolutePopup from "../../../complect/absolute-popup/useAbsolutePopup";
import { useCcom } from "../../useCcol";
import { ComFaceProps } from "./ComFace.model";
import ComFaceContextMenu from "./ComFaceContextMenu";

export default function ComFace(props: ComFaceProps) {
  const { com, errors, specialPhase = null, importantOnClick } = props;
  const [, setCcom] = useCcom();
  const { setPhase } = useNav();
  const { openAbsolutePopup, closeAbsolutePopup } = useAbsolutePopup();

  return com == null ? null : (
    <div id={`com-face-${com.wid}`}>
      <div
        className="com-face"
        style={{
          backgroundColor: com.removed ? "red" : "",
        }}
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
          openAbsolutePopup(
            <ComFaceContextMenu
              onClick={() => closeAbsolutePopup()}
              com={com}
            />,
            "float",
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
      {errors}
    </div>
  );
}
