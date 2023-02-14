import { useSelector } from "react-redux";
import { RootState } from "../../../../../shared/store";
import RollControled from "../../base/RolledContent";
import { Com } from "../../col/com/Com";
import ComOrders from "../../col/com/orders/ComOrders";

const comFontSizeSelector = (state: RootState) => state.cm.comFontSize;

export default function FullscreenExpandComList({ coms }: { coms: Com[] }) {
  const fontSize = useSelector(comFontSizeSelector);

  return (
    <div className="com-expand-content full-container">
      <RollControled>
        <div className="inner-content">
          {coms?.map((com) => (
            <div key={`expand-com-number-${com.wid}`}>
              <div className="com-number">#{com.number}</div>
              <ComOrders
                com={com}
                fontSize={fontSize}
                chordVisibleVariant={2}
                isMiniAnchor={false}
              />
            </div>
          ))}
        </div>
      </RollControled>
    </div>
  );
}
