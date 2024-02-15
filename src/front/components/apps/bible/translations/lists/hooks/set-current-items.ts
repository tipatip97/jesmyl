import { useEffect } from 'react';
import { useBibleTranslationJoinAddress } from '../../../hooks/address/address';
import { useBibleAddressBooki } from '../../../hooks/address/books';
import { useBibleAddressChapteri } from '../../../hooks/address/chapters';
import { useBibleAddressVersei } from '../../../hooks/address/verses';
import { BibleTranslationJoinAddress } from '../../../model';

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

export const useSetBibleCurrentItems = (isShowFaceWithCtrl: boolean) => {
  const joinAddress = useBibleTranslationJoinAddress();
  const currentBooki = useBibleAddressBooki();
  const currentChapteri = useBibleAddressChapteri();
  const currentVersei = useBibleAddressVersei();

  useEffect(() => {
    return setTimeoutEffect(() => {
      document.getElementById('bible-booki-' + currentBooki)?.scrollIntoView({ block: 'center' });
      document.getElementById('bible-chapteri-' + currentChapteri)?.scrollIntoView({ block: 'center' });
      document.getElementById('bible-versei-' + currentVersei)?.scrollIntoView({ block: 'center', behavior: 'smooth' });
    }, 100);
  }, [currentBooki, currentChapteri, currentVersei]);

  useEffect(() => {
    const bookiNode = switchCurrentNodeClassName('add', null, 'booki', currentBooki, currentClassName);
    const chapteriNode = switchCurrentNodeClassName('add', null, 'chapteri', currentChapteri, currentClassName);
    const verseiNode = switchCurrentNodeClassName('add', null, 'versei', currentVersei, currentClassName);

    return () => {
      switchCurrentNodeClassName('remove', bookiNode, 'booki', currentBooki, currentClassName);
      switchCurrentNodeClassName('remove', chapteriNode, 'chapteri', currentChapteri, currentClassName);
      switchCurrentNodeClassName('remove', verseiNode, 'versei', currentVersei, currentClassName);
    };
  }, [currentBooki, currentChapteri, currentVersei, joinAddress, isShowFaceWithCtrl]);

  useEffect(() => {
    if (joinAddress === null) return;

    switchClassName('add', joinAddress, currentBooki, currentChapteri);
    return () => switchClassName('remove', joinAddress, currentBooki, currentChapteri);
  }, [joinAddress, isShowFaceWithCtrl, currentBooki, currentChapteri]);
};
