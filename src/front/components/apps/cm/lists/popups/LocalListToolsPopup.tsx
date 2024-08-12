import { useState } from 'react';
import { BottomPopupItem } from '../../../../../complect/absolute-popup/bottom-popup/BottomPopupItem';
import { isTouchDevice } from '../../../../../complect/device-differences';
import { FullContent } from '../../../../../complect/fullscreen-content/FullContent';
import { IconBookOpen02StrokeRounded } from '../../../../../complect/the-icon/icons/book-open-02';
import { IconComputerStrokeRounded } from '../../../../../complect/the-icon/icons/computer';
import { IconPlayStrokeRounded } from '../../../../../complect/the-icon/icons/play';
import { Com } from '../../col/com/Com';
import FullscreenExpandComList from './FullscreenExpandComList';

export const LocalListToolsPopup = ({ coms }: { coms: Com[] | und }) => {
  const [isOpenList, setIsOpenList] = useState(false);

  return (
    coms && (
      <>
        {isOpenList && (
          <FullContent
            containerClassName=""
            asRootAnchor={() => <FullscreenExpandComList coms={coms} />}
          />
        )}
        <BottomPopupItem
          Icon={IconBookOpen02StrokeRounded}
          title="Раскрыть песни списка"
          onClick={() => setIsOpenList(true)}
        />
        <BottomPopupItem
          Icon={isTouchDevice ? IconPlayStrokeRounded : IconComputerStrokeRounded}
          title="Показывать слайды списка"
          path={`@tran${coms?.length ? `?comw=${coms[0].wid}` : ''}`}
        />
      </>
    )
  );
};
