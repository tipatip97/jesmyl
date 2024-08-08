import React, { useContext, useEffect, useState } from 'react';
import { bibleTitles } from '../hooks/texts';
import { bibleMolecule } from '../molecules';
import { BibleTranslateName } from './complect';
import { useBibleShowTranslatesValue } from './hooks';

interface Props {
  children?: React.ReactNode;
}

interface ChapterCombine {
  chapters?: (string[][] | null)[];
  lowerBooks?: string[][];
  lowerChapters?: string[][][];
  htmlChapters?: ({ __html: string }[][] | und)[];
}

const mapChapters = (tName: BibleTranslateName, { chapters }: { chapters: (string[][] | null)[] }) => {
  const lowerChapters: string[][][] = [];

  for (const book of chapters) {
    if (book == null) continue;
    const lowerBook = (lowerChapters[lowerChapters.length] = [] as string[][]);

    for (const chapter of book) {
      const lowerChapter = (lowerBook[lowerBook.length] = [] as string[]);

      for (const verse of chapter) lowerChapter[lowerChapter.length] = verse.toLowerCase();
    }
  }

  const lowerBooks = bibleTitles.titles.map(book => book.map(title => title.toLowerCase()));
  const htmlChapters = chapters.map(book => book?.map(chapter => chapter.map(__html => ({ __html }))));

  localTranslates[tName] = {
    lowerBooks,
    chapters,
    lowerChapters,
    htmlChapters,
  };
};

type Translates = Partial<Record<BibleTranslateName, ChapterCombine>>;
const loadings: Partial<Record<BibleTranslateName, boolean>> = {};
let localTranslates: Translates = {};

const Context = React.createContext<Translates>({});

export const useBibleTranslatesContext = () => useContext(Context);

export default function BibleTranslatesContextProvider({ children }: Props): JSX.Element {
  const showTranslates = useBibleShowTranslatesValue();
  const [translates, setTranslates] = useState<Translates>(localTranslates);

  useEffect(() => {
    const subscribes: (() => void)[] = [];

    return hookEffectLine()
      .setTimeout(() => {
        let tryTimeout: TimeOut;
        let updateTimeout: TimeOut;

        const tryLoad = () => {
          showTranslates.forEach(tName => {
            if (localTranslates[tName] !== undefined) {
              if (!showTranslates.some(tName => localTranslates[tName] === undefined)) {
                clearTimeout(updateTimeout);
                updateTimeout = setTimeout(() => setTranslates({ ...localTranslates }), 200);
              }
              return;
            }

            if (loadings[tName]) {
              clearTimeout(tryTimeout);
              tryTimeout = setTimeout(tryLoad, 100);
              return;
            }

            loadings[tName] = true;
            const tAtom = bibleMolecule.take(tName);

            subscribes.push(
              tAtom.subscribe(value => {
                if (value === null) return;
                mapChapters(tName, value);
                setTranslates({ ...localTranslates });
              }),
            );

            (async () => {
              try {
                const content = await tAtom.getStorageValue();
                content && mapChapters(tName, content);
                loadings[tName] = false;

                if (!showTranslates.some(tName => localTranslates[tName] === undefined)) {
                  setTranslates({ ...localTranslates });
                }
              } catch (error) {
                loadings[tName] = false;
              }
            })();
          });
        };

        tryLoad();
      }, 500)
      .effect(...subscribes);
  }, [showTranslates]);

  return <Context.Provider value={translates}>{children}</Context.Provider>;
}
