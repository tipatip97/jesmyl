import { useState } from "react";
import Human from "./Human";
import { SelectHumansComponentProps } from "./People.model";
import SelectHumans from "./SelectHumans";

export default function AddHumansToContext({
  onSend,
  ...props
}: {
  onSend?: (addList: Human[], delList: Human[]) => void;
} & SelectHumansComponentProps) {
  const [delList, updateDelList] = useState<Human[]>([]);
  const [addList, updateAddList] = useState<Human[]>([]);

  return (
    <div className="full-container padding-giant-gap flex column flex-gap">
      <SelectHumans
        {...props}
        onListUpdate={(addList, delList) => {
          updateAddList(addList);
          updateDelList(delList);
        }}
      />
      <div className="flex center padding-giant-gap">
        {(!addList.length && !delList.length) || (
          <div className="pointer" onClick={() => onSend?.(addList, delList)}>
            Отправить список
          </div>
        )}
      </div>
    </div>
  );
}
