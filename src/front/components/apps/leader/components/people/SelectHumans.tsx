import { useEffect, useState } from 'react';
import EvaIcon from '../../../../../complect/eva-icon/EvaIcon';
import useIsRedactArea from '../../../../../complect/useIsRedactArea';
import HumanList from './HumanList';
import { SelectHumansComponentProps } from './People.model';

export default function SelectHumans({
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

  const getHumanList = (isWholeList: boolean, placeholder: string) => {
    return (
      <div className={`${isRedact ? 'height-30vh-strong' : ''} min-height-30vh over-auto full-width`}>
        <HumanList
          className="full-width"
          searcherClass="sticky"
          placeholder={placeholder}
          // dangers={delList}
          // successes={addList}
          // list={(list) => {
          //   if (isWholeList) {
          //     if (!isShowExcluded && excludes)
          //       return (
          //         (wholeList ?? list?.map(({ w }) => w))?.filter(
          //           (wid) => !excludes.some((exWid) => exWid === wid)
          //         ) ?? []
          //       );
          //     else return wholeList ?? list?.map(({ w }) => w);
          //   }

          //   if (fixedList) {
          //     return fixedList
          //       .concat(addList)
          //       .filter((humanWid) => !delList.some((wid) => humanWid === wid));
          //   } else return addList;
          // }}
          asHumanMore={
            isRedact
              ? (human) => {
                  if (excludedTitle && excludes?.some((exWid) => exWid === human.w))
                    return <div className="error-message">{excludedTitle}</div>;

                  return (
                    !fixedList || !fixedList.some((wid) => human.w === wid)
                      ? !addList.some((wid) => human.w === wid)
                      : delList.some((wid) => human.w === wid)
                  ) ? (
                    <EvaIcon
                      name="plus-circle-outline"
                      onClick={(event) => {
                        event.stopPropagation();
                        if (!fixedList || !fixedList.some((wid) => human.w === wid))
                          updateAddList([...addList, human.w]);
                        updateDelList(delList.filter((wid) => wid !== human.w));
                      }}
                    />
                  ) : (
                    <EvaIcon
                      name="minus-circle-outline"
                      onClick={(event) => {
                        event.stopPropagation();
                        if (fixedList && fixedList.some((wid) => human.w === wid)) updateDelList([...delList, human.w]);

                        updateAddList(addList.filter((wid) => wid !== human.w));
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

  const chooseNode = getHumanList(true, 'Поиск по личностям');
  const chosenNode = getHumanList(false, chosenPlaceholder);

  useEffect(() => onListsUpdate?.(addList, delList), [addList, delList]);

  return (
    <>
      {isRedact && (
        <>
          <h2>{chooseTitle}</h2>
          {chooseNode}
          {!!(excludes && excludedTitle) && (
            <div className="pointer" onClick={() => setIsShowExcluded(!isShowExcluded)}>
              {isShowExcluded ? 'Скрыть недоступные личности' : 'Показать недоступные личности'}
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
