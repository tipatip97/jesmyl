import React from "react";
import { useDispatch, useSelector } from "react-redux";
import useAbsoluteBottomPopup from "../../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import propsOfClicker from "../../../../../complect/clicker/propsOfClicker";
import EvaIcon from "../../../../../complect/eva-icon/EvaIcon";
import { RootState } from "../../../../../shared/store";
import { useChordVisibleVariant } from "../../base/useChordVisibleVariant";
import { ChordVisibleVariant } from "../../Cm.model";
import di from "../../Cm.store";
import { useCcom } from "./useCcom";
import useMigratableComTools from "./useMigratableComTools";
import { useCols } from "../../cols/useCols";
import { Cols } from "../../cols/Cols";
import { Com } from "./Com";

const fontSizeSelector = (state: RootState) => state.cm.comFontSize;

const catMentions = (cols?: Cols, com?: Com): string[] => {
  if (!cols || !com) return [];
  const wid = com.wid;
  const refs = com.refs || {};
  const natives: string[] = [];

  const inCats = cols.cats
    .filter(cat => {
      if (refs[cat.wid]) natives.push(`${cat.name} ${refs[cat.wid]}`);
      return cat.stack.includes(wid);
    })
    .map(cat => cat.name);

  return inCats.concat(natives);
}

export default function ComTools() {
  const dispatch = useDispatch();
  const ccom = useCcom();
  const cols = useCols();
  const fontSize = useSelector(fontSizeSelector);
  const { closeAbsoluteBottomPopup, prepareAbsoluteBottomPopupContent } = useAbsoluteBottomPopup();
  const [chordVisibleVariant] = useChordVisibleVariant();

  const { menuTools, toggleTopTool, comTopTools } = useMigratableComTools();

  if (!ccom) return null;
  return prepareAbsoluteBottomPopupContent({
    items: [
      {
        className: chordVisibleVariant === ChordVisibleVariant.None ? "disabled" : "",
        icon: "options-2-outline",
        title: 'Тональность',
        rightNode: <>
          <EvaIcon
            name="minus"
            onClick={() => {
              ccom.transpose(-1);
              dispatch(di.riseUpComUpdate());
            }}
          />
          <div
            onClick={() => {
              ccom.setChordsInitialTon();
              dispatch(di.riseUpComUpdate());
            }}
          >
            {ccom.firstChord}
          </div>
          <EvaIcon
            name="plus"
            onClick={() => {
              ccom.transpose(1);
              dispatch(di.riseUpComUpdate());
            }}
          />
        </>
      },
      {
        title: 'Размер шрифта',
        icon: 'format-text-variant-outline',
        rightNode: <>
          <EvaIcon
            name="minus-outline"
            onClick={() => dispatch(di.setComFontSize(fontSize - 1))}
          />
          <div>{fontSize}</div>
          <EvaIcon
            name="plus-outline"
            onClick={() => dispatch(di.setComFontSize(fontSize + 1))}
          />
        </>,
      },
      menuTools.map(({ onClick, title, icon, tool }) => (
        {
          title,
          icon,
          iconWrapperClassName: comTopTools.includes(tool) ? 'active' : '',
          onClick: () => {
            if (onClick()) return;
            closeAbsoluteBottomPopup();
          },
          ...propsOfClicker({
            onCtxMenu: (event) => {
              event.preventDefault();
              toggleTopTool(tool);
            }
          }),
        }
      ))
    ],
    footer: <div className="fade-05 full-width margin-gap-v">
      {catMentions(cols, ccom).map((mention, mentioni) => (
        <React.Fragment key={`mentioni-${mentioni}`}>
          {mentioni ? ", " : ""}
          <span className="nowrap">{mention}</span>
        </React.Fragment>
      ))}
    </div>,
  });
}
