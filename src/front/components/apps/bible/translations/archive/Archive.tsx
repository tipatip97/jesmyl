import { memo } from 'react';
import { MyLib, mylib } from 'front/utils';
import IconButton from '../../../../../complect/the-icon/IconButton';
import { IconDelete01StrokeRounded } from '../../../../../complect/the-icon/icons/delete-01';
import {
  useBibleTranslationJoinAddressSetter,
  useGetterJoinedAddressMaxValues,
  useSetBibleAddressIndexes,
} from '../../hooks/address/address';
import { BibleTranslationAddress } from '../../model';
import BibleTranslationArchiveJoinedAddressText from './JoinedAddress';
import BibleTranslationArchiveJoinedContentText from './JoinedContentText';
import BibleTranslationArchiveSingleAddressText from './SingleAddressText';
import BibleTranslationArchiveSingleContentText from './SingleContentText';

interface Props {
  title: string;
  list: BibleTranslationAddress[];
  onRemove: () => void;
}

const itemClassName = 'nowrap pointer margin-gap-b';

export default memo(function BibleTranslationArchive({ title, list, onRemove }: Props): JSX.Element {
  const setAddress = useSetBibleAddressIndexes();
  const setJoinAddress = useBibleTranslationJoinAddressSetter();
  const getJoinAddressMaxes = useGetterJoinedAddressMaxValues();

  return (
    <>
      <div className="archive-title flex flex-gap color--3 bgcolor--2 margin-gap-b">
        {title}
        <IconButton
          Icon={IconDelete01StrokeRounded}
          className="color--ko"
          confirm={`Очистить раздел ${title}?`}
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
              <span className="color--7">
                <BibleTranslationArchiveSingleAddressText item={item} />
              </span>
              {' - '}
              <BibleTranslationArchiveSingleContentText item={item} />
            </div>
          );

        return (
          <div
            key={itemi}
            id={'archive-itemi-' + itemi}
            className={itemClassName}
            onClick={() => {
              setJoinAddress(item);
              setAddress(...getJoinAddressMaxes(item));
            }}
          >
            <span className="color--7">
              <BibleTranslationArchiveJoinedAddressText item={item} />
            </span>
            {' - '}
            <BibleTranslationArchiveJoinedContentText item={item} />
          </div>
        );
      })}
    </>
  );
});
