import { useDispatch, useSelector } from "react-redux";
import useAbsoluteBottomPopup from "../../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import useFullscreenContent from "../../../../../complect/fullscreen-content/useFullscreenContent";
import useFullScreen from "../../../../../complect/useFullscreen";
import { RootState } from "../../../../../shared/store";
import { useChordVisibleVariant } from "../../base/useChordVisibleVariant";
import useCmNav from "../../base/useCmNav";
import useSelectedComs from "../../base/useSelectedComs";
import { ChordVisibleVariant } from "../../Cm.model";
import { updateComTopTools } from "../../Cm.store";
import {
  concatMigratableEditableComToolNameList,
  getMigratableEditableComTool,
  spliceMigratableEditableComToolNameList,
} from "../../editor/col/compositions/complect/MigratableEditableComTools";
import { useMarks } from "../../lists/marks/useMarks";
import useTranslation from "../../translation/useTranslation";
import ChordImagesList from "./chord-card/ChordImagesList";
import {
  menuComToolNameList,
  MigratableComTool,
  MigratableComToolName,
} from "./Com.model";
import { useCcom } from "./useCcom";

const comTopToolsSelector = (state: RootState) => state.cm.comTopTools;

export default function useMigratableComTools() {
  const dispatch = useDispatch();
  const [ccom] = useCcom();
  const { goToTranslation: openTranslations } = useTranslation();
  const [chordVisibleVariant, setChordVisibleVariant] =
    useChordVisibleVariant();
  const { openFullscreenContent } = useFullscreenContent();
  const { toggleSelectedCom, selectedComPosition: isSelected } =
    useSelectedComs();
  const { closeAbsoluteBottomPopup } = useAbsoluteBottomPopup();
  const { isMarked, toggleMarked } = useMarks();
  const [, switchFullscreen] = useFullScreen();
  const comTopTools = useSelector(comTopToolsSelector);
  const nav = useCmNav();

  const makeToolList = (
    tools: MigratableComToolName[]
  ): MigratableComTool[] => {
    return tools
      .map((tool): MigratableComTool | nil => {
        switch (tool) {
          case "translation":
            return {
              tool,
              title: "Слайды",
              icon: "monitor-outline",
              onClick: () => {
                closeAbsoluteBottomPopup();
                setTimeout(() => openTranslations());
              },
            };
          case "chords-variant":
            return {
              tool,
              title: "Показать аккорды",
              icon:
                chordVisibleVariant === ChordVisibleVariant.Maximal
                  ? "file-text-outline"
                  : chordVisibleVariant === ChordVisibleVariant.Minimal
                    ? "file-remove-outline"
                    : "file-outline",
              onClick: () => {
                setChordVisibleVariant(
                  chordVisibleVariant === ChordVisibleVariant.Maximal
                    ? ChordVisibleVariant.None
                    : !ccom?.orders?.some(
                      (ord) => !ord.isMin && ord.texti != null
                    )
                      ? chordVisibleVariant === ChordVisibleVariant.None
                        ? ChordVisibleVariant.Minimal
                        : ChordVisibleVariant.None
                      : chordVisibleVariant === ChordVisibleVariant.None
                        ? ChordVisibleVariant.Minimal
                        : ChordVisibleVariant.Maximal
                );

                return true;
              },
            };
          case "chord-images":
            return {
              tool,
              title: "Изображения аккордов",
              icon: "image-outline",
              onClick: () => openFullscreenContent(<ChordImagesList />, true),
            };
          case "selected-toggle":
            return (
              ccom && {
                tool,
                title: isSelected(ccom)
                  ? "Убрать из выбранных"
                  : "Выбрать песню",
                icon: isSelected(ccom)
                  ? "close-circle-outline"
                  : "checkmark-circle-2-outline",
                onClick: () => toggleSelectedCom(ccom),
              }
            );
          case "mark-com":
            return (
              ccom && {
                tool,
                title: isMarked(ccom.wid)
                  ? "Удалить избранное"
                  : "Добавить избранное",
                icon: isMarked(ccom.wid) ? "star" : "star-outline",
                onClick: () => toggleMarked(ccom.wid),
              }
            );
          case "fullscreen-mode":
            return (
              ccom && {
                tool,
                title: "На весь экран",
                icon: "expand-outline",
                onClick: () => switchFullscreen(true),
              }
            );
        }
        return getMigratableEditableComTool(tool, nav);
      })
      .filter((tool) => tool) as MigratableComTool[];
  };

  return {
    topTools: makeToolList(
      spliceMigratableEditableComToolNameList(comTopTools)
    ),
    menuTools: makeToolList(
      concatMigratableEditableComToolNameList(
        menuComToolNameList as never
      ).filter((tool) => comTopTools.indexOf(tool) < 0)
    ),
    toggleTopTool: (tool: MigratableComToolName) => {
      dispatch(
        updateComTopTools(
          comTopTools.indexOf(tool) < 0
            ? [...comTopTools, tool]
            : comTopTools.filter((currTool) => tool !== currTool)
        )
      );
    },
  };
}