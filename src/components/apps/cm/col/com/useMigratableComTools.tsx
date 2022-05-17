import { useDispatch, useSelector } from "react-redux";
import { EvaIconName } from "../../../../../complect/eva-icon/EvaIcon";
import useFullscreenContent from "../../../../../complect/fullscreen-content/useFullscreenContent";
import useFullScreen from "../../../../../complect/useFullscreen";
import { RootState } from "../../../../../shared/store";
import { useChordVisibleVariant } from "../../base/useChordVisibleVariant";
import useSelectedComs from "../../base/useSelectedComs";
import { ChordVisibleVariant } from "../../Cm.model";
import { updateComTopTools } from "../../Cm.store";
import { useMarks } from "../../lists/marks/useMarks";
import useTranslation from "../../translation/useTranslation";
import ChordImagesList from "./chord-card/ChordImagesList";
import { MigratableComTool, MigratableComToolName } from "./Com.model";
import { useCcom } from "./useCcom";

export default function useMigratableComTools() {
  const dispatch = useDispatch();
  const [ccom] = useCcom();
  const { openTranslations, isShowFullscreen } = useTranslation();
  const [chordVisibleVariant, setChordVisibleVariant] =
    useChordVisibleVariant();
  const { openFullscreenContent } = useFullscreenContent();
  const { toggleSelectedCom, isSelected } = useSelectedComs();
  const { isMarked, toggleMarked } = useMarks();
  const [, switchFullscreen] = useFullScreen();
  const comTopTools = useSelector((state: RootState) => state.cm.comTopTools);

  return {
    toggleTopTool: (tool: MigratableComToolName) =>
      dispatch(
        updateComTopTools(
          comTopTools.indexOf(tool) < 0
            ? [...comTopTools, tool]
            : comTopTools.filter((currTool) => tool !== currTool)
        )
      ),
    makeToolList: (isTop: boolean): MigratableComTool[] => {
      const tools: MigratableComToolName[] = isTop
        ? comTopTools
        : (
            [
              "fullscreen-mode",
              "mark-com",
              "translation",
              "chords-variant",
              "chord-images",
              "selected-toggle",
            ] as MigratableComToolName[]
          ).filter((tool) => comTopTools.indexOf(tool) < 0);

      return tools
        .map((tool): MigratableComTool | nil => {
          switch (tool) {
            case "translation":
              return {
                tool,
                title: "Слайды",
                icon: isShowFullscreen ? "play-outline" : "monitor-outline",
                onClick: () => openTranslations(),
              };
            case "chords-variant":
              return {
                tool,
                title: "Показать аккорды",
                icon: [
                  "file-outline",
                  "file-remove-outline",
                  "file-text-outline",
                ][chordVisibleVariant] as EvaIconName,
                onClick: () => {
                  setChordVisibleVariant(
                    !ccom?.orders?.some(
                      (ord) => !ord.isMin && ord.texti != null && !ord.isAnchor
                    )
                      ? chordVisibleVariant
                        ? ChordVisibleVariant.None
                        : ChordVisibleVariant.Maximal
                      : chordVisibleVariant -
                          (chordVisibleVariant > ChordVisibleVariant.Minimal
                            ? ChordVisibleVariant.Maximal
                            : -1)
                  );

                  return true;
                },
              };
            case "chord-images":
              return {
                tool,
                title: "Изображения аккордов",
                icon: "image-outline",
                onClick: () => {
                  dispatch(
                    openFullscreenContent(<ChordImagesList />, true, true)
                  );
                },
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
                  onClick: () => {
                    toggleSelectedCom(ccom);
                  },
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
          return null;
        })
        .filter((tool) => tool) as MigratableComTool[];
    },
  };
}
