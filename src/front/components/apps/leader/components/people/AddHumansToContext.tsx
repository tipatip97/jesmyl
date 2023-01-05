import { useState } from "react";
import { SelectHumansComponentProps } from "./People.model";
import SelectHumans from "./SelectHumans";

export default function AddHumansToContext({
  onSend,
  ...props
}: {
  onSend?: (addList: number[], delList: number[]) => void;
} & SelectHumansComponentProps) {
  const [delList, updateDelList] = useState<number[]>([]);
  const [addList, updateAddList] = useState<number[]>([]);

  return (
    <div className="full-container padding-giant-gap flex column flex-gap">
      <SelectHumans
        {...props}
        onListsUpdate={(addList, delList) => {
          updateAddList(addList);
          updateDelList(delList);
        }}
      />
      <div className="flex center padding-giant-gap">
        {(!addList.length && !delList.length) || (
          <div
            className="the-button"
            onClick={() => onSend?.(addList, delList)}
          >
            Отправить список
          </div>
        )}
      </div>
    </div>
  );
}
