import { useAtom } from '../../../../../complect/atoms';
import useFullContent from '../../../../../complect/fullscreen-content/useFullContent';
import { IconApproximatelyEqualSquareStrokeRounded } from '../../../../../complect/the-icon/icons/approximately-equal-square';
import { IconArrowExpand01StrokeRounded } from '../../../../../complect/the-icon/icons/arrow-expand-01';
import {
  IconCheckmarkCircle02SolidRounded,
  IconCheckmarkCircle02StrokeRounded,
} from '../../../../../complect/the-icon/icons/checkmark-circle-02';
import { IconComputerStrokeRounded } from '../../../../../complect/the-icon/icons/computer';
import { IconCongruentToSquareStrokeRounded } from '../../../../../complect/the-icon/icons/congruent-to-square';
import {
  IconDashboardSpeed01SolidRounded,
  IconDashboardSpeed01StrokeRounded,
} from '../../../../../complect/the-icon/icons/dashboard-speed-01';
import { IconEqualSignSquareStrokeRounded } from '../../../../../complect/the-icon/icons/equal-sign-square';
import { IconImageCompositionOvalStrokeRounded } from '../../../../../complect/the-icon/icons/image-composition-oval';
import { IconMenu01StrokeRounded } from '../../../../../complect/the-icon/icons/menu-01';
import { IconMinusSignStrokeRounded } from '../../../../../complect/the-icon/icons/minus-sign';
import { IconStarSolidRounded, IconStarStrokeRounded } from '../../../../../complect/the-icon/icons/star';
import { IconVynil03SolidRounded, IconVynil03StrokeRounded } from '../../../../../complect/the-icon/icons/vynil-03';
import { useFullScreen } from '../../../../../complect/useFullscreen';
import { useAuth } from '../../../../index/molecules';
import { ChordVisibleVariant } from '../../Cm.model';
import { useChordVisibleVariant } from '../../base/useChordVisibleVariant';
import useSelectedComs from '../../base/useSelectedComs';
import {
  concatMigratableEditableComToolNameList,
  getMigratableEditableComTool,
  spliceMigratableEditableComToolNameList,
} from '../../editor/col/compositions/complect/MigratableEditableComTools';
import { useMarks } from '../../lists/marks/useMarks';
import { cmMolecule } from '../../molecules';
import { MigratableComTool, MigratableComToolName, menuComToolNameList } from './Com.model';
import ChordImagesList from './chord-card/ChordImagesList';
import { useCcom } from './useCcom';

