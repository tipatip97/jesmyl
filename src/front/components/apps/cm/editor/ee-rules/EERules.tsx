import { useEffect, useState } from 'react';
import TheButton from '../../../../../complect/Button';
import Dropdown from '../../../../../complect/dropdown/Dropdown';
import { DropdownItem } from '../../../../../complect/dropdown/Dropdown.model';
import { useExerExec } from '../../../../../complect/exer/hooks/useExer';
import mylib from '../../../../../complect/my-lib/MyLib';
import IconCheckbox from '../../../../../complect/the-icon/IconCheckbox';
import { useBibleTranslatesContext } from '../../../bible/translates/TranslatesContext';
import { useBibleShowTranslates } from '../../../bible/translates/hooks';
import { cmExer } from '../../Cm.store';
import { eeStorage } from '../../base/ee-storage/EeStorage';
import { useEditableCols } from '../col/useEditableCols';
import PhaseCmEditorContainer from '../phase-editor-container/PhaseCmEditorContainer';

const radioTitles = ['И е и ё', 'Только е', 'Только ё'];

const regs = {
  '/[^а-яёіїєґ]+/gi': /[^а-яёіїєґ]+/gi,
  '/([а-дж-я]*е)/': /([а-дж-я]*е)/,
  '/^[А-ЯЁ]/': /^[А-ЯЁ]/,
  '/[іїєґ]/': /[іїєґ]/,
  '/е/g': /е/g,
  '/ё/g': /ё/g,
  '/е/': /е/,
};

export default function EERules() {
  const [pageSize, setPageSize] = useState(50);
  const [wordList, setWordList] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const cols = useEditableCols();
  const exec = useExerExec();
  const showTranslates = useBibleShowTranslates();
  const chapters = useBibleTranslatesContext()[showTranslates[0]]?.chapters;
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
                  .replace(regs['/[^а-яёіїєґ]+/gi'], ' ')
                  .replace(regs['/ё/g'], 'е')
                  .split(' ')
                  .forEach(word => {
                    if (
                      (!isCheckBible || word.search(regs['/^[А-ЯЁ]/']) < 0) &&
                      word.search(regs['/[іїєґ]/']) < 0 &&
                      word.search(regs['/е/']) > -1
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
          <IconCheckbox
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
                      key={wordi}
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
                                <td key={parti}>
                                  {storeType === 2 || (storeType as number[])?.[parti] === 2
                                    ? part.replace(regs['/е/'], 'ё')
                                    : part}
                                </td>
                              ))}
                            </tr>
                            <tr>
                              <th>
                                {radioTitles.map((typeName, type) => (
                                  <div key={type}>{typeName}</div>
                                ))}
                              </th>
                              {parts.map((part, parti) => (
                                <td
                                  key={parti}
                                  style={{
                                    textAlign: 'right',
                                  }}
                                >
                                  {part.endsWith('е')
                                    ? radioTitles.map((_, type) => (
                                        <div key={type}>
                                          <input
                                            type="radio"
                                            name={`ee-word-radio_${word}-${parti}`}
                                            style={{
                                              marginRight: '-.3em',
                                            }}
                                            checked={storeType === type || (storeType as number[])?.[parti] === type}
                                            onChange={() => {
                                              let track = Array.isArray(storeType) ? storeType.slice(0) : storeType;
                                              const elen = word.match(regs['/е/g'])?.length || 0;

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
                        ))(word.split(regs['/([а-дж-я]*е)/']).filter(w => w))}
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
