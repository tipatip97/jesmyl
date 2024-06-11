import mylib from '../../../../../complect/my-lib/MyLib';
import IconButton from '../../../../../complect/the-icon/IconButton';
import { IconDelete01StrokeRounded } from '../../../../../complect/the-icon/icons/delete-01';
import { useBibleTranslationJoinAddressSetter, useSetBibleAddressIndexes } from '../../hooks/address/address';
import {
  takeBibleAddressText,
  takeBibleJoinedAddressSlideText,
  takeBibleJoinedAddressText,
  takeBibleSlideText,
  useBibleChaptersCombine,
} from '../../hooks/texts';
import { BibleTranslationAddress } from '../../model';

interface Props {
  title: string;
  list: BibleTranslationAddress[];
  onRemove: () => void;
}

const itemClassName = 'nowrap pointer margin-gap-b';

export const BibleTranslationArchive = ({ title, list, onRemove }: Props) => {
  const setAddress = useSetBibleAddressIndexes();
  const setJoinAddress = useBibleTranslationJoinAddressSetter();
  const { chapters } = useBibleChaptersCombine();

  return (
    <>
      <div className="archive-title flex flex-gap color--3 margin-gap-b">
        {title}
        <IconButton
          Icon={IconDelete01StrokeRounded}
          className="color--ko"
          confirm={'Очистить раздел ' + title + '?'}
          onClick={onRemove}
        />
      </div>
      {list.map((item, itemi) => {
        if (mylib.isArr(item))
          return (
            <div
              key={item[0] + ' ' + item[1] + ':' + item[2]}
              id={'archive-itemi-' + itemi}
              className={itemClassName}
              onClick={() => {
                setJoinAddress(null);
                setAddress(...item);
              }}
            >
              <span className="color--7">{takeBibleAddressText(...item, 1)}</span>
              {' - '}
              <span dangerouslySetInnerHTML={{ __html: takeBibleSlideText(chapters, ...item, false) }} />
            </div>
          );

        return (
          <div
            key={itemi}
            id={'archive-itemi-' + itemi}
            className={itemClassName}
            onClick={() => {
              setJoinAddress(item);

              const booki = Math.max(...mylib.keys(item));
              const chapteri = Math.max(...mylib.keys(item[booki]));

              setAddress(booki, chapteri, Math.max(...item[booki][chapteri]));
            }}
          >
            <span className="color--7">{takeBibleJoinedAddressText(item, 1)}</span>
            {' - '}
            <span dangerouslySetInnerHTML={{ __html: takeBibleJoinedAddressSlideText(item, false) }} />
          </div>
        );
      })}
    </>
  );
};
