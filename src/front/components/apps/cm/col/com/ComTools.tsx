import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BottomPopupContenter, bottomPopupContentPreparer } from "../../../../../complect/absolute-popup/useBottomPopup";
import propsOfClicker from "../../../../../complect/clicker/propsOfClicker";
import EvaIcon from "../../../../../complect/eva-icon/EvaIcon";
import { RootState } from "../../../../../shared/store";
import { ChordVisibleVariant } from "../../Cm.model";
import di from "../../Cm.store";
import { useChordVisibleVariant } from "../../base/useChordVisibleVariant";
import { Cols } from "../../cols/Cols";
import { useCols } from "../../cols/useCols";
import { Com } from "./Com";
import { useCcom } from "./useCcom";
import useMigratableComTools from "./useMigratableComTools";

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

export const ComTools: BottomPopupContenter = (close) => {
  const dispatch = useDispatch();
  const ccom = useCcom();
  const cols = useCols();
  const fontSize = useSelector(fontSizeSelector);
  const [chordVisibleVariant] = useChordVisibleVariant();
  const { menuTools, toggleTopTool, comTopTools, anchorNode } = useMigratableComTools();

  if (!ccom) return null;

  return [
    null,
    <>
      {bottomPopupContentPreparer({
        items: [
          {
            className: chordVisibleVariant === ChordVisibleVariant.None ? "disabled" : "",
            icon: "options-2-outline",
            title: 'Тональность',
            rightNode: <>
              <EvaIcon
                name="minus"
                onClick={(event) => {
                  event.stopPropagation();
                  ccom.transpose(-1);
                  dispatch(di.riseUpComUpdate());
                }}
              />
              <div
                onClick={(event) => {
                  event.stopPropagation();
                  ccom.setChordsInitialTon();
                  dispatch(di.riseUpComUpdate());
                }}
              >
                {ccom.firstChord}
              </div>
              <EvaIcon
                name="plus"
                onClick={(event) => {
                  event.stopPropagation();
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
                onClick={(event) => {
                  event.stopPropagation();
                  dispatch(di.setComFontSize(fontSize - 1));
                }}
              />
              <div>{fontSize}</div>
              <EvaIcon
                name="plus-outline"
                onClick={(event) => {
                  event.stopPropagation();
                  dispatch(di.setComFontSize(fontSize + 1));
                }}
              />
            </>,
          },
          menuTools.map((tool) => (
            {
              ...tool,
              iconWrapperClassName: comTopTools.includes(tool.tool) ? 'active' : '',
              onClick: () => {
                if (tool.onClick()) return;
                close();
              },
              ...propsOfClicker({
                onCtxMenu: (event) => {
                  event.preventDefault();
                  toggleTopTool(tool.tool);
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
      })
      }</>,
    <>{anchorNode}</>,
  ];
}
