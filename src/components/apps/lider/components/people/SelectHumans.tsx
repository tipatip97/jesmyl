import { useEffect, useState } from "react";
import EvaIcon from "../../../../../complect/eva-icon/EvaIcon";
import useIsRedactArea from "../../complect/useIsRedactArea";
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
  redactable,
  redact,
  wholeList,
}: SelectHumansComponentProps) {
  const [addList, updateAddList] = useState<number[]>([]);
  const [delList, updateDelList] = useState<number[]>([]);
  const [isShowExcluded, setIsShowExcluded] = useState(false);
  const { isRedact, editIcon } = useIsRedactArea(redactable, redact);

  const getHumanList = (
    uniq: string,
    isWholeList: boolean,
    placeholder: string
  ) => {
    return (
      <div
        className={`${
          isRedact ? "height-30vh-strong" : ""
        } min-height-30vh over-auto full-width`}
      >
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
                  (wholeList ?? list)?.filter(
                    (wid) => !excludes.some((exWid) => exWid === wid)
                  ) ?? []
                );
              else return wholeList ?? list;
            }

            if (fixedList) {
              return fixedList
                .concat(addList)
                .filter((humanWid) => !delList.some((wid) => humanWid === wid));
            } else return addList;
          }}
          asHumanMore={
            isRedact
              ? (human) => {
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
              : undefined
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
      {isRedact && (
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
      <h2 className="flex flex-gap">
        {chosenTitle}
        {editIcon}
      </h2>
      {chosenNode}
    </>
  );
}
