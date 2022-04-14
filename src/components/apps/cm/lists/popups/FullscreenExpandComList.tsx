import { useSelector } from "react-redux";
import { RootState } from "../../../../../store";
import RollControled from "../../base/RolledContent";
import { Com } from "../../col/com/Com";
import ComOrders from "../../col/com/orders/ComOrders";

export default function FullscreenExpandComList({ coms }: { coms: Com[] }) {
  const fontSize = useSelector((state: RootState) => state.cm.comFontSize);

  return (
    <div className="com-expand-content full-container">
      <RollControled>
        {coms?.map((com) => (
          <div key={`expand-com-number-${com.wid}`}>
            <div className="com-number">#{com.index + 1}</div>
            <ComOrders ccom={com} fontSize={fontSize} isAnchorInheritHide />
          </div>
        ))}
      </RollControled>
    </div>
  );
}
