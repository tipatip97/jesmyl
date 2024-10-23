import { useMemo } from 'react';
import { CmComWid } from '../../../../../../../../back/apps/cm/Cm.enums';
import { FloatPopup, useFloatPopupCoords } from '../../../../../../../complect/absolute-popup/float-popup/FloatPopup';
import propsOfClicker from '../../../../../../../complect/clicker/propsOfClicker';
import mylib from '../../../../../../../complect/my-lib/MyLib';
import useSelectedComs from '../../../../base/useSelectedComs';
import ComFaceContextMenu from '../ComFaceContextMenu';
import { ComFaceListProps, currentComwIdPrefix } from './_ComList';
import { StyledComList } from './StyledComList';
import { useComListClickListener } from './useComListClickListener';
import { useScrollToCurrentComFace } from './useScrollToCurrentComFace';

interface Props extends ComFaceListProps {
  children: React.ReactNode;
  listRef: React.RefObject<HTMLDivElement>;
}

export const ComListControlledContainer = (props: Props) => {
  const [floatMenuCoords, setFloatMenuCoords] = useFloatPopupCoords<{ comw: CmComWid }>();
  const { selectedComws, toggleSelectedCom } = useSelectedComs();

  useComListClickListener(props.listRef, props.importantOnClick, props.list, toggleSelectedCom);
  useScrollToCurrentComFace(props.listRef, props);

  const clickerProps = useMemo(
    () =>
      propsOfClicker({
        onCtxMenu: event => {
          event.preventDefault();

          if (props.selectable === false) return;
          let foundElementWithFaceItemClassName = event.nativeEvent.target as HTMLElement | null;

          while (foundElementWithFaceItemClassName) {
            if (foundElementWithFaceItemClassName.classList.contains('face-item')) break;
            foundElementWithFaceItemClassName = foundElementWithFaceItemClassName.parentElement;
          }

          if (!foundElementWithFaceItemClassName?.id.startsWith(currentComwIdPrefix)) return;

          const comw = +foundElementWithFaceItemClassName.id.slice(currentComwIdPrefix.length);

          if (mylib.isNaN(comw)) return;

          setFloatMenuCoords({
            x: event.clientX,
            y: event.clientY,
            comw,
          });
        },
      }),
    [props.selectable, setFloatMenuCoords],
  );

  return (
    <>
      <StyledComList
        $ccomw={props.ccomw}
        $accentComw={floatMenuCoords?.comw}
        $selectedComws={selectedComws}
        $isPutCcomFaceOff={props.isPutCcomFaceOff}
        $comTitles={props.titles}
        className={props.className}
        ref={props.listRef}
        {...clickerProps}
      >
        {props.children}
      </StyledComList>
      {floatMenuCoords && (
        <FloatPopup
          onClose={setFloatMenuCoords}
          coords={floatMenuCoords}
        >
          <ComFaceContextMenu
            onClick={setFloatMenuCoords}
            comWid={floatMenuCoords.comw}
          />
        </FloatPopup>
      )}
    </>
  );
};
