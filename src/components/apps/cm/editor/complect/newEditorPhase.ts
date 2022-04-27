import { CmPhase, CmSpecialPhase } from "../../Cm.model";


export const newEditorPhase = (
    phase: CmPhase,
    specialPhase: CmSpecialPhase,
    prevPhase: CmPhase | nil
) => {
    return phase === 'edit-categories' || phase === 'edit-compositions'
        ? 'editor'
        : null;
};

export { };