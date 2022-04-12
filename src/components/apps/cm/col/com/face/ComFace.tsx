import useNav from "../../../base/useNav";
import useAbsolutePopup from "../../../complect/absolute-popup/useAbsolutePopup";
import { useCcol } from "../../useCcol";
import { Com } from "../Com";
import ComFaceContextMenu from "./ComFaceContextMenu";

export default function ComFace({
  com,
  errors,
}: {
  com: Com;
  errors?: string[];
}) {
  const [, setCcom] = useCcol("com");
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
          setCcom(com);
          setPhase("com");
        }}
        onContextMenu={(event) => {
          event.preventDefault();
          openAbsolutePopup(
            <ComFaceContextMenu
              onClick={() => closeAbsolutePopup()}
              com={com}
            />,
            'float',
            event.clientX,
            event.clientY,
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
