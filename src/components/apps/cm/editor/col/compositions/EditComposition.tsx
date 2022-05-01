import EvaIcon from "../../../../../../complect/eva-icon/EvaIcon";
import { NavigationThrowNodeProps } from "../../../../../../complect/nav-configurer/Navigation.model";
import useCmNav from "../../../base/useCmNav";
import { editCompositionNavs } from "../../editorNav";
import PhaseCmEditorContainer from "../../phase-editor-container/PhaseCmEditorContainer";
import "./EditComposition.scss";
import { useEditableCcom } from "./useEditableCcom";

export default function EditComposition({
  outletContent,
  currentPhase,
  data
}: NavigationThrowNodeProps) {
  const ccom = useEditableCcom();
  const { replace } = useCmNav();

  if (!ccom) return null;

  return (
    <PhaseCmEditorContainer
      topClass="edit-composition"
      headClass="flex between"
      headTitle={`Песня - ${ccom.initialName}`}
      content={
        <>
          <div className="flex around margin-gap">
            {editCompositionNavs.map(({ data: {icon} = {}, phase }) => {
              return (
                <EvaIcon
                  key={`editCompositionNavs ${phase}`}
                  className="pointer"
                  name={
                    `${icon}${
                      phase === currentPhase ? "" : "-outline"
                    }` as never
                  }
                  onClick={() => replace(phase)}
                />
              );
            })}
          </div>
          {outletContent}
        </>
      }
    />
  );
}
