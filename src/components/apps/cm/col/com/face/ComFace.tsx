import useAbsoluteFloatPopup from "../../../../../../complect/absolute-popup/useAbsoluteFloatPopup";
import useCmNav from "../../../base/useCmNav";
import useSelectedComs from "../../../base/useSelectedComs";
import { useCcom } from "../useCcom";
import { ComFaceProps } from "./ComFace.model";
import "./ComFace.scss";
import ComFaceContextMenu from "./ComFaceContextMenu";

export default function ComFace(props: ComFaceProps) {
  const { com, importantOnClick, groupClass } = props;
  const [ccom, setCcom] = useCcom();
  const { goTo } = useCmNav();
  const { openAbsoluteFloatPopup, closeAbsoluteFloatPopup } =
    useAbsoluteFloatPopup();
  const { isSelected, toggleSelectedCom } = useSelectedComs();

  return com == null ? null : (
    <>
      <div
        className={`com-face flex between ${
          isSelected(com) ? "selected" : ""
        } ${ccom?.wid === com.wid ? " current" : ""} ${groupClass || ""} wid_${
          com.wid
        }`}
        onClick={() => {
          if (importantOnClick) {
            importantOnClick();
            return;
          }
          setCcom(com);
          goTo("com");
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
        <div
          className="number"
          onClick={(event) => {
            event.stopPropagation();
            toggleSelectedCom(com);
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
