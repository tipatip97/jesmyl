import EvaIcon from "../../../../../complect/eva-icon/EvaIcon";

export default function EditorCreatePopup() {
  return (
    <>
      <div className="abs-item abs-full">
          <EvaIcon name="file-add-outline" className="abs-icon" />
          <div className="abs-title">Новая песня</div>
          <div />
      </div>
      <div className="abs-item abs-full">
          <EvaIcon name="folder-add-outline" className="abs-icon" />
          <div className="abs-title">Новая категория</div>
          <div />
      </div>
    </>
  );
}
