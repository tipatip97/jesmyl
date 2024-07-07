import React from 'react';
import { BottomPopupContenter } from '../../../../../complect/absolute-popup/bottom-popup/model';
import { useAtom } from '../../../../../complect/atoms';
import propsOfClicker from '../../../../../complect/clicker/propsOfClicker';
import IconButton from '../../../../../complect/the-icon/IconButton';
import { IconMinusSignStrokeRounded } from '../../../../../complect/the-icon/icons/minus-sign';
import { IconPlusSignStrokeRounded } from '../../../../../complect/the-icon/icons/plus-sign';
import { IconSlidersHorizontalStrokeRounded } from '../../../../../complect/the-icon/icons/sliders-horizontal';
import { IconTextFontStrokeRounded } from '../../../../../complect/the-icon/icons/text-font';
import { ChordVisibleVariant } from '../../Cm.model';
import { useNumComUpdates } from '../../atoms';
import { useChordVisibleVariant } from '../../base/useChordVisibleVariant';
import { Cols } from '../../cols/Cols';
import { useCols } from '../../cols/useCols';
import { cmMolecule } from '../../molecules';
import { Com } from './Com';
import { useCcom } from './useCcom';
import useMigratableComTools from './useMigratableComTools';

const catMentions = (cols?: Cols, com?: Com): string[] => {
  if (!cols || !com) return [];
  const wid = com.wid;
  const natives: string[] = [];

  const inCats = cols.cats
    .filter(cat => {
      if (cat.dict[wid] != null) natives.push(`${cat.name} ${cat.dict[wid]}`);
      return cat.stack.includes(wid);
    })
    .map(cat => cat.name);

  return inCats.concat(natives);
};

export const ComTools: BottomPopupContenter = (isOpen, close, prepare) => {
  const ccom = useCcom();
  const cols = useCols();
  const [fontSize, setFontSize] = useAtom(cmMolecule.take('comFontSize'));
  const [chordVisibleVariant] = useChordVisibleVariant();
  const { menuTools, toggleTopTool, comTopTools, anchorNode } = useMigratableComTools();
  const [, setNumComUpdates] = useNumComUpdates();

  if (!ccom) return null;

  return [
    null,
    isOpen && (
      <>
        {prepare({
          items: [
            {
              className: chordVisibleVariant === ChordVisibleVariant.None ? 'disabled' : '',
              Icon: IconSlidersHorizontalStrokeRounded,
              title: 'Тональность',
              rightNode: (
                <>
                  <IconMinusSignStrokeRounded
                    onClick={event => {
                      event.stopPropagation();
                      ccom.transpose(-1);
                      setNumComUpdates(it => it + 1);
                    }}
                  />
                  <div
                    onClick={event => {
                      event.stopPropagation();
                      ccom.setChordsInitialTon();
                      setNumComUpdates(it => it + 1);
                    }}
                  >
                    {ccom.firstChord}
                  </div>
                  <IconPlusSignStrokeRounded
                    onClick={event => {
                      event.stopPropagation();
                      ccom.transpose(1);
                      setNumComUpdates(it => it + 1);
                    }}
                  />
                </>
              ),
            },
            {
              title: 'Размер шрифта',
              Icon: IconTextFontStrokeRounded,
              rightNode: (
                <>
                  <IconButton
                    Icon={IconMinusSignStrokeRounded}
                    disabled={fontSize < 0}
                    onClick={event => {
                      event.stopPropagation();
                      setFontSize(fontSize - 1);
                    }}
                  />
                  {fontSize < 0 ? (
                    <div
                      onClick={event => {
                        event.stopPropagation();
                        setFontSize(-fontSize);
                      }}
                    >
                      auto
                    </div>
                  ) : (
                    <div
                      onClick={event => {
                        event.stopPropagation();
                        setFontSize(-fontSize);
                      }}
                    >
                      {fontSize}
                    </div>
                  )}
                  <IconButton
                    Icon={IconPlusSignStrokeRounded}
                    disabled={fontSize < 0}
                    onClick={event => {
                      event.stopPropagation();
                      setFontSize(fontSize + 1);
                    }}
                  />
                </>
              ),
            },
            menuTools.map(tool => ({
              ...tool,
              iconWrapperClassName: comTopTools.includes(tool.tool) ? 'active' : '',
              onClick: () => {
                if (tool.onClick()) return;
                close();
              },
              ...propsOfClicker({
                onCtxMenu: event => {
                  event.preventDefault();
                  toggleTopTool(tool.tool);
                },
              }),
            })),
          ],
          footer: (
            <div className="fade-05 full-width margin-gap-v">
              {catMentions(cols, ccom).map((mention, mentioni) => (
                <React.Fragment key={mentioni}>
                  {mentioni ? ', ' : ''}
                  <span className="nowrap">{mention}</span>
                </React.Fragment>
              ))}
            </div>
          ),
        })}
      </>
    ),
    <>{anchorNode}</>,
  ];
};
