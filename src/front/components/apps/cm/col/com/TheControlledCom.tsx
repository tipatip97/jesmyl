import { useSelector } from "react-redux";
import SwipeableContainer from "../../../../../complect/swipeable/SwipeableContainer";
import { RootState } from "../../../../../shared/store";
import { ChordVisibleVariant } from "../../Cm.model";
import RollControled from "../../base/RolledContent";
import { Com } from "./Com";
import "./Com.scss";
import TheCom from "./TheCom";

const fontSizeSelector = (state: RootState) => state.cm.comFontSize;
const isMiniAnchorSelector = (state: RootState) => state.cm.isMiniAnchor;

export default function TheControlledCom({
  com,
  comList,
  chordVisibleVariant,
  onComSet,
}: {
  com: Com,
  comList?: Com[] | nil,
  chordVisibleVariant: ChordVisibleVariant,
  onComSet: (com: Com) => void,
}) {
  const fontSize = useSelector(fontSizeSelector);
  const isMiniAnchor = useSelector(isMiniAnchorSelector);


  return <RollControled className="composition-content">
    <SwipeableContainer
      props={{ diapasonMoveVKf: 50, diapasonMoveHKf: 70 }}
      onHorizontalSwipe={(dir) => {
        if (!comList) return;
        const comi = comList.findIndex(({ wid }) => wid === com.wid);

        if (comi > -1) {
          if ("l" === dir)
            if (comi < comList.length - 1) onComSet(comList[comi + 1]);
            else onComSet(comList[0]);

          if ("r" === dir)
            if (comi > 0) onComSet(comList[comi - 1]);
            else onComSet(comList[comList.length - 1]);
        }
      }}
      content={
        <TheCom
          com={com}
          fontSize={fontSize}
          chordVisibleVariant={chordVisibleVariant}
          isMiniAnchor={isMiniAnchor}
        />
      }
    />
  </RollControled>;
}
