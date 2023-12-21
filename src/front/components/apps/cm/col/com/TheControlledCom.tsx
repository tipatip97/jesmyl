import { useSelector } from 'react-redux';
import { backSwipableContainerMaker } from '../../../../../complect/backSwipableContainerMaker';
import { RootState } from '../../../../../shared/store';
import { ChordVisibleVariant } from '../../Cm.model';
import RollControled from '../../base/RolledContent';
import { Com } from './Com';
import './Com.scss';
import TheCom from './TheCom';

const fontSizeSelector = (state: RootState) => state.cm.comFontSize;
const isMiniAnchorSelector = (state: RootState) => state.cm.isMiniAnchor;

let onPrevCom: () => void;
let onNextCom: () => void;
const swiper = backSwipableContainerMaker(
  () => onPrevCom(),
  () => onNextCom(),
);

export default function TheControlledCom({
  com,
  comList,
  chordVisibleVariant,
  onComSet,
}: {
  com: Com;
  comList?: Com[] | nil;
  chordVisibleVariant: ChordVisibleVariant;
  onComSet: (com: Com) => void;
}) {
  const fontSize = useSelector(fontSizeSelector);
  const isMiniAnchor = useSelector(isMiniAnchorSelector);

  onNextCom = () => {
    if (!comList) return;
    const comi = comList.findIndex(({ wid }) => wid === com.wid);
    if (comi < comList.length - 1) onComSet(comList[comi + 1]);
    else onComSet(comList[0]);
  };

  onPrevCom = () => {
    if (!comList) return;
    const comi = comList.findIndex(({ wid }) => wid === com.wid);
    if (comi > 0) onComSet(comList[comi - 1]);
    else onComSet(comList[comList.length - 1]);
  };

  return (
    <RollControled className="composition-content">
      <div
        {...swiper}
        className="relative full-height"
      >
        <TheCom
          com={com}
          fontSize={fontSize}
          chordVisibleVariant={chordVisibleVariant}
          isMiniAnchor={isMiniAnchor}
        />
      </div>
    </RollControled>
  );
}
