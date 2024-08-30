import { useEffect, useState } from 'react';
import { makeRegExp } from '../../../../../../back/complect/makeRegExp';
import TheButton from '../../../../../complect/Button';
import Dropdown from '../../../../../complect/dropdown/Dropdown';
import { DropdownItem } from '../../../../../complect/dropdown/Dropdown.model';
import { useExerExec } from '../../../../../complect/exer/hooks/useExer';
import IconCheckbox from '../../../../../complect/the-icon/IconCheckbox';
import { cmExer } from '../../CmExer';
import { eeStorage } from '../../base/ee-storage/EeStorage';
import PhaseCmEditorContainer from '../phase-editor-container/PhaseCmEditorContainer';
import { EERulesListComputer } from './EERulesListComputer';

const radioTitles = ['И е и ё', 'Только е', 'Только ё'].map((typeName, type) => <div key={type}>{typeName}</div>);
const sizes = [10, 30, 50];

const marginStyle = {
  marginRight: '-.3em',
};

const textAlignStyle = {
  textAlign: 'right',
} as const;

let listBox = { list: [] } as { list: string[] };

const itIt = (it: unknown) => it;

export default function EERules() {
  const [pageSize, setPageSize] = useState(50);
  const [updates, setUpdates] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const exec = useExerExec();
  const [isCheckBible, setIsCheckBible] = useState(false);
  const [isShowListComputer, setIsShowListComputer] = useState(false);

  useEffect(() => setIsShowListComputer(false), [updates]);

  const setWord = (word: string, value: number | number[]) => {
    cmExer.set({
      method: 'set',
      scope: `set-ee-word-rule.${word}`,
      action: 'setEERuleWordTrack',
      value,
      generalId: 'word-ee-setting',
      prev: eeStorage.get(word),
      args: { word, value },
    });

    eeStorage.set(word, value);
    exec();
  };

  return (
    <PhaseCmEditorContainer
      className="e-e-rules-editor"
      headTitle="Ё-Е правила"
      content={
        <>
          <TheButton
            className="margin-gap"
            onClick={() => setIsShowListComputer(true)}
          >
            Проверить наличие неизвестных слов
          </TheButton>
          <IconCheckbox
            postfix="включать библейские слова"
            checked={isCheckBible}
            onChange={setIsCheckBible}
          />
          {isShowListComputer ? (
            <EERulesListComputer
              isCheckBible={isCheckBible}
              setUpdates={setUpdates}
              listBox={listBox}
            />
          ) : (
            <>
              {sizes.map(size => (
                <button
                  key={size}
                  className="margin-gap"
                  disabled={pageSize === size}
                  onClick={() => setPageSize(size)}
                >
                  {size}
                </button>
              ))}
              <Dropdown
                onSelect={({ id }) => setCurrentPage(id)}
                items={Array(Math.ceil(listBox.list.length / pageSize))
                  .fill(0)
                  .map((_, page): DropdownItem<number> => {
                    const words = listBox.list.slice(page * pageSize, page * pageSize + pageSize);

                    return {
                      title: words[0],
                      id: page,
                      disabled: currentPage === page,
                      color: words.some(word => eeStorage.get(word) == null) ? 'ko' : null,
                    };
                  })}
              />
              слов: {listBox.list.length}
              {listBox.list.slice(currentPage * pageSize, currentPage * pageSize + pageSize).map((word, wordi) => {
                const storeType = eeStorage.get(word);
                const parts = word.split(makeRegExp('/([а-дж-я]*е)/')).filter(itIt);

                return (
                  <table
                    key={word}
                    className="margin-big-gap-v"
                  >
                    <tbody>
                      <tr>
                        <th className={storeType == null ? 'color--ko' : undefined}>Слово:</th>
                        {parts.map((part, parti) => (
                          <td key={parti}>
                            {storeType === 2 || (storeType as number[])?.[parti] === 2
                              ? part.replace(makeRegExp('/е/'), 'ё')
                              : part}
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <th>{radioTitles}</th>
                        {parts.map((part, parti) => (
                          <td
                            key={parti}
                            style={textAlignStyle}
                          >
                            {part.endsWith('е') &&
                              radioTitles.map((_, type) => (
                                <input
                                  key={type}
                                  type="radio"
                                  className="block margin-gap-v"
                                  name={`ee-word-radio_${word}-${parti}`}
                                  style={marginStyle}
                                  checked={storeType === type || (storeType as number[])?.[parti] === type}
                                  onChange={() => {
                                    let track = Array.isArray(storeType) ? storeType.slice(0) : storeType;
                                    const elen = word.match(makeRegExp('/е/g'))?.length || 0;

                                    if (storeType == null) {
                                      if (elen > 1) {
                                        track = '.'
                                          .repeat(elen)
                                          .split('')
                                          .map(() => 1);
                                        track[parti] = type;
                                      } else track = type;
                                    } else {
                                      if (elen > 1) (track as number[])[parti] = type;
                                      else track = type;
                                    }

                                    setWord(word, track);
                                  }}
                                />
                              ))}
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                );
              })}
            </>
          )}
        </>
      }
    />
  );
}
