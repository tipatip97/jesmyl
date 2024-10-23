import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { BibleBooki, BibleChapteri, BibleVersei } from '../../model';
import { useBibleSingleAddressSetter } from '../../translations/lists/atoms';
import BibleReaderChapter from './complect/Chapter';

interface Props {
  chapterList: { __html: string }[][] | und;
  currentBooki: BibleBooki;
  currentChapteri?: BibleChapteri;
  currentVersei?: BibleVersei;
}

export default function BibleReaderBook({
  chapterList,
  currentChapteri,
  currentVersei,
  currentBooki,
}: Props): JSX.Element {
  const listRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);
  const isResizingRef = useRef(false);
  const [resizeNum, setResizeNum] = useState(0);
  const setAddress = useBibleSingleAddressSetter();

  useEffect(() => {
    if (
      chapterList == null ||
      currentChapteri === undefined ||
      currentVersei === undefined ||
      isScrollingRef.current ||
      listRef.current === null
    )
      return;
    const listNode = listRef.current;

    setTimeout(() => {
      const node = listNode.querySelector(`[attr-chapteri="${currentChapteri}"][attr-versei="${currentVersei}"]`);
      node?.scrollIntoView({ block: 'start' });

      listNode.scrollTop += 3;
    }, 400);
  }, [currentChapteri, currentVersei, resizeNum, chapterList]);

  useEffect(() => {
    if (chapterList == null || listRef.current === null) return;
    const listNode = listRef.current;
    const topsMap = new Map<number, { chapteri: BibleChapteri; versei: BibleVersei }>();
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
        }, 100);
      })
      .addEventListener(listNode, 'scroll', () => {
        if (isResizingRef.current) return;

        isScrollingRef.current = true;
        clearTimeout(isScrollingTimeout);
        isScrollingTimeout = setTimeout(() => (isScrollingRef.current = false), 300);

        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          let end = tops.length - 1;
          const scrollTop = listNode.scrollTop;

          if (scrollTop < 0) {
            setAddress(undefined, 0, 0);

            return;
          } else if (scrollTop >= tops[end] - 50) {
            const top = topsMap.get(tops[end]);

            if (top === undefined) return;
            setAddress(undefined, top.chapteri, top.versei);

            return;
          }

          let start = 0;

          while (start <= end) {
            let middle = Math.floor((start + end) / 2);

            if (tops[middle] <= scrollTop && tops[middle + 1] >= scrollTop) {
              const top = topsMap.get(tops[middle]);

              if (top === undefined) return;

              setAddress(undefined, top.chapteri, top.versei);
              break;
            } else if (tops[middle] < scrollTop) start = middle + 1;
            else end = middle - 1;
          }
        }, 10);
      })
      .effect();
  }, [currentBooki, resizeNum, setAddress, chapterList]);

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
}

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
