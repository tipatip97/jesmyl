import { useEffect } from 'react';
import { useBibleTranslationJoinAddress } from '../../../hooks/address/address';
import { BibleTranslationJoinAddress } from '../../../model';
import { verseIdPrefix } from '../verses/VerseList';

const currentClassName = 'current';
const currentSelectedClassName = 'selected';

const switchCurrentNodeClassName = (
  action: 'add' | 'remove',
  node: HTMLElement | null,
  idPart: 'booki' | 'chapteri' | 'versei',
  itemi: number | string,
  className = currentClassName,
) => {
  const element = node === null ? document.getElementById('bible-' + idPart + '-' + itemi) : node;
  if (element !== null) element.classList[action](className);

  return element;
};

const switchClassName = (
  action: 'add' | 'remove',
  joinAddress: BibleTranslationJoinAddress,
  currentBooki: number,
  currentChapteri: number,
) => {
  for (const booki in joinAddress) {
    const book = joinAddress[booki];
    switchCurrentNodeClassName(action, null, 'booki', booki, currentSelectedClassName);

    if (currentBooki === +booki)
      for (const chapteri in book) {
        const chapter = book[chapteri];
        switchCurrentNodeClassName(action, null, 'chapteri', chapteri, currentSelectedClassName);

        if (currentChapteri === +chapteri)
          for (const versei of chapter)
            switchCurrentNodeClassName(action, null, 'versei', versei, currentSelectedClassName);
      }
  }
};

export const useSetBibleCurrentItems = (
  translates: unknown,
  currentBooki: number,
  currentChapteri: number,
  currentVersei: number,
) => {
  const joinAddress = useBibleTranslationJoinAddress();

  useEffect(() => {
    return hookEffectLine()
      .setTimeout(() => {
        document.getElementById('bible-booki-' + currentBooki)?.scrollIntoView({ block: 'center' });
        document.getElementById('bible-chapteri-' + currentChapteri)?.scrollIntoView({ block: 'center' });
        document.getElementById(verseIdPrefix + currentVersei)?.scrollIntoView({ block: 'center', behavior: 'smooth' });
      }, 100)
      .effect();
  }, [translates, currentBooki, currentChapteri, currentVersei]);

  useEffect(() => {
    const bookiNode = switchCurrentNodeClassName('add', null, 'booki', currentBooki, currentClassName);
    const chapteriNode = switchCurrentNodeClassName('add', null, 'chapteri', currentChapteri, currentClassName);
    const verseiNode = switchCurrentNodeClassName('add', null, 'versei', currentVersei, currentClassName);

    return () => {
      switchCurrentNodeClassName('remove', bookiNode, 'booki', currentBooki, currentClassName);
      switchCurrentNodeClassName('remove', chapteriNode, 'chapteri', currentChapteri, currentClassName);
      switchCurrentNodeClassName('remove', verseiNode, 'versei', currentVersei, currentClassName);
    };
  }, [translates, currentBooki, currentChapteri, currentVersei, joinAddress]);

  useEffect(() => {
    if (joinAddress === null) return;

    switchClassName('add', joinAddress, currentBooki, currentChapteri);
    return () => switchClassName('remove', joinAddress, currentBooki, currentChapteri);
  }, [joinAddress, currentBooki, currentChapteri]);
};
