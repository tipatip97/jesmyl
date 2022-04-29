import { useState } from "react";
import EvaIcon from "../../../../../../complect/eva-icon/EvaIcon";
import PhaseCmEditorContainer from "../../phase-editor-container/PhaseCmEditorContainer";
import { editCompositionNavs } from "./EditComposition.complect";
import { EditCompositionNav } from "./EditComposition.model";
import "./EditComposition.scss";
import { useEditableCcom } from "./useEditableCcom";

export default function EditComposition() {
  const ccom = useEditableCcom();
  const [currPlace, setCurrPlace] = useState<EditCompositionNav>("main");

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
                    `${icon}${place === currPlace ? "" : "-outline"}` as never
                  }
                  onClick={() => setCurrPlace(place)}
                />
              );
            })}
          </div>
          {editCompositionNavs.find(({ place }) => currPlace === place)?.node}
        </>
      }
    />
  );
}
