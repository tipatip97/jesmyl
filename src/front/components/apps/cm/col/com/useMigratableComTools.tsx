import { useDispatch, useSelector } from "react-redux";
import useFullscreenContent from "../../../../../complect/fullscreen-content/useFullscreenContent";
import useFullScreen from "../../../../../complect/useFullscreen";
import { RootState } from "../../../../../shared/store";
import useAuth from "../../../../index/useAuth";
import { ChordVisibleVariant } from "../../Cm.model";
import di from "../../Cm.store";
import { useChordVisibleVariant } from "../../base/useChordVisibleVariant";
import useCmNav from "../../base/useCmNav";
import useSelectedComs from "../../base/useSelectedComs";
import {
  concatMigratableEditableComToolNameList,
  getMigratableEditableComTool,
  spliceMigratableEditableComToolNameList,
} from "../../editor/col/compositions/complect/MigratableEditableComTools";
import { useMarks } from "../../lists/marks/useMarks";
import { useTranslation } from "../../translation/useTranslation";
import {
  MigratableComTool,
  MigratableComToolName,
  menuComToolNameList,
} from "./Com.model";
import ChordImagesList from "./chord-card/ChordImagesList";
import { useCcom } from "./useCcom";

const comTopToolsSelector = (state: RootState) => state.cm.comTopTools;
const isMiniAnchorSelector = (state: RootState) => state.cm.isMiniAnchor;
const playerHideModeSelector = (state: RootState) => state.cm.playerHideMode;

export default function useMigratableComTools() {
  const dispatch = useDispatch();
  const ccom = useCcom();
  const auth = useAuth();
  const { goToTranslation } = useTranslation();
  const [chordVisibleVariant, setChordVisibleVariant] =
    useChordVisibleVariant();
  const { openFullscreenContent } = useFullscreenContent();
  const { toggleSelectedCom, selectedComPosition: isSelected } =
    useSelectedComs();
  const { isMarked, toggleMarked } = useMarks();
  const [, switchFullscreen] = useFullScreen();
  const comTopTools = useSelector(comTopToolsSelector);
  const isMiniAnchor = useSelector(isMiniAnchorSelector);
  const playerHideMode = useSelector(playerHideModeSelector);
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
                setTimeout(() => goToTranslation());
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
                icon: `checkmark-circle-2${isSelected(ccom) ? '' : '-outline'}`,
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
          case "open-player":
            return (
              ccom && {
                tool,
                title: "Проигрыватель",
                icon: playerHideMode ? "music" : "music-outline",
                onClick: () => {
                  dispatch(di.playerHideMode(playerHideMode ? '' : 'min'));
                },
              }
            );
          case "is-mini-anchor":
            return (
              ccom && {
                tool,
                title: isMiniAnchor ? "Раскрыть ссылки" : "Свернуть ссылки",
                icon: isMiniAnchor ? "minus" : "menu",
                onClick: () => {
                  dispatch(di.switchIsMiniAnchor(!isMiniAnchor));
                },
              }
            );
          case "share-by-qr":
            return (
              ccom && {
                tool,
                title: "Поделиться по QR",
                icon: "qr-code",
                onClick: () => nav.nav.shareDataByQr('ccomw', ccom.wid, true),
              }
            );
        }
        return getMigratableEditableComTool(tool, nav);
      })
      .filter((tool) => tool) as MigratableComTool[];
  };

  return {
    comTopTools,
    topTools: makeToolList(
      spliceMigratableEditableComToolNameList(comTopTools, auth)
    ),
    menuTools: makeToolList(
      concatMigratableEditableComToolNameList(menuComToolNameList as never, auth)
    ),
    toggleTopTool: (tool: MigratableComToolName) => {
      dispatch(
        di.comTopTools(
          comTopTools.indexOf(tool) < 0
            ? [...comTopTools, tool]
            : comTopTools.filter((currTool) => tool !== currTool)
        )
      );
    },
  };
}
