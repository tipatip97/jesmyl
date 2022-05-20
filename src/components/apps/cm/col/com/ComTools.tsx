import React from "react";
import { useDispatch, useSelector } from "react-redux";
import useAbsoluteBottomPopup from "../../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import EvaIcon from "../../../../../complect/eva-icon/EvaIcon";
import { RootState } from "../../../../../shared/store";
import { useChordVisibleVariant } from "../../base/useChordVisibleVariant";
import { ChordVisibleVariant } from "../../Cm.model";
import { riseUpComUpdate, setComFontSize } from "../../Cm.store";
import { useCcom } from "./useCcom";
import useMigratableComTools from "./useMigratableComTools";

export default function ComTools() {
  const dispatch = useDispatch();
  const [ccom] = useCcom();
  const fontSize = useSelector((state: RootState) => state.cm.comFontSize);
  const { closeAbsoluteBottomPopup } = useAbsoluteBottomPopup();
  const [chordVisibleVariant] = useChordVisibleVariant();

  const { menuTools, toggleTopTool } = useMigratableComTools();

  if (!ccom) return null;
  return (
    <div className="abs-item flex column">
      <div
        className={`abs-item ${
          chordVisibleVariant === ChordVisibleVariant.None ? "disabled" : ""
        }`}
      >
        <EvaIcon name="music-outline" className="abs-icon" />
        <div className="title">Тональность</div>
        <div className="abs-action flex around pointer">
          <EvaIcon
            name="minus"
            onClick={() => {
              ccom.transpose(-1);
              dispatch(riseUpComUpdate());
            }}
          />
          <div
            onClick={() => {
              ccom.setChordsInitialTon();
              dispatch(riseUpComUpdate());
            }}
          >
            {ccom.firstChord}
          </div>
          <EvaIcon
            name="plus"
            onClick={() => {
              ccom.transpose(1);
              dispatch(riseUpComUpdate());
            }}
          />
        </div>
      </div>
      <div className="abs-item">
        <EvaIcon name="format-text-variant-outline" className="abs-icon" />
        <div className="title">Размер шрифта</div>
        <div className="abs-action flex around pointer">
          <EvaIcon
            name="minus-outline"
            onClick={() => dispatch(setComFontSize(fontSize - 1))}
          />
          <div>{fontSize}</div>
          <EvaIcon
            name="plus-outline"
            onClick={() => dispatch(setComFontSize(fontSize + 1))}
          />
        </div>
      </div>

      {menuTools.map(({ onClick, title, icon, tool }) => (
        <div
          key={tool}
          className="abs-item abs-full"
          onContextMenu={(event) => {
            event.preventDefault();
            toggleTopTool(tool);
          }}
          onClick={() => {
            if (onClick()) return;
            closeAbsoluteBottomPopup();
          }}
        >
          <EvaIcon name={icon} className="abs-icon" />
          <div className="title">{title}</div>
          <div className="abs-action" />
        </div>
      ))}
      <div className="fade-05 full-width margin-gap-v">
        {ccom.catMentions().map((mention, mentioni) => (
          <React.Fragment key={`mentioni-${mentioni}`}>
            {mentioni ? ", " : ""}
            <span className="nowrap">{mention}</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
