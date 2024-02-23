import { useEffect, useState } from 'react';
import TheButton from '../../../../../complect/Button';
import Dropdown from '../../../../../complect/dropdown/Dropdown';
import { DropdownItem } from '../../../../../complect/dropdown/Dropdown.model';
import EvaCheckbox from '../../../../../complect/eva-icon/EvaCheckbox';
import { useExerExec } from '../../../../../complect/exer/hooks/useExer';
import mylib from '../../../../../complect/my-lib/MyLib';
import { useBibleWholeChapterBookList } from '../../../bible/hooks/texts';
import { cmExer } from '../../Cm.store';
import { eeStorage } from '../../base/ee-storage/EeStorage';
import { useEditableCols } from '../col/useEditableCols';
import PhaseCmEditorContainer from '../phase-editor-container/PhaseCmEditorContainer';

const radioTitles = ['И е и ё', 'Только е', 'Только ё'];
const ruUaLettersReg = /[^а-яёіїєґ]+/gi;
const yoLetterReg = /ё/g;
const ruUpperLettersReg = /^[А-ЯЁ]/;
const uaSpecLettersReg = /[іїєґ]/;
const eLetterReg = /е/;

export default function EERules() {
  const [pageSize, setPageSize] = useState(50);
  const [wordList, setWordList] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const cols = useEditableCols();
  const exec = useExerExec();
  const chapters = useBibleWholeChapterBookList();
  const [isCheckBible, setIsCheckBible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [store, setStore] = useState<string[]>([]);

  useEffect(() => {
    eeStorage.load().then(store => setStore(mylib.keys(store)));
  }, []);

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
            onClick={() => {
              if (!cols) return;
              const words = new Set<string>();
              setIsLoading(true);

              setTimeout(() => {
                let text = [
                  store,
                  cols.cats.map(col => [col.name]),
                  cols.coms.map(col => [col.name, ...(col.texts ?? [])]),
                  isCheckBible ? chapters : ([] as string[]),
                ]
                  .flat()
                  .flat()
                  .flat()
                  .join(' ');

                (isCheckBible ? text : text.toLowerCase())
                  .replace(ruUaLettersReg, ' ')
                  .replace(yoLetterReg, 'е')
                  .split(' ')
                  .forEach(word => {
                    if (
                      (!isCheckBible || word.search(ruUpperLettersReg) < 0) &&
                      word.search(uaSpecLettersReg) < 0 &&
                      word.search(eLetterReg) > -1
                    )
                      words.add(word);
                  });

                setWordList(Array.from(words).sort());
                setIsLoading(false);
              });
            }}
          >
            Проверить наличие неизвестных слов
          </TheButton>
          <EvaCheckbox
            postfix="включать библейские слова"
            checked={isCheckBible}
            onChange={setIsCheckBible}
          />
          {isLoading ? (
            <div>Загрузка...</div>
          ) : (
            !wordList.length || (
              <>
                {[10, 30, 50].map(size => (
                  <button
                    key={`page-size-button-switcher${size}`}
                    className="margin-gap"
                    disabled={pageSize === size}
                    onClick={() => setPageSize(size)}
                  >
                    {size}
                  </button>
                ))}
                <Dropdown
                  onSelect={({ id }) => setCurrentPage(id)}
                  items={Array(Math.ceil(wordList.length / pageSize))
                    .fill(0)
                    .map((_, page): DropdownItem<number> => {
                      const words = wordList.slice(page * pageSize, page * pageSize + pageSize);

                      return {
                        title: words[0],
                        id: page,
                        disabled: currentPage === page,
                        color: words.some(word => eeStorage.get(word) == null) ? 'ko' : null,
                      };
                    })}
                />
                слов: {wordList.length}
                {wordList.map((word, wordi) => {
                  if (currentPage * pageSize > wordi || wordi >= currentPage * pageSize + pageSize) return null;
                  const storeType = eeStorage.get(word);

                  return (
                    <table
                      key={`word ${wordi}`}
                      className="margin-big-gap-v"
                    >
                      <tbody>
                        {(parts => (
                          <>
                            <tr>
                              <th
                                style={{
                                  background: storeType == null ? 'red' : undefined,
                                }}
                              >
                                Слово:
                              </th>
                              {parts.map((part, parti) => (
                                <td key={`ee-word-letters-part-${word}:${part}`}>
                                  {storeType === 2 || (storeType as number[])?.[parti] === 2
                                    ? part.replace(/е/, 'ё')
                                    : part}
                                </td>
                              ))}
                            </tr>
                            <tr>
                              <th>
                                {radioTitles.map((typeName, type) => (
                                  <div key={`ee-word-radio-title_${word}:${type}`}>{typeName}</div>
                                ))}
                              </th>
                              {parts.map((part, parti) => (
                                <td
                                  key={`ee-word-buttons-part-${word}:${part}`}
                                  style={{
                                    textAlign: 'right',
                                  }}
                                >
                                  {part.endsWith('е')
                                    ? radioTitles.map((_, type) => (
                                        <div key={`ee-word-radio_${word}:${type}`}>
                                          <input
                                            type="radio"
                                            name={`ee-word-radio_${word}-${parti}`}
                                            style={{
                                              marginRight: '-.3em',
                                            }}
                                            checked={storeType === type || (storeType as number[])?.[parti] === type}
                                            onChange={() => {
                                              let track = Array.isArray(storeType) ? storeType.slice(0) : storeType;
                                              const elen = word.match(/е/g)?.length || 0;

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
                                        </div>
                                      ))
                                    : null}
                                </td>
                              ))}
                            </tr>
                          </>
                        ))(word.split(/([а-дж-я]*е)/).filter(w => w))}
                      </tbody>
                    </table>
                  );
                })}
              </>
            )
          )}
        </>
      }
    />
  );
}
