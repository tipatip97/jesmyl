import { ChordVisibleVariant } from '../../Cm.model';
import PhaseCmContainer from '../../complect/phase-container/PhaseCmContainer';
import { Com } from './Com';
import './Com.scss';
import './block-styles/BlockStyles.scss';
import ComOrders from './orders/ComOrders';
import { useCcom } from './useCcom';

export default function TheCom({
  com: topCom,
  showInvisibles,
  chordVisibleVariant,
  isMiniAnchor,
  fontSize,
}: {
  com?: Com;
  showInvisibles?: boolean;
  chordVisibleVariant?: ChordVisibleVariant;
  isMiniAnchor?: boolean;
  fontSize?: number;
}) {
  const ccom = useCcom();
  const com = topCom ?? ccom;

  if (com == null) {
    return (
      <PhaseCmContainer
        className="com-container"
        headTitle="Упс"
        content="Песня не найдена("
      />
    );
  }

  return (
    <ComOrders
      com={com}
      fontSize={fontSize}
      chordVisibleVariant={chordVisibleVariant ?? ChordVisibleVariant.Minimal}
      isMiniAnchor={isMiniAnchor}
      showInvisibles={showInvisibles}
    />
  );
}
