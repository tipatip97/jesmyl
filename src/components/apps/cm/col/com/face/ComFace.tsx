import useAbsolutePopup from "../../../../../../complect/absolute-popup/useAbsolutePopup";
import useCmNav from "../../../base/useCmNav";
import { useCcom } from "../../useCcol";
import { ComFaceProps } from "./ComFace.model";
import ComFaceContextMenu from "./ComFaceContextMenu";

export default function ComFace(props: ComFaceProps) {
  const { com, errors, specialPhase = null, importantOnClick, idPrefix } = props;
  const [, setCcom] = useCcom();
  const { setPhase } = useCmNav();
  const { openAbsolutePopup, closeAbsolutePopup } = useAbsolutePopup();

  return com == null ? null : (
    <div id={idPrefix ? `${idPrefix}${com.wid}` : ''}>
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
          ).config({
            mode: "float",
            x: event.clientX,
            y: event.clientY
          });
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