export default function useMigratableComTools() {
  const ccom = useCcom();
  const auth = useAuth();
  const [chordVisibleVariant, setChordVisibleVariant] = useChordVisibleVariant();
  const [fullContentNode, openFullscreenContent] = useFullContent(() => <ChordImagesList />);
  const { toggleSelectedCom, selectedComPosition: isSelected } = useSelectedComs();
  const { isMarked, toggleMarked } = useMarks();
  const [, switchFullscreen] = useFullScreen();
  const [comTopTools, setComTopTools] = useAtom(cmMolecule.take('comTopTools'));
  const [isMiniAnchor, setIsMiniAnchor] = useAtom(cmMolecule.take('isMiniAnchor'));
  const [playerHideMode, setPlayerHideMode] = useAtom(cmMolecule.take('playerHideMode'));
  const [isMetronomeHide, setIsMetronomeHide] = useAtom(cmMolecule.take('isMetronomeHide'));

  const makeToolList = (tools: MigratableComToolName[]): MigratableComTool[] => {
    return tools
      .map((tool): MigratableComTool | nil => {
        switch (tool) {
          case 'translation':
            return {
              tool,
              title: 'Слайды',
              Icon: IconComputerStrokeRounded,
              path: 'tran',
            };
          case 'chords-variant':
            return {
              tool,
              title: 'Показать аккорды',
              Icon:
                chordVisibleVariant === ChordVisibleVariant.Maximal
                  ? IconApproximatelyEqualSquareStrokeRounded
                  : chordVisibleVariant === ChordVisibleVariant.Minimal
                    ? IconCongruentToSquareStrokeRounded
                    : IconEqualSignSquareStrokeRounded,
              onClick: () => {
                setChordVisibleVariant(
                  chordVisibleVariant === ChordVisibleVariant.Maximal
                    ? ChordVisibleVariant.None
                    : !ccom?.orders?.some(ord => !ord.isMin && ord.texti != null)
                      ? chordVisibleVariant === ChordVisibleVariant.None
                        ? ChordVisibleVariant.Minimal
                        : ChordVisibleVariant.None
                      : chordVisibleVariant === ChordVisibleVariant.None
                        ? ChordVisibleVariant.Minimal
                        : ChordVisibleVariant.Maximal,
                );

                return true;
              },
            };
          case 'chord-images':
            return {
              tool,
              title: 'Изображения аккордов',
              Icon: IconImageCompositionOvalStrokeRounded,
              onClick: () => openFullscreenContent(true),
            };
          case 'selected-toggle':
            return (
              ccom && {
                tool,
                title: isSelected(ccom.wid) ? 'Убрать из выбранных' : 'Выбрать песню',
                Icon: isSelected(ccom.wid) ? IconCheckmarkCircle02SolidRounded : IconCheckmarkCircle02StrokeRounded,
                onClick: () => toggleSelectedCom(ccom.wid),
              }
            );
          case 'mark-com':
            return (
              ccom && {
                tool,
                title: isMarked(ccom.wid) ? 'Удалить избранное' : 'Добавить избранное',
                Icon: isMarked(ccom.wid) ? IconStarSolidRounded : IconStarStrokeRounded,
                onClick: () => toggleMarked(ccom.wid),
              }
            );
          case 'fullscreen-mode':
            return (
              ccom && {
                tool,
                title: 'На весь экран',
                Icon: IconArrowExpand01StrokeRounded,
                onClick: () => switchFullscreen(true),
              }
            );
          case 'open-player':
            return (
              ccom && {
                tool,
                title: 'Проигрыватель',
                Icon: playerHideMode ? IconVynil03SolidRounded : IconVynil03StrokeRounded,
                onClick: () => setPlayerHideMode(playerHideMode ? '' : 'min'),
              }
            );
          case 'hide-metronome':
            return (
              ccom && {
                tool,
                title: 'Метроном',
                Icon: isMetronomeHide ? IconDashboardSpeed01StrokeRounded : IconDashboardSpeed01SolidRounded,
                onClick: () => setIsMetronomeHide(!isMetronomeHide),
              }
            );
          case 'is-mini-anchor':
            return (
              ccom && {
                tool,
                title: isMiniAnchor ? 'Раскрыть ссылки' : 'Свернуть ссылки',
                Icon: isMiniAnchor ? IconMinusSignStrokeRounded : IconMenu01StrokeRounded,
                onClick: () => setIsMiniAnchor(!isMiniAnchor),
              }
            );
          case 'share-by-qr':
            return undefined;
          //     ccom && {
          //       tool,
          //       title: 'Поделиться по QR',
          //       Icon: IconQrCodeStrokeRounded,
          //       onClick: () => shareQrData(nav.nav, 'ccomw', ccom.wid, true),
          //     }
          //   );
        }
        return getMigratableEditableComTool(tool, ccom);
      })
      .filter(tool => tool) as MigratableComTool[];
  };

  return {
    anchorNode: <>{fullContentNode}</>,
    comTopTools,
    topTools: makeToolList(spliceMigratableEditableComToolNameList(comTopTools, auth)),
    menuTools: makeToolList(concatMigratableEditableComToolNameList(menuComToolNameList as never, auth)),
    toggleTopTool: (tool: MigratableComToolName) => {
      setComTopTools(
        comTopTools.indexOf(tool) < 0 ? [...comTopTools, tool] : comTopTools.filter(currTool => tool !== currTool),
      );
    },
  };
}
