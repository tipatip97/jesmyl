import { mylib } from 'front/utils';
import { ReactNode } from 'react';
import { BottomPopupContenter } from '../../../../../complect/absolute-popup/bottom-popup/model';
import useFullContent from '../../../../../complect/fullscreen-content/useFullContent';
import { IconSorting05StrokeRounded } from '../../../../../complect/the-icon/icons/sorting-05';
import { IconUserAdd01StrokeRounded } from '../../../../../complect/the-icon/icons/user-add-01';
import { useLeaderHumanListSortVariant } from '../../molecules';
import HumanMaster from './HumanMaster';
import { humanFieldTranslations } from './People.model';

export const HumansMoreContenter: BottomPopupContenter<{
  moreNode?: ReactNode;
  fieldLabel?: 'mentors' | 'members';
}> = (isOpen, _, prepare, { moreNode, fieldLabel }) => {
  const [humanListSortVariant, setHumanListSortVariant] = useLeaderHumanListSortVariant();
  const [humanMasterNode, openHumanMaster] = useFullContent(close => (
    <HumanMaster
      pushInCcontextAs={fieldLabel}
      close={close}
    />
  ));

  return [
    <>{humanMasterNode}</>,
    isOpen && (
      <>
        {prepare({
          items: [
            {
              title: 'Добавить нового участника',
              Icon: IconUserAdd01StrokeRounded,
              onClick: () => openHumanMaster(),
            },
            {
              title: 'Сортировать личности',
              Icon: IconSorting05StrokeRounded,
              onClick: event => {
                event.stopPropagation();
                const next = mylib.findNext(mylib.keys(humanFieldTranslations), humanListSortVariant);
                setHumanListSortVariant(next);
              },
              rightNode: (
                <div className="pointer abs-action abs-full flex center">
                  {humanFieldTranslations[humanListSortVariant]}
                </div>
              ),
            },
          ],
        })}
        {mylib.func(moreNode).call()}
      </>
    ),
  ];
};
