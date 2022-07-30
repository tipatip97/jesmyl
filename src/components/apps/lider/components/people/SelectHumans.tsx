import { useEffect, useMemo, useState } from "react";
import EvaIcon from "../../../../../complect/eva-icon/EvaIcon";
import Human from "./Human";
import HumanList from "./HumanList";
import { SelectHumansComponentProps } from "./People.model";

const getHumanList = (
  uniq: string,
  isWholeList: boolean,
  isShowExcluded: boolean,
  placeholder: string,
  updateAddList: React.Dispatch<React.SetStateAction<Human[]>>,
  updateDelList: React.Dispatch<React.SetStateAction<Human[]>>,
  addList: Human[],
  delList: Human[],
  fixedList?: Human[],
  excludes?: Human[],
  excludedTitle?: string
) => {
  return (
    <div className="height-30vh over-auto full-width">
      <HumanList
        uniq={uniq}
        className="full-width"
        searcherClass="sticky"
        placeholder={placeholder}
        dangers={delList}
        successes={addList}
        list={(list) =>
          fixedList
            ? isWholeList
              ? isShowExcluded && excludes
                ? list?.filter(
                    ({ wid }) => !excludes.some((ex) => ex.wid === wid)
                  ) ?? []
                : list
              : fixedList
                  .concat(addList)
                  .filter(
                    (human) => !delList.some(({ wid }) => human.wid === wid)
                  )
            : isWholeList
            ? undefined
            : addList
        }
        asHumanMore={(human) => {
          if (excludedTitle && excludes?.some((ex) => ex.wid === human.wid))
            return <div className="error-message">{excludedTitle}</div>;

          return (
            !fixedList || !fixedList.some(({ wid }) => human.wid === wid)
              ? !addList.some(({ wid }) => human.wid === wid)
              : delList.some(({ wid }) => human.wid === wid)
          ) ? (
            <EvaIcon
              name="plus-circle-outline"
              onClick={(event) => {
                event.stopPropagation();
                if (
                  !fixedList ||
                  !fixedList.some(({ wid }) => human.wid === wid)
                )
                  updateAddList([...addList, human]);
                updateDelList(
                  delList.filter((member) => member.wid !== human.wid)
                );
              }}
            />
          ) : (
            <EvaIcon
              name="minus-circle-outline"
              onClick={(event) => {
                event.stopPropagation();
                if (
                  !fixedList ||
                  fixedList.some(({ wid }) => human.wid === wid)
                )
                  updateDelList([...delList, human]);

                updateAddList(
                  addList.filter((member) => member.wid !== human.wid)
                );
              }}
            />
          );
        }}
      />
    </div>
  );
};

export default function SelectHumans({
  uniq,
  onListUpdate,
  chosenPlaceholder,
  chooseTitle,
  chosenTitle,
  fixedList,
  excludes,
  excludedTitle,
}: SelectHumansComponentProps) {
  const [addList, updateAddList] = useState<Human[]>([]);
  const [delList, updateDelList] = useState<Human[]>([]);
  const [isShowExcluded, setIsShowExcluded] = useState(false);

  const chooseNode = useMemo(
    () =>
      getHumanList(
        `${uniq} choose`,
        true,
        isShowExcluded,
        "Поиск по личностям",
        updateAddList,
        updateDelList,
        addList,
        delList,
        fixedList,
        excludes,
        excludedTitle
      ),
    [uniq, addList, delList, fixedList, excludes, excludedTitle, isShowExcluded]
  );

  const chosenNode = useMemo(
    () =>
      getHumanList(
        `${uniq} chosen`,
        false,
        isShowExcluded,
        chosenPlaceholder,
        updateAddList,
        updateDelList,
        addList,
        delList,
        fixedList,
        excludes,
        excludedTitle
      ),
    [
      uniq,
      chosenPlaceholder,
      addList,
      delList,
      fixedList,
      excludes,
      excludedTitle,
      isShowExcluded,
    ]
  );

  useEffect(() => onListUpdate?.(addList, delList), [addList, delList]);

  return (
    <>
      <h2>{chooseTitle}</h2>
      {chooseNode}
      {!!(excludes && excludedTitle) && (
        <div
          className="pointer"
          onClick={() => setIsShowExcluded(!isShowExcluded)}
        >
          {isShowExcluded
            ? "Показать недоступные личности"
            : "Скрыть недоступные личности"}
        </div>
      )}
      <h2>{chosenTitle}</h2>
      {chosenNode}
    </>
  );
}
