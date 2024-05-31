import { ReactNode } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BottomPopupContenter } from '../../../../../complect/absolute-popup/bottom-popup/model';
import useFullContent from '../../../../../complect/fullscreen-content/useFullContent';
import { IconSorting05StrokeRounded } from '@icons/sorting-05';
import { IconUserAdd01StrokeRounded } from '@icons/user-add-01';
import mylib from '../../../../../complect/my-lib/MyLib';
import { RootState } from '../../../../../shared/store';
import { leaderStoreActions } from '../../Leader.store';
import HumanMaster from './HumanMaster';
import { humanFieldTranslations } from './People.model';

const humanListSortVariantSelector = (state: RootState) => state.leader.humanListSortVariant;

export const HumansMoreContenter: BottomPopupContenter<{
  moreNode?: ReactNode;
  fieldLabel?: 'mentors' | 'members';
}> = (isOpen, _, prepare, { moreNode, fieldLabel }) => {
  const dispatch = useDispatch();
  const humanListSortVariant = useSelector(humanListSortVariantSelector);
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
                dispatch(leaderStoreActions.humanListSortVariant(next));
              },
              rightNode: (
                <div className="abs-action abs-full flex center">{humanFieldTranslations[humanListSortVariant]}</div>
              ),
            },
          ],
        })}
        {mylib.func(moreNode).call()}
      </>
    ),
  ];
};
