import EvaIcon from "../../../../../../complect/eva-icon/EvaIcon";
import { NavigationThrowNodeProps } from "../../../../../../complect/nav-configurer/Navigation.model";
import useCmNav from "../../../base/useCmNav";
import { editCompositionNavs } from "../../editorNav";
import PhaseCmEditorContainer from "../../phase-editor-container/PhaseCmEditorContainer";
import "./EditComposition.scss";
import { useEditableCcom } from "./useEditableCcom";

export default function EditComposition({
  outletContent,
  relativePoint,
  currentChildPhase,
}: NavigationThrowNodeProps) {
  const ccom = useEditableCcom();
  const { goTo } = useCmNav();

  if (!ccom) return null;

  return (
    <PhaseCmEditorContainer
      topClass="edit-composition"
      headClass="flex between"
      headTitle={`Песня - ${ccom.initialName}`}
      content={
        <>
          <div className="flex around margin-gap">
            {editCompositionNavs.map(
              ({ data: { icon, iconText } = {}, phase: [phase] }) => {
                return (
                  <span
                    key={`editCompositionNavs ${phase}`}
                    className="pointer"
                    onClick={() => goTo(phase, relativePoint)}
                  >
                    {icon ? (
                      <EvaIcon
                        name={
                          `${icon}${
                            phase === currentChildPhase ? "" : "-outline"
                          }` as never
                        }
                      />
                    ) : (
                      iconText
                    )}
                  </span>
                );
              }
            )}
          </div>
          {outletContent}
        </>
      }
    />
  );
}
