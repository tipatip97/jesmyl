import { useDispatch, useSelector } from 'react-redux';
import useFullContent from '../../../../../complect/fullscreen-content/useFullContent';
import useQRMaster from '../../../../../complect/qr-code/useQRMaster';
import { IconApproximatelyEqualSquareStrokeRounded } from '../../../../../complect/the-icon/icons/approximately-equal-square';
import { IconArrowExpand01StrokeRounded } from '../../../../../complect/the-icon/icons/arrow-expand-01';
import {
  IconCheckmarkCircle02SolidRounded,
  IconCheckmarkCircle02StrokeRounded,
} from '../../../../../complect/the-icon/icons/checkmark-circle-02';
import { IconComputerStrokeRounded } from '../../../../../complect/the-icon/icons/computer';
import { IconCongruentToSquareStrokeRounded } from '../../../../../complect/the-icon/icons/congruent-to-square';
import { IconEqualSignSquareStrokeRounded } from '../../../../../complect/the-icon/icons/equal-sign-square';
import { IconImageCompositionOvalStrokeRounded } from '../../../../../complect/the-icon/icons/image-composition-oval';
import { IconMenu01StrokeRounded } from '../../../../../complect/the-icon/icons/menu-01';
import { IconMinusSignStrokeRounded } from '../../../../../complect/the-icon/icons/minus-sign';
import { IconQrCodeStrokeRounded } from '../../../../../complect/the-icon/icons/qr-code';
import { IconStarSolidRounded, IconStarStrokeRounded } from '../../../../../complect/the-icon/icons/star';
import { IconVynil03SolidRounded, IconVynil03StrokeRounded } from '../../../../../complect/the-icon/icons/vynil-03';
import useFullScreen from '../../../../../complect/useFullscreen';
import { RootState } from '../../../../../shared/store';
import useAuth from '../../../../index/useAuth';
import { ChordVisibleVariant } from '../../Cm.model';
import di from '../../Cm.store';
import { useChordVisibleVariant } from '../../base/useChordVisibleVariant';
import useCmNav from '../../base/useCmNav';
import useSelectedComs from '../../base/useSelectedComs';
import {
  concatMigratableEditableComToolNameList,
  getMigratableEditableComTool,
  spliceMigratableEditableComToolNameList,
} from '../../editor/col/compositions/complect/MigratableEditableComTools';
import { useMarks } from '../../lists/marks/useMarks';
import { useGoToTranslation } from '../../translation/complect/hooks/go-to-translation';
import { MigratableComTool, MigratableComToolName, menuComToolNameList } from './Com.model';
import ChordImagesList from './chord-card/ChordImagesList';
import { useCcom } from './useCcom';

const comTopToolsSelector = (state: RootState) => state.cm.comTopTools;
const isMiniAnchorSelector = (state: RootState) => state.cm.isMiniAnchor;
const playerHideModeSelector = (state: RootState) => state.cm.playerHideMode;

export default function useMigratableComTools() {
  const dispatch = useDispatch();
  const ccom = useCcom();
  const auth = useAuth();
  const goToTranslation = useGoToTranslation();
  const [chordVisibleVariant, setChordVisibleVariant] = useChordVisibleVariant();
  const [fullContentNode, openFullscreenContent] = useFullContent(() => <ChordImagesList />);
  const { toggleSelectedCom, selectedComPosition: isSelected } = useSelectedComs();
  const { isMarked, toggleMarked } = useMarks();
  const [, switchFullscreen] = useFullScreen();
  const comTopTools = useSelector(comTopToolsSelector);
  const isMiniAnchor = useSelector(isMiniAnchorSelector);
  const playerHideMode = useSelector(playerHideModeSelector);
  const nav = useCmNav();
  const { shareQrData, qrNode } = useQRMaster();

  const makeToolList = (tools: MigratableComToolName[]): MigratableComTool[] => {
    return tools
      .map((tool): MigratableComTool | nil => {
        switch (tool) {
          case 'translation':
            return {
              tool,
              title: 'Слайды',
              Icon: IconComputerStrokeRounded,
              onClick: () => {
                setTimeout(() => goToTranslation());
              },
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
                onClick: () => {
                  dispatch(di.playerHideMode(playerHideMode ? '' : 'min'));
                },
              }
            );
          case 'is-mini-anchor':
            return (
              ccom && {
                tool,
                title: isMiniAnchor ? 'Раскрыть ссылки' : 'Свернуть ссылки',
                Icon: isMiniAnchor ? IconMinusSignStrokeRounded : IconMenu01StrokeRounded,
                onClick: () => {
                  dispatch(di.switchIsMiniAnchor(!isMiniAnchor));
                },
              }
            );
          case 'share-by-qr':
            return (
              ccom && {
                tool,
                title: 'Поделиться по QR',
                Icon: IconQrCodeStrokeRounded,
                onClick: () => shareQrData(nav.nav, 'ccomw', ccom.wid, true),
              }
            );
        }
        return getMigratableEditableComTool(tool, nav);
      })
      .filter(tool => tool) as MigratableComTool[];
  };

  return {
    anchorNode: (
      <>
        {qrNode}
        {fullContentNode}
      </>
    ),
    comTopTools,
    topTools: makeToolList(spliceMigratableEditableComToolNameList(comTopTools, auth)),
    menuTools: makeToolList(concatMigratableEditableComToolNameList(menuComToolNameList as never, auth)),
    toggleTopTool: (tool: MigratableComToolName) => {
      dispatch(
        di.comTopTools(
          comTopTools.indexOf(tool) < 0 ? [...comTopTools, tool] : comTopTools.filter(currTool => tool !== currTool),
        ),
      );
    },
  };
}
