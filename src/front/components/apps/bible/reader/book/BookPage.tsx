import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { justBibleStorageSet } from '../../hooks/storage';
import BibleReaderChapter from './complect/Chapter';

interface Props {
  chapterList: { __html: string }[][] | und;
  currentBooki: number;
  currentChapteri?: number;
  currentVersei?: number;
}

export default function BibleReaderBook({ chapterList, currentChapteri, currentVersei, currentBooki }: Props): JSX.Element {
  const listRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);
  const isResizingRef = useRef(false);
  const [resizeNum, setResizeNum] = useState(0);
  const [isScrolledToCurrent, setIsScrolledToCurrent] = useState(false);

  useEffect(() => {
    if (
      isScrolledToCurrent ||
      currentChapteri === undefined ||
      currentVersei === undefined ||
      isScrollingRef.current ||
      listRef.current === null
    )
      return;
    const listNode = listRef.current;

    setTimeout(() => {
      listNode
        .querySelector(`[attr-chapteri="${currentChapteri}"][attr-versei="${currentVersei}"]`)
        ?.scrollIntoView({ block: 'start' });

      listNode.scrollTop += 3;
      setIsScrolledToCurrent(true);
    }, 100);
  }, [currentChapteri, currentVersei, isScrolledToCurrent, resizeNum]);

  useEffect(() => {
    if (listRef.current === null) return;
    const listNode = listRef.current;
    const topsMap = new Map<number, { chapteri: number; versei: number }>();
    let scrollTimeout: TimeOut;
    let isScrollingTimeout: TimeOut;
    let resizeDebounceTimeOut: TimeOut;

    (Array.from(listNode.children) as HTMLElement[]).forEach(child => {
      if (child.hasAttribute('attr-chapteri'))
        topsMap.set(child.offsetTop, {
          chapteri: +child.getAttribute('attr-chapteri')!,
          versei: +child.getAttribute('attr-versei')!,
        });
    });
    const tops = Array.from(topsMap.keys());

    return hookEffectLine()
      .addEventListener(window, 'resize', () => {
        isResizingRef.current = true;
        clearTimeout(resizeDebounceTimeOut);
        resizeDebounceTimeOut = setTimeout(() => {
          isResizingRef.current = false;
          setResizeNum(num => num + 1);
        }, 300);
      })
      .addEventListener(listNode, 'scroll', () => {
        if (isResizingRef.current) return;
        isScrollingRef.current = true;

        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          let end = tops.length - 1;
          const scrollTop = listNode.scrollTop;

          if (scrollTop < 0) {
            justBibleStorageSet('translationChapteri', 0);
            justBibleStorageSet('translationVersei', 0);

            return;
          } else if (scrollTop >= tops[end] - 50) {
            const top = topsMap.get(tops[end]);

            if (top === undefined) return;

            justBibleStorageSet('translationChapteri', top.chapteri);
            justBibleStorageSet('translationVersei', top.versei);

            return;
          }

          let start = 0;

          while (start <= end) {
            let middle = Math.floor((start + end) / 2);

            if (tops[middle] <= scrollTop && tops[middle + 1] >= scrollTop) {
              clearTimeout(isScrollingTimeout);
              isScrollingTimeout = setTimeout(() => (isScrollingRef.current = false), 300);

              const top = topsMap.get(tops[middle]);

              if (top === undefined) return;

              justBibleStorageSet('translationChapteri', top.chapteri);
              justBibleStorageSet('translationVersei', top.versei);
              break;
            } else if (tops[middle] < scrollTop) start = middle + 1;
            else end = middle - 1;
          }
        }, 10);
      })
      .effect();
  }, [currentBooki, resizeNum]);

  return (
    <>
      <List ref={listRef}>
        {chapterList?.map((chapterList, chapteri) => {
          return (
            <BibleReaderChapter
              key={chapteri}
              chapteri={chapteri}
              list={chapterList}
            />
          );
        })}
        <BottomBox />
      </List>
    </>
  );
};

const List = styled.div`
  position: relative;
  height: 100%;
  overflow: auto;
  font-size: 2em;

  insertedtext,
  textinbrackets {
    opacity: 0.6;
    font-style: italic;
    pointer-events: none;
  }
`;

const BottomBox = styled.div`
  height: calc(100% - 1em);
`;
