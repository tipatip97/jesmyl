import { useState } from 'react';
import Dropdown from '../../../../../complect/dropdown/Dropdown';
import { DropdownItem } from '../../../../../complect/dropdown/Dropdown.model';
import { useExerExec } from '../../../../../complect/exer/hooks/useExer';
import { eeStorage } from '../../base/ee-storage/EeStorage';
import { cmExer } from '../../Cm.store';
import { EditableCom } from '../col/compositions/EditableCom';
import { useEditableCols } from '../col/useEditableCols';
import PhaseCmEditorContainer from '../phase-editor-container/PhaseCmEditorContainer';
import './EERules.scss';

const radioTitles = ['И е и ё', 'Только е', 'Только ё'];

export default function EERules() {
  const [pageSize, setPageSize] = useState(50);
  const [wordList, setWordList] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const cols = useEditableCols();
  const exec = useExerExec();

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
          <button
            className="margin-gap"
            onClick={() => {
              const words: string[] = [];
              if (!cols) return;

              [cols.cats, cols.coms].flat().forEach(
                col =>
                  col &&
                  [col.name, (col as EditableCom).texts || []].flat().forEach(text => {
                    (text || '')
                      .toLowerCase()
                      .replace(/[^а-яёіїєґ]/gi, ' ')
                      .split(' ')
                      .forEach(freeWord => {
                        const word = freeWord.replace(/ё/g, 'е');
                        if (!/[іїєґ]/.exec(word) && words.indexOf(word) < 0 && /е/.exec(word)) words.push(word);
                      });
                  }),
              );

              setWordList(words.sort());
            }}
          >
            Проверить наличие неизвестных слов
          </button>
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
          {wordList.length ? (
            <Dropdown
              onSelect={({ id }) => setCurrentPage(id)}
              items={'.'
                .repeat(Math.ceil(wordList.length / pageSize))
                .split('')
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
          ) : null}
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
                            {storeType === 2 || (storeType as number[])?.[parti] === 2 ? part.replace(/е/, 'ё') : part}
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
      }
    />
  );
}
