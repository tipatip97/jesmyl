import { useEffect, useMemo, useState } from "react";
import EvaIcon from "../../../../../complect/eva-icon/EvaIcon";
import Human from "./Human";
import HumanList from "./HumanList";
import { SelectHumansComponentProps } from "./People.model";

export default function SelectHumans({
  uniq,
  onListsUpdate,
  chosenPlaceholder,
  chooseTitle,
  chosenTitle,
  fixedList,
  excludes,
  excludedTitle,
  isRedactable,
  isRedact: topIsRedact,
}: SelectHumansComponentProps) {
  const [addList, updateAddList] = useState<number[]>([]);
  const [delList, updateDelList] = useState<number[]>([]);
  const [isShowExcluded, setIsShowExcluded] = useState(false);
  const [isRedact, setIsRedact] = useState(topIsRedact ?? !isRedactable);

  const getHumanList = (
    uniq: string,
    isWholeList: boolean,
    placeholder: string
  ) => {
    return (
      <div className="height-30vh-strong over-auto full-width">
        <HumanList
          uniq={uniq}
          className="full-width"
          searcherClass="sticky"
          placeholder={placeholder}
          dangers={delList}
          successes={addList}
          list={(list) => {
            if (isWholeList) {
              if (!isShowExcluded && excludes)
                return (
                  list?.filter(
                    (wid) => !excludes.some((exWid) => exWid === wid)
                  ) ?? []
                );
              else return list;
            }

            if (fixedList) {
              return fixedList
                .concat(addList)
                .filter((humanWid) => !delList.some((wid) => humanWid === wid));
            } else return addList;
          }}
          asHumanMore={
            !isRedactable || !isRedact
              ? undefined
              : (human) => {
                  if (
                    excludedTitle &&
                    excludes?.some((exWid) => exWid === human.wid)
                  )
                    return <div className="error-message">{excludedTitle}</div>;

                  return (
                    !fixedList || !fixedList.some((wid) => human.wid === wid)
                      ? !addList.some((wid) => human.wid === wid)
                      : delList.some((wid) => human.wid === wid)
                  ) ? (
                    <EvaIcon
                      name="plus-circle-outline"
                      onClick={(event) => {
                        event.stopPropagation();
                        if (
                          !fixedList ||
                          !fixedList.some((wid) => human.wid === wid)
                        )
                          updateAddList([...addList, human.wid]);
                        updateDelList(
                          delList.filter((wid) => wid !== human.wid)
                        );
                      }}
                    />
                  ) : (
                    <EvaIcon
                      name="minus-circle-outline"
                      onClick={(event) => {
                        event.stopPropagation();
                        if (
                          fixedList &&
                          fixedList.some((wid) => human.wid === wid)
                        )
                          updateDelList([...delList, human.wid]);

                        updateAddList(
                          addList.filter((wid) => wid !== human.wid)
                        );
                      }}
                    />
                  );
                }
          }
        />
      </div>
    );
  };

  const chooseNode = getHumanList(`${uniq} choose`, true, "Поиск по личностям");
  const chosenNode = getHumanList(`${uniq} chosen`, false, chosenPlaceholder);

  useEffect(() => onListsUpdate?.(addList, delList), [addList, delList]);

  return (
    <>
      {(!isRedactable || isRedact) && (
        <>
          <h2>{chooseTitle}</h2>
          {chooseNode}
          {!!(excludes && excludedTitle) && (
            <div
              className="pointer"
              onClick={() => setIsShowExcluded(!isShowExcluded)}
            >
              {isShowExcluded
                ? "Скрыть недоступные личности"
                : "Показать недоступные личности"}
            </div>
          )}
        </>
      )}
      <h2 className="relative">
        {chosenTitle}
        {isRedactable && !isRedact && (
          <EvaIcon
            className="pointer absolute pos-bottom margin-gap-h"
            name="edit-outline"
            onClick={() => setIsRedact(!isRedact)}
          />
        )}
      </h2>
      {chosenNode}
    </>
  );
}
