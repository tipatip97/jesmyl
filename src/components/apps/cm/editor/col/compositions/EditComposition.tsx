import EvaIcon from "../../../../../../complect/eva-icon/EvaIcon";
import { NavigationThrowNodeProps } from "../../../../../../complect/nav-configurer/Navigation.model";
import useCmNav from "../../../base/useCmNav";
import PhaseCmEditorContainer from "../../phase-editor-container/PhaseCmEditorContainer";
import { editCompositionNavs } from "./EditComposition.complect";
import "./EditComposition.scss";
import { useEditableCcom } from "./useEditableCcom";

export default function EditComposition({
  outletContent,
  currentPhase,
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
            {editCompositionNavs.map(({ icon, place }) => {
              return (
                <EvaIcon
                  key={`editCompositionNavs ${place}`}
                  className="pointer"
                  name={
                    `${icon}${
                      place === currentPhase ? "" : "-outline"
                    }` as never
                  }
                  onClick={() => replace(place)}
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
